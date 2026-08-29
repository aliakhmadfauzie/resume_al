import { ArticleItem } from "../types";

export const initialArticlesData: ArticleItem[] = [
  {
    id: "art-lotus-domino-dataverse-migration",
    slug: "migrating-361-lotus-domino-applications-to-dataverse",
    title: "Architecting Enterprise Modernization: Migrating 361 Lotus Domino Applications to Dataverse & Saving RM4.2M/yr",
    date: "Jan 18, 2025",
    readTime: "7 min read",
    category: "architecture",
    featured: true,
    excerpt:
      "A deep dive into the dual-track architecture used at IOI Corporation: Phase 1 SharePoint Online staging layer to avoid $960K/yr in licensing, followed by Phase 2 Dataverse Target Blueprint with Business Units and C# Plugins.",
    tags: ["Dataverse", "Power Apps", "Lotus Domino Migration", "Enterprise Architecture", "C# Plugins", "ALM"],
    author: {
      name: "Ali Akhmad Fauzie",
      role: "Enterprise Power Platform & Dataverse Architect",
    },
    content: `## The Legacy Domino Modernization Challenge

In large manufacturing and plantation conglomerates like **IOI Corporation Berhad**, decades of critical operational business logic were locked inside **361 legacy Lotus Domino NSF databases** across 28+ business units. These applications suffered from severe technical debt:
- Unsupported on-premise servers and lack of modern authentication
- Opaque document schemas with no relational integrity
- Zero mobile capabilities for field and factory workers
- Escalating maintenance costs and licensing friction

---

## The Two-Phase Architectural Strategy

Rather than an impulsive "big-bang" replatforming, we engineered a deliberate **Two-Phase Architecture**:

### Phase 1: Rapid Interim Migration via SharePoint Online
- **Cost Optimization**: Deployed 16 production Power Apps using SharePoint Online strictly as an interim staging store.
- **License Avoidance**: Avoided **RM4.2M/year ($960K/yr)** in premium connector licensing during the immediate operational cutover.
- **Immediate User Adoption**: 2,000+ enterprise users transitioned with zero downtime and familiar Microsoft 365 authentication.

### Phase 2: The Dataverse Target Blueprint
- **Enterprise System of Record**: Dataverse is the ultimate target architecture for complex relational workloads.
- **Security Isolation**: Implemented Business Unit hierarchies, Security Role inheritance, and Field Security Profiles on sensitive financial data.
- **Polymorphic Lookups**: Designed MainDB parent tables with polymorphic child records to unify 64 workflow types.
- **C# Dataverse Plugins**: Enforced backend validation and business logic during Pre-Operation and Post-Operation pipeline stages.

---

## Application Lifecycle Management (ALM) & Governance

To guarantee enterprise compliance and audit readiness:

\`\`\`bash
# Export and unpack solution with PAC CLI
pac solution export --name IOI_Core_Enterprise --path ./export.zip --managed
pac solution unpack --zipfile ./export.zip --folder ./src/solutions/IOI_Core
git add . && git commit -m "feat(security): enforce Field Security Profile on rebate threshold"
\`\`\`

- **Environment Progression**: Dev → Build → Test → Prod with connection references and environment variables.
- **Automated Pull Request Checks**: Power Apps Solution Checker and ESLint validation for custom PCF controls.
- **GxP & Audit Logs**: Immutable transaction logs retaining historical modification signatures.

---

## Key Results
1. **361 Legacy Forms Catalogued & Modernized**: Zero data loss across 28+ business units.
2. **16 Production Power Apps**: Serving daily operations with 98%+ SLA compliance.
3. **RM4.2M/year License Cost Avoided**: Through strategic staged architecture.
4. **Sub-Second Response Times**: Powered by optimized Power Fx delegation-safe queries.
`
  },
  {
    id: "art-ai-dev-pipeline-governance",
    slug: "ai-enabled-development-pipeline-with-enterprise-governance",
    title: "AI-Enabled Development: Orchestrating 50+ Copilot Agents with DLP & Enterprise Governance",
    date: "Dec 12, 2024",
    readTime: "6 min read",
    category: "ai",
    featured: true,
    excerpt:
      "How we built 12 automated development pipelines with 50+ domain-specific AI agents, accelerating solution delivery speed by 70% while adhering to WCAG 2.2 AA and OWASP Top 10 standards.",
    tags: ["Copilot Studio", "Azure OpenAI", "AI Agents", "Governance", "DLP Policies", "DevOps"],
    author: {
      name: "Ali Akhmad Fauzie",
      role: "ALM & AI Engineering Lead",
    },
    content: `## Moving Beyond Generic AI Prompts

Enterprise low-code development moves rapidly, but scaling without governance invites security vulnerabilities, data leaks, and inconsistent quality. To accelerate development without compromising security, we architected an **AI-Enabled Development Pipeline**.

---

## The 12-Pipeline Architecture

We deployed **50+ specialized AI agents** across 12 distinct functional workflows:

1. **Power Fx Optimization Agent**: Scans Canvas App formulas for delegation warnings and optimizes Filter() and LookUp() execution trees.
2. **Dataverse Schema Validator**: Checks table definitions against normalization rules, relationship cardinalities, and naming conventions.
3. **C# Plugin Generator**: Generates strongly typed plugin boilerplate with execution context validation and ITracingService logging.
4. **PCF Control Scaffolder**: Builds TypeScript/React 19 component wrappers adhering to Fluent UI standards.
5. **Accessibility & WCAG 2.2 AA Auditor**: Identifies contrast issues, missing screen reader labels, and tab-navigation traps.
6. **OWASP Top 10 & Security Linter**: Detects hardcoded credentials, unvalidated inputs, and injection vectors.

---

## Enterprise DLP & Safety Guardrails

- **Data Loss Prevention (DLP)**: Enforced strict connector categorization in Power Platform Admin Center.
- **Content Filtering**: Azure OpenAI safety guardrails preventing prompt injection and data exfiltration.
- **Human-in-the-Loop Review**: 85% confidence gating—code and schema proposals below threshold require mandatory human architect sign-off.

---

## Measurable Impact
- **70% Faster Delivery Cycles**: Rapid prototyping and documentation generation.
- **100% Governance Compliance**: Every release complies with enterprise security and accessibility audits.
`
  },
  {
    id: "art-scaling-multilingual-ops-sla",
    slug: "scaling-multilingual-operations-34-fte-98-sla",
    title: "Scaling Multilingual Support Operations: Maintaining 98%+ SLA Compliance Across 7 Global Markets",
    date: "Nov 24, 2024",
    readTime: "5 min read",
    category: "operations",
    featured: true,
    excerpt:
      "How we scaled a customer support operations team from 9 to 34 FTEs, reduced average handle time by 25%, and sustained industry-leading SLA compliance using Six Sigma and real-time telemetry.",
    tags: ["Operations Leadership", "SLA Management", "Six Sigma", "PulseTrack", "Workforce Planning"],
    author: {
      name: "Ali Akhmad Fauzie",
      role: "Operations Delivery Leader & Six Sigma Green Belt",
    },
    content: `## The Scaling Dilemma in High-Volume Operations

Scaling a specialized customer support or BPO team rapidly often brings chaos: fluctuating Average Handling Time (AHT), misallocated shift capacities, training bottlenecks, and degraded Service Level Agreement (SLA) performance.

When our operational scope expanded across **7 international markets** (handling multi-language queues in English, Bahasa Indonesia, and Malay), we needed to grow our frontline team from **9 to 34 agents** (a 380% expansion) without compromising our **98%+ SLA benchmark**.

---

### The Three-Pronged Operational Strategy

### 1. Six Sigma DMAIC & Root-Cause Triage
Applying Six Sigma principles to contact center workflows:
- **Define**: Isolated top complaint categories generating 70% of inbound escalation backlog.
- **Measure**: Mapped cycle time for each handoff point between Tier 1 support, Subject Matter Experts (SMEs), and logistics partners.
- **Analyze**: Discovered that 35% of handling delays were caused by ambiguous escalation criteria and manual verification spreadsheets.
- **Improve**: Published standardized **Interactive Decision Trees** and unified ticket classification.
- **Control**: Implemented statistical process control (SPC) charts to monitor daily outlier handling times.

---

### 2. PulseTrack: Real-Time Operational Telemetry
We eliminated the end-of-day reporting sprint by deploying **PulseTrack**—an automated Power BI & Power Automate telemetry dashboard:
- Ingests queue velocity, agent status, and backlog count in real time.
- Sends proactive **MS Teams Adaptive Cards** when any regional queue reaches 80% of its SLA threshold.
- Saved **15+ hours weekly** of management administrative time, allowing team leads to refocus on high-impact 1-on-1 coaching.

---

### 3. Culture of Psychological Safety & <5% Attrition
High frontline turnover destroys operational continuity. We instituted:
- **Structured Onboarding Tracks**: 2-week immersive pairing with senior mentors before independent queue routing.
- **Transparent QA Scoring**: Real-time feedback loops highlighting strengths rather than punitive checklists.
- **Career Pathing**: Clear milestones for agents to transition into Quality Assurance, Workforce Management, and Technical Architecture roles.

---

### Results & Executive Summary
- **34 FTE Scaled**: Seamlessly onboarded and trained 25 new team members in under 6 months.
- **98%+ SLA Sustained**: Exceeded strict contractual client SLAs continuously across all 7 territories.
- **25% AHT Reduction**: Compressed overall resolution cycles while improving First Contact Resolution (FCR).
- **<5% Annualized Attrition**: Maintained top-tier retention within a historically high-churn industry.
`
  },
  {
    id: "art-gxp-financial-rebates",
    slug: "gxp-compliant-financial-rebates-dataverse-csharp-plugins",
    title: "GxP-Compliant Approval Systems: Compressing Turnaround from 3 Days to 15 Minutes",
    date: "Oct 28, 2024",
    readTime: "5 min read",
    category: "powerplatform",
    featured: false,
    excerpt:
      "Architecture breakdown of the Tasek Cement Rebate System: multi-tier ERP validation, Field Security Profiles on pricing margins, and automated executive push approvals.",
    tags: ["Dataverse", "C# Plugins", "Power Apps", "Financial Workflows", "GxP Compliance"],
    author: {
      name: "Ali Akhmad Fauzie",
      role: "Power Platform Solution Architect",
    },
    content: `## The Friction of Fragmented Email Approvals

In commercial building materials and manufacturing, rebate approvals determine whether million-dollar distributor purchase orders get fulfilled on time. However, legacy processes relied on manual email threads, scanned PDFs, and untracked phone calls. Approvals took **2 to 3 business days**, creating distributor friction and compliance risks.

---

## Technical Solution Blueprint

We architected the **Tasek Cement Rebate Approval System** directly on Microsoft Dataverse:

1. **5-Tier Authorization Matrix**:
   - Sales Executive → Regional Sales Manager → Finance Controller → GM → Group COO.
   - Dynamic routing based on monetary discount thresholds.
2. **Field Security Profiles**:
   - Confidential margin and cost fields are strictly restricted to authorized financial executives.
3. **C# Dataverse Plugin Validation**:
   - Pre-Operation plugin verifies customer credit standing against Oracle ERP APIs before allowing submission.
4. **One-Tap Actionable Approvals**:
   - Group COO can review and approve directly from Outlook actionable messages or MS Teams notifications with full audit logging.

---

## Quantifiable Impact
- **Turnaround Time**: Slashed from **48–72 hours down to 15 minutes**.
- **Audit Integrity**: 100% immutable audit logging complying with internal governance standards.
`
  },
  {
    id: "art-ai-builder-ticket-triage",
    slug: "automating-enterprise-ticket-triage-ai-builder-azure-openai",
    title: "Building AI-Powered Case Triage with AI Builder & Azure OpenAI in Power Automate",
    date: "Sep 15, 2024",
    readTime: "5 min read",
    category: "ai",
    featured: false,
    excerpt:
      "Step-by-step engineering breakdown of CS Resolver: classifying 120+ issue categories, dynamic SOP retrieval, and accelerating resolution times by 65%.",
    tags: ["AI Builder", "Azure OpenAI", "Power Automate", "Natural Language Processing", "CS Resolver"],
    author: {
      name: "Ali Akhmad Fauzie",
      role: "AI & Automation Developer",
    },
    content: `## Transforming Customer Support Triage with Generative AI

When enterprise customer service teams handle thousands of diverse customer inquiries weekly, manual ticket categorization is one of the biggest sources of latency and human error. Agents misroute complex technical inquiries, select generic categories, or spend minutes searching internal knowledge bases for the correct Standard Operating Procedure (SOP).

To solve this, we engineered **CS Resolver**—an intelligent triage copilot combining **Microsoft AI Builder**, **Azure OpenAI models**, and **Power Automate cloud flows**.

---

## The Classification Pipeline

1. **Inbound Webhook & Text Parsing**: Power Automate captures ticket body and attachments from omnichannel inboxes.
2. **AI Builder Intent Classification**: Custom NLP model categorizes ticket into one of 120+ granular taxonomy nodes.
3. **Dynamic SOP Injection**: Matches category with verified knowledge base articles, generating an instant step-by-step resolution checklist for the agent.
4. **Human-in-the-Loop Escalation**: Tickets with sentiment score < 0.2 or confidence < 80% automatically route to Tier-2 senior specialists.

---

## Results
- **65% Faster Resolution**: Frontline agents resolve inquiries with pre-populated playbooks.
- **50% Classification Accuracy Boost**: Drastically reduced cross-departmental ping-pong.
`
  }
];
