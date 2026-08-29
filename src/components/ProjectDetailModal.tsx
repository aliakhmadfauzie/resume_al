import React, { useEffect } from 'react';
import { ProjectItem } from '../types';
import {
  X,
  CheckCircle2,
  AlertCircle,
  Lightbulb,
  Calendar,
  ExternalLink,
  Code2,
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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-[#fdfdfc] border border-[#121212] w-full max-w-3xl shadow-2xl overflow-hidden relative my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-6 sm:p-8 border-b border-[#e0e0d8] relative bg-[#f7f7f0]">
          <button
            onClick={onClose}
            id="close-project-modal-btn"
            className="absolute top-6 right-6 p-2 bg-[#fdfdfc] border border-[#e0e0d8] text-[#121212] hover:bg-[#e0e0d8] transition-colors"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="label-mono bg-[#121212] text-[#fdfdfc] px-2 py-0.5">
              {project.category}
            </span>
            <span className="text-xs font-mono-code text-[#888880] flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              <span>{project.timeline}</span>
            </span>
          </div>

          <h2 className="font-serif-display italic text-3xl sm:text-4xl font-light text-[#121212] mb-2 tracking-tight">
            {project.title}
          </h2>
          <p className="text-xs font-mono-code uppercase tracking-wider text-[#444440] mb-4">
            {project.subtitle}
          </p>

          {/* Action Links: Live Demo & Repository */}
          <div className="flex flex-wrap items-center gap-2 pt-1 font-mono-code text-xs">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                id={`modal-demo-btn-${project.id}`}
                className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#121212] hover:bg-[#222222] text-[#fdfdfc] uppercase tracking-wider transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Live Demo</span>
              </a>
            )}
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noreferrer"
                id={`modal-repo-btn-${project.id}`}
                className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#fdfdfc] hover:bg-[#e0e0d8] text-[#121212] border border-[#e0e0d8] uppercase tracking-wider transition-colors"
              >
                <Code2 className="w-3.5 h-3.5 text-[#121212]" />
                <span>Source Code</span>
              </a>
            )}
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[70vh] overflow-y-auto text-[#121212]">
          {/* Key Metrics Grid */}
          <div>
            <div className="label-mono mb-3">
              Performance Indicators & Outcomes
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {project.metrics.map((m, idx) => (
                <div
                  key={idx}
                  className="bg-[#f7f7f0] p-4 border border-[#e0e0d8] text-center"
                >
                  <div className="font-serif-display italic text-2xl font-light text-[#121212]">
                    {m.value}
                  </div>
                  <div className="text-[0.65rem] font-mono-code uppercase tracking-wider text-[#888880] mt-1">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Detailed Overview */}
          <div>
            <div className="label-mono mb-2">
              Architecture & Executive Overview
            </div>
            <p className="text-sm font-light text-[#444440] leading-relaxed">
              {project.fullOverview || project.description}
            </p>
          </div>

          {/* Challenge & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.challenge && (
              <div className="bg-[#f7f7f0] border border-[#e0e0d8] p-4">
                <div className="flex items-center gap-2 text-[#121212] font-medium text-xs font-mono-code uppercase tracking-wider mb-2">
                  <AlertCircle className="w-4 h-4 text-[#888880]" />
                  <span>The Challenge</span>
                </div>
                <p className="text-xs sm:text-sm font-light text-[#444440] leading-relaxed">
                  {project.challenge}
                </p>
              </div>
            )}

            {project.solution && (
              <div className="bg-[#f7f7f0] border border-[#e0e0d8] p-4">
                <div className="flex items-center gap-2 text-[#121212] font-medium text-xs font-mono-code uppercase tracking-wider mb-2">
                  <Lightbulb className="w-4 h-4 text-[#888880]" />
                  <span>Architectural Solution</span>
                </div>
                <p className="text-xs sm:text-sm font-light text-[#444440] leading-relaxed">
                  {project.solution}
                </p>
              </div>
            )}
          </div>

          {/* Results Checklist */}
          {project.results && project.results.length > 0 && (
            <div>
              <div className="label-mono mb-3">
                Deliverables & Impact
              </div>
              <div className="space-y-2">
                {project.results.map((res, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 text-xs sm:text-sm font-light text-[#444440]"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#121212] shrink-0 mt-0.5" />
                    <span>{res}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Architecture Specifications */}
          {project.architecturePoints && project.architecturePoints.length > 0 && (
            <div className="bg-[#f7f7f0] border border-[#e0e0d8] p-4">
              <div className="label-mono text-[#121212] mb-3 flex items-center gap-1.5">
                <Code2 className="w-3.5 h-3.5" />
                <span>Technical Specifications & Standards</span>
              </div>
              <ul className="space-y-1.5 text-xs font-light text-[#444440] list-disc list-inside">
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
            <div className="label-mono mb-2">
              Technology Stack
            </div>
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 text-[0.65rem] font-mono-code uppercase tracking-wider bg-[#f7f7f0] text-[#444440] border border-[#e0e0d8]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-6 bg-[#f7f7f0] border-t border-[#e0e0d8] flex items-center justify-between font-mono-code text-xs">
          <span className="text-[0.65rem] uppercase tracking-wider text-[#888880]">
            Ref: {project.id}
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-[#121212] hover:bg-[#222222] text-[#fdfdfc] text-xs uppercase tracking-wider transition-colors cursor-pointer"
          >
            Close Case Study
          </button>
        </div>
      </div>
    </div>
  );
};

