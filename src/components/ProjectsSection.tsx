import React, { useState } from 'react';
import { projectsData } from '../data/resumeData';
import { ProjectItem, ProfileMode } from '../types';
import {
  Database,
  BarChart3,
  Bot,
  GitBranch,
  Layers,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  ExternalLink,
  ShieldCheck,
  Zap,
} from 'lucide-react';

interface ProjectsSectionProps {
  currentMode: ProfileMode;
  onSelectProject: (project: ProjectItem) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  currentMode,
  onSelectProject,
}) => {
  const [filterCategory, setFilterCategory] = useState<string>('all');

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'enterprise':
        return <Database className="w-6 h-6 text-white/90" />;
      case 'analytics':
        return <BarChart3 className="w-6 h-6 text-white/90" />;
      case 'ai':
        return <Bot className="w-6 h-6 text-white/90" />;
      case 'workflow':
        return <GitBranch className="w-6 h-6 text-white/90" />;
      default:
        return <Layers className="w-6 h-6 text-white/90" />;
    }
  };

  const filteredProjects = projectsData.filter((project) => {
    if (filterCategory === 'all') return true;
    return project.category === filterCategory;
  });

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 relative">
      <div className="max-w-[1100px] mx-auto">
        {/* Section Header matching Image 5 & 6 */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono-code text-[#8aceff] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Featured Case Studies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-2">
            Portfolio
          </h2>
          <p className="text-neutral-400 text-lg font-medium">
            My top enterprise & operational projects
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            {[
              { id: 'all', label: 'All Projects' },
              { id: 'enterprise', label: 'Enterprise Modernization' },
              { id: 'analytics', label: 'Operational Analytics' },
              { id: 'ai', label: 'AI & Automation' },
              { id: 'workflow', label: 'Workflow Engines' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilterCategory(tab.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  filterCategory === tab.id
                    ? 'bg-[#009de0] text-white shadow-md shadow-[#009de0]/20'
                    : 'bg-[#1c1c20] text-neutral-400 hover:text-white border border-white/10'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid matching Image 5 & 6 colored style */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className={`group relative rounded-2xl p-7 flex flex-col justify-between transition-all duration-300 transform hover:-translate-y-1.5 cursor-pointer shadow-xl overflow-hidden border border-white/10 hover:border-white/30`}
              style={{
                backgroundColor: project.cardColor,
                backgroundImage: `linear-gradient(135deg, ${project.cardColor} 0%, rgba(18, 18, 20, 0.95) 100%)`,
              }}
            >
              {/* Subtle background glow effect */}
              <div
                className="absolute -right-12 -top-12 w-48 h-48 rounded-full blur-3xl opacity-30 pointer-events-none"
                style={{ backgroundColor: project.accentHex }}
              />

              {/* Card Top: Icon and Timeline */}
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-white/15 backdrop-blur-md flex items-center justify-center border border-white/20 shadow-inner group-hover:scale-110 transition-transform">
                    {getCategoryIcon(project.category)}
                  </div>
                  <span className="text-xs font-mono-code bg-black/40 text-white/80 px-2.5 py-1 rounded-full border border-white/10 backdrop-blur-sm">
                    {project.timeline}
                  </span>
                </div>

                {/* Card Title & Subtitle */}
                <h3 className="text-2xl font-bold text-white mb-2 tracking-tight group-hover:text-white transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs font-mono-code text-white/70 mb-4 tracking-wide uppercase">
                  {project.subtitle}
                </p>

                {/* Description */}
                <p className="text-sm text-white/90 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Key Metrics Chips */}
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {project.metrics.slice(0, 2).map((m, idx) => (
                    <div
                      key={idx}
                      className="bg-black/30 rounded-lg p-2 border border-white/10 backdrop-blur-sm"
                    >
                      <span className="block text-base font-bold text-white font-mono-code">
                        {m.value}
                      </span>
                      <span className="block text-[11px] text-white/70">
                        {m.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono-code bg-black/40 text-white/90 border border-white/15"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Bottom CTA Link */}
              <div className="pt-4 border-t border-white/15 flex items-center justify-between text-xs font-bold tracking-wider uppercase text-white group-hover:text-[#8aceff] transition-colors">
                <span className="flex items-center gap-1.5">
                  {project.linkText || 'VISIT DETAILS'}
                </span>
                <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center group-hover:translate-x-1 group-hover:bg-white/20 transition-all">
                  <ArrowRight className="w-3.5 h-3.5 text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
