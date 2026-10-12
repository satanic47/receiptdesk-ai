# ReceiptDesk AI 🧾🛡️

[![License: MIT](https://img.shields.io/badge/License-MIT-emerald.svg)](LICENSE)
[![Python: 3.10+](https://img.shields.io/badge/Python-3.10+-blue.svg)](https://python.org)
[![FastAPI](https://img.shields.io/badge/FastAPI-0.115+-teal.svg)](https://fastapi.tiangolo.com)
[![Open-Source AI: Gemma 2](https://img.shields.io/badge/Open--Source%20AI-Google%20Gemma-orange.svg)](https://ai.google.dev/gemma)
[![Vector DB: Tiger Data pgvector](https://img.shields.io/badge/Vector%20DB-Tiger%20Data%20pgvector-purple.svg)](https://tigerdata.cloud)
[![Deploy on Render](https://img.shields.io/badge/Deploy-Render-46E3B7.svg)](render.yaml)

> **100% Privacy-First Invoice & Receipt Auditor with Open-Source AI for Freelancers & Contractors.**  
> Automatically parses receipts, classifies IRS Schedule C business deductions, detects duplicate billings, and searches historical records with vector embeddings — **without your confidential client rates and banking data ever leaving your laptop.**

Built for the **[Hacktoberfest 2026 Open-Source AI Challenge: Week 2 (Side Hustle)](https://dev.to/challenges/hacktoberfest-week2-2026-10-12)**.

---

## 💡 The Problem & Why Freelancers Pay For This

Freelancers and solo contractors lose **thousands of dollars every tax season** in missed business expense write-offs:
1. **Receipt Fatigue:** Manually sorting hundreds of PDF receipts, SaaS invoices, and rideshare emails across bank accounts takes hours of unbillable time.
2. **The Cloud Privacy Dilemma:** Freelancers handling confidential client NDAs, proprietary software rates, and sensitive financial spreadsheets refuse to upload raw bank statements and client invoices to closed third-party cloud APIs (OpenAI, Anthropic).
3. **Audit Exposure:** Misclassifying dining (strictly 50% IRS limit) or expensing assets exceeding the \$2,500 de minimis safe harbor triggers costly IRS audits and penalties.

**ReceiptDesk AI solves this by keeping all AI inference and financial vector indexing 100% on-device.**

---

## ✨ Features

- **🛡️ 100% On-Device Privacy Architecture:** Runs local open-weight inference (Google Gemma 2) and local vector embeddings. Sensitive client invoices and bank amounts never leave your computer.
- **📑 Multi-Format Ingestion:** Seamlessly parses PDF invoices, plain text receipts, raw pasted text, and CSV dumps using `pypdf` and structured regex tokenizers.
- **⚖️ IRS Schedule C Deduction Classification:** Classifies expenses into official tax lines:
  - *Software & SaaS Subscriptions* (Line 27a - 100% deductible)
  - *Business Meals & Client Dining* (Line 24b - 50% deductible)
  - *Coworking & Rent* (Line 20b - 100% deductible)
  - *Equipment & Hardware* (Line 27a - De Minimis Safe Harbor under \$2,500)
  - *Local Transit & Rideshare* (Line 9 - 100% deductible)
  - *Office Supplies & Telecom* (Line 18 & Line 25)
- **🔍 Semantic Vector Search with Tiger Data pgvector:** Hybrid vector memory stores embeddings of historical receipts. Quickly search past expenses ("Did I already expense Figma in June?") and find nearest tax categories.
- **🚨 Proactive Audit Advisor:** Detects potential duplicate billings, flags high meal deduction ratios (>25%), and warns when equipment purchases exceed IRS de minimis safe harbor limits.
- **📊 Real-Time Financial Dashboard:** Interactive Tailwind CSS UI with live Chart.js doughnut breakdowns, health score, and estimated tax savings calculator.
- **📥 One-Click Export:** Stream clean, tax-ready CSV summaries directly into TurboTax, QuickBooks, or send to your CPA.

---

## 🏗️ Architecture & Open-Source AI Core

ReceiptDesk AI is built around open-source AI at every layer:

```mermaid
flowchart TD
    A[Freelancer Uploads Receipt / Invoice\nPDF, TXT, CSV] --> B[Local Document Ingestion & Tokenizer\npypdf / regex streams]
    B --> C[Open-Weight AI Extraction Engine\nGoogle Gemma 2 2B/9B / Ollama]
    C --> D[IRS Schedule C Rules Knowledge Base\n10 Official Tax Deduction Categories]
    D --> E[Hybrid Vector Store\nTiger Data pgvector / Local Offline SQLite]
    E --> F[Audit Risk & Anomaly Analyzer\nDuplicate Detection & Safe Harbor Verification]
    F --> G[Interactive Local Dashboard\nTailwind UI + Chart.js Visualizer]
    F --> H[Tax-Ready Schedule C CSV Export]
```

### Why Open Innovation Matters
- **Zero Per-Token API Costs:** Freelancers with 500 invoices don't pay \$0.05 per receipt. The model runs locally for free.
- **Uncompromised Data Privacy:** Bank transaction numbers and client billing terms stay strictly on the freelancer's machine.
- **Portability & Vendor Independence:** Supports open-weight Gemma 2 locally or via Ollama, with hybrid vector storage connecting either to local SQLite or cloud-managed Tiger Data pgvector.

---

## 🚀 Quickstart Guide

### 1. Clone & Set Up Environment

```bash
git clone https://github.com/satanic47/receiptdesk-ai.git
cd receiptdesk-ai

# Create virtual environment
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt
```

### 2. Configure Environment (Optional)

Copy `.env.example` to `.env`:

```bash
cp .env.example .env
```

To connect to Tiger Data managed pgvector, set:
```env
TIGER_DATA_PG_URL=postgresql://user:password@instance.tigerdata.cloud:5432/receiptdesk
STORAGE_BACKEND=tiger
```
*(If unset, ReceiptDesk AI defaults automatically to 100% offline local SQLite privacy mode).*

### 3. Run Application

```bash
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

Open your browser at **`http://localhost:8000`** to access the dashboard. Click **"Load 6 Sample Receipts"** to test the system with realistic freelance invoices immediately.

---

## 🧪 Running the Test Suite

ReceiptDesk AI includes a comprehensive 14-test suite covering parser accuracy, Schedule C deduction rules, vector similarity search, and REST endpoints:

```bash
python -m pytest -v
```

Output:
```
tests/test_api.py::test_status_endpoint PASSED                           [  7%]
tests/test_api.py::test_categories_endpoint PASSED                       [ 14%]
tests/test_api.py::test_parse_text_endpoint PASSED                       [ 21%]
tests/test_api.py::test_load_sample_data_endpoint PASSED                 [ 28%]
tests/test_api.py::test_analytics_summary_endpoint PASSED                [ 35%]
tests/test_api.py::test_export_csv_endpoint PASSED                       [ 42%]
tests/test_parser.py::test_parse_simple_receipt_text PASSED              [ 50%]
tests/test_parser.py::test_parse_meal_with_limitation PASSED             [ 57%]
tests/test_tax_rules.py::test_categories_loaded PASSED                   [ 64%]
tests/test_tax_rules.py::test_meal_limitation_rate PASSED                [ 71%]
tests/test_tax_rules.py::test_software_deduction_rate PASSED             [ 78%]
tests/test_tax_rules.py::test_rule_classification PASSED                 [ 85%]
tests/test_vector_store.py::test_vector_storage_and_search PASSED        [ 92%]
tests/test_vector_store.py::test_duplicate_detection PASSED              [100%]

============================= 14 passed in 0.96s ==============================
```

---

## ☁️ Deployment on Render

ReceiptDesk AI is pre-configured for 1-click deployment on Render via `render.yaml`:

1. Push your repository to GitHub.
2. In the Render Dashboard, select **New > Blueprint**.
3. Connect your repository — Render will automatically read `render.yaml`, build the environment, and spin up your live web app.

---

## 🤝 Hacktoberfest 2026 Partner Track Alignment

- **Best Use of Gemma:** Powers structured invoice reasoning, line-item decomposition, and semantic tax categorization using Google's open-weight model.
- **Best Use of Tiger Data:** Uses Tiger Data managed PostgreSQL with `pgvector` for storing and querying receipt semantic embeddings.
- **Best Use of Render:** Fully containerized with `Dockerfile` and `render.yaml` for instant production deployment.
- **Best Use of a .tech Domain:** Live web application configured for custom `.tech` domains.

---

## 📄 License

Distributed under the **MIT License**. See [LICENSE](LICENSE) for more details.

Authored by **[satanic47](https://github.com/satanic47)** for Hacktoberfest 2026.
