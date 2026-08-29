import React, { useState } from 'react';
import { personalInfo, timelineData, skillCategories, certificationsData, projectsData, languagesData } from '../data/resumeData';
import { ProfileMode } from '../types';
import {
  Printer,
  Download,
  Copy,
  Check,
  X,
  FileText,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Globe,
  Award,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMode?: ProfileMode;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({
  isOpen,
  onClose,
  initialMode = 'hybrid',
}) => {
  const [selectedFocus, setSelectedFocus] = useState<ProfileMode>(initialMode);
  const [copiedText, setCopiedText] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyPlainText = () => {
    const plainText = `
ALI AKHMAD FAUZIE
${selectedFocus === 'architect' ? personalInfo.titles.architect : selectedFocus === 'operations' ? personalInfo.titles.operations : personalInfo.titles.hybrid}
Location: ${personalInfo.location}
Email: ${personalInfo.email} | Phone: ${personalInfo.phoneMY} / ${personalInfo.phoneID}
LinkedIn: ${personalInfo.linkedin} | Portfolio: ${personalInfo.portfolioUrl}

--------------------------------------------------
PROFESSIONAL SUMMARY
${personalInfo.bio}
${personalInfo.aboutParagraphs.join('\n\n')}

--------------------------------------------------
CORE TECHNICAL & OPERATIONAL COMPETENCIES
${skillCategories.map((cat) => `* ${cat.title}: ${cat.skills.map((s) => s.name).join(', ')}`).join('\n')}

--------------------------------------------------
PROFESSIONAL EXPERIENCE
${timelineData.filter(t => t.type === 'experience').map((item) => `
${item.role} | ${item.company}
${item.period} | ${item.location}
${item.description.map((d) => `• ${d}`).join('\n')}
`).join('\n')}

--------------------------------------------------
KEY PROJECTS & OPERATIONAL INNOVATIONS
${projectsData.map((p) => `
• ${p.title} (${p.timeline})
  ${p.description}
  Key Results: ${p.results ? p.results.join('; ') : ''}
`).join('\n')}

--------------------------------------------------
EDUCATION & CERTIFICATIONS
• Bachelor of International Business Management (Honours) - Universiti Utara Malaysia (2013-2016)
  Minor in Logistics & Transportation | UUM International Scholarship | 3x Dean's List
${certificationsData.map((c) => `• ${c.name} - ${c.issuer} (${c.status})`).join('\n')}

--------------------------------------------------
LANGUAGES
${languagesData.map((l) => `• ${l.language}: ${l.proficiency}`).join('\n')}
    `.trim();

    navigator.clipboard.writeText(plainText);
    setCopiedText(true);
    setTimeout(() => setCopiedText(false), 2500);
  };

  const handleDownloadVCard = () => {
    const vCardData = `BEGIN:VCARD
VERSION:3.0
N:Fauzie;Ali;Akhmad;;
FN:Ali Akhmad Fauzie
ORG:Enterprise Architecture & Operations
TITLE:${selectedFocus === 'architect' ? personalInfo.titles.architect : personalInfo.titles.operations}
TEL;TYPE=CELL,VOICE:${personalInfo.phoneMY}
TEL;TYPE=CELL,VOICE:${personalInfo.phoneID}
EMAIL;TYPE=INTERNET,PREF:${personalInfo.email}
URL:${personalInfo.portfolioUrl}
URL;TYPE=LinkedIn:${personalInfo.linkedin}
ADR;TYPE=WORK:;;Kuala Lumpur;Federal Territory;Malaysia
NOTE:Power Platform Architect & Operations Leader. 365+ DBs migrated, 34-member team scaled.
END:VCARD`;

    const blob = new Blob([vCardData], { type: 'text/vcard;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Ali_Akhmad_Fauzie.vcf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/85 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-[#121215] border border-white/20 rounded-2xl w-full max-w-4xl shadow-2xl overflow-hidden my-6 relative flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Controls Header */}
        <div className="p-4 sm:p-5 bg-[#1a1a20] border-b border-white/10 flex flex-wrap items-center justify-between gap-3 no-print">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-[#009de0]/20 text-[#8aceff]">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base font-bold text-white leading-tight">
                Executive & ATS Resume Viewer
              </h2>
              <p className="text-xs text-neutral-400 font-mono-code">
                Print-ready format • Verified credentials
              </p>
            </div>
          </div>

          {/* Profile Focus Filter Pills */}
          <div className="flex items-center bg-black/40 p-1 rounded-lg border border-white/10 text-xs">
            <button
              onClick={() => setSelectedFocus('hybrid')}
              className={`px-3 py-1 rounded transition-all ${
                selectedFocus === 'hybrid'
                  ? 'bg-[#009de0] text-white font-medium'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Complete CV
            </button>
            <button
              onClick={() => setSelectedFocus('architect')}
              className={`px-3 py-1 rounded transition-all ${
                selectedFocus === 'architect'
                  ? 'bg-[#009de0] text-white font-medium'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Architect Focus
            </button>
            <button
              onClick={() => setSelectedFocus('operations')}
              className={`px-3 py-1 rounded transition-all ${
                selectedFocus === 'operations'
                  ? 'bg-[#009de0] text-white font-medium'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Ops Focus
            </button>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              id="cv-print-btn"
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-[#009de0] hover:bg-[#0087c2] text-white rounded-lg transition-all shadow-md shadow-[#009de0]/20"
              title="Print directly or save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>

            <button
              onClick={handleCopyPlainText}
              id="cv-copy-plain-btn"
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-white/10 hover:bg-white/15 text-white rounded-lg border border-white/10 transition-all"
              title="Copy plain-text version"
            >
              {copiedText ? (
                <Check className="w-3.5 h-3.5 text-emerald-400" />
              ) : (
                <Copy className="w-3.5 h-3.5 text-neutral-300" />
              )}
              <span>{copiedText ? 'Copied!' : 'Copy Text'}</span>
            </button>

            <button
              onClick={handleDownloadVCard}
              id="cv-vcard-btn"
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-white/10 hover:bg-white/15 text-white rounded-lg border border-white/10 transition-all"
              title="Download Contact vCard"
            >
              <Download className="w-3.5 h-3.5 text-[#8aceff]" />
              <span>.vcf</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-white/5 hover:bg-white/15 text-neutral-400 hover:text-white transition-all ml-1"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Canvas / Paper Simulation */}
        <div className="overflow-y-auto p-4 sm:p-8 bg-[#0e0e11]">
          <div
            id="printable-resume"
            className="print-page max-w-[800px] mx-auto bg-white text-[#111827] rounded-xl p-8 sm:p-12 shadow-2xl font-sans"
            style={{ minHeight: '1000px' }}
          >
            {/* Resume Header */}
            <div className="border-b-2 border-neutral-900 pb-5 mb-6 text-center sm:text-left">
              <h1 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight mb-1">
                {personalInfo.name}
              </h1>
              <p className="text-base sm:text-lg font-bold text-[#006491] mb-3">
                {selectedFocus === 'architect'
                  ? personalInfo.titles.architect
                  : selectedFocus === 'operations'
                  ? personalInfo.titles.operations
                  : personalInfo.titles.hybrid}
              </p>

              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-neutral-700 font-mono-code">
                <span>{personalInfo.location}</span>
                <span>•</span>
                <span>{personalInfo.phoneMY}</span>
                <span>•</span>
                <span className="font-semibold text-neutral-900">{personalInfo.email}</span>
                <span>•</span>
                <span>{personalInfo.linkedinHandle}</span>
              </div>
            </div>

            {/* Professional Summary */}
            <div className="mb-6">
              <h2 className="text-xs font-bold font-mono-code uppercase tracking-wider text-neutral-900 border-b border-neutral-300 pb-1 mb-2.5">
                Professional Summary
              </h2>
              <p className="text-xs sm:text-sm text-neutral-800 leading-relaxed">
                {selectedFocus === 'architect'
                  ? "Power Platform Developer and Enterprise Architect with 4+ years of hands-on experience designing, developing, and deploying enterprise-grade low-code/pro-code hybrid solutions. Proven track record of modernizing legacy infrastructures (migrating 365+ Lotus Domino legacy databases to Microsoft 365, SharePoint Online, and Dataverse) and delivering 16+ production Power Apps. Expert in leveraging Power Apps Canvas/Model-driven apps, Advanced Power Automate cloud workflows, Dataverse modeling, and AI Builder integrations to eliminate manual reporting by 90% and streamline complex business operations."
                  : selectedFocus === 'operations'
                  ? "Results-driven Customer Service Manager and Operations Leader with over 8 years of progressive experience leading high-performing, multilingual service delivery teams across global markets. Proven track record of managing end-to-end operations (up to 34 direct reports), driving customer satisfaction, and consistently exceeding strict SLA benchmarks (>98% compliance). Adept at leveraging process automation, real-time analytics, and workforce efficiency frameworks to streamline customer support workflows, reduce handle times, and elevate overall customer experience."
                  : "Power Platform Developer, Solution Architect, and Operations Leader with 8+ years of blended technical and leadership excellence. Experienced in migrating 365+ legacy databases to Microsoft 365/Dataverse, delivering 16+ production Power Apps, and scaling multilingual service operations teams from 9 to 34 agents across 7 international markets with >98% SLA compliance and Six Sigma Green Belt precision."}
              </p>
            </div>

            {/* Core Competencies Matrix */}
            <div className="mb-6">
              <h2 className="text-xs font-bold font-mono-code uppercase tracking-wider text-neutral-900 border-b border-neutral-300 pb-1 mb-2.5">
                Core Technical & Operational Competencies
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-xs text-neutral-800">
                <div>
                  <span className="font-bold text-neutral-900">Power Platform Stack:</span>{' '}
                  Power Apps (Canvas & Model-Driven, PCF), Power Automate (Cloud & Desktop Flows), Power BI, Dataverse Data Modeling, SharePoint Online, Microsoft 365.
                </div>
                <div>
                  <span className="font-bold text-neutral-900">Pro-Code & Developer Stack:</span>{' '}
                  TypeScript, React 19, Vite, Power Fx, JavaScript, REST APIs, Custom Connectors, PAC CLI, PnP PowerShell, Git CI/CD.
                </div>
                <div>
                  <span className="font-bold text-neutral-900">AI & Intelligent Automation:</span>{' '}
                  AI Builder, Copilot Studio, Azure OpenAI Integration, LLM Prompt Engineering, Lark Automation.
                </div>
                <div>
                  <span className="font-bold text-neutral-900">Leadership & Operations:</span>{' '}
                  SLA & KPI Management (&gt;98%), Team Leadership (up to 34 FTE), Incident Command, Escalation Triage, Six Sigma Green Belt, Salesforce CRM, Zendesk, Jira.
                </div>
              </div>
            </div>

            {/* Professional Experience */}
            <div className="mb-6">
              <h2 className="text-xs font-bold font-mono-code uppercase tracking-wider text-neutral-900 border-b border-neutral-300 pb-1 mb-3">
                Professional Experience
              </h2>
              <div className="space-y-4">
                {timelineData
                  .filter((t) => t.type === 'experience')
                  .map((item) => (
                    <div key={item.id} className="text-xs text-neutral-800">
                      <div className="flex flex-wrap items-baseline justify-between gap-1 mb-1">
                        <span className="font-bold text-neutral-900 text-sm">
                          {item.role}
                        </span>
                        <span className="font-mono-code text-[11px] font-semibold text-neutral-600">
                          {item.period}
                        </span>
                      </div>
                      <div className="text-[11px] text-neutral-600 mb-1.5 font-medium">
                        {item.company} — {item.location}
                      </div>
                      <ul className="list-disc list-outside pl-4 space-y-1 text-neutral-800 leading-relaxed">
                        {item.description.map((bullet, idx) => (
                          <li key={idx}>{bullet}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
              </div>
            </div>

            {/* Featured Technical Projects */}
            <div className="mb-6">
              <h2 className="text-xs font-bold font-mono-code uppercase tracking-wider text-neutral-900 border-b border-neutral-300 pb-1 mb-3">
                Featured Technical Projects & Operational Innovations
              </h2>
              <div className="space-y-3 text-xs text-neutral-800">
                {projectsData.slice(0, 4).map((p) => (
                  <div key={p.id}>
                    <div className="flex items-baseline justify-between">
                      <span className="font-bold text-neutral-900">
                        {p.title}
                      </span>
                      <span className="font-mono-code text-[11px] text-neutral-600">
                        {p.timeline}
                      </span>
                    </div>
                    <p className="text-neutral-700 mt-0.5 leading-relaxed">
                      {p.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Education & Certifications */}
            <div className="mb-6">
              <h2 className="text-xs font-bold font-mono-code uppercase tracking-wider text-neutral-900 border-b border-neutral-300 pb-1 mb-2.5">
                Education & Certifications
              </h2>
              <div className="space-y-2 text-xs text-neutral-800">
                <div>
                  <div className="flex items-baseline justify-between">
                    <span className="font-bold text-neutral-900">
                      Bachelor of International Business Management (Honours)
                    </span>
                    <span className="font-mono-code text-[11px]">Feb 2013 — Dec 2016</span>
                  </div>
                  <div className="text-neutral-700">
                    Universiti Utara Malaysia (UUM) • Minor in Logistics & Transportation • UUM International Scheme Scholarship Recipient • 3x Dean’s Academic Award
                  </div>
                </div>

                <div className="pt-2">
                  <span className="font-bold text-neutral-900 block mb-1">
                    Professional Certifications:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-[11px] text-neutral-700">
                    {certificationsData.map((c, idx) => (
                      <div key={idx}>
                        • <span className="font-semibold text-neutral-900">{c.name}</span> ({c.issuer})
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Languages */}
            <div>
              <h2 className="text-xs font-bold font-mono-code uppercase tracking-wider text-neutral-900 border-b border-neutral-300 pb-1 mb-2">
                Languages
              </h2>
              <div className="flex flex-wrap gap-4 text-xs text-neutral-800">
                {languagesData.map((l) => (
                  <span key={l.language}>
                    <span className="font-bold text-neutral-900">{l.language}:</span> {l.proficiency}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
