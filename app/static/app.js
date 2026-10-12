// ReceiptDesk AI Frontend Logic

let categoryChart = null;

document.addEventListener("DOMContentLoaded", () => {
  initDropZone();
  initEventListeners();
  loadBackendStatus();
  refreshDashboard();
});

// Initialize Drag & Drop
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
    const statusText = document.getElementById("backendStatusText");
    if (data.tiger_data_connected) {
      statusText.textContent = "Tiger Data pgvector Connected";
    } else {
      statusText.textContent = `${data.privacy_mode} (SQLite)`;
    }
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

    const tipsList = document.getElementById("auditTipsList");
    tipsList.innerHTML = "";
    audit.audit_tips.forEach(tip => {
      const li = document.createElement("li");
      li.className = "flex items-start space-x-2";
      li.innerHTML = `<span class="text-emerald-400 font-bold">✓</span><span>${tip}</span>`;
      tipsList.appendChild(li);
    });
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
      tbody.innerHTML = `<tr><td colspan="7" class="py-8 text-center text-slate-500">No receipts filed yet. Upload a receipt or click "Load 6 Sample Receipts" above.</td></tr>`;
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
    "#10b981", "#06b6d4", "#6366f1", "#f59e0b", "#ec4899", "#8b5cf6", "#14b8a6", "#f97316"
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
          position: "right",
          labels: {
            color: "#94a3b8",
            boxWidth: 12,
            font: { size: 10 }
          }
        }
      },
      cutout: "65%"
    }
  });
}

async function uploadFile(file) {
  const formData = new FormData();
  formData.append("file", file);

  try {
    const res = await fetch("/api/receipts/upload", {
      method: "POST",
      body: formData
    });
    const data = await res.json();
    if (data.success && data.receipt) {
      showLatestResult(data.receipt);
      refreshDashboard();
    } else {
      alert("Error: " + (data.error || "Upload failed"));
    }
  } catch (err) {
    alert("Upload failed: " + err.message);
  }
}

async function parseRawText() {
  const rawText = document.getElementById("rawTextInput").value.trim();
  if (!rawText) {
    alert("Please enter or paste receipt text first.");
    return;
  }

  try {
    const res = await fetch("/api/receipts/parse-text", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ raw_text: rawText, filename: "pasted_receipt.txt" })
    });
    const data = await res.json();
    if (data.success && data.receipt) {
      showLatestResult(data.receipt);
      document.getElementById("rawTextInput").value = "";
      refreshDashboard();
    } else {
      alert("Extraction error: " + (data.error || "Failed"));
    }
  } catch (err) {
    alert("Extraction error: " + err.message);
  }
}

function showLatestResult(receipt) {
  const card = document.getElementById("latestResultCard");
  card.classList.remove("hidden");

  document.getElementById("resMerchant").textContent = receipt.merchant;
  document.getElementById("resDate").textContent = receipt.date;
  document.getElementById("resTotal").textContent = `$${receipt.total_amount.toFixed(2)}`;
  document.getElementById("resDeductible").textContent = `$${receipt.deductible_amount.toFixed(2)}`;
  document.getElementById("resCategory").textContent = receipt.category;
  document.getElementById("resTaxLine").textContent = receipt.schedule_c_line;

  const flagsContainer = document.getElementById("resFlagsContainer");
  const flagsList = document.getElementById("resFlagsList");
  if (receipt.audit_flags && receipt.audit_flags.length > 0) {
    flagsContainer.classList.remove("hidden");
    flagsList.innerHTML = receipt.audit_flags.map(f => `<li>${f}</li>`).join("");
  } else {
    flagsContainer.classList.add("hidden");
  }
}

async function loadSampleData() {
  const btn = document.getElementById("loadSampleBtn");
  btn.disabled = true;
  btn.classList.add("opacity-50");

  try {
    const res = await fetch("/api/sample-data/load", { method: "POST" });
    const data = await res.json();
    alert(`Successfully loaded and indexed ${data.count} sample freelance invoices!`);
    refreshDashboard();
  } catch (err) {
    alert("Failed to load sample data: " + err.message);
  } finally {
    btn.disabled = false;
    btn.classList.remove("opacity-50");
  }
}

async function runSimilaritySearch() {
  const query = document.getElementById("similarityInput").value.trim();
  if (!query) return;

  const container = document.getElementById("similarityResults");
  container.classList.remove("hidden");
  container.innerHTML = "<div class='text-slate-500'>Querying vector embeddings...</div>";

  try {
    const res = await fetch(`/api/receipts/similarity?query=${encodeURIComponent(query)}`);
    const results = await res.json();

    if (results.length === 0) {
      container.innerHTML = "<div class='text-slate-500'>No similar receipts found.</div>";
      return;
    }

    container.innerHTML = results.map(r => `
      <div class="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800 flex items-center justify-between">
        <div>
          <span class="font-semibold text-white block">${r.merchant}</span>
          <span class="text-[11px] text-slate-400">${r.category} &bull; ${r.date}</span>
        </div>
        <div class="text-right">
          <span class="font-medium text-slate-200 block">$${r.total_amount.toFixed(2)}</span>
          <span class="text-[10px] text-emerald-400 font-mono">${Math.round(r.similarity * 100)}% match</span>
        </div>
      </div>
    `).join("");
  } catch (err) {
    container.innerHTML = `<div class='text-rose-400'>Search error: ${err.message}</div>`;
  }
}
