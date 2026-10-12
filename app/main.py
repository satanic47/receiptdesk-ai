import os
import csv
import io
from pathlib import Path
from typing import List, Optional
from fastapi import FastAPI, UploadFile, File, Form, HTTPException, Response
from fastapi.responses import HTMLResponse, JSONResponse, StreamingResponse, FileResponse
from fastapi.staticfiles import StaticFiles
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

from app.config import settings
from app.models import ParseResult, ReceiptRecord, TaxSummary, AuditAnalysis
from app.core.parser import parser
from app.core.vector_store import vector_store
from app.core.tax_rules import get_all_categories
from app.core.audit_analyzer import audit_analyzer

app = FastAPI(
    title=settings.app_name,
    version=settings.version,
    description="Privacy-First Invoice & Tax Deduction Auditor for Freelancers with Open AI"
)

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Mount Static Files
static_dir = Path(__file__).resolve().parent / "static"
app.mount("/static", StaticFiles(directory=str(static_dir)), name="static")

class ParseTextRequest(BaseModel):
    raw_text: str
    filename: Optional[str] = "manual_entry.txt"

@app.get("/", response_class=HTMLResponse)
async def serve_index():
    index_file = static_dir / "index.html"
    return FileResponse(index_file)

@app.get("/api/status")
async def get_system_status():
    status = vector_store.get_status()
    status.update({
        "app_name": settings.app_name,
        "version": settings.version,
        "gemma_model": settings.gemma_model_name,
        "gemma_mode": settings.gemma_inference_mode
    })
    return status

@app.get("/api/categories")
async def list_tax_categories():
    return get_all_categories()

@app.get("/api/receipts")
async def list_receipts():
    return vector_store.get_all_receipts()

@app.post("/api/receipts/upload", response_model=ParseResult)
async def upload_receipt(file: UploadFile = File(...)):
    """Uploads a receipt (PDF/TXT/CSV) and executes local Gemma extraction."""
    filename = file.filename or "uploaded_receipt.txt"
    dest_path = settings.uploads_dir / filename
    
    # Save file locally
    contents = await file.read()
    with open(dest_path, "wb") as f:
        f.write(contents)
        
    result = parser.parse_file(str(dest_path), filename)
    return result

@app.post("/api/receipts/parse-text", response_model=ParseResult)
async def parse_receipt_text(req: ParseTextRequest):
    """Parses raw text directly into a structured receipt record."""
    if not req.raw_text.strip():
        raise HTTPException(status_code=400, detail="Receipt text cannot be empty")
    return parser.parse_text(req.raw_text, req.filename or "pasted_receipt.txt")

@app.get("/api/receipts/similarity")
async def semantic_similarity(query: str, limit: int = 4):
    """Performs semantic similarity query against indexed vector embeddings."""
    if not query.strip():
        return []
    return vector_store.search_similar(query, top_k=limit)

@app.get("/api/analytics/summary", response_model=TaxSummary)
async def get_analytics_summary():
    return audit_analyzer.compute_summary()

@app.get("/api/analytics/audit-report", response_model=AuditAnalysis)
async def get_audit_report():
    return audit_analyzer.analyze_audit_risk()

@app.post("/api/sample-data/load")
async def load_sample_pack():
    """Loads and parses the 6 realistic freelance sample receipts."""
    sample_dir = settings.sample_data_dir / "invoices"
    loaded_count = 0
    if sample_dir.exists():
        for invoice_file in sample_dir.glob("*.txt"):
            res = parser.parse_file(str(invoice_file), invoice_file.name)
            if res.success:
                loaded_count += 1
    return {"success": True, "count": loaded_count}

@app.get("/api/export/csv")
async def export_csv():
    """Generates and streams a CSV report for Schedule C tax preparation."""
    rows = audit_analyzer.export_csv_rows()
    output = io.StringIO()
    writer = csv.writer(output)
    writer.writerows(rows)
    output.seek(0)
    
    return StreamingResponse(
        iter([output.getvalue()]),
        media_type="text/csv",
        headers={"Content-Disposition": "attachment; filename=receiptdesk_schedule_c_export.csv"}
    )

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("app.main:app", host=settings.host, port=settings.port, reload=settings.debug)
