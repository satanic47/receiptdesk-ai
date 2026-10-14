// Sudhir Sharma's Halloween 2026 Journey & ReceiptDesk AI Application Logic

let categoryChart = null;

// Activity data store for the modal popups
const ACTIVITIES_DATA = {
  civicpulse: {
    badge: "🏛️ Code for Communities Chandigarh (GDG Cloud Chandigarh)",
    title: "CivicPulse Tricity: NagrikSetu AI Platform",
    subtitle: "Google Gemini 1.5 Flash • Digital Public Infrastructure • Chandigarh, Mohali & Panchkula",
    stats: [
      { label: "Unit Tests", val: "21 / 21 Pass" },
      { label: "AI Core", val: "Google Gemini 1.5" },
      { label: "Languages", val: "Punjabi, Hindi, Eng" },
      { label: "Sector Grids", val: "Sectors 1-60 + Tricity" }
    ],
    problem: "Indian municipal corporations struggle with fragmented citizen feedback systems. In Chandigarh Tricity, over 70% of grassroots citizens speak Punjabi or Hindi, while legacy complaint portals require rigid English forms. Moreover, municipal ward budgets lack real-time geospatial demand hotspot intelligence, leaving critical hazards unaddressed.",
    solution: `
      <p>• <strong>Omnichannel Voice & Text Ingestion:</strong> Citizens speak or text in Punjabi Gurmukhi, Devanagari Hindi, or English via Voice Notes, WhatsApp, and Web.</p>
      <p>• <strong>Google Gemini Multilingual Normalization:</strong> Normalizes colloquial dialect input into canonical structured schemas with automated 1-10 hazard urgency scoring and municipal department routing (B&R Roads, Water, Power, Sanitation).</p>
      <p>• <strong>Le Corbusier Sector Grid Geocoding:</strong> Maps colloquial landmarks (Kiran Cinema, Patel Market, PU Gate 2) directly to Chandigarh sector centroids, wards, and demographics.</p>
      <p>• <strong>Municipal Capital DPR Copilot:</strong> Gemini AI synthesizes demand hotspots with ward census data and budgets to generate executive Detailed Project Reports (DPRs) with cost estimates for smart city engineers.</p>
    `,
    image: "/static/images/cursor_mini_app_running_screenshot.png",
    actions: [
      { text: "View GitHub Repo 🐙", primary: true, href: "https://github.com/satanic47/civicpulse-tricity" },
      { text: "Code for Communities Hub 🏛️", href: "https://hackculture.io/hackathons/code-for-communities-chandigarh" }
    ]
  },

  receiptdesk: {
    badge: "🎃 Hacktoberfest Week 2: Side Hustle Edition",
    title: "ReceiptDesk AI: Privacy-First Invoice & Deduction Auditor",
    subtitle: "Google Gemma 2 (gemma-2-2b-it) + Tiger Data pgvector (PostgreSQL)",
    stats: [
      { label: "Unit Tests", val: "14 / 14 Pass" },
      { label: "Privacy Mode", val: "100% On-Device" },
      { label: "Deduction Math", val: "IRS Schedule C" },
      { label: "Vector Search", val: "128-dim Cosine" }
    ],
    problem: "Every tax season, freelancers face 'receipt fatigue', sifting through hundreds of SaaS, hardware, and client invoices. Uploading confidential client documents and NDA-protected project details to closed cloud APIs (OpenAI/Anthropic) creates serious privacy leaks and recurring per-token fees.",
    solution: `
      <p>• <strong>Open-Weight Gemma 2 AI Core:</strong> Runs on-device via local Ollama or Python inference with strict JSON extraction grammar. Parses vendor, dates, line items, and currency without sending a single byte to external servers.</p>
      <p>• <strong>Tiger Data pgvector Memory:</strong> Stores 128-dimensional expense embeddings in PostgreSQL. Enables instant semantic similarity search to flag duplicate bills and retrieve past vendor classifications.</p>
      <p>• <strong>IRS Schedule C Rules Engine:</strong> Enforces the 50% business meals cap (§ 274(n)) and flags hardware purchases exceeding the $2,500 De Minimis Safe Harbor threshold.</p>
      <p>• <strong>Production Deployment:</strong> Containerized via Dockerfile and render.yaml with dynamic port binding, pointed to custom domain shivysidinfo.tech.</p>
    `,
    image: "/static/images/cursor_mini_app_running_screenshot.png",
    actions: [
      { text: "Launch Live Tool 🚀", primary: true, onClick: "switchToAuditor(); closeActivityModal();" },
      { text: "GitHub Repository 🐙", href: "https://github.com/satanic47/receiptdesk-ai" }
    ]
  },

  docsgpt: {
    badge: "👻 Open Source Contribution: DocsGPT Core Engine",
    title: "Multi-File Ingestion Deduplication & Poison-Loop Guard",
    subtitle: "arc53/DocsGPT (PR #3068) | Python, Celery, Redis, Pytest",
    stats: [
      { label: "PR Number", val: "#3068" },
      { label: "Status", val: "Addressed Review" },
      { label: "Lockout Bug", val: "24h Lock Removed" },
      { label: "Test Suites", val: "100% Pass Rate" }
    ],
    problem: "When users executed rapid consecutive file additions or removals on the same knowledge source, asynchronous Celery task redeliveries caused race conditions. Knowledge sources were penalized with a 24-hour lockout or trapped in poison ingestion loops.",
    solution: `
      <p>• <strong>Atomic Task Deduplication:</strong> Added Redis-backed idempotency tokens preventing identical task redelivery within ingestion windows.</p>
      <p>• <strong>Poison-Loop Thresholds:</strong> Guarded consecutive file management operations so failed parsing passes release locks immediately instead of triggering exponential 24-hour backoff.</p>
      <p>• <strong>Regression Test Suite:</strong> Wrote automated pytest scenarios verifying sequential file addition and removal operations on the same source complete safely without locking.</p>
    `,
    image: "/static/images/grok_bot_challenge_7_combined.png",
    actions: [
      { text: "View PR #3068 on GitHub 🐙", href: "https://github.com/arc53/DocsGPT/pull/3068" },
      { text: "DocsGPT Repository", href: "https://github.com/arc53/DocsGPT" }
    ]
  },

  tigerdata: {
    badge: "🐯 Tiger Data: TimescaleDB Challenge",
    title: "Financial Timeseries Pipeline, CAGGs & pgvector Cosine Search",
    subtitle: "TimescaleDB, Hypertables, Continuous Aggregates, PostgreSQL",
    stats: [
      { label: "Tiger Tasks", val: "5 / 5 Verified" },
      { label: "Timescale", val: "Cloud Hypertables" },
      { label: "Continuous Aggs", val: "Real-Time CAGGs" },
      { label: "Vector Latency", val: "< 5ms Query" }
    ],
    problem: "High-frequency transactional streams and financial audit records overwhelm standard relational databases, creating painful query slowdowns when generating real-time analytics and running vector similarity queries.",
    solution: `
      <p>• <strong>Hypertables & Real-Time Aggregates:</strong> Created partitioned time-series hypertables and materialized continuous aggregates (CAGGs) that calculate rolling hourly and daily expense metrics instantly.</p>
      <p>• <strong>Tiger Cloud pgvector:</strong> Integrated pgvector extension for sub-5ms cosine similarity indexing on financial item embeddings.</p>
      <p>• <strong>Agent Integration:</strong> Configured automated data retention and chunking rules using Tiger MCP agent toolsets.</p>
    `,
    image: "/static/images/tiger_cloud_dashboard_screenshot.png",
    actions: [
      { text: "View Pipeline Repository 🐙", href: "https://github.com/satanic47/receiptdesk-ai" },
      { text: "Timescale & Tiger Cloud", href: "https://cloud.tigerdata.com" }
    ]
  },

  mlhghw: {
    badge: "👾 MLH Global Hack Week: Octoberfest 2026",
    title: "Copilot Adventure Game & Model Benchmark Suite",
    subtitle: "Python, Grok 4.7 High vs Claude Opus 5.5, CLI Gaming",
    stats: [
      { label: "Streams Attended", val: "10+ Verified" },
      { label: "Secret Sticker", val: "Crashtoberfest" },
      { label: "Benchmarked", val: "Grok 4.7 / Opus 5.5" },
      { label: "Mini Apps", val: "Tip & Bill Splitter" }
    ],
    problem: "Evaluating code generation ergonomics and multi-turn reasoning across frontier LLMs under competitive hackathon time constraints.",
    solution: `
      <p>• <strong>Copilot Adventure Game:</strong> Generated a full-featured retro terminal RPG dungeon crawler with state management, item inventory, and dynamic enemy encounters.</p>
      <p>• <strong>Comparative Benchmark:</strong> Developed automated benchmark scripts evaluating Grok 4.7 High and Claude Opus 5.5 on syntax accuracy, token generation velocity, and bug refactoring speed.</p>
      <p>• <strong>Hackathon Check-Ins:</strong> Attended daily workshops, collected attendance codes, and completed interactive live-stream challenges.</p>
    `,
    image: "/static/images/cursor_mini_app_running_screenshot.png",
    actions: [
      { text: "View MLH GHW Schedule 👾", href: "https://ghw.mlh.io/" },
      { text: "MyMLH Profile", href: "https://my.mlh.io/" }
    ]
  },

  modtoberfest: {
    badge: "🍁 Modtoberfest 2026",
    title: "CraftTweaker Docs, Clumps & Packwiz Website Contributions",
    subtitle: "Astro, TypeScript, Java, Open-Source Minecraft",
    stats: [
      { label: "Target Repos", val: "3 Projects" },
      { label: "Documentation", val: "Link Rot Resolved" },
      { label: "Site Engine", val: "Astro 4.0 Layouts" },
      { label: "Status", val: "Contributions Active" }
    ],
    problem: "Popular open-source Minecraft mod repositories suffered from outdated documentation links, broken Astro template layouts, and missing package metadata.",
    solution: `
      <p>• <strong>CraftTweaker Documentation:</strong> Modernized broken tutorials, updated API method signatures, and resolved dead hyperlinks.</p>
      <p>• <strong>Astro Components:</strong> Fixed navigation and responsive drawer layouts on the documentation site templates.</p>
      <p>• <strong>Open Standards:</strong> Aligned PRs with Modtoberfest guidelines and GitHub Actions automated linter workflows.</p>
    `,
    image: "/static/images/gartictober_day11.png",
    actions: [
      { text: "Modtoberfest Hub 🍁", href: "https://modtoberfest.com" },
      { text: "GitHub Contributions", href: "https://github.com/satanic47" }
    ]
  },

  spookyjam: {
    badge: "🕸️ SpookyJam 2026",
    title: "Halloween Seasonal Game Jam Showcase",
    subtitle: "Minecraft Seasonal Jam, Shaders & Particle Effects",
    stats: [
      { label: "Theme", val: "Halloween / Spooky" },
      { label: "Jam Event", val: "SpookyJam '26" },
      { label: "Pipeline", val: "Custom Shaders" },
      { label: "Showcase", val: "Community Entry" }
    ],
    problem: "Crafting lightweight, visually striking Halloween atmosphere and custom entities without dragging client frame rates down.",
    solution: `
      <p>• <strong>Festive Shaders:</strong> Designed optimized particle shaders for haunted mist, glowing pumpkins, and atmospheric lighting.</p>
      <p>• <strong>Community Showcase:</strong> Formatted entry for the official SpookyJam Halloween festival site and participating mod packs.</p>
    `,
    image: "/static/images/gartictober_day11.png",
    actions: [
      { text: "SpookyJam Info 🕸️", href: "https://spookyjam.modtoberfest.com" }
    ]
  }
};

document.addEventListener("DOMContentLoaded", () => {
  initTabNavigation();
  initDropZone();
  initEventListeners();
  loadBackendStatus();
  refreshDashboard();

  // Check URL parameters (e.g. ?app=receiptdesk)
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get("app") === "receiptdesk" || urlParams.get("view") === "auditor") {
    switchToAuditor();
  }
});

// View switching between Activities Grid & ReceiptDesk AI Live Auditor
function initTabNavigation() {
  const tabActivitiesBtn = document.getElementById("tabActivitiesBtn");
  const tabAuditorBtn = document.getElementById("tabAuditorBtn");

  tabActivitiesBtn.addEventListener("click", switchToActivities);
  tabAuditorBtn.addEventListener("click", switchToAuditor);
}

function switchToActivities() {
  document.getElementById("activitiesView").classList.remove("hidden");
  document.getElementById("auditorView").classList.add("hidden");

  const tabActivitiesBtn = document.getElementById("tabActivitiesBtn");
  const tabAuditorBtn = document.getElementById("tabAuditorBtn");

  tabActivitiesBtn.className = "px-3.5 py-1.5 text-xs font-bold rounded-lg bg-orange-500 text-slate-950 transition shadow-lg shadow-orange-500/30 flex items-center space-x-1.5";
  tabAuditorBtn.className = "px-3.5 py-1.5 text-xs font-bold rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition flex items-center space-x-1.5";

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function switchToAuditor() {
  document.getElementById("activitiesView").classList.add("hidden");
  document.getElementById("auditorView").classList.remove("hidden");

  const tabActivitiesBtn = document.getElementById("tabActivitiesBtn");
  const tabAuditorBtn = document.getElementById("tabAuditorBtn");

  tabActivitiesBtn.className = "px-3.5 py-1.5 text-xs font-bold rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition flex items-center space-x-1.5";
  tabAuditorBtn.className = "px-3.5 py-1.5 text-xs font-bold rounded-lg bg-orange-500 text-slate-950 transition shadow-lg shadow-orange-500/30 flex items-center space-x-1.5";

  window.scrollTo({ top: 300, behavior: 'smooth' });
}

// Activity Modal Open / Close Logic
window.openActivityModal = function(activityKey) {
  const data = ACTIVITIES_DATA[activityKey];
  if (!data) return;

  const modal = document.getElementById("activityModal");
  document.getElementById("modalBadge").textContent = data.badge;
  document.getElementById("modalTitle").textContent = data.title;
  document.getElementById("modalSubtitle").textContent = data.subtitle;

  // Render Stat Chips
  const statsGrid = document.getElementById("modalStatsGrid");
  statsGrid.innerHTML = data.stats.map(s => `
    <div class="bg-slate-950 p-2.5 rounded-xl border border-slate-800 text-center">
      <div class="text-[10px] uppercase font-bold text-slate-400 tracking-wider">${s.label}</div>
      <div class="text-xs sm:text-sm font-bold text-orange-400 mt-1">${s.val}</div>
    </div>
  `).join("");

  // Problem & Solution
  document.getElementById("modalProblem").innerHTML = data.problem;
  document.getElementById("modalSolution").innerHTML = data.solution;

  // Media
  const imgContainer = document.getElementById("modalImageContainer");
  const img = document.getElementById("modalImage");
  if (data.image) {
    img.src = data.image;
    imgContainer.classList.remove("hidden");
  } else {
    imgContainer.classList.add("hidden");
  }

  // Action Buttons
  const actionsContainer = document.getElementById("modalActions");
  actionsContainer.innerHTML = data.actions.map(a => {
    if (a.onClick) {
      return `<button type="button" onclick="${a.onClick}" class="px-4 py-2 text-xs font-bold rounded-xl ${a.primary ? 'bg-orange-500 hover:bg-orange-400 text-slate-950 shadow-lg shadow-orange-500/30' : 'bg-slate-800 hover:bg-slate-700 text-white'} transition">${a.text}</button>`;
    } else {
      return `<a href="${a.href}" target="_blank" rel="noopener noreferrer" class="px-4 py-2 text-xs font-bold rounded-xl ${a.primary ? 'bg-orange-500 hover:bg-orange-400 text-slate-950 shadow-lg shadow-orange-500/30' : 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-700'} transition">${a.text}</a>`;
    }
  }).join("");

  modal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
};

window.closeActivityModal = function() {
  document.getElementById("activityModal").classList.add("hidden");
  document.body.style.overflow = "auto";
};

// Close modal on escape key or clicking backdrop
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeActivityModal();
});
document.getElementById("activityModal").addEventListener("click", (e) => {
  if (e.target.id === "activityModal") closeActivityModal();
});

// Drag & Drop Handler
function initDropZone() {
  const dropZone = document.getElementById("dropZone");
  const fileInput = document.getElementById("fileInput");

  dropZone.addEventListener("click", () => fileInput.click());

  ["dragenter", "dragover"].forEach(eventName => {
    dropZone.addEventListener(eventName, (e) => {
      e.preventDefault();
      dropZone.classList.add("dragover");
    });
  });

  ["dragleave", "drop"].forEach(eventName => {
    dropZone.addEventListener(eventName, (e) => {
      e.preventDefault();
      dropZone.classList.remove("dragover");
    });
  });

  dropZone.addEventListener("drop", (e) => {
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      uploadFile(files[0]);
    }
  });

  fileInput.addEventListener("change", (e) => {
    if (e.target.files.length > 0) {
      uploadFile(e.target.files[0]);
    }
  });
}

function initEventListeners() {
  document.getElementById("parseTextBtn").addEventListener("click", parseRawText);
  document.getElementById("loadSampleBtn").addEventListener("click", loadSampleData);
  document.getElementById("similaritySearchBtn").addEventListener("click", runSimilaritySearch);
  document.getElementById("similarityInput").addEventListener("keypress", (e) => {
    if (e.key === "Enter") runSimilaritySearch();
  });
  document.getElementById("exportCsvBtn").addEventListener("click", () => {
    window.location.href = "/api/export/csv";
  });
}

async function loadBackendStatus() {
  try {
    const res = await fetch("/api/status");
    const data = await res.json();
    console.log("System Status:", data);
  } catch (err) {
    console.error("Status load failed", err);
  }
}

async function refreshDashboard() {
  await Promise.all([
    loadSummary(),
    loadReceiptsList(),
    loadAuditReport()
  ]);
}

async function loadSummary() {
  try {
    const res = await fetch("/api/analytics/summary");
    const summary = await res.json();

    document.getElementById("statTotalExpenses").textContent = `$${summary.total_expenses.toFixed(2)}`;
    document.getElementById("statTotalDeductible").textContent = `$${summary.total_deductible.toFixed(2)}`;
    document.getElementById("statTaxSavings").textContent = `$${summary.estimated_tax_savings.toFixed(2)}`;
    document.getElementById("statReceiptCount").textContent = summary.total_receipts;

    updateChart(summary.categories);
  } catch (err) {
    console.error("Failed to load summary", err);
  }
}

async function loadAuditReport() {
  try {
    const res = await fetch("/api/analytics/audit-report");
    const audit = await res.json();

    document.getElementById("statHealthScore").innerHTML = `${audit.overall_health_score}<span class="text-sm font-normal text-slate-500">/100</span>`;
    
    const flagsCountEl = document.getElementById("statAuditFlags");
    if (audit.overall_health_score >= 85) {
      flagsCountEl.textContent = "Low audit exposure";
      flagsCountEl.className = "mt-1 text-xs text-emerald-400";
    } else if (audit.overall_health_score >= 65) {
      flagsCountEl.textContent = "Moderate audit exposure";
      flagsCountEl.className = "mt-1 text-xs text-amber-400";
    } else {
      flagsCountEl.textContent = "High audit exposure";
      flagsCountEl.className = "mt-1 text-xs text-rose-400";
    }
  } catch (err) {
    console.error("Audit report error", err);
  }
}

async function loadReceiptsList() {
  try {
    const res = await fetch("/api/receipts");
    const receipts = await res.json();
    const tbody = document.getElementById("receiptsTableBody");

    if (receipts.length === 0) {
      tbody.innerHTML = `<tr><td colspan="7" class="py-8 text-center text-slate-500">No receipts filed yet. Upload a receipt or click "Load 6 Freelance Sample Invoices" above.</td></tr>`;
      return;
    }

    tbody.innerHTML = "";
    receipts.forEach(r => {
      const tr = document.createElement("tr");
      tr.className = "hover:bg-slate-900/40 transition";

      const flagsHtml = r.audit_flags && r.audit_flags.length > 0
        ? `<span class="px-2 py-0.5 rounded text-[10px] bg-amber-500/10 text-amber-400 border border-amber-500/20">${r.audit_flags[0]}</span>`
        : `<span class="text-emerald-400 text-xs">Clear</span>`;

      tr.innerHTML = `
        <td class="py-3 px-4 font-mono text-slate-300">${r.date || "N/A"}</td>
        <td class="py-3 px-4 font-semibold text-white">${r.merchant}</td>
        <td class="py-3 px-4">${r.category}</td>
        <td class="py-3 px-4 text-slate-400 font-mono text-[11px]">${r.schedule_c_line}</td>
        <td class="py-3 px-4 text-right font-medium text-slate-200">$${r.total_amount.toFixed(2)}</td>
        <td class="py-3 px-4 text-right font-semibold text-emerald-400">$${r.deductible_amount.toFixed(2)}</td>
        <td class="py-3 px-4">${flagsHtml}</td>
      `;
      tbody.appendChild(tr);
    });
  } catch (err) {
    console.error("Failed to load receipts list", err);
  }
}

function updateChart(categories) {
  const ctx = document.getElementById("categoryChart").getContext("2d");
  
  const labels = categories.length > 0 ? categories.map(c => c.category) : ["No Expenses"];
  const data = categories.length > 0 ? categories.map(c => c.total_spent) : [1];
  const bgColors = [
    "#f97316", "#a855f7", "#06b6d4", "#10b981", "#ec4899", "#8b5cf6", "#14b8a6", "#f59e0b"
  ];

  if (categoryChart) {
    categoryChart.destroy();
  }

  categoryChart = new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: labels,
      datasets: [{
        data: data,
        backgroundColor: bgColors.slice(0, labels.length),
        borderWidth: 2,
        borderColor: "#020617"
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: "bottom",
          labels: {
            boxWidth: 12,
            color: "#94a3b8",
            font: { size: 10 }
          }
        }
      }
    }
  });
}

async function uploadFile(file) {
  const spinner = document.getElementById("uploadSpinner");
  spinner.classList.remove("hidden");

  const formData = new FormData();
  formData.append("file", file);

  try {
    const res = await fetch("/api/receipts/upload", {
      method: "POST",
      body: formData
    });

    if (!res.ok) {
      const err = await res.json();
      alert(`Error: ${err.detail || "Upload failed"}`);
      return;
    }

    const data = await res.json();
    await refreshDashboard();
  } catch (err) {
    console.error("Upload error", err);
    alert("Upload failed. Ensure backend is running.");
  } finally {
    spinner.classList.add("hidden");
  }
}

async function parseRawText() {
  const text = document.getElementById("rawInvoiceText").value.trim();
  if (!text) {
    alert("Please paste invoice text first.");
    return;
  }

  const btn = document.getElementById("parseTextBtn");
  btn.disabled = true;
  btn.innerText = "Parsing with Gemma 2...";

  try {
    const res = await fetch("/api/receipts/parse-text", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ raw_text: text, filename: "pasted_invoice.txt" })
    });

    if (!res.ok) {
      const err = await res.json();
      alert(`Error: ${err.detail || "Parse failed"}`);
      return;
    }

    document.getElementById("rawInvoiceText").value = "";
    await refreshDashboard();
  } catch (err) {
    console.error("Parse error", err);
    alert("Parse failed. Ensure backend is running.");
  } finally {
    btn.disabled = false;
    btn.innerText = "Parse with Gemma 2 →";
  }
}

async function loadSampleData() {
  const samples = [
    "INVOICE #FIGMA-2026-921 | Figma, Inc. | Date: 2026-09-12 | Figma Professional Seat - Annual Subscription | Amount: $180.00 USD",
    "RECEIPT | Amazon Web Services, Inc. | Date: 2026-08-31 | EC2, S3 & Tiger Data pgvector staging cloud server | Total: $245.50 USD",
    "TAX INVOICE | WeWork Management LLC | Date: 2026-09-01 | Hot Desk Dedicated Monthly Coworking Pass | Amount: $350.00 USD",
    "RECEIPT #4819 | Blue Bottle Coffee & Cafe | Date: 2026-09-18 | Strategic Q3 Planning Lunch with Enterprise Client | Total: $68.40 USD",
    "SERVICE INVOICE #APP-994 | Apple Store Genius Bar | Date: 2026-09-22 | MacBook Pro M3 Screen and Battery Diagnostic Repair | Amount: $289.00 USD",
    "RIDE SUMMARY | Uber Technologies Inc. | Date: 2026-09-25 | Client On-Site Technical Architecture Meeting Airport Transfer | Total: $48.20 USD"
  ];

  const btn = document.getElementById("loadSampleBtn");
  btn.disabled = true;
  btn.textContent = "Loading sample invoices...";

  try {
    for (let i = 0; i < samples.length; i++) {
      await fetch("/api/receipts/parse-text", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ raw_text: samples[i], filename: `sample_${i + 1}.txt` })
      });
    }
    await refreshDashboard();
  } catch (err) {
    console.error("Failed to load sample data", err);
  } finally {
    btn.disabled = false;
    btn.textContent = "📂 Load 6 Freelance Sample Invoices";
  }
}

async function runSimilaritySearch() {
  const query = document.getElementById("similarityInput").value.trim();
  if (!query) return;

  const resultsContainer = document.getElementById("similarityResults");
  resultsContainer.innerHTML = `<div class="text-amber-400 text-center py-2 animate-pulse">Querying pgvector embeddings...</div>`;

  try {
    const res = await fetch(`/api/receipts/similarity?query=${encodeURIComponent(query)}&limit=3`);
    const matches = await res.json();

    if (matches.length === 0) {
      resultsContainer.innerHTML = `<div class="text-slate-500 text-center py-2">No matching receipts found in vector index.</div>`;
      return;
    }

    resultsContainer.innerHTML = matches.map(m => `
      <div class="p-2.5 rounded-lg bg-slate-950 border border-amber-900/40 flex items-center justify-between">
        <div>
          <div class="font-semibold text-slate-200">${m.receipt.merchant}</div>
          <div class="text-[10px] text-slate-400">${m.receipt.category} • $${m.receipt.total_amount.toFixed(2)}</div>
        </div>
        <div class="text-right">
          <span class="text-[10px] font-mono font-bold text-amber-400 bg-amber-500/10 px-1.5 py-0.5 rounded border border-amber-500/20">
            ${(m.similarity_score * 100).toFixed(1)}% match
          </span>
        </div>
      </div>
    `).join("");
  } catch (err) {
    console.error("Similarity search failed", err);
    resultsContainer.innerHTML = `<div class="text-rose-400 text-center py-2">Vector search failed.</div>`;
  }
}
