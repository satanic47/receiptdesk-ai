import pytest
from app.core.vector_store import vector_store

def test_vector_storage_and_search():
    sample_receipt = {
        "id": "test_rcpt_001",
        "filename": "test_aws.txt",
        "merchant": "AWS Cloud",
        "date": "2026-10-01",
        "currency": "USD",
        "total_amount": 120.00,
        "category": "Software & SaaS Subscriptions",
        "schedule_c_line": "Line 27a",
        "deductible_percentage": 100.0,
        "deductible_amount": 120.00,
        "confidence_score": 0.95,
        "audit_flags": []
    }
    vector_store.save_receipt(sample_receipt, "AWS Cloud EC2 servers hosting")
    
    # Query similar
    results = vector_store.search_similar("cloud server hosting", top_k=3)
    assert len(results) > 0
    assert any("AWS" in r["merchant"] for r in results)

def test_duplicate_detection():
    sample = {
        "id": "test_dup_001",
        "filename": "dup.txt",
        "merchant": "Notion Labs",
        "date": "2026-10-03",
        "currency": "USD",
        "total_amount": 10.00,
        "category": "Software & SaaS Subscriptions",
        "schedule_c_line": "Line 27a",
        "deductible_percentage": 100.0,
        "deductible_amount": 10.00,
        "confidence_score": 0.95,
        "audit_flags": []
    }
    vector_store.save_receipt(sample, "Notion subscription monthly")
    
    dup = vector_store.check_duplicate("Notion Labs", 10.00, "2026-10-03")
    assert dup is not None
    assert dup["id"] == "test_dup_001"
