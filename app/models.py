from typing import List, Optional, Dict, Any
from pydantic import BaseModel, Field
from datetime import datetime

class LineItem(BaseModel):
    description: str
    quantity: float = 1.0
    unit_price: float = 0.0
    total_price: float = 0.0

class TaxCategory(BaseModel):
    category_id: str
    name: str
    schedule_c_line: str
    deductible_percentage: float = 100.0  # e.g., 50.0 for business meals, 100.0 for software
    description: str
    keywords: List[str] = Field(default_factory=list)
    audit_risk: str = "Low"  # Low, Medium, High

class ReceiptRecord(BaseModel):
    id: str
    filename: str
    merchant: str
    date: str
    currency: str = "USD"
    line_items: List[LineItem] = Field(default_factory=list)
    subtotal: float = 0.0
    tax_amount: float = 0.0
    total_amount: float = 0.0
    category: str = "Uncategorized"
    schedule_c_line: str = "Line 27a (Other Expenses)"
    deductible_percentage: float = 100.0
    deductible_amount: float = 0.0
    confidence_score: float = 0.85
    audit_flags: List[str] = Field(default_factory=list)
    notes: Optional[str] = None
    created_at: str = Field(default_factory=lambda: datetime.utcnow().isoformat())

class ParseResult(BaseModel):
    success: bool
    receipt: Optional[ReceiptRecord] = None
    raw_text: str = ""
    error: Optional[str] = None

class TaxCategorySummary(BaseModel):
    category: str
    schedule_c_line: str
    count: int
    total_spent: float
    total_deductible: float
    percentage_of_expenses: float

class TaxSummary(BaseModel):
    total_receipts: int
    total_expenses: float
    total_deductible: float
    estimated_tax_savings: float  # calculated based on ~25-30% self-employment + income tax rate
    categories: List[TaxCategorySummary] = Field(default_factory=list)
    audit_flags_count: int = 0
    top_merchants: List[Dict[str, Any]] = Field(default_factory=list)

class AuditAnalysis(BaseModel):
    overall_health_score: int  # 0-100
    flagged_receipts: List[ReceiptRecord] = Field(default_factory=list)
    audit_tips: List[str] = Field(default_factory=list)
    duplicate_candidates: List[Dict[str, Any]] = Field(default_factory=list)
