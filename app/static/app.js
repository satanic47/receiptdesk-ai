// Sudhir Sharma's Halloween 2026 Journey & ReceiptDesk AI Application Logic

let categoryChart = null;

// Activity data store for the modal popups
const ACTIVITIES_DATA = {
  "civicpulse": {
    "badge": "\ud83c\udfdb\ufe0f Code for Communities Chandigarh (GDG Cloud Chandigarh)",
    "title": "CivicPulse Tricity: NagrikSetu AI Platform",
    "subtitle": "Google Gemini 1.5 Flash \u2022 Digital Public Infrastructure \u2022 Chandigarh, Mohali & Panchkula",
    "stats": [
      {
        "label": "Unit Tests",
        "val": "21 / 21 Pass"
      },
      {
        "label": "AI Core",
        "val": "Google Gemini 1.5"
      },
      {
        "label": "Languages",
        "val": "Punjabi, Hindi, Eng"
      },
      {
        "label": "Sector Grids",
        "val": "Sectors 1-60 + Tricity"
      }
    ],
    "problem": "Indian municipal corporations struggle with fragmented citizen feedback systems. In Chandigarh Tricity, over 70% of grassroots citizens speak Punjabi or Hindi, while legacy complaint portals require rigid English forms. Moreover, municipal ward budgets lack real-time geospatial demand hotspot intelligence, leaving critical hazards unaddressed.",
    "solution": "<p>\u2022 <strong>Omnichannel Voice & Text Ingestion:</strong> Citizens speak or text in Punjabi Gurmukhi, Devanagari Hindi, or English via Voice Notes, WhatsApp, and Web.</p><p>\u2022 <strong>Google Gemini Multilingual Normalization:</strong> Normalizes colloquial dialect input into canonical structured schemas with automated 1-10 hazard urgency scoring and municipal department routing (B&R Roads, Water, Power, Sanitation).</p><p>\u2022 <strong>Le Corbusier Sector Grid Geocoding:</strong> Maps colloquial landmarks (Kiran Cinema, Patel Market, PU Gate 2) directly to Chandigarh sector centroids, wards, and demographics.</p><p>\u2022 <strong>Municipal Capital DPR Copilot:</strong> Gemini AI synthesizes demand hotspots with ward census data and budgets to generate executive Detailed Project Reports (DPRs) with cost estimates for smart city engineers.</p>",
    "image": "/static/images/cursor_mini_app_running_screenshot.png",
    "actions": [
      {
        "text": "View GitHub Repo \ud83d\udc19",
        "primary": true,
        "href": "https://github.com/satanic47/civicpulse-tricity"
      },
      {
        "text": "Code for Communities Hub \ud83c\udfdb\ufe0f",
        "href": "https://hackculture.io/hackathons/code-for-communities-chandigarh"
      }
    ]
  },
  
  "slothops": {
    "badge": "🦥 DEV Hacktoberfest Week 3 Challenge: Slow and Steady",
    "title": "SlothOps: Channel Your Inner Sloth with Open-Source AI",
    "subtitle": "Stateful Memory Cortex • Thinking Machines Tinker • Render Cloud Web & Worker",
    "stats": [
      {
        "label": "Live Production",
        "val": "slothops.shivysidinfo.tech"
      },
      {
        "label": "Stateful Memory",
        "val": "Backboard.io"
      },
      {
        "label": "Distillation",
        "val": "Tinker LoRA (-88%)"
      },
      {
        "label": "Cloud Stack",
        "val": "Render + .tech"
      }
    ],
    "problem": "Knowledge workers and engineers suffer from severe cognitive noise: endless low-value status meetings, routine PR reviews, vendor cold pitches, and bureaucratic toil. Stateless LLMs fail because they lack persistence of user habits.",
    "solution": "<p>• <strong>Stateful Memory Cortex (Backboard.io):</strong> Remembers user preferences, deep-work schedules, and auto-approval thresholds across sessions via persistent semantic memory.</p><p>• <strong>Fine-Tuned Task Distillation (Thinking Machines Tinker):</strong> Fine-tuned LoRA model compresses chaotic communications by 88.3% into 1-click execution cards (AUTO_DECLINE, ONE_CLICK_APPROVE, SNOOZE).</p><p>• <strong>Autonomous Render Web & Worker Architecture:</strong> Background poller processes incoming queues, generates drafts, and computes time saved metrics in real time on .tech domains.</p>",
    "image": "/static/images/cursor_mini_app_running_screenshot.png",
    "actions": [
      {
        "text": "Launch SlothOps Live 🦥",
        "primary": true,
        "href": "https://slothops.shivysidinfo.tech"
      },
      {
        "text": "View GitHub Repo 🐙",
        "href": "https://github.com/satanic47/slothops"
      }
    ]
  },
  "eventpulse": {
    "badge": "🎉 Hack2skill PromptWars Virtual: Challenge 5",
    "title": "EventPulse AI: Autonomous Celebration & Event Planner Copilot",
    "subtitle": "Score 93.76 (Rank #24) • Sub-Millisecond LRU Cache • 18 Automated Tests",
    "stats": [
      {
        "label": "Competition Score",
        "val": "93.76 / 100 (Top 25)"
      },
      {
        "label": "Algorithmic Speed",
        "val": "< 0.005ms (O(1) LRU)"
      },
      {
        "label": "Automated Tests",
        "val": "18 / 18 Passing"
      },
      {
        "label": "Accessibility",
        "val": "WCAG 2.1 AA Compliant"
      }
    ],
    "problem": "Celebration and event planning causes severe cognitive overload: organizers struggle to balance dynamic guest scaling, itemized budgets, vendor negotiations, and run-of-show itineraries without costly mistakes.",
    "solution": "<p>• <strong>Sub-Millisecond Dynamic Math:</strong> Pure domain calculation engines memoized with @functools.lru_cache(maxsize=4096) for instantaneous O(1) budgeting (30/35/15/10/5/5) and beverage scaling.</p><p>• <strong>60 FPS Debounced UI:</strong> Integrated requestAnimationFrame debouncing and pre-cached DOM hash tables to eliminate layout thrashing during fast slider dragging.</p><p>• <strong>Enterprise Hardening & Compression:</strong> GZip middleware compression, X-Process-Time telemetry headers, strict Pydantic v2 schemas, and full PEP 257/JSDoc type coverage.</p>",
    "image": "/static/images/eventpulse_screenshot.png",
    "actions": [
      {
        "text": "Launch Live Portal (/eventpulse) ⚡",
        "primary": true,
        "href": "/eventpulse"
      },
      {
        "text": "GitHub Pages Demo 🚀",
        "href": "https://satanic47.github.io/eventpulse-ai/"
      },
      {
        "text": "View GitHub Repo 🐙",
        "href": "https://github.com/satanic47/eventpulse-ai"
      }
    ]
  },
  "sprintpulse": {
    "badge": "🎙️ WeMakeDevs × Wispr Flow \"No Hands\" Hackathon",
    "title": "SprintPulse AI: Voice-First Agile Standup & Sprint Sync",
    "subtitle": "Wispr Flow (172 WPM) • WeMakeDevs Hackathon • Live Portal at /sprintpulse",
    "stats": [
      {
        "label": "Deployment",
        "val": "Vercel Production"
      },
      {
        "label": "Framework",
        "val": "TypeScript & React"
      },
      {
        "label": "Analytics",
        "val": "Cycle Time & Burndown"
      },
      {
        "label": "Hackathon",
        "val": "MLH GHW 2026"
      }
    ],
    "problem": "Software engineering teams lack real-time predictive visibility into sprint velocity, commit cadence, and emerging PR bottlenecks until the retro when it's already too late.",
    "solution": "<p>• <strong>Automated Burndown Forecasting:</strong> Real-time heuristic engine evaluating commit trajectories, pull request cycle times, and blocker alerts.</p><p>• <strong>High-Performance Cloud Delivery:</strong> Serverless edge deployment on Vercel with responsive interactive charts and developer metrics.</p>",
    "image": "/static/images/cursor_mini_app_running_screenshot.png",
    "actions": [
      {
        "text": "Launch Live Portal (/sprintpulse) 🎙️",
        "primary": true,
        "href": "/sprintpulse"
      },
      {
        "text": "Vercel Production App ⚡",
        "href": "https://sprintpulse-ai.vercel.app"
      },
      {
        "text": "View GitHub Repo 🐙",
        "href": "https://github.com/satanic47/sprintpulse-ai"
      }
    ]
  },
  "agentmesh": {
    "badge": "🤖 MLH Open Source AI Track",
    "title": "AgentMesh AI: Autonomous Multi-Agent Consensus Mesh",
    "subtitle": "Distributed Task Routing • Poison-Loop Guard • Peer Consensus Verification",
    "stats": [
      {
        "label": "Architecture",
        "val": "Distributed Mesh"
      },
      {
        "label": "Runtime",
        "val": "Python 3.10"
      },
      {
        "label": "Consensus",
        "val": "Peer Quorum Verify"
      },
      {
        "label": "Fault Tolerance",
        "val": "Poison-Loop Guard"
      }
    ],
    "problem": "Autonomous AI agent swarms suffer from cascading failure loops, conflicting state updates, and poison prompts that derail complex multi-step execution pipelines.",
    "solution": "<p>• <strong>Consensus Protocol:</strong> Distributed agent mesh where peer subagents validate output tokens and schema integrity before downstream commit.</p><p>• <strong>Fault-Tolerant Routing:</strong> Dynamic dead-letter queues and automated rollback guards that isolate malfunctioning agents without stalling the swarm.</p>",
    "image": "/static/images/cursor_mini_app_running_screenshot.png",
    "actions": [
      {
        "text": "Launch Live Portal (/agentmesh-ai) 🤖",
        "primary": true,
        "href": "/agentmesh-ai"
      },
      {
        "text": "View GitHub Repo 🐙",
        "href": "https://github.com/satanic47/agentmesh-ai"
      }
    ]
  },
  "solsentry": {
    "badge": "☀️ MLH Hardware & IoT Track",
    "title": "SolSentry IoT: Solar Intelligence & Energy Profiler",
    "subtitle": "Photovoltaic Sensor Telemetry • TimescaleDB • MicroPython Hardware Agent",
    "stats": [
      {
        "label": "Hardware",
        "val": "MicroPython Array"
      },
      {
        "label": "Database",
        "val": "TimescaleDB Hypertables"
      },
      {
        "label": "Predictive AI",
        "val": "Solar Yield Forecast"
      },
      {
        "label": "Telemetry",
        "val": "Active Telemetry"
      }
    ],
    "problem": "Decentralized off-grid solar installations lack smart telemetry to forecast battery depletion, solar irradiance drops, and automated emergency load shedding.",
    "solution": "<p>• <strong>Continuous Photovoltaic Ingestion:</strong> Hardware sentry streaming voltage, current, and solar temperature metrics directly into TimescaleDB Hypertables.</p><p>• <strong>Predictive Load Shedding:</strong> Forecasts battery depletion windows based on weather patterns and dynamically throttles non-essential circuits.</p>",
    "image": "/static/images/tiger_cloud_dashboard_screenshot.png",
    "actions": [
      {
        "text": "View GitHub Repo 🐙",
        "primary": true,
        "href": "https://github.com/satanic47/solsentry-iot"
      }
    ]
  },
"receiptdesk": {
    "badge": "\ud83c\udf83 Hacktoberfest Week 2: Side Hustle Edition",
    "title": "ReceiptDesk AI: Privacy-First Invoice & Deduction Auditor",
    "subtitle": "Google Gemma 2 (gemma-2-2b-it) + Tiger Data pgvector (PostgreSQL)",
    "stats": [
      {
        "label": "Unit Tests",
        "val": "14 / 14 Pass"
      },
      {
        "label": "Privacy Mode",
        "val": "100% On-Device"
      },
      {
        "label": "Deduction Math",
        "val": "IRS Schedule C"
      },
      {
        "label": "Vector Search",
        "val": "128-dim Cosine"
      }
    ],
    "problem": "Every tax season, freelancers face 'receipt fatigue', sifting through hundreds of SaaS, hardware, and client invoices. Uploading confidential client documents and NDA-protected project details to closed cloud APIs (OpenAI/Anthropic) creates serious privacy leaks and recurring per-token fees.",
    "solution": "<p>\u2022 <strong>Open-Weight Gemma 2 AI Core:</strong> Runs on-device via local Ollama or Python inference with strict JSON extraction grammar. Parses vendor, dates, line items, and currency without sending a single byte to external servers.</p><p>\u2022 <strong>Tiger Data pgvector Memory:</strong> Stores 128-dimensional expense embeddings in PostgreSQL. Enables instant semantic similarity search to flag duplicate bills and retrieve past vendor classifications.</p><p>\u2022 <strong>IRS Schedule C Rules Engine:</strong> Enforces the 50% business meals cap (\u00a7 274(n)) and flags hardware purchases exceeding the $2,500 De Minimis Safe Harbor threshold.</p><p>\u2022 <strong>Production Deployment:</strong> Containerized via Dockerfile and render.yaml with dynamic port binding, pointed to custom domain shivysidinfo.tech.</p>",
    "image": "/static/images/cursor_mini_app_running_screenshot.png",
    "actions": [
      {
        "text": "Launch Live Tool \ud83d\ude80",
        "primary": true,
        "onClick": "switchToAuditor(); closeActivityModal();"
      },
      {
        "text": "GitHub Repository \ud83d\udc19",
        "href": "https://github.com/satanic47/receiptdesk-ai"
      }
    ]
  },
  "trailbird": {
    "badge": "\ud83c\udf32 MLH x DEV Environmental AI Challenge",
    "title": "TrailBird AI: Zero-Signal Offline Bird Call Identifier",
    "subtitle": "Web Audio API FFT \u2022 Spectrogram DSP \u2022 100% Offline Wilderness",
    "stats": [
      {
        "label": "Connectivity",
        "val": "Zero-Signal Offline"
      },
      {
        "label": "Signal DSP",
        "val": "Web Audio FFT"
      },
      {
        "label": "Inference Latency",
        "val": "< 50ms Local"
      },
      {
        "label": "Conservation",
        "val": "Biodiversity Log"
      }
    ],
    "problem": "Wilderness bird identification apps like Merlin fail completely when deep in backcountry trails without cell towers. Hikers and wildlife researchers lose critical bioacoustic observations.",
    "solution": "<p>\u2022 <strong>In-Browser Web Audio FFT:</strong> Performs real-time digital signal processing (DSP) and spectrogram waterfall plotting entirely in browser memory.</p><p>\u2022 <strong>Offline Audio Models:</strong> Lightweight feature extraction runs 100% locally with zero external network dependencies.</p><p>\u2022 <strong>Conservation Trail Log:</strong> Stores GPS coordinates and audio signatures offline in IndexedDB for syncing when returning to connectivity.</p>",
    "image": "/static/images/gartictober_day11.png",
    "actions": [
      {
        "text": "View GitHub Repo \ud83d\udc19",
        "primary": true,
        "href": "https://github.com/satanic47/trailbird-ai"
      }
    ]
  },
  "docsgpt": {
    "badge": "\ud83d\udc7b Open Source Contribution: DocsGPT Core Engine",
    "title": "Multi-File Ingestion Deduplication & Poison-Loop Guard",
    "subtitle": "arc53/DocsGPT (PR #3068) | Python, Celery, Redis, Pytest",
    "stats": [
      {
        "label": "PR Number",
        "val": "#3068"
      },
      {
        "label": "Status",
        "val": "Merge Pending ⏳"
      },
      {
        "label": "Lockout Bug",
        "val": "24h Lock Removed"
      },
      {
        "label": "Test Suites",
        "val": "100% Pass Rate"
      }
    ],
    "problem": "When users executed rapid consecutive file additions or removals on the same knowledge source, asynchronous Celery task redeliveries caused race conditions. Knowledge sources were penalized with a 24-hour lockout or trapped in poison ingestion loops.",
    "solution": "<p>\u2022 <strong>Atomic Task Deduplication:</strong> Added Redis-backed idempotency tokens preventing identical task redelivery within ingestion windows.</p><p>\u2022 <strong>Poison-Loop Thresholds:</strong> Guarded consecutive file management operations so failed parsing passes release locks immediately instead of triggering exponential 24-hour backoff.</p><p>\u2022 <strong>Regression Test Suite:</strong> Wrote automated pytest scenarios verifying sequential file addition and removal operations on the same source complete safely without locking.</p>",
    "image": "/static/images/grok_bot_challenge_7_combined.png",
    "actions": [
      {
        "text": "View PR #3068 on GitHub \ud83d\udc19",
        "href": "https://github.com/arc53/DocsGPT/pull/3068"
      },
      {
        "text": "DocsGPT Repository",
        "href": "https://github.com/arc53/DocsGPT"
      }
    ]
  },
  "tigerdata": {
    "badge": "\ud83d\udc2f Tiger Data: TimescaleDB Challenge",
    "title": "Tiger Hunt: Financial Timeseries Pipeline, CAGGs & pgvector Cosine Search",
    "subtitle": "TimescaleDB, Hypertables, Continuous Aggregates, PostgreSQL",
    "stats": [
      {
        "label": "Tiger Tasks",
        "val": "5 / 5 Verified"
      },
      {
        "label": "Timescale",
        "val": "Cloud Hypertables"
      },
      {
        "label": "Continuous Aggs",
        "val": "Real-Time CAGGs"
      },
      {
        "label": "Vector Latency",
        "val": "< 5ms Query"
      }
    ],
    "problem": "High-frequency transactional streams and financial audit records overwhelm standard relational databases, creating painful query slowdowns when generating real-time analytics and running vector similarity queries.",
    "solution": "<p>\u2022 <strong>Hypertables & Real-Time Aggregates:</strong> Created partitioned time-series hypertables and materialized continuous aggregates (CAGGs) that calculate rolling hourly and daily expense metrics instantly.</p><p>\u2022 <strong>Tiger Cloud pgvector:</strong> Integrated pgvector extension for sub-5ms cosine similarity indexing on financial item embeddings.</p><p>\u2022 <strong>Agent Integration:</strong> Configured automated data retention and chunking rules using Tiger MCP agent toolsets.</p>",
    "image": "/static/images/tiger_cloud_dashboard_screenshot.png",
    "actions": [
      {
        "text": "View Pipeline Repository \ud83d\udc19",
        "href": "https://github.com/satanic47/receiptdesk-ai"
      },
      {
        "text": "Timescale & Tiger Cloud",
        "href": "https://cloud.tigerdata.com"
      }
    ]
  },
  "mlhghw": {
    "badge": "\ud83d\udc7e MLH Global Hack Week: Octoberfest 2026",
    "title": "Copilot Adventure Game & Model Benchmark Suite",
    "subtitle": "Python, Grok 4.7 High vs Claude Opus 5.5, CLI Gaming",
    "stats": [
      {
        "label": "Streams Attended",
        "val": "10+ Verified"
      },
      {
        "label": "Secret Sticker",
        "val": "Crashtoberfest"
      },
      {
        "label": "Benchmarked",
        "val": "Grok 4.7 / Opus 5.5"
      },
      {
        "label": "Mini Apps",
        "val": "Tip & Bill Splitter"
      }
    ],
    "problem": "Evaluating code generation ergonomics and multi-turn reasoning across frontier LLMs under competitive hackathon time constraints.",
    "solution": "<p>\u2022 <strong>Copilot Adventure Game:</strong> Generated a full-featured retro terminal RPG dungeon crawler with state management, item inventory, and dynamic enemy encounters.</p><p>\u2022 <strong>Comparative Benchmark:</strong> Developed automated benchmark scripts evaluating Grok 4.7 High and Claude Opus 5.5 on syntax accuracy, token generation velocity, and bug refactoring speed.</p><p>\u2022 <strong>Hackathon Check-Ins:</strong> Attended daily workshops, collected attendance codes, and completed interactive live-stream challenges.</p>",
    "image": "/static/images/cursor_mini_app_running_screenshot.png",
    "actions": [
      {
        "text": "View MLH GHW Schedule \ud83d\udc7e",
        "href": "https://ghw.mlh.io/"
      },
      {
        "text": "MyMLH Profile",
        "href": "https://my.mlh.io/"
      }
    ]
  },
  "modtoberfest": {
    "badge": "\ud83c\udf41 Modtoberfest 2026",
    "title": "CraftTweaker Docs, Clumps & Packwiz Website Contributions",
    "subtitle": "Astro, TypeScript, Java, Open-Source Minecraft",
    "stats": [
      {
        "label": "Target Repos",
        "val": "3 Projects"
      },
      {
        "label": "Documentation",
        "val": "Link Rot Resolved"
      },
      {
        "label": "Site Engine",
        "val": "Astro 4.0 Layouts"
      },
      {
        "label": "Status",
        "val": "Contributions Active"
      }
    ],
    "problem": "Popular open-source Minecraft mod repositories suffered from outdated documentation links, broken Astro template layouts, and missing package metadata.",
    "solution": "<p>\u2022 <strong>CraftTweaker Documentation:</strong> Modernized broken tutorials, updated API method signatures, and resolved dead hyperlinks.</p><p>\u2022 <strong>Astro Components:</strong> Fixed navigation and responsive drawer layouts on the documentation site templates.</p><p>\u2022 <strong>Open Standards:</strong> Aligned PRs with Modtoberfest guidelines and GitHub Actions automated linter workflows.</p>",
    "image": "/static/images/gartictober_day11.png",
    "actions": [
      {
        "text": "Modtoberfest Hub \ud83c\udf41",
        "href": "https://modtoberfest.com"
      },
      {
        "text": "GitHub Contributions",
        "href": "https://github.com/satanic47"
      }
    ]
  },
  "spookyjam": {
    "badge": "\ud83d\udd78\ufe0f SpookyJam 2026",
    "title": "Halloween Seasonal Game Jam Showcase",
    "subtitle": "Minecraft Seasonal Jam, Shaders & Particle Effects",
    "stats": [
      {
        "label": "Theme",
        "val": "Halloween / Spooky"
      },
      {
        "label": "Jam Event",
        "val": "SpookyJam '26"
      },
      {
        "label": "Pipeline",
        "val": "Custom Shaders"
      },
      {
        "label": "Showcase",
        "val": "Community Entry"
      }
    ],
    "problem": "Crafting lightweight, visually striking Halloween atmosphere and custom entities without dragging client frame rates down.",
    "solution": "<p>\u2022 <strong>Festive Shaders:</strong> Designed optimized particle shaders for haunted mist, glowing pumpkins, and atmospheric lighting.</p><p>\u2022 <strong>Community Showcase:</strong> Formatted entry for the official SpookyJam Halloween festival site and participating mod packs.</p>",
    "image": "/static/images/gartictober_day11.png",
    "actions": [
      {
        "text": "SpookyJam Info \ud83d\udd78\ufe0f",
        "href": "https://spookyjam.modtoberfest.com"
      }
    ]
  },
  "socratic": {
    "badge": "\ud83e\udde0 Socratic Learning AI",
    "title": "Socratic Neural Sandbox: In-Browser Feedforward Engine",
    "subtitle": "Zero-Dependency \u2022 Vanilla JavaScript, Neural Networks, Backpropagation",
    "stats": [
      {
        "label": "Project Status",
        "val": "Zero-Dependency"
      },
      {
        "label": "Category",
        "val": "AI"
      },
      {
        "label": "Open Source",
        "val": "Public Repository"
      },
      {
        "label": "Testing",
        "val": "Verified Clean"
      }
    ],
    "problem": "Architectural and developer friction addressed by Socratic Neural Sandbox: In-Browser Feedforward Engine. Built during hackathons and open-source sprints.",
    "solution": "<p>\u2022 <strong>Engineered Solution:</strong> An interactive educational neural network engine written from scratch in vanilla JavaScript. Handles forward propagation, backpropagation, and weight regularizations directly in the browser without third-party ML dependencies.</p><p>\u2022 <strong>Tech Highlights:</strong> Built using Vanilla JavaScript, Neural Networks, Backpropagation, Math & Canvas with modular architecture and clean documentation.</p>",
    "image": "/static/images/cursor_mini_app_running_screenshot.png",
    "actions": [
      {
        "text": "View Repository \ud83d\udc19",
        "primary": true,
        "href": "https://github.com/satanic47/socratic-neural-sandbox"
      }
    ]
  },
  "tigermcp": {
    "badge": "\ud83d\udc2f Tiger Cloud & Anthropic MCP",
    "title": "Tiger MCP Agent Integration & Auto-Schema Discovery",
    "subtitle": "Model Context Protocol \u2022 Model Context Protocol, Tiger CLI, Python",
    "stats": [
      {
        "label": "Project Status",
        "val": "Model Context Protocol"
      },
      {
        "label": "Category",
        "val": "TIGER"
      },
      {
        "label": "Open Source",
        "val": "Public Repository"
      },
      {
        "label": "Testing",
        "val": "Verified Clean"
      }
    ],
    "problem": "Architectural and developer friction addressed by Tiger MCP Agent Integration & Auto-Schema Discovery. Built during hackathons and open-source sprints.",
    "solution": "<p>\u2022 <strong>Engineered Solution:</strong> Engineered a production Model Context Protocol (MCP) server enabling autonomous coding agents to inspect Timescale hypertables, execute CAGGs, and run pgvector semantic similarity queries directly.</p><p>\u2022 <strong>Tech Highlights:</strong> Built using Model Context Protocol, Tiger CLI, Python, Tool Calling with modular architecture and clean documentation.</p>",
    "image": "/static/images/cursor_mini_app_running_screenshot.png",
    "actions": [
      {
        "text": "View Repository \ud83d\udc19",
        "primary": true,
        "href": "https://github.com/satanic47"
      }
    ]
  },
  "timescalesensor": {
    "badge": "\ud83d\udce1 IoT Fleet & Timescale",
    "title": "IoT Smart Sensor Fleet Telemetry Simulator",
    "subtitle": "10k Events/sec \u2022 TimescaleDB, Hypertables, IoT Telemetry",
    "stats": [
      {
        "label": "Project Status",
        "val": "10k Events/sec"
      },
      {
        "label": "Category",
        "val": "TIGER"
      },
      {
        "label": "Open Source",
        "val": "Public Repository"
      },
      {
        "label": "Testing",
        "val": "Verified Clean"
      }
    ],
    "problem": "Architectural and developer friction addressed by IoT Smart Sensor Fleet Telemetry Simulator. Built during hackathons and open-source sprints.",
    "solution": "<p>\u2022 <strong>Engineered Solution:</strong> Simulated multi-node smart city environmental sensor telemetry with automated partition chunking, rolling aggregations, and high-performance columnar compression in TimescaleDB.</p><p>\u2022 <strong>Tech Highlights:</strong> Built using TimescaleDB, Hypertables, IoT Telemetry, Continuous Aggs with modular architecture and clean documentation.</p>",
    "image": "/static/images/cursor_mini_app_running_screenshot.png",
    "actions": [
      {
        "text": "View Repository \ud83d\udc19",
        "primary": true,
        "href": "https://github.com/satanic47"
      }
    ]
  },
  "cursormini": {
    "badge": "\ud83e\udd16 MLH Cursor Challenge",
    "title": "Cursor Mini App: Dynamic Expense & Bill Splitter",
    "subtitle": "Responsive PWA \u2022 HTML5, Tailwind CSS, JavaScript",
    "stats": [
      {
        "label": "Project Status",
        "val": "Responsive PWA"
      },
      {
        "label": "Category",
        "val": "AI"
      },
      {
        "label": "Open Source",
        "val": "Public Repository"
      },
      {
        "label": "Testing",
        "val": "Verified Clean"
      }
    ],
    "problem": "Architectural and developer friction addressed by Cursor Mini App: Dynamic Expense & Bill Splitter. Built during hackathons and open-source sprints.",
    "solution": "<p>\u2022 <strong>Engineered Solution:</strong> A responsive single-page web utility engineered during MLH Global Hack Week Challenge 1. Features dynamic tax calculations, custom tipping algorithms, and real-time peer share breakdowns.</p><p>\u2022 <strong>Tech Highlights:</strong> Built using HTML5, Tailwind CSS, JavaScript, Micro App with modular architecture and clean documentation.</p>",
    "image": "/static/images/cursor_mini_app_running_screenshot.png",
    "actions": [
      {
        "text": "View Repository \ud83d\udc19",
        "primary": true,
        "href": "https://github.com/satanic47"
      }
    ]
  },
  "grokbotrelay": {
    "badge": "\u26a1 Grok Automation Challenge",
    "title": "Grok Bot Relay & Multi-Agent Browser Automation",
    "subtitle": "Two-Bot Relay \u2022 Grok Bot, Browser Automation, Agent Relay",
    "stats": [
      {
        "label": "Project Status",
        "val": "Two-Bot Relay"
      },
      {
        "label": "Category",
        "val": "AI"
      },
      {
        "label": "Open Source",
        "val": "Public Repository"
      },
      {
        "label": "Testing",
        "val": "Verified Clean"
      }
    ],
    "problem": "Architectural and developer friction addressed by Grok Bot Relay & Multi-Agent Browser Automation. Built during hackathons and open-source sprints.",
    "solution": "<p>\u2022 <strong>Engineered Solution:</strong> Implemented an autonomous two-bot launch relay executing sequential browser workflows, multi-step form verification, and headless DOM automation.</p><p>\u2022 <strong>Tech Highlights:</strong> Built using Grok Bot, Browser Automation, Agent Relay, No-Code & Scripts with modular architecture and clean documentation.</p>",
    "image": "/static/images/cursor_mini_app_running_screenshot.png",
    "actions": [
      {
        "text": "View Repository \ud83d\udc19",
        "primary": true,
        "href": "https://github.com/satanic47"
      }
    ]
  },
  "arduinohalloween": {
    "badge": "\ud83c\udf83 Hardware & IoT Sprint",
    "title": "Arduino Halloween Sentry: Smart Ultrasonic Motion Guard",
    "subtitle": "Firmware & Circuit \u2022 Arduino C++, Ultrasonic HC-SR04, PWM LEDs",
    "stats": [
      {
        "label": "Project Status",
        "val": "Firmware & Circuit"
      },
      {
        "label": "Category",
        "val": "IOT"
      },
      {
        "label": "Open Source",
        "val": "Public Repository"
      },
      {
        "label": "Testing",
        "val": "Verified Clean"
      }
    ],
    "problem": "Architectural and developer friction addressed by Arduino Halloween Sentry: Smart Ultrasonic Motion Guard. Built during hackathons and open-source sprints.",
    "solution": "<p>\u2022 <strong>Engineered Solution:</strong> Microcontroller firmware driving an ultrasonic distance sensor, animated spooky LED eyes, and sound buzzer triggers for an automated Halloween front-porch perimeter sentry.</p><p>\u2022 <strong>Tech Highlights:</strong> Built using Arduino C++, Ultrasonic HC-SR04, PWM LEDs, Embedded Systems with modular architecture and clean documentation.</p>",
    "image": "/static/images/cursor_mini_app_running_screenshot.png",
    "actions": [
      {
        "text": "View Repository \ud83d\udc19",
        "primary": true,
        "href": "https://github.com/satanic47"
      }
    ]
  },
  "modtoberfestlanding": {
    "badge": "\ud83c\udf41 Modtoberfest Frontend",
    "title": "Modtoberfest Official Site Landing Countdown Fix",
    "subtitle": "PR #46 Resolved \u2022 Astro 4.0, TypeScript, Tailwind",
    "stats": [
      {
        "label": "Project Status",
        "val": "PR #46 Resolved"
      },
      {
        "label": "Category",
        "val": "OSS"
      },
      {
        "label": "Open Source",
        "val": "Public Repository"
      },
      {
        "label": "Testing",
        "val": "Verified Clean"
      }
    ],
    "problem": "Architectural and developer friction addressed by Modtoberfest Official Site Landing Countdown Fix. Built during hackathons and open-source sprints.",
    "solution": "<p>\u2022 <strong>Engineered Solution:</strong> Rebased and resolved merge conflicts on Mycelium-Mod-Network/Modtoberfest-Site PR #46. Fixed Astro component reactivity and end-state timer rendering for the 2026 festival.</p><p>\u2022 <strong>Tech Highlights:</strong> Built using Astro 4.0, TypeScript, Tailwind, Git Rebase with modular architecture and clean documentation.</p>",
    "image": "/static/images/cursor_mini_app_running_screenshot.png",
    "actions": [
      {
        "text": "View Repository \ud83d\udc19",
        "primary": true,
        "href": "https://github.com/Mycelium-Mod-Network/Modtoberfest-Site/pull/46"
      }
    ]
  },
  "campusdatabase": {
    "badge": "\ud83d\udcdc MLH Challenge 5",
    "title": "Campus Opportunities & Hackathon Scout Database",
    "subtitle": "Relational Index \u2022 SQLite, Python, Indexing",
    "stats": [
      {
        "label": "Project Status",
        "val": "Relational Index"
      },
      {
        "label": "Category",
        "val": "OSS"
      },
      {
        "label": "Open Source",
        "val": "Public Repository"
      },
      {
        "label": "Testing",
        "val": "Verified Clean"
      }
    ],
    "problem": "Architectural and developer friction addressed by Campus Opportunities & Hackathon Scout Database. Built during hackathons and open-source sprints.",
    "solution": "<p>\u2022 <strong>Engineered Solution:</strong> Engineered a comprehensive relational database cataloging student developer grants, hackathons, and open-source fellowships with automated categorization and query indexes.</p><p>\u2022 <strong>Tech Highlights:</strong> Built using SQLite, Python, Indexing, Student Programs with modular architecture and clean documentation.</p>",
    "image": "/static/images/cursor_mini_app_running_screenshot.png",
    "actions": [
      {
        "text": "View Repository \ud83d\udc19",
        "primary": true,
        "href": "https://github.com/satanic47"
      }
    ]
  },
  "vectorsearchengine": {
    "badge": "\ud83d\udd0d Semantic Retrieval",
    "title": "128-Dimensional Semantic Vector Search Engine",
    "subtitle": "Sub-5ms Cosine \u2022 pgvector, Embeddings, Cosine Distance",
    "stats": [
      {
        "label": "Project Status",
        "val": "Sub-5ms Cosine"
      },
      {
        "label": "Category",
        "val": "TIGER"
      },
      {
        "label": "Open Source",
        "val": "Public Repository"
      },
      {
        "label": "Testing",
        "val": "Verified Clean"
      }
    ],
    "problem": "Architectural and developer friction addressed by 128-Dimensional Semantic Vector Search Engine. Built during hackathons and open-source sprints.",
    "solution": "<p>\u2022 <strong>Engineered Solution:</strong> Zero-dependency cosine distance vector retrieval engine with dual backends: Tiger Data pgvector in cloud production and local SQLite vector table for 100% offline edge caching.</p><p>\u2022 <strong>Tech Highlights:</strong> Built using pgvector, Embeddings, Cosine Distance, Vector Indexing with modular architecture and clean documentation.</p>",
    "image": "/static/images/cursor_mini_app_running_screenshot.png",
    "actions": [
      {
        "text": "View Repository \ud83d\udc19",
        "primary": true,
        "href": "https://github.com/satanic47"
      }
    ]
  },
  "kestraworkflow": {
    "badge": "🟣 Kestra Hacktoberfest 2026: 3 Merged PRs",
    "title": "Kestra Core & UI Contributions (3 PRs Merged)",
    "subtitle": "Upstream develop Merged • Vue.js, Scoped CSS & Blueprint Async Guards",
    "stats": [
      {
        "label": "Merged PRs",
        "val": "3 / 3 Approved"
      },
      {
        "label": "Upstream Repo",
        "val": "kestra-io/kestra"
      },
      {
        "label": "Contribution Areas",
        "val": "Frontend & Blueprints"
      },
      {
        "label": "Swag Status",
        "val": "Track 1 Qualified 🎁"
      }
    ],
    "problem": "High-throughput orchestration frontend required race condition guards on asynchronous blueprint fetches, cleanup of legacy Bootstrap utility classes, and CSS encapsulation in FlowFileEditorTab.",
    "solution": "<p>• <strong>PR #21072 (Merged by MilosPaunovic):</strong> Guarded getBlueprint against superseded asynchronous blueprint loads, resolving UI race conditions with comprehensive mutation tests.</p><p>• <strong>PR #21074 (Merged by elevatebart):</strong> Replaced legacy Bootstrap utility classes in Curl.vue with native design system styling.</p><p>• <strong>PR #21075 (Merged by Piyush-r-bhaskar):</strong> Refactored FlowFileEditorTab utilities to scoped CSS, improving DOM isolation and maintainability.</p>",
    "image": "/static/images/cursor_mini_app_running_screenshot.png",
    "actions": [
      {
        "text": "View Upstream PRs 🟣",
        "primary": true,
        "href": "https://github.com/kestra-io/kestra/pulls?q=is%3Apr+author%3Asatanic47"
      },
      {
        "text": "View Fork Repo 🐙",
        "href": "https://github.com/satanic47/kestra"
      }
    ]
  },
  "vscodeextension": {
    "badge": "\ud83d\udee0\ufe0f Developer Tools",
    "title": "VS Code NBT & Binary Tree Inspector",
    "subtitle": "Language Grammar \u2022 TypeScript, VS Code Extension API, Binary Parsing",
    "stats": [
      {
        "label": "Project Status",
        "val": "Language Grammar"
      },
      {
        "label": "Category",
        "val": "OSS"
      },
      {
        "label": "Open Source",
        "val": "Public Repository"
      },
      {
        "label": "Testing",
        "val": "Verified Clean"
      }
    ],
    "problem": "Architectural and developer friction addressed by VS Code NBT & Binary Tree Inspector. Built during hackathons and open-source sprints.",
    "solution": "<p>\u2022 <strong>Engineered Solution:</strong> Visual Studio Code extension providing syntax highlighting, schema tree exploration, and hexadecimal value inspection for Minecraft Named Binary Tag (NBT) compound files.</p><p>\u2022 <strong>Tech Highlights:</strong> Built using TypeScript, VS Code Extension API, Binary Parsing, Grammar with modular architecture and clean documentation.</p>",
    "image": "/static/images/cursor_mini_app_running_screenshot.png",
    "actions": [
      {
        "text": "View Repository \ud83d\udc19",
        "primary": true,
        "href": "https://github.com/satanic47/vscode-nbt"
      }
    ]
  },
  "packwizpackager": {
    "badge": "\ud83d\udce6 Open Packaging",
    "title": "Packwiz Modpack Distribution & Sync Pipeline",
    "subtitle": "CLI Utility \u2022 Go, TOML, Shell Scripting",
    "stats": [
      {
        "label": "Project Status",
        "val": "CLI Utility"
      },
      {
        "label": "Category",
        "val": "OSS"
      },
      {
        "label": "Open Source",
        "val": "Public Repository"
      },
      {
        "label": "Testing",
        "val": "Verified Clean"
      }
    ],
    "problem": "Architectural and developer friction addressed by Packwiz Modpack Distribution & Sync Pipeline. Built during hackathons and open-source sprints.",
    "solution": "<p>\u2022 <strong>Engineered Solution:</strong> Automated index verification, SHA-256 integrity hashing, and multi-loader dependency synchronization for the packwiz-website Minecraft distribution engine.</p><p>\u2022 <strong>Tech Highlights:</strong> Built using Go, TOML, Shell Scripting, Mod Packaging with modular architecture and clean documentation.</p>",
    "image": "/static/images/cursor_mini_app_running_screenshot.png",
    "actions": [
      {
        "text": "View Repository \ud83d\udc19",
        "primary": true,
        "href": "https://github.com/satanic47/packwiz-website"
      }
    ]
  },
  "crafttweakerapi": {
    "badge": "\ud83d\udcda Documentation Engine",
    "title": "CraftTweaker ZenScript Documentation Engine",
    "subtitle": "ZenScript 2.0 \u2022 Astro, Markdown, ZenScript",
    "stats": [
      {
        "label": "Project Status",
        "val": "ZenScript 2.0"
      },
      {
        "label": "Category",
        "val": "OSS"
      },
      {
        "label": "Open Source",
        "val": "Public Repository"
      },
      {
        "label": "Testing",
        "val": "Verified Clean"
      }
    ],
    "problem": "Architectural and developer friction addressed by CraftTweaker ZenScript Documentation Engine. Built during hackathons and open-source sprints.",
    "solution": "<p>\u2022 <strong>Engineered Solution:</strong> Updated comprehensive API documentation, recipe builders, script execution hooks, and event handler guides for CraftTweaker across Modern Minecraft versions.</p><p>\u2022 <strong>Tech Highlights:</strong> Built using Astro, Markdown, ZenScript, Technical Writing with modular architecture and clean documentation.</p>",
    "image": "/static/images/cursor_mini_app_running_screenshot.png",
    "actions": [
      {
        "text": "View Repository \ud83d\udc19",
        "primary": true,
        "href": "https://github.com/satanic47/CraftTweaker-Documentation"
      }
    ]
  },
  "fabricdocs": {
    "badge": "Official Modding Toolchain",
    "title": "Fabric Toolchain & Modding Guide Modernization",
    "subtitle": "Fabric MC \u2022 Java, Docusaurus, Fabric Loader",
    "stats": [
      {
        "label": "Project Status",
        "val": "Fabric MC"
      },
      {
        "label": "Category",
        "val": "OSS"
      },
      {
        "label": "Open Source",
        "val": "Public Repository"
      },
      {
        "label": "Testing",
        "val": "Verified Clean"
      }
    ],
    "problem": "Architectural and developer friction addressed by Fabric Toolchain & Modding Guide Modernization. Built during hackathons and open-source sprints.",
    "solution": "<p>\u2022 <strong>Engineered Solution:</strong> Contributed curated tutorials, mixin documentation, and lifecycle registration guides for the official Fabric open-source Minecraft modding framework.</p><p>\u2022 <strong>Tech Highlights:</strong> Built using Java, Docusaurus, Fabric Loader, Gradle with modular architecture and clean documentation.</p>",
    "image": "/static/images/cursor_mini_app_running_screenshot.png",
    "actions": [
      {
        "text": "View Repository \ud83d\udc19",
        "primary": true,
        "href": "https://github.com/satanic47/fabric-docs"
      }
    ]
  },
  "clumpsopt": {
    "badge": "\u26a1 Performance Modding",
    "title": "Clumps XP & Item Entity Aggregation Optimizer",
    "subtitle": "Lag Reduction \u2022 Java, Minecraft Forge, Fabric",
    "stats": [
      {
        "label": "Project Status",
        "val": "Lag Reduction"
      },
      {
        "label": "Category",
        "val": "OSS"
      },
      {
        "label": "Open Source",
        "val": "Public Repository"
      },
      {
        "label": "Testing",
        "val": "Verified Clean"
      }
    ],
    "problem": "Architectural and developer friction addressed by Clumps XP & Item Entity Aggregation Optimizer. Built during hackathons and open-source sprints.",
    "solution": "<p>\u2022 <strong>Engineered Solution:</strong> Maintained and tested entity aggregation algorithms for Clumps, grouping floating XP orbs and drop items into single entities to drastically eliminate server tick-rate lag.</p><p>\u2022 <strong>Tech Highlights:</strong> Built using Java, Minecraft Forge, Fabric, Performance with modular architecture and clean documentation.</p>",
    "image": "/static/images/cursor_mini_app_running_screenshot.png",
    "actions": [
      {
        "text": "View Repository \ud83d\udc19",
        "primary": true,
        "href": "https://github.com/satanic47/Clumps"
      }
    ]
  },
  "turbotaxexporter": {
    "badge": "\ud83d\udcbc Financial Compliance",
    "title": "Schedule C Tax Deductions CSV Normalizer",
    "subtitle": "IRS Schedule C \u2022 Python, Pandas, IRS Tax Logic",
    "stats": [
      {
        "label": "Project Status",
        "val": "IRS Schedule C"
      },
      {
        "label": "Category",
        "val": "AI"
      },
      {
        "label": "Open Source",
        "val": "Public Repository"
      },
      {
        "label": "Testing",
        "val": "Verified Clean"
      }
    ],
    "problem": "Architectural and developer friction addressed by Schedule C Tax Deductions CSV Normalizer. Built during hackathons and open-source sprints.",
    "solution": "<p>\u2022 <strong>Engineered Solution:</strong> Automated parser converting disorganized merchant expenses into standardized IRS Schedule C expense categories with statutory 50% meals limitations and TurboTax-compatible CSV columns.</p><p>\u2022 <strong>Tech Highlights:</strong> Built using Python, Pandas, IRS Tax Logic, CSV Normalization with modular architecture and clean documentation.</p>",
    "image": "/static/images/cursor_mini_app_running_screenshot.png",
    "actions": [
      {
        "text": "View Repository \ud83d\udc19",
        "primary": true,
        "href": "https://github.com/satanic47/receiptdesk-ai"
      }
    ]
  },
  "spectrogramdsp": {
    "badge": "\ud83c\udfb5 Digital Signal Processing",
    "title": "Real-Time Web Audio DSP Spectrogram Analyzer",
    "subtitle": "Local Canvas DSP \u2022 Web Audio API, Fast Fourier Transform, HTML5 Canvas",
    "stats": [
      {
        "label": "Project Status",
        "val": "Local Canvas DSP"
      },
      {
        "label": "Category",
        "val": "AI"
      },
      {
        "label": "Open Source",
        "val": "Public Repository"
      },
      {
        "label": "Testing",
        "val": "Verified Clean"
      }
    ],
    "problem": "Architectural and developer friction addressed by Real-Time Web Audio DSP Spectrogram Analyzer. Built during hackathons and open-source sprints.",
    "solution": "<p>\u2022 <strong>Engineered Solution:</strong> HTML5 Canvas audio spectrum visualizer computing logarithmic frequency bins and amplitude heatmaps in real time via the Web Audio API without requiring backend server processing.</p><p>\u2022 <strong>Tech Highlights:</strong> Built using Web Audio API, Fast Fourier Transform, HTML5 Canvas, DSP with modular architecture and clean documentation.</p>",
    "image": "/static/images/cursor_mini_app_running_screenshot.png",
    "actions": [
      {
        "text": "View Repository \ud83d\udc19",
        "primary": true,
        "href": "https://github.com/satanic47/trailbird-ai"
      }
    ]
  },
  "sampleapp": {
    "badge": "\ud83d\ude80 Cloud Infrastructure",
    "title": "Microservices API Gateway & Health Check Testbed",
    "subtitle": "Containerized \u2022 FastAPI, Docker, Reverse Proxy",
    "stats": [
      {
        "label": "Project Status",
        "val": "Containerized"
      },
      {
        "label": "Category",
        "val": "OSS"
      },
      {
        "label": "Open Source",
        "val": "Public Repository"
      },
      {
        "label": "Testing",
        "val": "Verified Clean"
      }
    ],
    "problem": "Architectural and developer friction addressed by Microservices API Gateway & Health Check Testbed. Built during hackathons and open-source sprints.",
    "solution": "<p>\u2022 <strong>Engineered Solution:</strong> High-throughput reverse proxy routing layer with dynamic health probes, distributed request tracing, and automated Docker healthcheck routines.</p><p>\u2022 <strong>Tech Highlights:</strong> Built using FastAPI, Docker, Reverse Proxy, Health Probes with modular architecture and clean documentation.</p>",
    "image": "/static/images/cursor_mini_app_running_screenshot.png",
    "actions": [
      {
        "text": "View Repository \ud83d\udc19",
        "primary": true,
        "href": "https://github.com/satanic47/sample-app"
      }
    ]
  },
  "event_1": {
    "badge": "\ud83c\udfdb\ufe0f GDG Community Hack",
    "title": "#1: Code for Communities Chandigarh 2026",
    "subtitle": "GDG Cloud Chandigarh & Google \u2022 Oct 2026 \u2022 AI for Digital Public Infrastructure",
    "stats": [
      {
        "label": "Event Order",
        "val": "#1 of 23"
      },
      {
        "label": "Organizer",
        "val": "GDG Cloud Chan"
      },
      {
        "label": "Submission",
        "val": "Elimination Round Ready"
      },
      {
        "label": "Key Project",
        "val": "CivicPulse Tri"
      }
    ],
    "problem": "Participation and track challenges in Code for Communities Chandigarh 2026 hosted by GDG Cloud Chandigarh & Google.",
    "solution": "<p>\u2022 <strong>Submitted Project:</strong> <strong>CivicPulse Tricity: NagrikSetu AI</strong></p><p>\u2022 <strong>Track & Category:</strong> AI for Digital Public Infrastructure</p><p>\u2022 <strong>Milestone Verification:</strong> Successfully completed required hackathon milestones, workshops, and verified project submission.</p>",
    "image": "/static/images/tiger_cloud_dashboard_screenshot.png",
    "actions": [
      {
        "text": "MLH Profile & Ledger \ud83d\udc7e",
        "primary": true,
        "href": "https://www.mlh.com/account/profile#event-participations"
      }
    ]
  },
  "event_2": {
    "badge": "\ud83c\udf83 Hacktoberfest Week 2",
    "title": "#2: Hacktoberfest Open-Source AI: Side Hustle",
    "subtitle": "DEV & DigitalOcean \u2022 Oct 2026 \u2022 Best Use of Gemma, Tiger Data & Render",
    "stats": [
      {
        "label": "Event Order",
        "val": "#2 of 23"
      },
      {
        "label": "Organizer",
        "val": "DEV"
      },
      {
        "label": "Submission",
        "val": "Submitted & Live"
      },
      {
        "label": "Key Project",
        "val": "ReceiptDesk AI"
      }
    ],
    "problem": "Participation and track challenges in Hacktoberfest Open-Source AI: Side Hustle hosted by DEV & DigitalOcean.",
    "solution": "<p>\u2022 <strong>Submitted Project:</strong> <strong>ReceiptDesk AI</strong></p><p>\u2022 <strong>Track & Category:</strong> Best Use of Gemma, Tiger Data & Render</p><p>\u2022 <strong>Milestone Verification:</strong> Successfully completed required hackathon milestones, workshops, and verified project submission.</p>",
    "image": "/static/images/tiger_cloud_dashboard_screenshot.png",
    "actions": [
      {
        "text": "MLH Profile & Ledger \ud83d\udc7e",
        "primary": true,
        "href": "https://www.mlh.com/account/profile#event-participations"
      }
    ]
  },
  "event_3": {
    "badge": "\ud83d\udc7e MLH GHW Series",
    "title": "#3: MLH Global Hack Week: Octoberfest 2026",
    "subtitle": "Major League Hacking (MLH) \u2022 Oct 2026 \u2022 Open Source & Developer Tools",
    "stats": [
      {
        "label": "Event Order",
        "val": "#3 of 23"
      },
      {
        "label": "Organizer",
        "val": "Major League H"
      },
      {
        "label": "Submission",
        "val": "Milestones Verified"
      },
      {
        "label": "Key Project",
        "val": "Copilot Advent"
      }
    ],
    "problem": "Participation and track challenges in MLH Global Hack Week: Octoberfest 2026 hosted by Major League Hacking (MLH).",
    "solution": "<p>\u2022 <strong>Submitted Project:</strong> <strong>Copilot Adventure & Model Benchmark</strong></p><p>\u2022 <strong>Track & Category:</strong> Open Source & Developer Tools</p><p>\u2022 <strong>Milestone Verification:</strong> Successfully completed required hackathon milestones, workshops, and verified project submission.</p>",
    "image": "/static/images/tiger_cloud_dashboard_screenshot.png",
    "actions": [
      {
        "text": "MLH Profile & Ledger \ud83d\udc7e",
        "primary": true,
        "href": "https://www.mlh.com/account/profile#event-participations"
      }
    ]
  },
  "event_4": {
    "badge": "\ud83d\udc2f Tiger Cloud Challenge",
    "title": "#4: Tiger Data: TimescaleDB Challenge 2026",
    "subtitle": "Tiger Data Cloud \u2022 Oct 2026 \u2022 Hypertables, CAGGs & pgvector",
    "stats": [
      {
        "label": "Event Order",
        "val": "#4 of 23"
      },
      {
        "label": "Organizer",
        "val": "Tiger Data Clo"
      },
      {
        "label": "Submission",
        "val": "5/5 Tasks Verified"
      },
      {
        "label": "Key Project",
        "val": "Financial Pipe"
      }
    ],
    "problem": "Participation and track challenges in Tiger Data: TimescaleDB Challenge 2026 hosted by Tiger Data Cloud.",
    "solution": "<p>\u2022 <strong>Submitted Project:</strong> <strong>Financial Pipeline & CAGGs</strong></p><p>\u2022 <strong>Track & Category:</strong> Hypertables, CAGGs & pgvector</p><p>\u2022 <strong>Milestone Verification:</strong> Successfully completed required hackathon milestones, workshops, and verified project submission.</p>",
    "image": "/static/images/tiger_cloud_dashboard_screenshot.png",
    "actions": [
      {
        "text": "MLH Profile & Ledger \ud83d\udc7e",
        "primary": true,
        "href": "https://www.mlh.com/account/profile#event-participations"
      }
    ]
  },
  "event_5": {
    "badge": "\ud83c\udf41 Modtoberfest",
    "title": "#5: Modtoberfest 2026",
    "subtitle": "Mycelium Mod Network \u2022 Oct 2026 \u2022 Open Source Modding PRs",
    "stats": [
      {
        "label": "Event Order",
        "val": "#5 of 23"
      },
      {
        "label": "Organizer",
        "val": "Mycelium Mod N"
      },
      {
        "label": "Submission",
        "val": "PRs Merged & Clean"
      },
      {
        "label": "Key Project",
        "val": "CraftTweaker, "
      }
    ],
    "problem": "Participation and track challenges in Modtoberfest 2026 hosted by Mycelium Mod Network.",
    "solution": "<p>\u2022 <strong>Submitted Project:</strong> <strong>CraftTweaker, Clumps & Site Timer</strong></p><p>\u2022 <strong>Track & Category:</strong> Open Source Modding PRs</p><p>\u2022 <strong>Milestone Verification:</strong> Successfully completed required hackathon milestones, workshops, and verified project submission.</p>",
    "image": "/static/images/tiger_cloud_dashboard_screenshot.png",
    "actions": [
      {
        "text": "MLH Profile & Ledger \ud83d\udc7e",
        "primary": true,
        "href": "https://www.mlh.com/account/profile#event-participations"
      }
    ]
  },
  "event_6": {
    "badge": "\ud83d\udd78\ufe0f SpookyJam Jam",
    "title": "#6: SpookyJam 2026 Halloween Modjam",
    "subtitle": "SpookyJam Community \u2022 Oct 2026 \u2022 Festive Game Assets & Shaders",
    "stats": [
      {
        "label": "Event Order",
        "val": "#6 of 23"
      },
      {
        "label": "Organizer",
        "val": "SpookyJam Comm"
      },
      {
        "label": "Submission",
        "val": "Showcase Entry"
      },
      {
        "label": "Key Project",
        "val": "Halloween Part"
      }
    ],
    "problem": "Participation and track challenges in SpookyJam 2026 Halloween Modjam hosted by SpookyJam Community.",
    "solution": "<p>\u2022 <strong>Submitted Project:</strong> <strong>Halloween Particle Shaders</strong></p><p>\u2022 <strong>Track & Category:</strong> Festive Game Assets & Shaders</p><p>\u2022 <strong>Milestone Verification:</strong> Successfully completed required hackathon milestones, workshops, and verified project submission.</p>",
    "image": "/static/images/tiger_cloud_dashboard_screenshot.png",
    "actions": [
      {
        "text": "MLH Profile & Ledger \ud83d\udc7e",
        "primary": true,
        "href": "https://www.mlh.com/account/profile#event-participations"
      }
    ]
  },
  "event_7": {
    "badge": "\ud83d\udc7e MLH Hack Day",
    "title": "#7: Hack Day x GDG Cloud Chandigarh",
    "subtitle": "MLH (Event #14974) \u2022 Oct 2026 \u2022 Civic Tech & Community Solutions",
    "stats": [
      {
        "label": "Event Order",
        "val": "#7 of 23"
      },
      {
        "label": "Organizer",
        "val": "MLH (Event #14"
      },
      {
        "label": "Submission",
        "val": "Registered & Attending"
      },
      {
        "label": "Key Project",
        "val": "CivicPulse Tri"
      }
    ],
    "problem": "Participation and track challenges in Hack Day x GDG Cloud Chandigarh hosted by MLH (Event #14974).",
    "solution": "<p>\u2022 <strong>Submitted Project:</strong> <strong>CivicPulse Tricity DPI</strong></p><p>\u2022 <strong>Track & Category:</strong> Civic Tech & Community Solutions</p><p>\u2022 <strong>Milestone Verification:</strong> Successfully completed required hackathon milestones, workshops, and verified project submission.</p>",
    "image": "/static/images/tiger_cloud_dashboard_screenshot.png",
    "actions": [
      {
        "text": "MLH Profile & Ledger \ud83d\udc7e",
        "primary": true,
        "href": "https://www.mlh.com/account/profile#event-participations"
      }
    ]
  },
  "event_8": {
    "badge": "\ud83d\udc7e MLH Open Source",
    "title": "#8: MLH Global Hack Week: Open Source Sprint",
    "subtitle": "Major League Hacking (MLH) \u2022 Sep-Oct 2026 \u2022 Core Repository Contributions",
    "stats": [
      {
        "label": "Event Order",
        "val": "#8 of 23"
      },
      {
        "label": "Organizer",
        "val": "Major League H"
      },
      {
        "label": "Submission",
        "val": "Code Merged"
      },
      {
        "label": "Key Project",
        "val": "DocsGPT PR #30"
      }
    ],
    "problem": "Participation and track challenges in MLH Global Hack Week: Open Source Sprint hosted by Major League Hacking (MLH).",
    "solution": "<p>\u2022 <strong>Submitted Project:</strong> <strong>DocsGPT PR #3068 Guard</strong></p><p>\u2022 <strong>Track & Category:</strong> Core Repository Contributions</p><p>\u2022 <strong>Milestone Verification:</strong> Successfully completed required hackathon milestones, workshops, and verified project submission.</p>",
    "image": "/static/images/tiger_cloud_dashboard_screenshot.png",
    "actions": [
      {
        "text": "MLH Profile & Ledger \ud83d\udc7e",
        "primary": true,
        "href": "https://www.mlh.com/account/profile#event-participations"
      }
    ]
  },
  "event_9": {
    "badge": "\ud83c\udf32 DEV Community",
    "title": "#9: MLH x DEV Environmental AI Challenge",
    "subtitle": "MLH & DEV Community \u2022 Oct 2026 \u2022 Environmental AI & Conservation",
    "stats": [
      {
        "label": "Event Order",
        "val": "#9 of 23"
      },
      {
        "label": "Organizer",
        "val": "MLH"
      },
      {
        "label": "Submission",
        "val": "Article Published"
      },
      {
        "label": "Key Project",
        "val": "TrailBird AI W"
      }
    ],
    "problem": "Participation and track challenges in MLH x DEV Environmental AI Challenge hosted by MLH & DEV Community.",
    "solution": "<p>\u2022 <strong>Submitted Project:</strong> <strong>TrailBird AI Wilderness Audio</strong></p><p>\u2022 <strong>Track & Category:</strong> Environmental AI & Conservation</p><p>\u2022 <strong>Milestone Verification:</strong> Successfully completed required hackathon milestones, workshops, and verified project submission.</p>",
    "image": "/static/images/tiger_cloud_dashboard_screenshot.png",
    "actions": [
      {
        "text": "MLH Profile & Ledger \ud83d\udc7e",
        "primary": true,
        "href": "https://www.mlh.com/account/profile#event-participations"
      }
    ]
  },
  "event_10": {
    "badge": "\ud83d\udcca MLH Data Track",
    "title": "#10: MLH Global Hack Week: Data Science & AI",
    "subtitle": "Major League Hacking (MLH) \u2022 Aug-Sep 2026 \u2022 Timescale Time-Series Analytics",
    "stats": [
      {
        "label": "Event Order",
        "val": "#10 of 23"
      },
      {
        "label": "Organizer",
        "val": "Major League H"
      },
      {
        "label": "Submission",
        "val": "Completed"
      },
      {
        "label": "Key Project",
        "val": "IoT Fleet Tele"
      }
    ],
    "problem": "Participation and track challenges in MLH Global Hack Week: Data Science & AI hosted by Major League Hacking (MLH).",
    "solution": "<p>\u2022 <strong>Submitted Project:</strong> <strong>IoT Fleet Telemetry Simulator</strong></p><p>\u2022 <strong>Track & Category:</strong> Timescale Time-Series Analytics</p><p>\u2022 <strong>Milestone Verification:</strong> Successfully completed required hackathon milestones, workshops, and verified project submission.</p>",
    "image": "/static/images/tiger_cloud_dashboard_screenshot.png",
    "actions": [
      {
        "text": "MLH Profile & Ledger \ud83d\udc7e",
        "primary": true,
        "href": "https://www.mlh.com/account/profile#event-participations"
      }
    ]
  },
  "event_11": {
    "badge": "\ud83d\udee1\ufe0f MLH Cyber Track",
    "title": "#11: MLH Global Hack Week: Cybersecurity Sprint",
    "subtitle": "Major League Hacking (MLH) \u2022 Aug 2026 \u2022 App Security & Defensive Coding",
    "stats": [
      {
        "label": "Event Order",
        "val": "#11 of 23"
      },
      {
        "label": "Organizer",
        "val": "Major League H"
      },
      {
        "label": "Submission",
        "val": "Completed"
      },
      {
        "label": "Key Project",
        "val": "Poison-Loop Gu"
      }
    ],
    "problem": "Participation and track challenges in MLH Global Hack Week: Cybersecurity Sprint hosted by Major League Hacking (MLH).",
    "solution": "<p>\u2022 <strong>Submitted Project:</strong> <strong>Poison-Loop Guard & Cryptography</strong></p><p>\u2022 <strong>Track & Category:</strong> App Security & Defensive Coding</p><p>\u2022 <strong>Milestone Verification:</strong> Successfully completed required hackathon milestones, workshops, and verified project submission.</p>",
    "image": "/static/images/tiger_cloud_dashboard_screenshot.png",
    "actions": [
      {
        "text": "MLH Profile & Ledger \ud83d\udc7e",
        "primary": true,
        "href": "https://www.mlh.com/account/profile#event-participations"
      }
    ]
  },
  "event_12": {
    "badge": "\ud83d\ude80 MLH Beginner",
    "title": "#12: MLH Global Hack Week: Beginner Builder Week",
    "subtitle": "Major League Hacking (MLH) \u2022 Jul 2026 \u2022 Web Productivity & Tools",
    "stats": [
      {
        "label": "Event Order",
        "val": "#12 of 23"
      },
      {
        "label": "Organizer",
        "val": "Major League H"
      },
      {
        "label": "Submission",
        "val": "Completed"
      },
      {
        "label": "Key Project",
        "val": "Cursor Mini Ap"
      }
    ],
    "problem": "Participation and track challenges in MLH Global Hack Week: Beginner Builder Week hosted by Major League Hacking (MLH).",
    "solution": "<p>\u2022 <strong>Submitted Project:</strong> <strong>Cursor Mini App & Bill Splitter</strong></p><p>\u2022 <strong>Track & Category:</strong> Web Productivity & Tools</p><p>\u2022 <strong>Milestone Verification:</strong> Successfully completed required hackathon milestones, workshops, and verified project submission.</p>",
    "image": "/static/images/tiger_cloud_dashboard_screenshot.png",
    "actions": [
      {
        "text": "MLH Profile & Ledger \ud83d\udc7e",
        "primary": true,
        "href": "https://www.mlh.com/account/profile#event-participations"
      }
    ]
  },
  "event_13": {
    "badge": "\ud83c\udf0d MLH EarthHacks",
    "title": "#13: MLH EarthHacks: Climate Tech Sprint",
    "subtitle": "Major League Hacking (MLH) \u2022 Jul 2026 \u2022 Low-Power Edge IoT Computing",
    "stats": [
      {
        "label": "Event Order",
        "val": "#13 of 23"
      },
      {
        "label": "Organizer",
        "val": "Major League H"
      },
      {
        "label": "Submission",
        "val": "Completed"
      },
      {
        "label": "Key Project",
        "val": "Wilderness Sen"
      }
    ],
    "problem": "Participation and track challenges in MLH EarthHacks: Climate Tech Sprint hosted by Major League Hacking (MLH).",
    "solution": "<p>\u2022 <strong>Submitted Project:</strong> <strong>Wilderness Sensor Optimization</strong></p><p>\u2022 <strong>Track & Category:</strong> Low-Power Edge IoT Computing</p><p>\u2022 <strong>Milestone Verification:</strong> Successfully completed required hackathon milestones, workshops, and verified project submission.</p>",
    "image": "/static/images/tiger_cloud_dashboard_screenshot.png",
    "actions": [
      {
        "text": "MLH Profile & Ledger \ud83d\udc7e",
        "primary": true,
        "href": "https://www.mlh.com/account/profile#event-participations"
      }
    ]
  },
  "event_14": {
    "badge": "\u26d3\ufe0f MLH Web3",
    "title": "#14: MLH Web3 & Smart Contracts Buildathon",
    "subtitle": "Major League Hacking (MLH) \u2022 Jun 2026 \u2022 Smart Contract Integrity Verification",
    "stats": [
      {
        "label": "Event Order",
        "val": "#14 of 23"
      },
      {
        "label": "Organizer",
        "val": "Major League H"
      },
      {
        "label": "Submission",
        "val": "Completed"
      },
      {
        "label": "Key Project",
        "val": "Decentralized "
      }
    ],
    "problem": "Participation and track challenges in MLH Web3 & Smart Contracts Buildathon hosted by Major League Hacking (MLH).",
    "solution": "<p>\u2022 <strong>Submitted Project:</strong> <strong>Decentralized Proof Hashes</strong></p><p>\u2022 <strong>Track & Category:</strong> Smart Contract Integrity Verification</p><p>\u2022 <strong>Milestone Verification:</strong> Successfully completed required hackathon milestones, workshops, and verified project submission.</p>",
    "image": "/static/images/tiger_cloud_dashboard_screenshot.png",
    "actions": [
      {
        "text": "MLH Profile & Ledger \ud83d\udc7e",
        "primary": true,
        "href": "https://www.mlh.com/account/profile#event-participations"
      }
    ]
  },
  "event_15": {
    "badge": "\u2601\ufe0f MLH CloudHacks",
    "title": "#15: MLH CloudHacks: DevOps & Container Sprint",
    "subtitle": "Major League Hacking (MLH) \u2022 Jun 2026 \u2022 Docker, CI/CD & Cloud Deployment",
    "stats": [
      {
        "label": "Event Order",
        "val": "#15 of 23"
      },
      {
        "label": "Organizer",
        "val": "Major League H"
      },
      {
        "label": "Submission",
        "val": "Completed"
      },
      {
        "label": "Key Project",
        "val": "Render Declara"
      }
    ],
    "problem": "Participation and track challenges in MLH CloudHacks: DevOps & Container Sprint hosted by Major League Hacking (MLH).",
    "solution": "<p>\u2022 <strong>Submitted Project:</strong> <strong>Render Declarative Blueprints</strong></p><p>\u2022 <strong>Track & Category:</strong> Docker, CI/CD & Cloud Deployment</p><p>\u2022 <strong>Milestone Verification:</strong> Successfully completed required hackathon milestones, workshops, and verified project submission.</p>",
    "image": "/static/images/tiger_cloud_dashboard_screenshot.png",
    "actions": [
      {
        "text": "MLH Profile & Ledger \ud83d\udc7e",
        "primary": true,
        "href": "https://www.mlh.com/account/profile#event-participations"
      }
    ]
  },
  "event_16": {
    "badge": "\ud83c\udfe5 MLH HealthTech",
    "title": "#16: MLH HealthTech Innovation Sprint",
    "subtitle": "Major League Hacking (MLH) \u2022 May 2026 \u2022 Sanitation & Civic Well-Being",
    "stats": [
      {
        "label": "Event Order",
        "val": "#16 of 23"
      },
      {
        "label": "Organizer",
        "val": "Major League H"
      },
      {
        "label": "Submission",
        "val": "Completed"
      },
      {
        "label": "Key Project",
        "val": "Public Health "
      }
    ],
    "problem": "Participation and track challenges in MLH HealthTech Innovation Sprint hosted by Major League Hacking (MLH).",
    "solution": "<p>\u2022 <strong>Submitted Project:</strong> <strong>Public Health Hazard Triage</strong></p><p>\u2022 <strong>Track & Category:</strong> Sanitation & Civic Well-Being</p><p>\u2022 <strong>Milestone Verification:</strong> Successfully completed required hackathon milestones, workshops, and verified project submission.</p>",
    "image": "/static/images/tiger_cloud_dashboard_screenshot.png",
    "actions": [
      {
        "text": "MLH Profile & Ledger \ud83d\udc7e",
        "primary": true,
        "href": "https://www.mlh.com/account/profile#event-participations"
      }
    ]
  },
  "event_17": {
    "badge": "\u26a1 MLH CodeCon",
    "title": "#17: MLH CodeCon Summer Hackathon",
    "subtitle": "Major League Hacking (MLH) \u2022 May 2026 \u2022 Browser Deep Learning Algorithms",
    "stats": [
      {
        "label": "Event Order",
        "val": "#17 of 23"
      },
      {
        "label": "Organizer",
        "val": "Major League H"
      },
      {
        "label": "Submission",
        "val": "Completed"
      },
      {
        "label": "Key Project",
        "val": "Socratic Neura"
      }
    ],
    "problem": "Participation and track challenges in MLH CodeCon Summer Hackathon hosted by Major League Hacking (MLH).",
    "solution": "<p>\u2022 <strong>Submitted Project:</strong> <strong>Socratic Neural Sandbox</strong></p><p>\u2022 <strong>Track & Category:</strong> Browser Deep Learning Algorithms</p><p>\u2022 <strong>Milestone Verification:</strong> Successfully completed required hackathon milestones, workshops, and verified project submission.</p>",
    "image": "/static/images/tiger_cloud_dashboard_screenshot.png",
    "actions": [
      {
        "text": "MLH Profile & Ledger \ud83d\udc7e",
        "primary": true,
        "href": "https://www.mlh.com/account/profile#event-participations"
      }
    ]
  },
  "event_18": {
    "badge": "\ud83d\udcf1 MLH Mobile",
    "title": "#18: MLH Global Hack Week: Mobile & Edge AI",
    "subtitle": "Major League Hacking (MLH) \u2022 Apr 2026 \u2022 Edge AI & Offline Execution",
    "stats": [
      {
        "label": "Event Order",
        "val": "#18 of 23"
      },
      {
        "label": "Organizer",
        "val": "Major League H"
      },
      {
        "label": "Submission",
        "val": "Completed"
      },
      {
        "label": "Key Project",
        "val": "On-Device Gemm"
      }
    ],
    "problem": "Participation and track challenges in MLH Global Hack Week: Mobile & Edge AI hosted by Major League Hacking (MLH).",
    "solution": "<p>\u2022 <strong>Submitted Project:</strong> <strong>On-Device Gemma 2 2B Runner</strong></p><p>\u2022 <strong>Track & Category:</strong> Edge AI & Offline Execution</p><p>\u2022 <strong>Milestone Verification:</strong> Successfully completed required hackathon milestones, workshops, and verified project submission.</p>",
    "image": "/static/images/tiger_cloud_dashboard_screenshot.png",
    "actions": [
      {
        "text": "MLH Profile & Ledger \ud83d\udc7e",
        "primary": true,
        "href": "https://www.mlh.com/account/profile#event-participations"
      }
    ]
  },
  "event_19": {
    "badge": "\ud83c\udf38 MLH Hackfest",
    "title": "#19: MLH Hackfest Spring Innovation",
    "subtitle": "Major League Hacking (MLH) \u2022 Apr 2026 \u2022 Developer Tooling & Extensions",
    "stats": [
      {
        "label": "Event Order",
        "val": "#19 of 23"
      },
      {
        "label": "Organizer",
        "val": "Major League H"
      },
      {
        "label": "Submission",
        "val": "Completed"
      },
      {
        "label": "Key Project",
        "val": "VS Code NBT Bi"
      }
    ],
    "problem": "Participation and track challenges in MLH Hackfest Spring Innovation hosted by Major League Hacking (MLH).",
    "solution": "<p>\u2022 <strong>Submitted Project:</strong> <strong>VS Code NBT Binary Inspector</strong></p><p>\u2022 <strong>Track & Category:</strong> Developer Tooling & Extensions</p><p>\u2022 <strong>Milestone Verification:</strong> Successfully completed required hackathon milestones, workshops, and verified project submission.</p>",
    "image": "/static/images/tiger_cloud_dashboard_screenshot.png",
    "actions": [
      {
        "text": "MLH Profile & Ledger \ud83d\udc7e",
        "primary": true,
        "href": "https://www.mlh.com/account/profile#event-participations"
      }
    ]
  },
  "event_20": {
    "badge": "\ud83d\udc19 GitHub x MLH",
    "title": "#20: MLH Open Source Day x GitHub Codespaces",
    "subtitle": "MLH & GitHub \u2022 Mar 2026 \u2022 Cloud Development Environments",
    "stats": [
      {
        "label": "Event Order",
        "val": "#20 of 23"
      },
      {
        "label": "Organizer",
        "val": "MLH"
      },
      {
        "label": "Submission",
        "val": "Completed"
      },
      {
        "label": "Key Project",
        "val": "Automated Code"
      }
    ],
    "problem": "Participation and track challenges in MLH Open Source Day x GitHub Codespaces hosted by MLH & GitHub.",
    "solution": "<p>\u2022 <strong>Submitted Project:</strong> <strong>Automated Codespaces DevContainers</strong></p><p>\u2022 <strong>Track & Category:</strong> Cloud Development Environments</p><p>\u2022 <strong>Milestone Verification:</strong> Successfully completed required hackathon milestones, workshops, and verified project submission.</p>",
    "image": "/static/images/tiger_cloud_dashboard_screenshot.png",
    "actions": [
      {
        "text": "MLH Profile & Ledger \ud83d\udc7e",
        "primary": true,
        "href": "https://www.mlh.com/account/profile#event-participations"
      }
    ]
  },
  "event_21": {
    "badge": "\ud83d\udcbb MLH DevWeek",
    "title": "#21: MLH Developer Week: Full Stack Sprint",
    "subtitle": "Major League Hacking (MLH) \u2022 Mar 2026 \u2022 Scalable REST APIs & Architecture",
    "stats": [
      {
        "label": "Event Order",
        "val": "#21 of 23"
      },
      {
        "label": "Organizer",
        "val": "Major League H"
      },
      {
        "label": "Submission",
        "val": "Completed"
      },
      {
        "label": "Key Project",
        "val": "Microservices "
      }
    ],
    "problem": "Participation and track challenges in MLH Developer Week: Full Stack Sprint hosted by Major League Hacking (MLH).",
    "solution": "<p>\u2022 <strong>Submitted Project:</strong> <strong>Microservices API Gateway</strong></p><p>\u2022 <strong>Track & Category:</strong> Scalable REST APIs & Architecture</p><p>\u2022 <strong>Milestone Verification:</strong> Successfully completed required hackathon milestones, workshops, and verified project submission.</p>",
    "image": "/static/images/tiger_cloud_dashboard_screenshot.png",
    "actions": [
      {
        "text": "MLH Profile & Ledger \ud83d\udc7e",
        "primary": true,
        "href": "https://www.mlh.com/account/profile#event-participations"
      }
    ]
  },
  "event_22": {
    "badge": "\ud83d\udd0c MLH Hardware",
    "title": "#22: MLH Hardware & IoT Sprint",
    "subtitle": "Major League Hacking (MLH) \u2022 Feb 2026 \u2022 Microcontrollers & Physical Tech",
    "stats": [
      {
        "label": "Event Order",
        "val": "#22 of 23"
      },
      {
        "label": "Organizer",
        "val": "Major League H"
      },
      {
        "label": "Submission",
        "val": "Completed"
      },
      {
        "label": "Key Project",
        "val": "Arduino Hallow"
      }
    ],
    "problem": "Participation and track challenges in MLH Hardware & IoT Sprint hosted by Major League Hacking (MLH).",
    "solution": "<p>\u2022 <strong>Submitted Project:</strong> <strong>Arduino Halloween Sentry Guard</strong></p><p>\u2022 <strong>Track & Category:</strong> Microcontrollers & Physical Tech</p><p>\u2022 <strong>Milestone Verification:</strong> Successfully completed required hackathon milestones, workshops, and verified project submission.</p>",
    "image": "/static/images/tiger_cloud_dashboard_screenshot.png",
    "actions": [
      {
        "text": "MLH Profile & Ledger \ud83d\udc7e",
        "primary": true,
        "href": "https://www.mlh.com/account/profile#event-participations"
      }
    ]
  },
  "event_23": {
    "badge": "\ud83c\udfc6 MLH Grand Finale",
    "title": "#23: MLH Global Hack Week: Grand Finale Showcase",
    "subtitle": "Major League Hacking (MLH) \u2022 Jan-Oct 2026 \u2022 Grand Portfolio & Community Impact",
    "stats": [
      {
        "label": "Event Order",
        "val": "#23 of 23"
      },
      {
        "label": "Organizer",
        "val": "Major League H"
      },
      {
        "label": "Submission",
        "val": "23 Events Verified"
      },
      {
        "label": "Key Project",
        "val": "Portfolio Hub "
      }
    ],
    "problem": "Participation and track challenges in MLH Global Hack Week: Grand Finale Showcase hosted by Major League Hacking (MLH).",
    "solution": "<p>\u2022 <strong>Submitted Project:</strong> <strong>Portfolio Hub at shivysidinfo.tech</strong></p><p>\u2022 <strong>Track & Category:</strong> Grand Portfolio & Community Impact</p><p>\u2022 <strong>Milestone Verification:</strong> Successfully completed required hackathon milestones, workshops, and verified project submission.</p>",
    "image": "/static/images/tiger_cloud_dashboard_screenshot.png",
    "actions": [
      {
        "text": "MLH Profile & Ledger \ud83d\udc7e",
        "primary": true,
        "href": "https://www.mlh.com/account/profile#event-participations"
      }
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


// Portfolio View & Filter Switchers
window.switchViewType = function(type) {
  const pGrid = document.getElementById("projectsGrid");
  const eGrid = document.getElementById("eventsGrid");
  const pBtn = document.getElementById("showProjectsBtn");
  const eBtn = document.getElementById("showEventsBtn");
  const fBar = document.getElementById("projectsFilterBar");

  if (type === "projects") {
    pGrid.classList.remove("hidden");
    eGrid.classList.add("hidden");
    fBar.classList.remove("hidden");
    pBtn.className = "px-4 py-2 text-xs font-bold rounded-lg bg-orange-500 text-slate-950 transition shadow-md shadow-orange-500/20 flex items-center gap-1.5";
    eBtn.className = "px-4 py-2 text-xs font-bold rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 transition flex items-center gap-1.5";
  } else {
    pGrid.classList.add("hidden");
    eGrid.classList.remove("hidden");
    fBar.classList.add("hidden");
    eBtn.className = "px-4 py-2 text-xs font-bold rounded-lg bg-blue-500 text-slate-950 transition shadow-md shadow-blue-500/20 flex items-center gap-1.5";
    pBtn.className = "px-4 py-2 text-xs font-bold rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 transition flex items-center gap-1.5";
  }
};

window.filterCategory = function(cat) {
  const cards = document.querySelectorAll(".project-card");
  cards.forEach(c => {
    if (cat === "all" || c.getAttribute("data-category") === cat) {
      c.classList.remove("hidden");
    } else {
      c.classList.add("hidden");
    }
  });

  const filterBtns = ["all", "ai", "oss", "tiger", "iot"];
  filterBtns.forEach(b => {
    const el = document.getElementById(`filter-${b}`);
    if (el) {
      if (b === cat) {
        el.className = "text-xs px-3 py-1.5 rounded-lg bg-orange-500/20 text-orange-400 border border-orange-500/30 font-semibold transition";
      } else {
        el.className = "text-xs px-3 py-1.5 rounded-lg bg-slate-900 text-slate-400 hover:text-white border border-slate-800 transition";
      }
    }
  });
};



// ==============================================================
// 🔍 REAL-TIME INSTANT SEARCH & QUICK KEYWORD TAGS
// ==============================================================
window.handleSearchInput = function(e) {
  const query = (e.target.value || '').trim().toLowerCase();
  const clearBtn = document.getElementById('clearSearchBtn');
  const showingCount = document.getElementById('showingCount');
  
  if (clearBtn) {
    if (query.length > 0) {
      clearBtn.classList.remove('hidden');
    } else {
      clearBtn.classList.add('hidden');
    }
  }

  const isProjects = !document.getElementById('projectsGrid').classList.contains('hidden');
  const targetSelector = isProjects ? '.project-card' : '.event-card';
  const cards = document.querySelectorAll(targetSelector);
  
  let visibleCount = 0;
  cards.forEach(card => {
    const text = (card.innerText || '').toLowerCase();
    if (!query || text.includes(query)) {
      card.style.display = '';
      visibleCount++;
    } else {
      card.style.display = 'none';
    }
  });

  if (showingCount) {
    showingCount.textContent = visibleCount;
  }
};

window.quickFilterTag = function(tag) {
  const input = document.getElementById('ledgerSearchInput');
  if (input) {
    input.value = tag;
    window.handleSearchInput({ target: input });
    input.focus();
  }
};

window.clearSearchFilter = function() {
  const input = document.getElementById('ledgerSearchInput');
  if (input) {
    input.value = '';
    window.handleSearchInput({ target: input });
  }
};

// ==============================================================
// 🚀 FLOATING BACK TO TOP BUTTON LOGIC
// ==============================================================
window.addEventListener('scroll', () => {
  const btn = document.getElementById('backToTopBtn');
  if (!btn) return;
  if (window.scrollY > 350) {
    btn.classList.remove('translate-y-16', 'opacity-0');
    btn.classList.add('translate-y-0', 'opacity-100');
  } else {
    btn.classList.add('translate-y-16', 'opacity-0');
    btn.classList.remove('translate-y-0', 'opacity-100');
  }
});
