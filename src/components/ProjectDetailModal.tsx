import React, { useEffect } from 'react';
import { ProjectItem } from '../types';
import {
  X,
  CheckCircle2,
  AlertCircle,
  Lightbulb,
  TrendingUp,
  Layers,
  Calendar,
  ExternalLink,
  Code2,
  ShieldCheck,
} from 'lucide-react';

interface ProjectDetailModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-[#18181d] border border-white/20 rounded-2xl w-full max-w-3xl shadow-2xl overflow-hidden relative my-8"
        onClick={(e) => e.stopPropagation()}
        style={{
          borderTop: `4px solid ${project.accentHex}`,
        }}
      >
        {/* Modal Header */}
        <div className="p-6 sm:p-8 bg-gradient-to-b from-white/5 to-transparent border-b border-white/10 relative">
          <button
            onClick={onClose}
            id="close-project-modal-btn"
            className="absolute top-6 right-6 p-2 rounded-full bg-white/10 text-neutral-300 hover:text-white hover:bg-white/20 transition-all"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span
              className="text-xs font-mono-code uppercase px-2.5 py-1 rounded-md text-white font-semibold"
              style={{ backgroundColor: project.cardColor }}
            >
              {project.category}
            </span>
            <span className="text-xs font-mono-code text-neutral-400 flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              <span>{project.timeline}</span>
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2 tracking-tight">
            {project.title}
          </h2>
          <p className="text-sm font-mono-code text-[#8aceff] mb-4">
            {project.subtitle}
          </p>

          {/* Action Links: Live Demo & Repository */}
          <div className="flex flex-wrap items-center gap-3 pt-1">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                id={`modal-demo-btn-${project.id}`}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#009de0] hover:bg-[#0087c2] text-white text-xs font-semibold shadow-md shadow-[#009de0]/25 transition-all"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Live Interactive Demo</span>
              </a>
            )}
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noreferrer"
                id={`modal-repo-btn-${project.id}`}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white border border-white/15 text-xs font-semibold transition-all"
              >
                <Code2 className="w-3.5 h-3.5 text-[#8aceff]" />
                <span>Source Code / Repo</span>
              </a>
            )}
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[70vh] overflow-y-auto text-neutral-200">
          {/* Key Metrics Grid */}
          <div>
            <h4 className="text-xs font-mono-code uppercase text-neutral-400 tracking-wider mb-3">
              // Key Performance Indicators & Outcomes
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {project.metrics.map((m, idx) => (
                <div
                  key={idx}
                  className="bg-black/40 rounded-xl p-3.5 border border-white/10 text-center"
                >
                  <div className="text-xl font-bold text-white font-mono-code">
                    {m.value}
                  </div>
                  <div className="text-[11px] text-neutral-400 mt-1 font-medium">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Detailed Overview */}
          <div>
            <h4 className="text-xs font-mono-code uppercase text-neutral-400 tracking-wider mb-2">
              // Architecture & Executive Overview
            </h4>
            <p className="text-sm text-neutral-300 leading-relaxed">
              {project.fullOverview || project.description}
            </p>
          </div>

          {/* Challenge & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.challenge && (
              <div className="bg-red-950/20 border border-red-500/20 rounded-xl p-4">
                <div className="flex items-center gap-2 text-red-400 font-semibold text-xs font-mono-code uppercase mb-2">
                  <AlertCircle className="w-4 h-4" />
                  <span>The Challenge</span>
                </div>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                  {project.challenge}
                </p>
              </div>
            )}

            {project.solution && (
              <div className="bg-emerald-950/20 border border-emerald-500/20 rounded-xl p-4">
                <div className="flex items-center gap-2 text-emerald-400 font-semibold text-xs font-mono-code uppercase mb-2">
                  <Lightbulb className="w-4 h-4" />
                  <span>Architectural Solution</span>
                </div>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                  {project.solution}
                </p>
              </div>
            )}
          </div>

          {/* Results Checklist */}
          {project.results && project.results.length > 0 && (
            <div>
              <h4 className="text-xs font-mono-code uppercase text-neutral-400 tracking-wider mb-3">
                // Deliverables & Impact
              </h4>
              <div className="space-y-2.5">
                {project.results.map((res, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-200"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{res}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Architecture Specifications */}
          {project.architecturePoints && project.architecturePoints.length > 0 && (
            <div className="bg-[#121215] border border-white/10 rounded-xl p-4">
              <h4 className="text-xs font-mono-code uppercase text-[#8aceff] tracking-wider mb-3 flex items-center gap-1.5">
                <Code2 className="w-4 h-4" />
                <span>Technical Specifications & Standards</span>
              </h4>
              <ul className="space-y-2 text-xs text-neutral-300 list-disc list-inside">
                {project.architecturePoints.map((pt, idx) => (
                  <li key={idx} className="leading-relaxed">
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech Stack Tags */}
          <div>
            <h4 className="text-xs font-mono-code uppercase text-neutral-400 tracking-wider mb-2">
              // Technology Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-md text-xs font-mono-code bg-white/10 text-white border border-white/15"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-6 bg-[#121215] border-t border-white/10 flex items-center justify-between">
          <span className="text-xs font-mono-code text-neutral-400">
            Project Ref: {project.id}
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-colors"
          >
            Close Case Study
          </button>
        </div>
      </div>
    </div>
  );
};
