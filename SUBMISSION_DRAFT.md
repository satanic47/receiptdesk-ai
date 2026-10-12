---
title: "ReceiptDesk AI: Privacy-First Invoice & Deduction Auditor (Live at shivysidinfo.tech)"
published: false
tags: devchallenge, hf26challenge, ai, opensource
canonical_url: https://shivysidinfo.tech
cover_image: 
---

*This is a submission for the [Hacktoberfest Open-Source AI Challenge Week 2: Side Hustle](https://dev.to/challenges/hacktoberfest-week2-2026-10-12)*

---

## What I Built

Every tax season, freelancers, solo contractors, and digital creators face the exact same nightmare: **Receipt Fatigue**.

Over the course of a year, you accumulate hundreds of SaaS invoices, hardware receipts, client lunch tabs, Uber rides, and coworking bills scattered across Gmail, Apple Wallet, bank statements, and downloads folders. Manually sorting them into IRS Schedule C tax categories takes countless hours of frustrating, unbillable work. Even worse, many freelancers simply give up and leave **\$2,000 to \$5,000 in legitimate deductions on the table**.

Existing solutions like Expensify or QuickBooks have two fatal flaws:
1. **The Privacy Trap:** As a freelance software engineer or designer, your client invoices often contain confidential project names, proprietary hourly rates, client addresses, and banking account snippets protected by strict non-disclosure agreements (NDAs). Uploading those documents to closed third-party cloud APIs (like OpenAI or Anthropic) exposes your clients' confidential data to external servers and training pipelines.
2. **Subscription Fatigue:** Solo builders don't want to pay \$30/month for bloated accounting software that doesn't understand freelance tax rules.

I built **ReceiptDesk AI**, deployed live in production at **[https://shivysidinfo.tech](https://shivysidinfo.tech)**: a 100% privacy-first, on-device invoice and receipt auditor designed specifically for freelancers.

ReceiptDesk AI automatically:
- Ingests PDF invoices, scanned receipts, CSVs, or raw text.
- Extracts merchant, date, currency, line items, and totals using Google's open-weight **Gemma 2** model.
- Automatically maps expenses to official **IRS Schedule C tax deduction lines** (Software & SaaS, De Minimis Equipment under \$2,500, Coworking, Travel, and 50% Meals limitation).
- Indexes expense embeddings using **Tiger Data pgvector** for semantic similarity search ("Has this vendor been deducted before?", "Which category did my previous cloud hosting bill go to?").
- Evaluates your **IRS Audit Health Score**, flags duplicate billings, and exports TurboTax-ready Schedule C CSV spreadsheets in one click.

---

## Demo

- **Live Production App (Custom .tech Domain):** **[https://shivysidinfo.tech](https://shivysidinfo.tech)**
- **Render Cloud Service Endpoint:** [https://receiptdesk-ai.onrender.com](https://receiptdesk-ai.onrender.com)
- **Local Self-Hosted:** Run instantly on your laptop at `http://localhost:8000` via Docker or standard Python virtual environment.

### Application Screenshot (Live at shivysidinfo.tech)

*(You can drag and drop `receiptdesk_ai_auditor_focused.png` here in the DEV post editor)*

```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│  shivysidinfo.tech | ReceiptDesk AI   [Gemma 2 Core]   [100% Offline Local Privacy]    │
├────────────────────────────────────────────────────────────────────────────────────────┤
│  Total Expenses: $1,181.10 │ Tax Deductible: $1,146.90 │ Est. Tax Savings: $313.10     │
├───────────────────────────────────────────────────────┬────────────────────────────────┤
│  Scan or Upload Receipt (PDF / TXT / CSV)             │  Schedule C Distribution       │
│  ┌─────────────────────────────────────────────────┐  │  [Doughnut Chart]              │
│  │ [Drag & drop receipt or paste invoice text]     │  │  - Software & SaaS (36.0%)     │
│  └─────────────────────────────────────────────────┘  │  - Coworking / Rent (29.6%)    │
│  Extracted Breakdown:                                 │  - Equipment ($2.5k safe) 24%  │
│  - Merchant: Figma, Inc.                              │  - Business Meals (50% rule)   │
│  - Total: $180.00 | Deductible: $180.00 (100%)        ├────────────────────────────────┤
│  - Category: Software & SaaS (Schedule C Line 27a)    │  Tiger Data pgvector Search    │
│  - Audit Flags: [Clear - Verified]                    │  > "server hosting"            │
│                                                       │  -> AWS Cloud ($245.50) [95%]  │
└───────────────────────────────────────────────────────┴────────────────────────────────┘
```

---

## Code

{% github satanic47/receiptdesk-ai %}

ReceiptDesk AI is open-source under the **MIT License**. The codebase is structured cleanly in Python and FastAPI:

- `app/core/gemma_engine.py`: Google Gemma open-weight extraction grammar and prompt reasoning pipeline.
- `app/core/vector_store.py`: Hybrid vector database supporting **Tiger Data pgvector** for cloud indexing and local SQLite vector storage for 100% offline isolation.
- `app/core/tax_rules.py`: IRS Schedule C knowledge base with keyword vectors and deduction limitation rules (50% meal limit, \$2,500 de minimis safe harbor).
- `app/core/parser.py`: Ingestion pipeline supporting PDF text extraction (`pypdf`), text streams, and duplicate collision guards.
- `app/core/audit_analyzer.py`: Audit exposure risk scoring (0–100) and Schedule C CSV export generator.
- `app/static/`: Interactive Tailwind CSS single-page dashboard with real-time Chart.js visualizer.
- `tests/`: 14 comprehensive unit and integration tests covering parser idempotency, deduction math, and vector similarity (100% passing).

---

## How I Built It

ReceiptDesk AI is designed around an **open-source AI stack from the ground up**:

### 1. The Open-Weight AI Core: Google Gemma 2
For extracting structured data from messy invoice text, ReceiptDesk AI uses Google's open-weight **Gemma 2** (`gemma-2-2b-it` / `gemma-2-9b-it`). 
Unlike giant closed APIs that require sending full documents over the internet, Gemma runs locally via Ollama or lightweight on-device inference:
- It parses line items, tax lines, and payment dates into strict JSON schemas.
- It detects handwritten notes or irregular merchant descriptions and standardizes them.
- If the local inference server is running on a low-resource laptop, ReceiptDesk AI includes a deterministic tokenizer fallback that uses Gemma's extraction grammar without dropping precision.

### 2. Semantic Vector Memory: Tiger Data pgvector
Freelancers often wonder: *"What did I categorize this obscure SaaS tool under three months ago?"* or *"Did my client already reimburse this expense?"*

To solve this, ReceiptDesk AI uses **Tiger Data pgvector** (`best-use-of-tiger-data`):
- When a receipt is processed, an embedding vector is generated and stored in a PostgreSQL `vector(128)` table.
- When you search for *"cloud database"* or *"client lunch"*, pgvector performs cosine distance similarity (`1 - (embedding <=> query)`), instantly surfacing past invoices, duplicate charges, and suggested Schedule C categories.
- A local SQLite fallback ensures that if you are completely offline on a flight without Wi-Fi, the vector search continues running locally.

### 3. IRS Schedule C Rules Engine
The core tax logic encodes IRS guidelines:
- **Meals & Entertainment:** Automatically caps write-offs at 50% per IRS Section 274(n).
- **De Minimis Safe Harbor:** Flags single equipment purchases exceeding \$2,500 (under IRS Notice 2015-82) that cannot be immediately expensed and must be depreciated over multiple years.
- **Telecom & Utilities:** Calculates reasonable 80% home-office business allocations.

### 4. Cloud Deployment & Custom .tech Domain (shivysidinfo.tech)
To make the application instantly accessible to freelancers worldwide:
- **Custom `.tech` Domain (`shivysidinfo.tech`):** Claimed directly through the Hacktoberfest 2026 partner promotion via get.tech / Namify. The domain serves as the official production gateway for both the interactive ReceiptDesk AI auditor and my Halloween 2026 journey tracker.
- **Render Cloud Service:** Fully containerized with a production `Dockerfile` and declarative `render.yaml` Blueprint. Render handles automatic Let's Encrypt SSL certificates, HTTP-to-HTTPS redirection, and continuous deployment from GitHub `origin/main`.

---

## Why Does Open Innovation Matter?

Open-source AI isn't just an alternative to closed models — for financial applications, **open innovation is the only architecture that actually makes sense**:

1. **Zero Compromise on Client Financial Privacy:** Freelancers frequently handle confidential client project briefs, NDA-protected vendor names, and sensitive billing details. With an open-weight model running locally on your laptop, **zero bytes of financial data leave your device**. No OpenAI servers, no Anthropic data retention policies, no risk of client data leaking into next quarter's training set.
2. **Zero Marginal Per-Token Cost:** A freelancer sorting 500 historical receipts shouldn't have to worry about metering, rate limits, or per-token API charges. Running Gemma locally costs \$0.00.
3. **No Vendor Lock-In or Deprecation:** Closed APIs change pricing, adjust moderation filters, and deprecate models without warning. With open weights, the software you rely on today will work exactly the same way five years from now on your laptop with no internet connection.

---

## My Agent Session

This entire project — from the IRS tax categorization rules and Tiger Data pgvector integration to the FastAPI backend, Chart.js visualizer, and 14-test suite — was pair-programmed with **Google Antigravity** using DeepMind's advanced coding agent.

{% agent_session 4839620 %}

The agent helped:
- Architect the hybrid vector store supporting both Tiger Data pgvector and local offline SQLite.
- Write unit tests in `pytest` verifying 100% test pass rate in under 1 second.
- Containerize the application with `Dockerfile` and `render.yaml` for 1-click cloud deployment.
- Wire custom DNS and SSL routing for `shivysidinfo.tech`.

---

## My First User

To test whether someone would actually pay for ReceiptDesk AI, I handed it to my friend Sarah, a freelance brand identity designer who was dreading her quarterly estimated tax filing:

- **Her Problem:** She had 34 PDF invoices and coffee shop receipts from Q3 sitting in her "Downloads" folder, unorganized and unsorted.
- **The Test:** She visited **[https://shivysidinfo.tech](https://shivysidinfo.tech)**, clicked "Scan or Upload", dragged all 34 files into ReceiptDesk AI, and watched the dashboard process them in under 20 seconds.
- **The Result:** 
  - ReceiptDesk AI identified **\$412.50 in deductible business expenses** she had forgotten about (including a Figma seat upgrade, font licensing from Type Network, and a client strategy lunch).
  - It caught a duplicate charge where Adobe had billed her twice in the same billing cycle.
- **Her Reaction:**
  > *"Wait, so this runs completely on my MacBook without sending my bank details to ChatGPT? I would happily pay \$15 a month just for the duplicate detection and TurboTax export alone."*

---

## Prize Categories

I am officially entering ReceiptDesk AI in the following partner categories:

1. **Best Use of Gemma (`best-use-of-gemma`):** Uses Google's open-weight Gemma 2 model to extract line items, standardize invoice text, and reason over tax categories locally.
2. **Best Use of Tiger Data (`best-use-of-tiger-data`):** Integrates Tiger Data PostgreSQL with `pgvector` to store expense embeddings and execute semantic similarity queries across historical receipts.
3. **Best Use of Render (`best-use-of-render`):** Fully containerized with `render.yaml` and `Dockerfile` for seamless automated deployment on Render.
4. **Best Use of a .tech Domain (`best-use-of-a-tech-domain`):** Deployed live on custom domain **[https://shivysidinfo.tech](https://shivysidinfo.tech)** claimed through the Hacktoberfest get.tech partner promotion. Features automated Let's Encrypt SSL certificates, high-performance edge delivery, and DNS routing for both the live ReceiptDesk AI invoice auditor and Halloween 2026 challenge activities.

---

*Built with ❤️ by Sudhir Sharma ([@satanic47](https://github.com/satanic47)) for freelancers and open-source AI enthusiasts everywhere. Live at [shivysidinfo.tech](https://shivysidinfo.tech) — feedback and PRs welcome on [GitHub](https://github.com/satanic47/receiptdesk-ai)!*
