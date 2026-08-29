import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  GitBranch,
  CheckCircle2,
  Cpu,
  Package,
  Server,
  ArrowRight,
  Terminal,
  Workflow,
} from 'lucide-react';

export const ArchitectureDiagram: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(1);

  const steps = [
    {
      id: 1,
      tag: 'STAGE 01',
      title: 'SOURCE CODE',
      subtitle: 'Version Control & Solution Extraction',
      icon: <GitBranch className="w-7 h-7 text-[#009de0]" />,
      summary: 'Power Platform Canvas & Model-Driven apps unpackaged via PAC CLI into Git repo.',
      details: [
        'PAC CLI `pac solution unpack` converts binary .zip into human-readable XML/JSON/YAML.',
        'Feature branching model with mandatory pull request code reviews and Power Fx linting.',
        'Component assets (Canvas JSON, Dataverse customizations, PCF controls) fully tracked in Git.',
      ],
      codeSnippet: `pac solution export --name IOI_Enterprise_Core --path ./export.zip
pac solution unpack --zipfile ./export.zip --folder ./src/solutions/IOI_Enterprise_Core
git commit -m "feat(qc): add automated batch approval flow"`,
    },
    {
      id: 2,
      tag: 'STAGE 02',
      title: 'BUILD & VALIDATION',
      subtitle: 'Static Analysis, Power Fx & Schema Checks',
      icon: <Cpu className="w-7 h-7 text-[#009de0]" />,
      summary: 'Automated Solution Checker runs static analysis and security rule verification.',
      details: [
        'Power Apps Solution Checker validates performance, deprecated APIs, and delegation rules.',
        'Automated unit tests for custom PCF React components and Power Automate error fallbacks.',
        'Environment variable tokens replaced for target runtime configuration.',
      ],
      codeSnippet: `pac solution check --solution-path ./dist/IOI_Enterprise_Core.zip
# Validating delegation limits, relational queries & role permissions
Result: 0 Critical Errors, 0 High Severity Warnings. Ready for packing.`,
    },
    {
      id: 3,
      tag: 'STAGE 03',
      title: 'ARTIFACT CREATION',
      subtitle: 'Managed Solution Packaging & Versioning',
      icon: <Package className="w-7 h-7 text-[#009de0]" />,
      summary: 'Generates immutable Managed Solutions with strict semantic version tags.',
      details: [
        'Compiles source into production-ready Managed Solution `.zip` artifact.',
        'Auto-increments semantic build tag (e.g. `v2.4.108`) with release changelog generation.',
        'Signs and publishes artifacts to Azure Artifacts & GitHub Releases store.',
      ],
      codeSnippet: `pac solution pack --zipfile ./dist/IOI_Enterprise_Core_managed.zip --folder ./src --managed true
echo "Artifact created: IOI_Enterprise_Core_v2.4.108_managed.zip"`,
    },
    {
      id: 4,
      tag: 'STAGE 04',
      title: 'DEPLOYMENT & RUNTIME',
      subtitle: 'Automated Multi-Environment Rollout',
      icon: <Server className="w-7 h-7 text-[#009de0]" />,
      summary: 'Staged automated release to Development, UAT Validation, and Production Dataverse.',
      details: [
        'Zero-downtime deployment into Dataverse with automated connection reference binding.',
        'Automated smoke tests run against live endpoints, verifying AI Builder models & Power BI feeds.',
        'Instant rollback snapshot prepared in case of operational SLA deviation.',
      ],
      codeSnippet: `pac solution import --path ./dist/IOI_Enterprise_Core_managed.zip --activate-plugins true
pac admin assign-user-role --role "Operations Lead" --environment prod-apac
Deployment Status: 100% Succeeded on Production (APAC-Dataverse).`,
    },
  ];

  const current = steps.find((s) => s.id === activeStep) || steps[0];

  return (
    <section id="architecture" className="py-20 px-4 sm:px-6 bg-[#161619]/60 border-y border-white/5 relative overflow-hidden">
      <div className="max-w-[1140px] mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono-code text-[#8aceff] mb-3">
            <Workflow className="w-3.5 h-3.5" />
            <span>ALM & DevOps Framework</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2 tracking-tight">
            Enterprise CI/CD & Solution Architecture
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base max-w-2xl mx-auto">
            Interactive pipeline visualizer demonstrating how I manage low-code and pro-code governance, from PAC CLI unpackaging to multi-tier Dataverse production deployment.
          </p>
        </motion.div>

        {/* Pipeline Stage Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          {steps.map((step, idx) => {
            const isSelected = activeStep === step.id;
            return (
              <div key={step.id} className="relative flex flex-col">
                <motion.button
                  whileHover={{ y: -4, scale: 1.015 }}
                  whileTap={{ scale: 0.99 }}
                  onClick={() => setActiveStep(step.id)}
                  id={`arch-step-${step.id}-btn`}
                  className={`w-full text-left p-5 rounded-2xl transition-all duration-200 relative border flex flex-col justify-between h-full cursor-pointer ${
                    isSelected
                      ? 'bg-[#182330] border-[#009de0] shadow-lg shadow-[#009de0]/20'
                      : 'bg-[#1a1a1f] border-white/10 hover:border-white/25 hover:bg-[#1e1e24]'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[11px] font-mono-code uppercase px-2 py-0.5 rounded bg-black/40 text-[#8aceff] border border-[#009de0]/30">
                        {step.tag}
                      </span>
                      <div className={`p-2 rounded-xl bg-black/40 border border-white/10 ${isSelected ? 'text-[#8aceff]' : 'text-neutral-400'}`}>
                        {step.icon}
                      </div>
                    </div>

                    <h3 className="text-base font-bold text-white mb-1">
                      {step.title}
                    </h3>
                    <p className="text-xs text-neutral-400 line-clamp-2 leading-relaxed">
                      {step.subtitle}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs">
                    <span className={`font-mono-code text-[11px] ${isSelected ? 'text-[#8aceff]' : 'text-neutral-500'}`}>
                      {isSelected ? '● Active View' : 'Click to inspect'}
                    </span>
                    <ArrowRight className={`w-3.5 h-3.5 ${isSelected ? 'text-[#8aceff] translate-x-0.5' : 'text-neutral-600'}`} />
                  </div>
                </motion.button>

                {/* Arrow connector between stages on desktop */}
                {idx < 3 && (
                  <div className="hidden md:flex absolute -right-2.5 top-1/2 -translate-y-1/2 z-10 w-5 h-5 rounded-full bg-[#121214] border border-[#009de0]/40 items-center justify-center pointer-events-none">
                    <ArrowRight className="w-3 h-3 text-[#009de0]" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Selected Stage Deep-Dive Inspector with Smooth Crossfade */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="bg-[#19191e] border border-[#009de0]/40 rounded-2xl p-6 sm:p-8 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#009de0]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              <div className="lg:col-span-6 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded bg-[#009de0]/20 text-[#8aceff] font-mono-code text-xs font-semibold">
                    {current.tag} // Stage Details
                  </span>
                  <h3 className="text-xl font-bold text-white">
                    {current.title}
                  </h3>
                </div>

                <p className="text-sm text-neutral-300 leading-relaxed font-medium">
                  {current.summary}
                </p>

                <div className="space-y-2 pt-2">
                  {current.details.map((detail, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Terminal / Code Inspector */}
              <div className="lg:col-span-6">
                <div className="bg-[#0e0e11] border border-white/10 rounded-xl overflow-hidden shadow-inner">
                  <div className="bg-[#141418] px-4 py-2 border-b border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500/70 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70 inline-block" />
                      <span className="text-[11px] font-mono-code text-neutral-400 ml-2">
                        pipeline-execution.sh
                      </span>
                    </div>
                    <div className="flex items-center gap-1 text-[11px] font-mono-code text-[#8aceff]">
                      <Terminal className="w-3 h-3" />
                      <span>PAC CLI 1.34</span>
                    </div>
                  </div>
                  <pre className="p-4 text-xs font-mono-code text-[#8aceff] overflow-x-auto leading-relaxed whitespace-pre-wrap">
                    <code>{current.codeSnippet}</code>
                  </pre>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
