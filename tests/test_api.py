import pytest
from fastapi.testclient import TestClient
from app.main import app

client = TestClient(app)

def test_status_endpoint():
    response = client.get("/api/status")
    assert response.status_code == 200
    data = response.json()
    assert "app_name" in data
    assert "gemma_model" in data
    assert "backend" in data

def test_categories_endpoint():
    response = client.get("/api/categories")
    assert response.status_code == 200
    data = response.json()
    assert isinstance(data, list)
    assert len(data) >= 10

def test_parse_text_endpoint():
    payload = {
        "raw_text": "GitHub Enterprise Seat License\nDate: 2026-10-10\nTotal: $21.00\n",
        "filename": "github_inv.txt"
    }
    response = client.post("/api/receipts/parse-text", json=payload)
    assert response.status_code == 200
    data = response.json()
    assert data["success"] is True
    assert data["receipt"]["total_amount"] == 21.0
    assert "GitHub" in data["receipt"]["merchant"]

def test_load_sample_data_endpoint():
    response = client.post("/api/sample-data/load")
    assert response.status_code == 200
    data = response.json()
    assert data["success"] is True
    assert data["count"] >= 5

def test_analytics_summary_endpoint():
    response = client.get("/api/analytics/summary")
    assert response.status_code == 200
    data = response.json()
    assert "total_expenses" in data
    assert "total_deductible" in data
    assert "estimated_tax_savings" in data
    assert data["total_deductible"] <= data["total_expenses"]

def test_export_csv_endpoint():
    response = client.get("/api/export/csv")
    assert response.status_code == 200
    assert "text/csv" in response.headers["content-type"]
    assert "Schedule C Line" in response.text
