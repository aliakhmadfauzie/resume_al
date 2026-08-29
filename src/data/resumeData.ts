import { ProjectItem, TimelineItem, SkillCategory, CertificationItem } from "../types";

export const personalInfo = {
  name: "Ali Akhmad Fauzie",
  initials: "AF",
  titles: {
    hybrid: "Enterprise Power Platform & Dynamics 365 Solution Architect | Operations Lead",
    architect: "Enterprise Power Platform & Dataverse Solution Architect | ALM & AI Lead",
    operations: "Service Delivery & Operations Leadership | Six Sigma Green Belt",
  },
  tagline: "Dataverse-first architecture · 16 production Power Apps · C# Plugins & PCF Controls · Enterprise ALM · 28+ departments modernized",
  location: "Kuala Lumpur, Malaysia (Open to Global & Hybrid)",
  secondaryLocation: "Bandung, West Java, Indonesia",
  email: "aliakhmadfauzie@gmail.com",
  phoneMY: "+60 13-295 7406",
  phoneID: "+62 851 1055 2118",
  linkedin: "https://linkedin.com/in/aliakhmadf",
  linkedinHandle: "linkedin.com/in/aliakhmadf",
  portfolioUrl: "https://altechsolutionportofilo.vercel.app",
  customDomainUrl: "https://aliakhmadfauzie.my.id",
  github: "https://github.com/altechsolution123",
  whatsappUrl: "https://wa.me/60132957406",
  gpgKey: "0xAF8849F12026",
  bio: "Enterprise Power Platform & Dynamics 365 Solution Architect with 9+ years of service delivery, operations leadership, and dual-track transformation experience spanning low-code Canvas Apps, code-first React/TypeScript platforms, and Dataverse data architecture. Proven track record leading large-scale digital modernization at a publicly listed Malaysian conglomerate — cataloguing 361 legacy Lotus Domino forms and migrating them into a modern Microsoft 365 environment with RM4.2M ($960K/yr) in license cost avoided.",
  aboutParagraphs: [
    "Enterprise Power Platform & Dynamics 365 Solution Architect with 9+ years of service delivery, operations leadership, and dual-track transformation experience spanning low-code Canvas Apps, code-first React/TypeScript platforms, and Dataverse data architecture.",
    "Proven track record leading large-scale digital modernization at a publicly listed Malaysian conglomerate (palm oil, oleochemicals, property) — cataloguing 361 legacy Lotus Domino forms and migrating them into a modern Microsoft 365 environment. The architecture follows a deliberate two-phase strategy: Phase 1 deployed 16 production Canvas Apps using SharePoint Online strictly as an interim staging data store to eliminate $960K/year in premium licensing during rapid migration (28+ department sites), while Phase 2 — the Dataverse Migration Blueprint — defines the enterprise-grade target architecture with full relational data modeling, Business Unit hierarchy, Security Role inheritance, Field Security Profiles, polymorphic lookups, and managed solution ALM.",
    "Core expertise spans Dataverse solution design with managed/unmanaged solution boundaries, environment strategy (Dev → Build → Test → Prod), connection reference management, environment variables, C# Dataverse Plugins with pre/post-operation execution pipeline stages, PCF Controls (TypeScript/React), and Solution Segmentation for enterprise ALM. AI-assisted development with 50+ domain-specific Copilot agents across 12 pipelines governed by DLP policies, WCAG 2.2 AA, OWASP Top 10, and GxP compliance standards."
  ],
  stats: [
    { label: "Forms Catalogued", value: "361" },
    { label: "Production Power Apps", value: "16" },
    { label: "Departments Modernized", value: "28+" },
    { label: "License Cost Avoided", value: "RM4.2M/yr" },
    { label: "AI Automation Agents", value: "50+" },
    { label: "Years Enterprise Experience", value: "9+ Yrs" }
  ]
};

export const projectsData: ProjectItem[] = [
  {
    "id": "pulsetrack",
    "title": "PulseTrack",
    "subtitle": "Workforce Management — Real-time Agent Status Automation",
    "description": "Agent status was captured via WhatsApp, requiring heavy manual roll-up for team leads, leading to delays and inaccuracies. Implemented a real-time agent status tracking dashboard eliminating manual reporting, with automated aggregation and Power BI dashboards.",
    "fullOverview": "Implemented a real-time agent status tracking dashboard eliminating manual reporting, with automated aggregation and Power BI dashboards. 90% less manual reporting; 98% status accuracy; 60–80% reduction in team-lead workload.",
    "challenge": "Agent status was captured via WhatsApp, requiring heavy manual roll-up for team leads, leading to delays and inaccuracies.",
    "solution": "Implemented a real-time agent status tracking dashboard eliminating manual reporting, with automated aggregation and Power BI dashboards.",
    "results": [
      "90% less manual reporting; 98% status accuracy; 60–80% reduction in team-lead workload.",
      "Manual Reporting: -90%",
      "Status Accuracy: 98%",
      "Manager Workload: -70%",
      "Role: Power Platform solution delivery & automation design"
    ],
    "category": "analytics",
    "cardColor": "#1e3a8a",
    "bgGradient": "from-[#1e3a8a] to-[#172554]",
    "accentHex": "#3b82f6",
    "tags": [
      "Power Apps",
      "Power Automate",
      "SharePoint",
      "Power BI",
      "Teams"
    ],
    "metrics": [
      {
        "label": "Manual Reporting",
        "value": "-90%"
      },
      {
        "label": "Status Accuracy",
        "value": "98%"
      },
      {
        "label": "Manager Workload",
        "value": "-70%"
      }
    ],
    "timeline": "May 2025",
    "linkText": "EXPLORE ARCHITECTURE",
    "demoUrl": "https://altechsolutionportofilo.vercel.app",
    "repoUrl": "https://github.com/altechsolution123/pulsetrack",
    "architecturePoints": [
      "SharePoint Online schema optimized for concurrent agent logging",
      "Automated Power Automate schedule & webhook trigger for instantaneous roll-up",
      "Adaptive Cards delivered directly to Microsoft Teams leadership channel",
      "Role-based access ensuring data privacy across regional squads"
    ]
  },
  {
    "id": "smartflow",
    "title": "SmartFlow",
    "subtitle": "Business Request Automation — Intelligent Routing & Approval",
    "description": "Requests and approvals were routed via email and spreadsheets, resulting in delayed visibility and poor tracking. Automated business request processing with intelligent routing — replaced manual triage with Power Automate approval flows, real-time Power BI dashboards, and Teams notifications.",
    "fullOverview": "Automated business request processing with intelligent routing — replaced manual triage with Power Automate approval flows, real-time Power BI dashboards, and Teams notifications. 80% manual task reduction; 90% data accuracy through typed Dataverse columns; 100% real-time tracking.",
    "challenge": "Requests and approvals were routed via email and spreadsheets, resulting in delayed visibility and poor tracking.",
    "solution": "Automated business request processing with intelligent routing — replaced manual triage with Power Automate approval flows, real-time Power BI dashboards, and Teams notifications.",
    "results": [
      "80% manual task reduction; 90% data accuracy through typed Dataverse columns; 100% real-time tracking.",
      "Manual Task Reduction: -80%",
      "Data Accuracy: 90%",
      "Real-Time Tracking: 100%",
      "Role: End-to-end request/approval system design"
    ],
    "category": "analytics",
    "cardColor": "#0f766e",
    "bgGradient": "from-[#115e59] to-[#042f2e]",
    "accentHex": "#2dd4bf",
    "tags": [
      "Dataverse",
      "Power Apps",
      "Power Automate",
      "Power BI",
      "Teams"
    ],
    "metrics": [
      {
        "label": "Manual Task Reduction",
        "value": "-80%"
      },
      {
        "label": "Data Accuracy",
        "value": "90%"
      },
      {
        "label": "Real-Time Tracking",
        "value": "100%"
      }
    ],
    "timeline": "Aug 2025",
    "linkText": "EXPLORE ARCHITECTURE",
    "demoUrl": "https://altechsolutionportofilo.vercel.app",
    "repoUrl": "https://github.com/altechsolution123/smartflow",
    "architecturePoints": [
      "Responsive Power Apps Canvas front-end with dynamic form validations",
      "Multi-stage sequential & parallel Power Automate approval chains with timeout escalations",
      "Interactive Power BI telemetry embedded inside Microsoft Teams",
      "Automatic Outlook actionable messages allowing one-click approvals from inbox"
    ]
  },
  {
    "id": "cs-resolver",
    "title": "CS Resolver",
    "subtitle": "AI-Powered Customer Service — Classification & Standard Operating Procedure Recommendation",
    "description": "Agents manually searched through complex Standard Operating Procedures to classify and route customer issues, leading to inconsistent handling and high resolution times. Deployed an AI model on Dataverse to automatically classify the issue and recommend the appropriate Standard Operating Procedure with direct links for the agent. Typed Choice columns replace free-text categorization.",
    "fullOverview": "Deployed an AI model on Dataverse to automatically classify the issue and recommend the appropriate Standard Operating Procedure with direct links for the agent. Typed Choice columns replace free-text categorization. 50% classification accuracy boost; 65% faster handling time; 120+ Standard Operating Procedure categories automated.",
    "challenge": "Agents manually searched through complex Standard Operating Procedures to classify and route customer issues, leading to inconsistent handling and high resolution times.",
    "solution": "Deployed an AI model on Dataverse to automatically classify the issue and recommend the appropriate Standard Operating Procedure with direct links for the agent. Typed Choice columns replace free-text categorization.",
    "results": [
      "50% classification accuracy boost; 65% faster handling time; 120+ Standard Operating Procedure categories automated.",
      "Classification Boost: +50%",
      "Handling Time: -65%",
      "Standard Operating Procedure Categories: 120+",
      "Role: AI-assisted classification & procedure recommendation"
    ],
    "category": "ai",
    "cardColor": "#4338ca",
    "bgGradient": "from-[#3730a3] to-[#1e1b4b]",
    "accentHex": "#818cf8",
    "tags": [
      "Dataverse",
      "AI Builder",
      "Power Apps Canvas",
      "Power Automate"
    ],
    "metrics": [
      {
        "label": "Classification Boost",
        "value": "+50%"
      },
      {
        "label": "Handling Time",
        "value": "-65%"
      },
      {
        "label": "Standard Operating Procedure Categories",
        "value": "120+"
      }
    ],
    "timeline": "Mar 2025",
    "linkText": "EXPLORE ARCHITECTURE",
    "demoUrl": "https://altechsolutionportofilo.vercel.app",
    "repoUrl": "https://github.com/altechsolution123/cs-resolver",
    "architecturePoints": [
      "Custom AI Builder text classification model trained on 120+ standard operating procedures",
      "Automated extraction of key sentiment and entity metadata from ticket payloads",
      "Dynamic hyperlink generation routing agents directly to corresponding Standard Operating Procedure chapters",
      "Confidence score thresholding triggering manual supervisor fallback when below 85%"
    ]
  },
  {
    "id": "document-finder",
    "title": "DocFinder",
    "subtitle": "AI Document Search — Intelligent Semantic Search Engine",
    "description": "Staff searched for documents by memory and keyword browsing, which was inefficient and frequently missed relevant compliance files. Implemented an AI-powered operational guidelines search engine using AI Builder for intelligent document classification.",
    "fullOverview": "Implemented an AI-powered operational guidelines search engine using AI Builder for intelligent document classification. 80% faster document search; 99% accuracy in guideline recommendations; 5000+ documents indexed.",
    "challenge": "Staff searched for documents by memory and keyword browsing, which was inefficient and frequently missed relevant compliance files.",
    "solution": "Implemented an AI-powered operational guidelines search engine using AI Builder for intelligent document classification.",
    "results": [
      "80% faster document search; 99% accuracy in guideline recommendations; 5000+ documents indexed.",
      "Search Speed: +80%",
      "Recommendation Accuracy: 99%",
      "Documents Indexed: 5000+",
      "Role: AI search & ranking architecture"
    ],
    "category": "ai",
    "cardColor": "#b45309",
    "bgGradient": "from-[#92400e] to-[#451a03]",
    "accentHex": "#f59e0b",
    "tags": [
      "AI Builder",
      "Lark Chat",
      "Lark Base"
    ],
    "metrics": [
      {
        "label": "Search Speed",
        "value": "+80%"
      },
      {
        "label": "Recommendation Accuracy",
        "value": "99%"
      },
      {
        "label": "Documents Indexed",
        "value": "5000+"
      }
    ],
    "timeline": "May 2024",
    "linkText": "EXPLORE ARCHITECTURE",
    "demoUrl": "https://altechsolutionportofilo.vercel.app",
    "repoUrl": "https://github.com/altechsolution123/document-finder",
    "architecturePoints": [
      "Vector/keyword weighted scoring algorithm for enterprise documentation",
      "Dynamic document tagging with taxonomy extraction upon upload",
      "Security trimming ensuring users only discover files permitted by their Azure AD group",
      "Instant preview viewer with highlighted keyword occurrences"
    ]
  },
  {
    "id": "tasek-cement-rebate",
    "title": "Rebate Approval — Dataverse Isolated Compliance",
    "subtitle": "Standalone corporate approval workflow with complete Business Unit isolation",
    "description": "Rebate approvals took 2–3 days via email and manual checks, creating cashflow friction and human error. Standalone corporate approval workflow on Dataverse with complete Business Unit isolation for security and audit compliance. Multi-tier approval matrix with Field Security Profiles on financial data, immutable audit trails via Dataverse Auditing, and C# Plugins enforcing segregation of duties at the data layer.",
    "fullOverview": "Standalone corporate approval workflow on Dataverse with complete Business Unit isolation for security and audit compliance. Multi-tier approval matrix with Field Security Profiles on financial data, immutable audit trails via Dataverse Auditing, and C# Plugins enforcing segregation of duties at the data layer. 5 approval tiers; 100% audit compliance; complete data isolation; cycle time from 3 days to 15 minutes.",
    "challenge": "Rebate approvals took 2–3 days via email and manual checks, creating cashflow friction and human error.",
    "solution": "Standalone corporate approval workflow on Dataverse with complete Business Unit isolation for security and audit compliance. Multi-tier approval matrix with Field Security Profiles on financial data, immutable audit trails via Dataverse Auditing, and C# Plugins enforcing segregation of duties at the data layer.",
    "results": [
      "5 approval tiers; 100% audit compliance; complete data isolation; cycle time from 3 days to 15 minutes.",
      "Approval Tiers: 5",
      "Audit Compliance: 100%",
      "Data Isolation: Complete",
      "Role: Rebate calculation + multi-level approval workflow"
    ],
    "category": "enterprise",
    "cardColor": "#dc2626",
    "bgGradient": "from-[#991b1b] to-[#450a0a]",
    "accentHex": "#ef4444",
    "tags": [
      "Dataverse",
      "C# Plugins",
      "Power Apps",
      "Field Security",
      "Power Automate"
    ],
    "metrics": [
      {
        "label": "Approval Tiers",
        "value": "5"
      },
      {
        "label": "Audit Compliance",
        "value": "100%"
      },
      {
        "label": "Data Isolation",
        "value": "Complete"
      }
    ],
    "timeline": "Jan 2025",
    "linkText": "EXPLORE ARCHITECTURE",
    "demoUrl": "https://altechsolutionportofilo.vercel.app",
    "repoUrl": "https://github.com/altechsolution123/tasek-cement-rebate",
    "architecturePoints": [
      "7-component dynamic calculation engine: Base Rate + Volume Tier + Distance + Special Terms + Seasonal Adj + Tax - Credit Deductions",
      "Hard validation enforcing statutory Malaysian Ringgit 0.20/metric tonne ceiling",
      "C# Plugins enforcing segregation of duties at the data layer",
      "Dataverse Auditing for immutable audit trails on all financial transactions",
      "Field Security Profiles on rebate amounts and vendor financial data"
    ]
  },
  {
    "id": "staff-requisition",
    "title": "Staff Requisition Form & Vacancy Control",
    "subtitle": "Four-Tier Headcount Governance & Interview Enforcement",
    "description": "Vacancies could be advertised without a completed four-tier requisition and interview log, causing unauthorized budget commitments. Enforced that no vacancy is advertised without an approved requisition. Added an optional Chief Financial Officer gate for new headcount and a mandatory five-working-day internal advertisement lockout.",
    "fullOverview": "Enforced that no vacancy is advertised without an approved requisition. Added an optional Chief Financial Officer gate for new headcount and a mandatory five-working-day internal advertisement lockout. Stronger hiring governance, 100% compliant headcount budget, and zero unapproved postings.",
    "challenge": "Vacancies could be advertised without a completed four-tier requisition and interview log, causing unauthorized budget commitments.",
    "solution": "Enforced that no vacancy is advertised without an approved requisition. Added an optional Chief Financial Officer gate for new headcount and a mandatory five-working-day internal advertisement lockout.",
    "results": [
      "Stronger hiring governance, 100% compliant headcount budget, and zero unapproved postings.",
      "Hiring Compliance: 100%",
      "Internal Lockout: 5 Days",
      "Audit Readiness: 100%",
      "Role: Vacancy control & interview logging enforcement"
    ],
    "category": "enterprise",
    "cardColor": "#0284c7",
    "bgGradient": "from-[#0369a1] to-[#082f49]",
    "accentHex": "#38bdf8",
    "tags": [
      "Power Apps",
      "Power Automate",
      "SharePoint"
    ],
    "metrics": [
      {
        "label": "Hiring Compliance",
        "value": "100%"
      },
      {
        "label": "Internal Lockout",
        "value": "5 Days"
      },
      {
        "label": "Audit Readiness",
        "value": "100%"
      }
    ],
    "timeline": "Nov–Dec 2023",
    "linkText": "EXPLORE ARCHITECTURE",
    "demoUrl": "https://altechsolutionportofilo.vercel.app",
    "repoUrl": "https://github.com/altechsolution123/staff-requisition",
    "architecturePoints": [
      "Strict state-machine workflow: Draft → Line Manager → Human Resources Head → Chief Financial Officer (if new headcount) → Published",
      "Automated 5-working-day lock preventing external posting before internal employee visibility",
      "Interview candidate evaluation scorecard with digital signatures"
    ]
  },
  {
    "id": "ask-lark",
    "title": "AskLark",
    "subtitle": "Intelligent Query Management — Categorization & Auto-Resolution",
    "description": "Repeated questions across operations teams and unstructured Quality Assurance answers cluttered operational channels. Smart query management system that categorizes, routes, and resolves agent questions automatically.",
    "fullOverview": "Smart query management system that categorizes, routes, and resolves agent questions automatically. 60% faster response times; 50% reduction in repeated queries; 92% agent satisfaction.",
    "challenge": "Repeated questions across operations teams and unstructured Quality Assurance answers cluttered operational channels.",
    "solution": "Smart query management system that categorizes, routes, and resolves agent questions automatically.",
    "results": [
      "60% faster response times; 50% reduction in repeated queries; 92% agent satisfaction.",
      "Response Speed: +60%",
      "Repeat Queries Cut: -50%",
      "Agent Satisfaction: 92%",
      "Role: Knowledge query tracking & de-duplication"
    ],
    "category": "workflow",
    "cardColor": "#7c3aed",
    "bgGradient": "from-[#6d28d9] to-[#2e1065]",
    "accentHex": "#a78bfa",
    "tags": [
      "Lark Base",
      "Lark Automation"
    ],
    "metrics": [
      {
        "label": "Response Speed",
        "value": "+60%"
      },
      {
        "label": "Repeat Queries Cut",
        "value": "-50%"
      },
      {
        "label": "Agent Satisfaction",
        "value": "92%"
      }
    ],
    "timeline": "Jul 2024",
    "linkText": "EXPLORE ARCHITECTURE",
    "demoUrl": "https://altechsolutionportofilo.vercel.app",
    "repoUrl": "https://github.com/altechsolution123/ask-lark",
    "architecturePoints": [
      "Similarity matching against indexed questions in Lark Base",
      "Auto-tagging by department and severity",
      "Analytics dashboard on unresolved query trends"
    ]
  },
  {
    "id": "it-support-service-request",
    "title": "Information Technology Support & Service Request Framework",
    "subtitle": "Enterprise Information Technology Service Management Ticket Lifecycle & Automated Service Level Agreements",
    "description": "Lotus Notes service tickets had hidden site routing and no structured requestor close-out, leading to poor closure rates and ticket hoarding. Designed a Submit → Admin Triage → Assign → Resolve → Requestor Accept & Rate → Close lifecycle. Added a 72-hour accept window and 30-day automatic close.",
    "fullOverview": "Designed a Submit → Admin Triage → Assign → Resolve → Requestor Accept & Rate → Close lifecycle. Added a 72-hour accept window and 30-day automatic close. 56 mapped columns; 5 flows; 5 screens; 95% on-time resolution; automated audit trail.",
    "challenge": "Lotus Notes service tickets had hidden site routing and no structured requestor close-out, leading to poor closure rates and ticket hoarding.",
    "solution": "Designed a Submit → Admin Triage → Assign → Resolve → Requestor Accept & Rate → Close lifecycle. Added a 72-hour accept window and 30-day automatic close.",
    "results": [
      "56 mapped columns; 5 flows; 5 screens; 95% on-time resolution; automated audit trail.",
      "Mapped Columns: 56",
      "Accept Window: 72 Hours",
      "Auto Close: 30 Days",
      "Role: Service request lifecycle & routing framework"
    ],
    "category": "enterprise",
    "cardColor": "#059669",
    "bgGradient": "from-[#047857] to-[#022c22]",
    "accentHex": "#34d399",
    "tags": [
      "Power Apps",
      "Power Automate",
      "SharePoint",
      "Dataverse"
    ],
    "metrics": [
      {
        "label": "Mapped Columns",
        "value": "56"
      },
      {
        "label": "Accept Window",
        "value": "72 Hours"
      },
      {
        "label": "Auto Close",
        "value": "30 Days"
      }
    ],
    "timeline": "2025",
    "linkText": "EXPLORE ARCHITECTURE",
    "demoUrl": "https://altechsolutionportofilo.vercel.app",
    "repoUrl": "https://github.com/altechsolution123/it-support-service-request",
    "architecturePoints": [
      "5 custom Power Apps screens covering Ticket Entry, Dispatcher Triage, Tech Workbench, Requester Review, and Metrics",
      "Automated timer flow monitoring 72-hour customer satisfaction rating countdown",
      "Escalation notification triggered at 80% Service Level Agreement elapsed time"
    ]
  },
  {
    "id": "infosec-doc-register",
    "title": "Information Security Group Documentation Register",
    "subtitle": "Publication Control & Reader Permissions Governance",
    "description": "Document metadata and reader permissions were maintained with weak publication control and zero audit history on Lotus Notes. Implemented an Author Submit → Owner Review → Publish with Reader Permissions workflow.",
    "fullOverview": "Implemented an Author Submit → Owner Review → Publish with Reader Permissions workflow. 100% controlled, auditable publishing across all information security policies.",
    "challenge": "Document metadata and reader permissions were maintained with weak publication control and zero audit history on Lotus Notes.",
    "solution": "Implemented an Author Submit → Owner Review → Publish with Reader Permissions workflow.",
    "results": [
      "100% controlled, auditable publishing across all information security policies.",
      "Security Governance: 100%",
      "Audit Compliance: ISO 27001",
      "Permission Drifts: 0",
      "Role: Publication control & reader permissions governance"
    ],
    "category": "workflow",
    "cardColor": "#1e3a8a",
    "bgGradient": "from-[#1e3a8a] to-[#172554]",
    "accentHex": "#3b82f6",
    "tags": [
      "Power Apps",
      "Power Automate",
      "SharePoint"
    ],
    "metrics": [
      {
        "label": "Security Governance",
        "value": "100%"
      },
      {
        "label": "Audit Compliance",
        "value": "ISO 27001"
      },
      {
        "label": "Permission Drifts",
        "value": "0"
      }
    ],
    "timeline": "2025",
    "linkText": "EXPLORE ARCHITECTURE",
    "demoUrl": "https://altechsolutionportofilo.vercel.app",
    "repoUrl": "https://github.com/altechsolution123/infosec-doc-register",
    "architecturePoints": [
      "Dynamic SharePoint item-level permission inheritance breaking on publication",
      "Automated reader group assignment based on classification tier (Public, Internal, Confidential, Restricted)",
      "Periodic access certification reminder flows"
    ]
  },
  {
    "id": "it-server-checklist",
    "title": "Information Technology Server Health & Audit Checklist",
    "subtitle": "Standardized Weekly Server Audit & Hardware Diagnostics",
    "description": "Weekly server health notes were captured outside a numbered audit register, resulting in overlooked disk space warnings and unpatched servers. Standardized a weekly audit with numbering: `Server Checklist-[year]-[week]-[sequence]`. Captures processor, memory, drives, and OS patch updates. Follows a Technician Submit → Systems Manager Review workflow.",
    "fullOverview": "Standardized a weekly audit with numbering: `Server Checklist-[year]-[week]-[sequence]`. Captures processor, memory, drives, and OS patch updates. Follows a Technician Submit → Systems Manager Review workflow. 5 screens; 100% weekly audit adherence; proactive hardware failure prevention.",
    "challenge": "Weekly server health notes were captured outside a numbered audit register, resulting in overlooked disk space warnings and unpatched servers.",
    "solution": "Standardized a weekly audit with numbering: `Server Checklist-[year]-[week]-[sequence]`. Captures processor, memory, drives, and OS patch updates. Follows a Technician Submit → Systems Manager Review workflow.",
    "results": [
      "5 screens; 100% weekly audit adherence; proactive hardware failure prevention.",
      "Audit Adherence: 100%",
      "Failure Warning: Proactive",
      "Audit Traceability: Standardized",
      "Role: Standard weekly audit checklist + review workflow"
    ],
    "category": "enterprise",
    "cardColor": "#0f766e",
    "bgGradient": "from-[#115e59] to-[#042f2e]",
    "accentHex": "#2dd4bf",
    "tags": [
      "Power Apps",
      "Power Automate",
      "SharePoint"
    ],
    "metrics": [
      {
        "label": "Audit Adherence",
        "value": "100%"
      },
      {
        "label": "Failure Warning",
        "value": "Proactive"
      },
      {
        "label": "Audit Traceability",
        "value": "Standardized"
      }
    ],
    "timeline": "2025",
    "linkText": "EXPLORE ARCHITECTURE",
    "demoUrl": "https://altechsolutionportofilo.vercel.app",
    "repoUrl": "https://github.com/altechsolution123/it-server-checklist",
    "architecturePoints": [
      "Auto-numbering formula: Server Checklist-[YYYY]-[WW]-[####]",
      "Dynamic thresholds highlighting memory/disk capacity over 85% in red",
      "Manager sign-off notification with one-click approval summary"
    ]
  },
  {
    "id": "ioi-domino-dataverse",
    "title": "IOI Domino → Dataverse Enterprise Architecture",
    "subtitle": "Enterprise-wide modernization of 361 Lotus Domino applications",
    "description": "361 Lotus Domino applications across 28+ departments were end-of-life, with no path forward and massive maintenance overhead. Designed Dataverse-first architecture with MainDB parent tables, polymorphic child lookups, Business Unit hierarchy, Security Role inheritance, and Field Security Profiles. SharePoint Online deployed as interim staging layer to avoid RM4.2M/yr premium licensing — with documented migration path to Dataverse as production target.",
    "fullOverview": "Designed Dataverse-first architecture with MainDB parent tables, polymorphic child lookups, Business Unit hierarchy, Security Role inheritance, and Field Security Profiles. SharePoint Online deployed as interim staging layer to avoid RM4.2M/yr premium licensing — with documented migration path to Dataverse as production target. 361 forms catalogued; 28+ Dataverse tables; 16 production apps; 12+ C# plugins; 70% faster delivery with AI-assisted development.",
    "challenge": "361 Lotus Domino applications across 28+ departments were end-of-life, with no path forward and massive maintenance overhead.",
    "solution": "Designed Dataverse-first architecture with MainDB parent tables, polymorphic child lookups, Business Unit hierarchy, Security Role inheritance, and Field Security Profiles. SharePoint Online deployed as interim staging layer to avoid RM4.2M/yr premium licensing — with documented migration path to Dataverse as production target.",
    "results": [
      "361 forms catalogued; 28+ Dataverse tables; 16 production apps; 12+ C# plugins; 70% faster delivery with AI-assisted development.",
      "Forms Catalogued: 361",
      "Dataverse Tables: 28+",
      "Production Apps: 16",
      "C# Plugins: 12+",
      "Role: Lead Solution Architect & Power Apps Rebuild Slice Delivery"
    ],
    "category": "enterprise",
    "cardColor": "#4338ca",
    "bgGradient": "from-[#3730a3] to-[#1e1b4b]",
    "accentHex": "#818cf8",
    "tags": [
      "Dataverse",
      "Power Apps",
      "C# Plugins",
      "React 19",
      "TypeScript",
      "Power Automate",
      "GitHub Actions"
    ],
    "metrics": [
      {
        "label": "Forms Catalogued",
        "value": "361"
      },
      {
        "label": "Dataverse Tables",
        "value": "28+"
      },
      {
        "label": "Production Apps",
        "value": "16"
      },
      {
        "label": "C# Plugins",
        "value": "12+"
      }
    ],
    "timeline": "Jun 2026",
    "linkText": "EXPLORE ARCHITECTURE",
    "demoUrl": "https://altechsolutionportofilo.vercel.app",
    "repoUrl": "https://github.com/altechsolution123/ioi-domino-dataverse",
    "architecturePoints": [
      "MainDB_{Dept} parent tables with FormCode discriminator column",
      "Child task tables with polymorphic lookups for cross-departmental relationships",
      "Business Unit hierarchy enabling departmental data isolation",
      "5-tier Security Role inheritance for approval workflows",
      "Field Security Profiles for Personally Identifiable Information and financial data columns",
      "Alternate keys for Oracle Enterprise Resource Planning bidirectional sync"
    ]
  },
  {
    "id": "ai-dev-pipeline",
    "title": "AI-Enabled Development Pipeline",
    "subtitle": "50+ specialized AI agents across 12 automated workflow pipelines",
    "description": "Manual form migration and development cycles were slow and inconsistent across 361 applications. Built 50+ specialized AI agents organized into 12 automated workflow pipelines — form migration, TypeScript React development, Canvas screen generation, Quality Assurance testing, and governance auditing. Each agent uses Azure OpenAI (GPT-4o) with Retrieval-Augmented Generation architecture grounded in Dataverse schema docs and PA YAML v3.0 reference. Data Loss Prevention policies enforce data classification and prevent Personally Identifiable Information leakage.",
    "fullOverview": "Built 50+ specialized AI agents organized into 12 automated workflow pipelines — form migration, TypeScript React development, Canvas screen generation, Quality Assurance testing, and governance auditing. Each agent uses Azure OpenAI (GPT-4o) with Retrieval-Augmented Generation architecture grounded in Dataverse schema docs and PA YAML v3.0 reference. Data Loss Prevention policies enforce data classification and prevent Personally Identifiable Information leakage. 70% reduction in form migration effort; 50+ AI agents; 12 automated pipelines.",
    "challenge": "Manual form migration and development cycles were slow and inconsistent across 361 applications.",
    "solution": "Built 50+ specialized AI agents organized into 12 automated workflow pipelines — form migration, TypeScript React development, Canvas screen generation, Quality Assurance testing, and governance auditing. Each agent uses Azure OpenAI (GPT-4o) with Retrieval-Augmented Generation architecture grounded in Dataverse schema docs and PA YAML v3.0 reference. Data Loss Prevention policies enforce data classification and prevent Personally Identifiable Information leakage.",
    "results": [
      "70% reduction in form migration effort; 50+ AI agents; 12 automated pipelines.",
      "AI Agents: 50+",
      "Pipelines: 12",
      "Effort Reduction: 70%",
      "Role: AI agent architecture & pipeline orchestration"
    ],
    "category": "ai",
    "cardColor": "#b45309",
    "bgGradient": "from-[#92400e] to-[#451a03]",
    "accentHex": "#f59e0b",
    "tags": [
      "Azure OpenAI",
      "GitHub Copilot",
      "Python",
      "TypeScript",
      "Copilot Studio",
      "Data Loss Prevention Guardrails"
    ],
    "metrics": [
      {
        "label": "AI Agents",
        "value": "50+"
      },
      {
        "label": "Pipelines",
        "value": "12"
      },
      {
        "label": "Effort Reduction",
        "value": "70%"
      }
    ],
    "timeline": "Apr 2026",
    "linkText": "EXPLORE ARCHITECTURE",
    "demoUrl": "https://altechsolutionportofilo.vercel.app",
    "repoUrl": "https://github.com/altechsolution123/ai-dev-pipeline",
    "architecturePoints": [
      "Azure OpenAI GPT-4o with Retrieval-Augmented Generation architecture grounded in Dataverse schema documentation",
      "PA YAML v3.0 reference corpus for Canvas screen generation agents",
      "Data Loss Prevention policies enforcing data classification and Personally Identifiable Information leakage prevention",
      "Automated Quality Assurance testing agents validating solution checker compliance on every Pull Request"
    ]
  },
  {
    "id": "eprocurement-oracle",
    "title": "E-Procurement & Oracle Enterprise Resource Planning Integration",
    "subtitle": "End-to-end procurement suite on Dataverse with bidirectional Oracle sync",
    "description": "Procurement processes were manual with no Enterprise Resource Planning integration, causing data entry duplication and budget control gaps. Built end-to-end procurement suite on Dataverse — Purchase Requisition with Letter of Authority routing, Purchase Orders with multi-vendor splits, Capital in Progress Capex Budget Control, and Supplier Pre-Qualification Questionnaire Supplier Portal. Bidirectional Oracle PowerBiz Enterprise Resource Planning sync via Custom Connectors with C# Dataverse Plugins enforcing business rules at the data layer. Field Security Profiles on Purchase Order amounts and vendor financial data.",
    "fullOverview": "Built end-to-end procurement suite on Dataverse — Purchase Requisition with Letter of Authority routing, Purchase Orders with multi-vendor splits, Capital in Progress Capex Budget Control, and Supplier Pre-Qualification Questionnaire Supplier Portal. Bidirectional Oracle PowerBiz Enterprise Resource Planning sync via Custom Connectors with C# Dataverse Plugins enforcing business rules at the data layer. Field Security Profiles on Purchase Order amounts and vendor financial data. 5 procurement modules; 100% Enterprise Resource Planning sync rate; 200+ vendor portal users.",
    "challenge": "Procurement processes were manual with no Enterprise Resource Planning integration, causing data entry duplication and budget control gaps.",
    "solution": "Built end-to-end procurement suite on Dataverse — Purchase Requisition with Letter of Authority routing, Purchase Orders with multi-vendor splits, Capital in Progress Capex Budget Control, and Supplier Pre-Qualification Questionnaire Supplier Portal. Bidirectional Oracle PowerBiz Enterprise Resource Planning sync via Custom Connectors with C# Dataverse Plugins enforcing business rules at the data layer. Field Security Profiles on Purchase Order amounts and vendor financial data.",
    "results": [
      "5 procurement modules; 100% Enterprise Resource Planning sync rate; 200+ vendor portal users.",
      "Procurement Modules: 5",
      "Enterprise Resource Planning Sync Rate: 100%",
      "Vendor Portal Users: 200+",
      "Role: Procurement architecture & Enterprise Resource Planning integration lead"
    ],
    "category": "enterprise",
    "cardColor": "#dc2626",
    "bgGradient": "from-[#991b1b] to-[#450a0a]",
    "accentHex": "#ef4444",
    "tags": [
      "Dataverse",
      "C# Plugins",
      "Power Apps Canvas",
      "Custom Connectors",
      "Oracle Enterprise Resource Planning",
      "Power Automate"
    ],
    "metrics": [
      {
        "label": "Procurement Modules",
        "value": "5"
      },
      {
        "label": "Enterprise Resource Planning Sync Rate",
        "value": "100%"
      },
      {
        "label": "Vendor Portal Users",
        "value": "200+"
      }
    ],
    "timeline": "Nov 2025",
    "linkText": "EXPLORE ARCHITECTURE",
    "demoUrl": "https://altechsolutionportofilo.vercel.app",
    "repoUrl": "https://github.com/altechsolution123/eprocurement-oracle",
    "architecturePoints": [
      "Custom Connectors for bidirectional Oracle PowerBiz Enterprise Resource Planning synchronization",
      "C# Dataverse Plugins on Pre/Post-Operation pipeline enforcing business rules at data layer",
      "Field Security Profiles on Purchase Order amounts and vendor financial data",
      "Multi-vendor Purchase Order split logic with capex budget control validation"
    ]
  },
  {
    "id": "leadflow",
    "title": "LeadFlow",
    "subtitle": "Task & Progress Management System",
    "description": "Task tracking was fragmented across channels with no real-time visibility into team progress. Built a task tracking and progress management system on the Lark ecosystem with automated progress aggregation and Power BI dashboards.",
    "fullOverview": "Built a task tracking and progress management system on the Lark ecosystem with automated progress aggregation and Power BI dashboards. 40% increase in task completion; 100% real-time visibility; 95% team adoption.",
    "challenge": "Task tracking was fragmented across channels with no real-time visibility into team progress.",
    "solution": "Built a task tracking and progress management system on the Lark ecosystem with automated progress aggregation and Power BI dashboards.",
    "results": [
      "40% increase in task completion; 100% real-time visibility; 95% team adoption.",
      "Task Completion: +40%",
      "Real-Time Tracking: 100%",
      "Team Adoption: 95%",
      "Role: Task tracking & progress management architecture"
    ],
    "category": "analytics",
    "cardColor": "#0284c7",
    "bgGradient": "from-[#0369a1] to-[#082f49]",
    "accentHex": "#38bdf8",
    "tags": [
      "Lark Task",
      "Lark Automation",
      "Lark Base",
      "Power BI"
    ],
    "metrics": [
      {
        "label": "Task Completion",
        "value": "+40%"
      },
      {
        "label": "Real-Time Tracking",
        "value": "100%"
      },
      {
        "label": "Team Adoption",
        "value": "95%"
      }
    ],
    "timeline": "Nov 2024",
    "linkText": "EXPLORE ARCHITECTURE",
    "demoUrl": "https://altechsolutionportofilo.vercel.app",
    "repoUrl": "https://github.com/altechsolution123/leadflow",
    "architecturePoints": [
      "Lark Task integration with automated progress roll-up",
      "Lark Base backend with departmental task categorization",
      "Power BI dashboards for real-time team progress visibility"
    ]
  },
  {
    "id": "leavesync",
    "title": "LeaveSync",
    "subtitle": "Smart Leave Management System",
    "description": "Leave requests were processed manually with slow approval cycles and poor tracking accuracy. Automated leave management system with intelligent routing and approval workflows on the Lark ecosystem.",
    "fullOverview": "Automated leave management system with intelligent routing and approval workflows on the Lark ecosystem. 60% faster processing; 60% faster approvals; 90% tracking accuracy.",
    "challenge": "Leave requests were processed manually with slow approval cycles and poor tracking accuracy.",
    "solution": "Automated leave management system with intelligent routing and approval workflows on the Lark ecosystem.",
    "results": [
      "60% faster processing; 60% faster approvals; 90% tracking accuracy.",
      "Processing Speed: +60%",
      "Approval Speed: +60%",
      "Tracking Accuracy: 90%",
      "Role: Leave management & approval workflow design"
    ],
    "category": "workflow",
    "cardColor": "#7c3aed",
    "bgGradient": "from-[#6d28d9] to-[#2e1065]",
    "accentHex": "#a78bfa",
    "tags": [
      "Lark Base",
      "Lark Automation",
      "Lark Chat"
    ],
    "metrics": [
      {
        "label": "Processing Speed",
        "value": "+60%"
      },
      {
        "label": "Approval Speed",
        "value": "+60%"
      },
      {
        "label": "Tracking Accuracy",
        "value": "90%"
      }
    ],
    "timeline": "Sep 2024",
    "linkText": "EXPLORE ARCHITECTURE",
    "demoUrl": "https://altechsolutionportofilo.vercel.app",
    "repoUrl": "https://github.com/altechsolution123/leavesync",
    "architecturePoints": [
      "Lark Base leave balance tracking with automatic accrual calculation",
      "Lark Automation approval routing based on department hierarchy",
      "Lark Chat notifications for approval status updates"
    ]
  },
  {
    "id": "marketpoint",
    "title": "MarketPoint",
    "subtitle": "Global Insurance Provider Point of Contact Monitoring System",
    "description": "Point-of-contact monitoring for Global Insurance Provider operations was manual with slow issue resolution across markets. Built a dedicated Point of Contact monitoring system for Global Insurance Provider operations with automated issue tracking and resolution workflows.",
    "fullOverview": "Built a dedicated Point of Contact monitoring system for Global Insurance Provider operations with automated issue tracking and resolution workflows. 40% monitoring efficiency gain; 50% faster issue resolution; 12 markets covered.",
    "challenge": "Point-of-contact monitoring for Global Insurance Provider operations was manual with slow issue resolution across markets.",
    "solution": "Built a dedicated Point of Contact monitoring system for Global Insurance Provider operations with automated issue tracking and resolution workflows.",
    "results": [
      "40% monitoring efficiency gain; 50% faster issue resolution; 12 markets covered.",
      "Monitoring Efficiency: +40%",
      "Issue Resolution: +50%",
      "Markets Covered: 12",
      "Role: Point of Contact monitoring & issue resolution architecture"
    ],
    "category": "analytics",
    "cardColor": "#059669",
    "bgGradient": "from-[#047857] to-[#022c22]",
    "accentHex": "#34d399",
    "tags": [
      "Lark Base",
      "Lark Automation",
      "Power BI"
    ],
    "metrics": [
      {
        "label": "Monitoring Efficiency",
        "value": "+40%"
      },
      {
        "label": "Issue Resolution",
        "value": "+50%"
      },
      {
        "label": "Markets Covered",
        "value": "12"
      }
    ],
    "timeline": "Mar 2024",
    "linkText": "EXPLORE ARCHITECTURE",
    "demoUrl": "https://altechsolutionportofilo.vercel.app",
    "repoUrl": "https://github.com/altechsolution123/marketpoint",
    "architecturePoints": [
      "Lark Base market-specific Point of Contact tracking with automated escalation",
      "Lark Automation issue routing based on market and severity",
      "Power BI dashboards for cross-market monitoring visibility"
    ]
  },
  {
    "id": "gameintel",
    "title": "GameIntel",
    "subtitle": "Real-Time Event Alert System",
    "description": "Game moderators relied on external searches to identify and label events, causing delays and inconsistent accuracy. Built an instant event alert system for game moderators using REST API integration with automated labeling and Lark Chat delivery.",
    "fullOverview": "Built an instant event alert system for game moderators using REST API integration with automated labeling and Lark Chat delivery. 80% reduction in external searches; 40% labeling accuracy boost; sub-second alert latency.",
    "challenge": "Game moderators relied on external searches to identify and label events, causing delays and inconsistent accuracy.",
    "solution": "Built an instant event alert system for game moderators using REST API integration with automated labeling and Lark Chat delivery.",
    "results": [
      "80% reduction in external searches; 40% labeling accuracy boost; sub-second alert latency.",
      "External Search Cut: -80%",
      "Labeling Accuracy: +40%",
      "Alert Latency: <1s",
      "Role: Event alert & REST API integration architecture"
    ],
    "category": "workflow",
    "cardColor": "#1e3a8a",
    "bgGradient": "from-[#1e3a8a] to-[#172554]",
    "accentHex": "#3b82f6",
    "tags": [
      "Game Data REST APIs",
      "Lark Automation",
      "Lark Chat"
    ],
    "metrics": [
      {
        "label": "External Search Cut",
        "value": "-80%"
      },
      {
        "label": "Labeling Accuracy",
        "value": "+40%"
      },
      {
        "label": "Alert Latency",
        "value": "<1s"
      }
    ],
    "timeline": "Jan 2024",
    "linkText": "EXPLORE ARCHITECTURE",
    "demoUrl": "https://altechsolutionportofilo.vercel.app",
    "repoUrl": "https://github.com/altechsolution123/gameintel",
    "architecturePoints": [
      "REST API integration with game data providers for real-time event ingestion",
      "Lark Automation event classification and labeling pipeline",
      "Lark Chat instant alert delivery to moderator channels"
    ]
  },
  {
    "id": "worksync",
    "title": "WorkSync",
    "subtitle": "Productivity & Attendance Tracker",
    "description": "Productivity and attendance tracking was manual with no real-time insights for team leads. Built a smart productivity and attendance tracking platform with automated time tracking and Power BI dashboards.",
    "fullOverview": "Built a smart productivity and attendance tracking platform with automated time tracking and Power BI dashboards. 30% productivity increase; 100% attendance accuracy; 98% team adoption.",
    "challenge": "Productivity and attendance tracking was manual with no real-time insights for team leads.",
    "solution": "Built a smart productivity and attendance tracking platform with automated time tracking and Power BI dashboards.",
    "results": [
      "30% productivity increase; 100% attendance accuracy; 98% team adoption.",
      "Productivity Increase: +30%",
      "Attendance Accuracy: 100%",
      "Team Adoption: 98%",
      "Role: Productivity tracking & attendance automation"
    ],
    "category": "analytics",
    "cardColor": "#0f766e",
    "bgGradient": "from-[#115e59] to-[#042f2e]",
    "accentHex": "#2dd4bf",
    "tags": [
      "Lark Automation",
      "Lark Base",
      "Power BI"
    ],
    "metrics": [
      {
        "label": "Productivity Increase",
        "value": "+30%"
      },
      {
        "label": "Attendance Accuracy",
        "value": "100%"
      },
      {
        "label": "Team Adoption",
        "value": "98%"
      }
    ],
    "timeline": "Nov 2023",
    "linkText": "EXPLORE ARCHITECTURE",
    "demoUrl": "https://altechsolutionportofilo.vercel.app",
    "repoUrl": "https://github.com/altechsolution123/worksync",
    "architecturePoints": [
      "Lark Automation automated time tracking with shift scheduling",
      "Lark Base attendance records with anomaly detection",
      "Power BI real-time productivity dashboards for team leads"
    ]
  },
  {
    "id": "aht-optimization",
    "title": "Average Handling Time Optimization Initiative",
    "subtitle": "Data-driven Average Handling Time reduction",
    "description": "Average Handling Time across customer service operations was high with no data-driven optimization strategy. Data-driven initiative to reduce Average Handling Time through automated workflow optimization, Power BI analytics, and process streamlining across 8 teams.",
    "fullOverview": "Data-driven initiative to reduce Average Handling Time through automated workflow optimization, Power BI analytics, and process streamlining across 8 teams. 15% Average Handling Time reduction; 24 processes optimized; 8 teams impacted.",
    "challenge": "Average Handling Time across customer service operations was high with no data-driven optimization strategy.",
    "solution": "Data-driven initiative to reduce Average Handling Time through automated workflow optimization, Power BI analytics, and process streamlining across 8 teams.",
    "results": [
      "15% Average Handling Time reduction; 24 processes optimized; 8 teams impacted.",
      "Average Handling Time Reduction: -15%",
      "Processes Optimized: 24",
      "Teams Impacted: 8",
      "Role: Process optimization & analytics lead"
    ],
    "category": "analytics",
    "cardColor": "#4338ca",
    "bgGradient": "from-[#3730a3] to-[#1e1b4b]",
    "accentHex": "#818cf8",
    "tags": [
      "Power Automate",
      "Power BI"
    ],
    "metrics": [
      {
        "label": "Average Handling Time Reduction",
        "value": "-15%"
      },
      {
        "label": "Processes Optimized",
        "value": "24"
      },
      {
        "label": "Teams Impacted",
        "value": "8"
      }
    ],
    "timeline": "Sep 2023",
    "linkText": "EXPLORE ARCHITECTURE",
    "demoUrl": "https://altechsolutionportofilo.vercel.app",
    "repoUrl": "https://github.com/altechsolution123/aht-optimization",
    "architecturePoints": [
      "Power BI analytics identifying Average Handling Time bottlenecks by process and team",
      "Power Automate workflow optimization for high-duration processes",
      "Process streamlining with standardized handling procedures across 8 teams"
    ]
  }
];

export const timelineData: TimelineItem[] = [
  {
    id: "exp-meraki-2025",
    role: "Power Platform Solution Manager & Enterprise Architect",
    company: "Meraki Malaysia / Independent Consulting",
    location: "Kuala Lumpur, Malaysia",
    period: "2025 — Present",
    type: "experience",
    category: "architect",
    featured: true,
    description: [
      "Leading enterprise Power Platform architecture, automation strategy, and digital transformation initiatives across client ecosystems.",
      "Designing scalable Canvas App and Power Automate solutions integrated with SharePoint Online and Dataverse.",
      "Implementing enterprise ALM pipelines (Dev → Build → Test → Prod) with Azure DevOps and GitHub Actions using Power Platform Build Tools (PAC CLI).",
      "Deploying AI-assisted development workflows with domain-specific Copilot agents and DLP governance guardrails."
    ],
    tags: ["Power Platform", "Dataverse", "Enterprise ALM", "Azure DevOps", "Copilot Studio", "C# Plugins"],
    metrics: [
      { label: "ALM Pipelines", value: "12" },
      { label: "Delivery Speedup", value: "+70%" },
      { label: "Target Tables", value: "50+" }
    ]
  },
  {
    id: "exp-ioi-group-2024",
    role: "Enterprise Power Platform & Dynamics 365 Solution Architect",
    company: "IOI Corporation Berhad (Palm Oil, Oleochemicals, Property)",
    location: "Penang & Johor, Malaysia",
    period: "2024 — 2026",
    type: "experience",
    category: "architect",
    featured: true,
    description: [
      "Led the enterprise-wide digital modernization of 361 legacy Lotus Domino business applications across 28+ departments for over 2,000 enterprise users.",
      "Designed and executed a deliberate two-phase architecture: Phase 1 deployed 16 production Power Apps using SharePoint Online as an interim staging store, eliminating RM4.2M ($960K/yr) in premium licensing during rapid migration.",
      "Engineered the Phase 2 Dataverse Migration Blueprint featuring full relational data modeling, Business Unit hierarchy, Security Role inheritance, Field Security Profiles, polymorphic lookups, and managed solution ALM.",
      "Built C# Dataverse Plugins (Pre/Post-Operation stages) and custom PCF Controls (TypeScript/React 19) for enterprise grid rendering.",
      "Architected the E-Procurement suite with bidirectional Oracle ERP integration and the Tasek Cement 5-tier GxP-compliant rebate approval workflow (cutting turnaround from 2–3 days to 15 minutes)."
    ],
    tags: ["Dataverse", "Lotus Domino Migration", "Power Apps", "Power Automate", "C# Plugins", "PCF Controls", "Oracle ERP", "GxP Compliance"],
    metrics: [
      { label: "Domino Forms", value: "361" },
      { label: "Production Apps", value: "16" },
      { label: "Cost Saved", value: "RM4.2M/yr" },
      { label: "Turnaround Cut", value: "15 Mins vs 3 Days" }
    ]
  },
  {
    id: "exp-concentrix-2023",
    role: "Team Leader, Operations & Certified Lark Developer",
    company: "Concentrix",
    location: "Kuala Lumpur, Malaysia",
    period: "2023 — 2025",
    type: "experience",
    category: "operations",
    featured: true,
    description: [
      "Drove AI-powered workflow automation, performance management, and team scaling across high-volume customer service operations.",
      "Built 8 Lark ecosystem productivity tools (DocFinder AI search, LeadFlow task tracker, LeaveSync, AskLark query resolver, WorkSync attendance).",
      "Earned Certified Lark Developer credential, building enterprise bots, Base automations, and real-time executive Power BI dashboards.",
      "Implemented CS Resolver AI ticket triage using Microsoft AI Builder, cutting handling times by 65% across 120+ SOP categories."
    ],
    tags: ["Lark Developer", "Power BI", "AI Builder", "Operations Management", "CS Resolver", "Workforce Planning"],
    metrics: [
      { label: "Lark Tools Built", value: "8" },
      { label: "AHT Reduction", value: "-25%" },
      { label: "SOP Categories", value: "120+" }
    ]
  },
  {
    id: "exp-powerplatform-pioneer-2021",
    role: "Power Platform Operations Floor Pioneer",
    company: "BPO Operations",
    location: "Kuala Lumpur, Malaysia",
    period: "2021 — 2023",
    type: "experience",
    category: "architect",
    featured: false,
    description: [
      "Self-taught developer who pioneered internal low-code adoption during COVID-19 on the operations floor.",
      "Built end-to-end operational tools using Power Apps, Power Automate, and SharePoint to manage teams, track KPIs, and automate shift workflows.",
      "Engineered PulseTrack workforce telemetry, replacing manual WhatsApp reporting and saving 70% of manager administrative overhead."
    ],
    tags: ["Power Apps", "Power Automate", "SharePoint Online", "Process Automation", "PulseTrack"],
    metrics: [
      { label: "Reporting Overhead", value: "-90%" },
      { label: "Tracking Accuracy", value: "98%" }
    ]
  },
  {
    id: "exp-accenture-2017",
    role: "Service Delivery Operations Senior Team Lead & Data Analyst",
    company: "Accenture",
    location: "Kuala Lumpur, Malaysia",
    period: "2017 — 2022",
    type: "experience",
    category: "operations",
    featured: true,
    description: [
      "Advanced rapidly from Data Analyst to Senior Team Lead over 5+ years, managing cross-functional service delivery operations for enterprise global accounts.",
      "Scaled and led high-performing multilingual teams of up to 34 members across 7 international markets with sustained >98% SLA compliance.",
      "Applied Six Sigma DMAIC methodologies and statistical analysis to eliminate operational bottlenecks, reduce AHT by 25%, and achieve <5% annualized team attrition.",
      "Awarded the prestigious Accenture Diamond Award for outstanding operational excellence and client delivery impact."
    ],
    tags: ["Accenture Diamond Award", "Six Sigma DMAIC", "SLA Management", "34 FTE Leadership", "Service Delivery", "Global Accounts"],
    metrics: [
      { label: "Direct Reports", value: "34" },
      { label: "SLA Benchmark", value: "98%+" },
      { label: "Markets Handled", value: "7" }
    ]
  },
  {
    id: "exp-early-career-2017",
    role: "Digital Marketing Specialist & Data Analyst",
    company: "TheLorry & Deloitte",
    location: "Kuala Lumpur, Malaysia",
    period: "2017",
    type: "experience",
    category: "academic",
    featured: false,
    description: [
      "Started professional career with a 3-month data analytics stint at Deloitte followed by Digital Marketing Specialist role at TheLorry.",
      "Analyzed service delivery conversion funnels, customer acquisition metrics, and operational performance indicators."
    ],
    tags: ["Data Analytics", "Performance Tracking", "Digital Strategy"],
    metrics: [
      { label: "Conversion Funnels", value: "Analyzed" }
    ]
  },
  {
    id: "edu-uum-2013",
    role: "Bachelor of International Business Management (Honours)",
    company: "Universiti Utara Malaysia (UUM)",
    location: "Sintok, Kedah, Malaysia",
    period: "2013 — 2016",
    type: "education",
    category: "academic",
    featured: true,
    description: [
      "Graduated with Honours in International Business Management, Minor in Logistics & Transportation.",
      "Recipient of the competitive UUM International Scheme Scholarship.",
      "3-time recipient of the Dean’s Academic Award for outstanding scholastic excellence.",
      "Served as Executive for Integration, Community, and International Affairs at UUM Student Representative Council."
    ],
    tags: ["Honours Degree", "Logistics Minor", "Dean’s Award 3x", "International Scholarship", "Student Leadership"],
    metrics: [
      { label: "Dean’s List", value: "3x Award" },
      { label: "Scholarship", value: "Full Merit" }
    ]
  }
];

export const skillsCategories: SkillCategory[] = [
  {
    title: "Microsoft Power Platform & Dataverse",
    subtitle: "Enterprise Low-Code, Model-Driven & Data Architecture",
    iconName: "Layers",
    skills: [
      { name: "Power Apps (Canvas & Model-Driven)", level: "Production-Grade", highlight: true, yearsOrScope: "16+ Prod Apps" },
      { name: "Dataverse Data Architecture", level: "Enterprise Architect", highlight: true, yearsOrScope: "50+ Target Tables" },
      { name: "Power Automate (Cloud & Desktop RPA)", level: "Expert", highlight: true, yearsOrScope: "100+ Workflows" },
      { name: "Power Pages & Portals", level: "Advanced", yearsOrScope: "Vendor Portals" },
      { name: "Power Fx Expressions", level: "Expert", highlight: true, yearsOrScope: "Delegation-safe" },
      { name: "Power Platform CLI (PAC)", level: "Advanced", yearsOrScope: "ALM Automation" },
      { name: "Center of Excellence (CoE) Starter Kit", level: "Architect", yearsOrScope: "DLP & Governance" },
      { name: "Solution Segmentation & ALM", level: "Expert", highlight: true, yearsOrScope: "Managed Solutions" },
      { name: "Dynamics 365 Customization", level: "Advanced", yearsOrScope: "CRM & Field Security" }
    ]
  },
  {
    title: "Code-First, React & Full-Stack",
    subtitle: "Modern Web Engineering, C# Extensibility & PCF",
    iconName: "Code",
    skills: [
      { name: "TypeScript", level: "Advanced", highlight: true, yearsOrScope: "Strict Type Safety" },
      { name: "React 19 & Next.js", level: "Advanced", highlight: true, yearsOrScope: "Enterprise SPAs" },
      { name: "C# Dataverse Plugins", level: "Advanced", highlight: true, yearsOrScope: "Pre/Post Stages" },
      { name: "Power Apps Component Framework (PCF)", level: "Advanced", yearsOrScope: "Custom UI Controls" },
      { name: "JavaScript (ES6+)", level: "Advanced", yearsOrScope: "Full-Stack" },
      { name: "SQL & T-SQL", level: "Advanced", yearsOrScope: "Relational Queries" },
      { name: "Python", level: "Proficient", yearsOrScope: "AI & Scripts" },
      { name: "REST APIs & Custom Connectors", level: "Expert", highlight: true, yearsOrScope: "Oracle/SAP Sync" }
    ]
  },
  {
    title: "Cloud, DevOps & Architecture Governance",
    subtitle: "Continuous Integration, Azure & Compliance",
    iconName: "GitBranch",
    skills: [
      { name: "Azure DevOps & Multi-Stage Pipelines", level: "Advanced", highlight: true, yearsOrScope: "CI/CD Deployment" },
      { name: "Git & GitHub Actions", level: "Advanced", highlight: true, yearsOrScope: "Automated Workflows" },
      { name: "Microsoft Azure Services", level: "Advanced", yearsOrScope: "App Services, Entra ID" },
      { name: "GxP & 21 CFR Part 11 Compliance", level: "Practitioner", highlight: true, yearsOrScope: "Immutable Audits" },
      { name: "OWASP Top 10 & DLP Policies", level: "Advanced", yearsOrScope: "Tenant Security" },
      { name: "WCAG 2.2 AA Accessibility", level: "Standard", yearsOrScope: "Inclusive UI Design" }
    ]
  },
  {
    title: "AI, Copilots & Intelligent Automation",
    subtitle: "Generative AI, Prompt Architecture & Lark Bots",
    iconName: "Bot",
    skills: [
      { name: "Microsoft Copilot Studio", level: "Advanced", highlight: true, yearsOrScope: "Enterprise Agents" },
      { name: "AI Builder NLP & Document Processing", level: "Expert", highlight: true, yearsOrScope: "120+ SOP Models" },
      { name: "Azure OpenAI & Custom Prompt Engineering", level: "Advanced", yearsOrScope: "LLM Orchestration" },
      { name: "50+ Multi-Agent AI Pipelines", level: "Lead Architect", highlight: true, yearsOrScope: "12 Workflows" },
      { name: "Lark Developer Platform & Bots", level: "Certified Developer", highlight: true, yearsOrScope: "8 Enterprise Tools" }
    ]
  },
  {
    title: "Operations, Service Delivery & Leadership",
    subtitle: "High-Volume BPO, SLA Optimization & Six Sigma",
    iconName: "TrendingUp",
    skills: [
      { name: "SLA & KPI Management (>98% Benchmark)", level: "Executive Lead", highlight: true, yearsOrScope: "7 Global Markets" },
      { name: "Six Sigma DMAIC Methodology", level: "Green Belt", highlight: true, yearsOrScope: "Root-Cause Triage" },
      { name: "Cross-Functional Team Leadership", level: "Senior Team Lead", highlight: true, yearsOrScope: "34 Direct Reports" },
      { name: "Workforce Management & Capacity Modeling", level: "Expert", yearsOrScope: "Shift Scheduling" },
      { name: "Stakeholder Management & Executive Reporting", level: "Director-Facing", yearsOrScope: "C-Level Reviews" },
      { name: "Process Mining & Bottleneck Resolution", level: "Expert", yearsOrScope: "24+ Processes Optimized" }
    ]
  }
];

export const certificationsData: CertificationItem[] = [
  {
    name: "Certified Lark Developer",
    issuer: "Lark (ByteDance)",
    status: "Verified Credential",
    year: "2024",
    verified: true,
    credentialUrl: "https://open.larksuite.com"
  },
  {
    name: "Accenture Diamond Award — Global Operational Impact",
    issuer: "Accenture",
    status: "Global Award Recipient",
    year: "2021",
    verified: true
  },
  {
    name: "Six Sigma Green Belt (DMAIC Optimization)",
    issuer: "Enterprise Quality Management",
    status: "Certified",
    year: "2022",
    verified: true
  },
  {
    name: "Microsoft Power Platform Solution Architecture & ALM",
    issuer: "Microsoft Certified",
    status: "Enterprise Practitioner",
    year: "2023",
    verified: true
  },
  {
    name: "Bachelor of International Business Management (Honours)",
    issuer: "Universiti Utara Malaysia (UUM)",
    status: "Dean’s Award Recipient (3x) & Scholarship",
    year: "2016",
    verified: true
  }
];

export const skillCategories = skillsCategories;

export const languagesData = [
  { language: "English", proficiency: "Full Professional Working Proficiency", level: "C1 / Advanced", flag: "🇬🇧" },
  { language: "Bahasa Indonesia", proficiency: "Native / Bilingual", level: "Native", flag: "🇮🇩" },
  { language: "Bahasa Melayu / Malay", proficiency: "Professional Working Proficiency", level: "Fluent", flag: "🇲🇾" }
];

