import pytest
from app.core.parser import parser

def test_parse_simple_receipt_text():
    sample_text = """
    DIGITALOCEAN LLC
    Invoice Date: 2026-10-04
    Droplet Hosting (2 vCPU, 4GB RAM) $48.00
    Subtotal: $48.00
    Tax: $0.00
    Total: $48.00
    """
    result = parser.parse_text(sample_text, "do_invoice.txt")
    assert result.success is True
    receipt = result.receipt
    assert receipt is not None
    assert "DigitalOcean" in receipt.merchant or "DIGITALOCEAN" in receipt.merchant
    assert receipt.total_amount == 48.0
    assert receipt.date == "2026-10-04"
    assert receipt.deductible_amount == 48.0
    assert "Software" in receipt.category

def test_parse_meal_with_limitation():
    meal_text = """
    STARBUCKS COFFEE #1042
    Date: 2026-10-07
    2x Iced Latte $12.50
    1x Croissant $4.50
    Total Amount: $17.00
    """
    result = parser.parse_text(meal_text, "starbucks.txt")
    assert result.success is True
    receipt = result.receipt
    assert receipt.total_amount == 17.0
    assert receipt.deductible_percentage == 50.0
    assert receipt.deductible_amount == 8.5
    assert any("50%" in flag for flag in receipt.audit_flags)
