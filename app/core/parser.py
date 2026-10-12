import os
import uuid
from pathlib import Path
from typing import Optional, Dict, Any
from app.models import ParseResult, ReceiptRecord
from app.core.gemma_engine import gemma_engine
from app.core.vector_store import vector_store

class DocumentParser:
    """Extracts raw text from uploaded PDFs, text files, and images, then triggers AI extraction."""

    def parse_file(self, file_path: str, filename: str) -> ParseResult:
        """Parses a local file and performs end-to-end receipt extraction."""
        path = Path(file_path)
        if not path.exists():
            return ParseResult(success=False, error=f"File not found: {file_path}")
            
        ext = path.suffix.lower()
        raw_text = ""
        
        try:
            if ext in [".txt", ".csv", ".json", ".log"]:
                with open(path, "r", encoding="utf-8", errors="ignore") as f:
                    raw_text = f.read()
            elif ext == ".pdf":
                raw_text = self._extract_pdf_text(path)
            else:
                # Fallback text reading
                with open(path, "r", encoding="utf-8", errors="ignore") as f:
                    raw_text = f.read()
                    
            if not raw_text.strip():
                return ParseResult(success=False, error="File is empty or contains no extractable text")
                
            return self.parse_text(raw_text, filename)
            
        except Exception as e:
            return ParseResult(success=False, error=f"Parsing error: {str(e)}")

    def parse_text(self, raw_text: str, filename: str = "receipt.txt") -> ParseResult:
        """Parses raw receipt text directly into a structured, categorized ReceiptRecord."""
        try:
            extracted = gemma_engine.analyze_receipt_text(raw_text, filename)
            receipt_id = f"rcpt_{uuid.uuid4().hex[:10]}"
            
            # Check duplicate against vector store
            duplicate = vector_store.check_duplicate(
                extracted["merchant"],
                extracted["total_amount"],
                extracted["date"]
            )
            if duplicate:
                extracted["audit_flags"].append(f"Potential Duplicate: Matches existing receipt #{duplicate['id']} ({duplicate['merchant']} - ${duplicate['total_amount']})")
                
            receipt = ReceiptRecord(
                id=receipt_id,
                filename=filename,
                merchant=extracted["merchant"],
                date=extracted["date"],
                currency=extracted["currency"],
                line_items=extracted["line_items"],
                subtotal=extracted["subtotal"],
                tax_amount=extracted["tax_amount"],
                total_amount=extracted["total_amount"],
                category=extracted["category"],
                schedule_c_line=extracted["schedule_c_line"],
                deductible_percentage=extracted["deductible_percentage"],
                deductible_amount=extracted["deductible_amount"],
                confidence_score=extracted["confidence_score"],
                audit_flags=extracted["audit_flags"]
            )
            
            # Persist to vector store
            vector_store.save_receipt(receipt.model_dump(), raw_text)
            
            return ParseResult(success=True, receipt=receipt, raw_text=raw_text)
            
        except Exception as e:
            return ParseResult(success=False, error=f"AI Extraction failed: {str(e)}", raw_text=raw_text)

    def _extract_pdf_text(self, pdf_path: Path) -> str:
        """Extracts text streams from PDF invoices using pypdf."""
        try:
            import pypdf
            reader = pypdf.PdfReader(str(pdf_path))
            pages_text = []
            for page in reader.pages:
                txt = page.extract_text()
                if txt:
                    pages_text.append(txt)
            return "\n".join(pages_text)
        except Exception as e:
            return ""

parser = DocumentParser()
