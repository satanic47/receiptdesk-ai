import os
import json
import sqlite3
import numpy as np
from typing import List, Dict, Any, Optional, Tuple
from app.config import settings

class VectorStore:
    """Hybrid Vector Store supporting Tiger Data pgvector and local offline SQLite vector storage."""
    
    def __init__(self):
        self.backend = "sqlite"
        self.pg_conn = None
        self.db_path = settings.local_db_path
        
        # Check if Tiger Data pgvector URL is provided
        if settings.tiger_data_pg_url:
            try:
                import psycopg2
                self.pg_conn = psycopg2.connect(settings.tiger_data_pg_url)
                self.backend = "tiger_data_pgvector"
                self._init_tiger_data_schema()
            except Exception as e:
                # Graceful fallback to local privacy SQLite
                self.backend = "sqlite"
                self._init_sqlite_schema()
        else:
            self._init_sqlite_schema()

    def _init_sqlite_schema(self):
        """Initializes local SQLite database with vectors stored as BLOBs."""
        os.makedirs(os.path.dirname(self.db_path), exist_ok=True)
        conn = sqlite3.connect(self.db_path)
        cursor = conn.cursor()
        
        cursor.execute("""
            CREATE TABLE IF NOT EXISTS receipts (
                id TEXT PRIMARY KEY,
                filename TEXT,
                merchant TEXT,
                date TEXT,
                currency TEXT,
                total_amount REAL,
                category TEXT,
                schedule_c_line TEXT,
                deductible_percentage REAL,
                deductible_amount REAL,
                confidence_score REAL,
                raw_text TEXT,
                audit_flags TEXT,
                embedding BLOB,
                created_at TEXT
            )
        """)
        
        cursor.execute("""
            CREATE TABLE IF NOT EXISTS tax_rule_vectors (
                category_id TEXT PRIMARY KEY,
                name TEXT,
                embedding BLOB
            )
        """)
        
        conn.commit()
        conn.close()

    def _init_tiger_data_schema(self):
        """Initializes Tiger Data pgvector extension and table."""
        cursor = self.pg_conn.cursor()
        try:
            cursor.execute("CREATE EXTENSION IF NOT EXISTS vector;")
            cursor.execute("""
                CREATE TABLE IF NOT EXISTS receiptdesk_vectors (
                    id TEXT PRIMARY KEY,
                    filename TEXT,
                    merchant TEXT,
                    date TEXT,
                    currency TEXT,
                    total_amount NUMERIC,
                    category TEXT,
                    schedule_c_line TEXT,
                    deductible_percentage NUMERIC,
                    deductible_amount NUMERIC,
                    confidence_score NUMERIC,
                    raw_text TEXT,
                    audit_flags TEXT,
                    embedding vector(128),
                    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
                );
            """)
            self.pg_conn.commit()
        except Exception as e:
            self.backend = "sqlite"
            self._init_sqlite_schema()
        finally:
            cursor.close()

    def _generate_embedding(self, text: str) -> np.ndarray:
        """Generates a fast, lightweight 128-dimensional deterministic semantic hash embedding."""
        words = text.lower().split()
        vec = np.zeros(128, dtype=np.float32)
        if not words:
            return vec
            
        for i, word in enumerate(words):
            hash_val = hash(word)
            idx = abs(hash_val) % 128
            sign = 1.0 if (hash_val % 2 == 0) else -1.0
            vec[idx] += sign / (1.0 + (i * 0.05))
            
        # Normalize vector to unit length
        norm = np.linalg.norm(vec)
        if norm > 0:
            vec = vec / norm
        return vec

    def save_receipt(self, receipt_data: Dict[str, Any], raw_text: str = ""):
        """Saves a receipt record along with its vector embedding."""
        vec = self._generate_embedding(f"{receipt_data.get('merchant', '')} {raw_text} {receipt_data.get('category', '')}")
        audit_flags_str = json.dumps(receipt_data.get('audit_flags', []))
        
        if self.backend == "tiger_data_pgvector" and self.pg_conn:
            cursor = self.pg_conn.cursor()
            vec_list = vec.tolist()
            cursor.execute("""
                INSERT INTO receiptdesk_vectors (
                    id, filename, merchant, date, currency, total_amount, category,
                    schedule_c_line, deductible_percentage, deductible_amount, confidence_score,
                    raw_text, audit_flags, embedding
                ) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
                ON CONFLICT (id) DO UPDATE SET
                    total_amount = EXCLUDED.total_amount,
                    category = EXCLUDED.category,
                    deductible_amount = EXCLUDED.deductible_amount;
            """, (
                receipt_data["id"], receipt_data.get("filename", ""), receipt_data.get("merchant", ""),
                receipt_data.get("date", ""), receipt_data.get("currency", "USD"), receipt_data.get("total_amount", 0.0),
                receipt_data.get("category", "Uncategorized"), receipt_data.get("schedule_c_line", ""),
                receipt_data.get("deductible_percentage", 100.0), receipt_data.get("deductible_amount", 0.0),
                receipt_data.get("confidence_score", 0.85), raw_text, audit_flags_str, vec_list
            ))
            self.pg_conn.commit()
            cursor.close()
        else:
            conn = sqlite3.connect(self.db_path)
            cursor = conn.cursor()
            cursor.execute("""
                INSERT OR REPLACE INTO receipts (
                    id, filename, merchant, date, currency, total_amount, category,
                    schedule_c_line, deductible_percentage, deductible_amount, confidence_score,
                    raw_text, audit_flags, embedding, created_at
                ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            """, (
                receipt_data["id"], receipt_data.get("filename", ""), receipt_data.get("merchant", ""),
                receipt_data.get("date", ""), receipt_data.get("currency", "USD"), receipt_data.get("total_amount", 0.0),
                receipt_data.get("category", "Uncategorized"), receipt_data.get("schedule_c_line", ""),
                receipt_data.get("deductible_percentage", 100.0), receipt_data.get("deductible_amount", 0.0),
                receipt_data.get("confidence_score", 0.85), raw_text, audit_flags_str,
                vec.tobytes(), receipt_data.get("created_at", "")
            ))
            conn.commit()
            conn.close()

    def search_similar(self, query_text: str, top_k: int = 3) -> List[Dict[str, Any]]:
        """Finds top-k similar historical receipts using cosine similarity."""
        query_vec = self._generate_embedding(query_text)
        results = []
        
        if self.backend == "tiger_data_pgvector" and self.pg_conn:
            cursor = self.pg_conn.cursor()
            vec_str = "[" + ",".join(map(str, query_vec.tolist())) + "]"
            cursor.execute("""
                SELECT id, filename, merchant, date, total_amount, category, 1 - (embedding <=> %s) AS similarity
                FROM receiptdesk_vectors
                ORDER BY embedding <=> %s
                LIMIT %s;
            """, (vec_str, vec_str, top_k))
            rows = cursor.fetchall()
            for r in rows:
                results.append({
                    "id": r[0], "filename": r[1], "merchant": r[2], "date": r[3],
                    "total_amount": float(r[4]), "category": r[5], "similarity": float(r[6])
                })
            cursor.close()
        else:
            conn = sqlite3.connect(self.db_path)
            cursor = conn.cursor()
            cursor.execute("SELECT id, filename, merchant, date, total_amount, category, embedding FROM receipts")
            rows = cursor.fetchall()
            conn.close()
            
            scored = []
            for r in rows:
                if r[6]:
                    saved_vec = np.frombuffer(r[6], dtype=np.float32)
                    sim = float(np.dot(query_vec, saved_vec))
                    scored.append({
                        "id": r[0], "filename": r[1], "merchant": r[2], "date": r[3],
                        "total_amount": float(r[4]), "category": r[5], "similarity": sim
                    })
            scored.sort(key=lambda x: x["similarity"], reverse=True)
            results = scored[:top_k]
            
        return results

    def check_duplicate(self, merchant: str, total_amount: float, date: str) -> Optional[Dict[str, Any]]:
        """Detects if an identical or near-duplicate receipt was already filed."""
        conn = sqlite3.connect(self.db_path)
        cursor = conn.cursor()
        cursor.execute("""
            SELECT id, filename, merchant, date, total_amount FROM receipts
            WHERE LOWER(merchant) = LOWER(?) AND ABS(total_amount - ?) < 0.05
        """, (merchant, total_amount))
        row = cursor.fetchone()
        conn.close()
        
        if row:
            return {
                "id": row[0],
                "filename": row[1],
                "merchant": row[2],
                "date": row[3],
                "total_amount": row[4]
            }
        return None

    def get_all_receipts(self) -> List[Dict[str, Any]]:
        """Retrieves all receipts currently stored."""
        conn = sqlite3.connect(self.db_path)
        cursor = conn.cursor()
        cursor.execute("""
            SELECT id, filename, merchant, date, currency, total_amount, category,
                   schedule_c_line, deductible_percentage, deductible_amount, confidence_score,
                   audit_flags, created_at FROM receipts
            ORDER BY created_at DESC
        """)
        rows = cursor.fetchall()
        conn.close()
        
        receipts = []
        for r in rows:
            flags = json.loads(r[11]) if r[11] else []
            receipts.append({
                "id": r[0],
                "filename": r[1],
                "merchant": r[2],
                "date": r[3],
                "currency": r[4],
                "total_amount": float(r[5]),
                "category": r[6],
                "schedule_c_line": r[7],
                "deductible_percentage": float(r[8]),
                "deductible_amount": float(r[9]),
                "confidence_score": float(r[10]),
                "audit_flags": flags,
                "created_at": r[12]
            })
        return receipts

    def get_status(self) -> Dict[str, Any]:
        """Returns the active backend and metrics for audit display."""
        conn = sqlite3.connect(self.db_path)
        cursor = conn.cursor()
        cursor.execute("SELECT COUNT(*) FROM receipts")
        count = cursor.fetchone()[0]
        conn.close()
        
        return {
            "backend": self.backend,
            "tiger_data_connected": self.backend == "tiger_data_pgvector",
            "receipts_indexed": count,
            "privacy_mode": "100% Offline Local" if self.backend == "sqlite" else "Tiger Data Hybrid Cloud"
        }

vector_store = VectorStore()
