import React, { useState } from 'react';
import { projectsData } from '../data/resumeData';
import { ProjectItem, ProfileMode } from '../types';
import { motion, AnimatePresence } from 'motion/react';
import {
  Database,
  BarChart3,
  Bot,
  GitBranch,
  Layers,
  ArrowRight,
  Sparkles,
  ExternalLink,
  Code2,
  LayoutGrid,
  List,
  Search,
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
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'enterprise':
        return <Database className="w-4 h-4 text-[#121212]" />;
      case 'analytics':
        return <BarChart3 className="w-4 h-4 text-[#121212]" />;
      case 'ai':
        return <Bot className="w-4 h-4 text-[#121212]" />;
      case 'workflow':
        return <GitBranch className="w-4 h-4 text-[#121212]" />;
      default:
        return <Layers className="w-4 h-4 text-[#121212]" />;
    }
  };

  const filteredProjects = projectsData.filter((project) => {
    const matchesCategory =
      filterCategory === 'all' || project.category === filterCategory;
    const matchesSearch =
      searchQuery.trim() === '' ||
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  return (
    <section id="projects" className="py-20 sm:py-24 border-b border-[#e0e0d8] bg-[#fdfdfc] relative">
      <div className="max-w-[1360px] mx-auto px-6 sm:px-10 border-x border-[#e0e0d8]">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <span className="label-mono">
              02 — Selected Works & Case Studies
            </span>
            <span className="font-mono-code text-[0.65rem] uppercase tracking-wider text-[#888880]">
              Enterprise Scale • {filteredProjects.length} Modules
            </span>
          </div>

          <h2 className="font-serif-display italic text-4xl sm:text-5xl md:text-6xl font-light text-[#121212] tracking-tight">
            Engineering & Operational Projects
          </h2>
          <p className="text-sm sm:text-base font-light text-[#444440] max-w-2xl mt-3 leading-relaxed">
            High-impact modernization programs, automated analytics engines, AI copilots, and enterprise workflow architectures.
          </p>

          {/* Controls Bar: Search, Category Filters, and Grid/List view toggle */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mt-8 bg-[#f7f7f0] p-3 sm:p-4 border border-[#e0e0d8]">
            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="w-3.5 h-3.5 text-[#888880] absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                id="search-projects-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search projects, stack, or keywords..."
                className="w-full bg-[#fdfdfc] text-[#121212] text-xs font-mono-code pl-9 pr-3 py-2 border border-[#e0e0d8] focus:outline-none focus:border-[#121212] placeholder-[#888880] transition-colors"
              />
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-1.5 w-full md:w-auto">
              {[
                { id: 'all', label: 'All' },
                { id: 'enterprise', label: 'Enterprise' },
                { id: 'analytics', label: 'Analytics' },
                { id: 'ai', label: 'AI & Automations' },
                { id: 'workflow', label: 'Workflows' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  id={`project-filter-${tab.id}`}
                  onClick={() => setFilterCategory(tab.id)}
                  className={`px-3 py-1.5 text-[0.7rem] font-mono-code uppercase tracking-wider transition-all ${
                    filterCategory === tab.id
                      ? 'bg-[#121212] text-[#fdfdfc] font-medium'
                      : 'bg-[#fdfdfc] text-[#444440] hover:text-[#121212] border border-[#e0e0d8]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Grid / List Toggle */}
            <div className="flex items-center gap-1 bg-[#fdfdfc] p-1 border border-[#e0e0d8] self-end md:self-auto">
              <button
                id="view-grid-btn"
                onClick={() => setViewMode('grid')}
                className={`p-1.5 transition-all ${
                  viewMode === 'grid'
                    ? 'bg-[#121212] text-[#fdfdfc]'
                    : 'text-[#888880] hover:text-[#121212]'
                }`}
                title="Grid layout"
                aria-label="Grid layout"
              >
                <LayoutGrid className="w-3.5 h-3.5" />
              </button>
              <button
                id="view-list-btn"
                onClick={() => setViewMode('list')}
                className={`p-1.5 transition-all ${
                  viewMode === 'list'
                    ? 'bg-[#121212] text-[#fdfdfc]'
                    : 'text-[#888880] hover:text-[#121212]'
                }`}
                title="List layout"
                aria-label="List layout"
              >
                <List className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Empty state */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16 bg-[#f7f7f0] border border-[#e0e0d8] text-[#888880] font-mono-code text-xs">
            <p>No projects found matching "{searchQuery}".</p>
            <button
              onClick={() => {
                setFilterCategory('all');
                setSearchQuery('');
              }}
              className="mt-3 text-[#121212] underline"
            >
              Reset filter query
            </button>
          </div>
        )}

        {/* Grid View */}
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {filteredProjects.map((project, idx) => (
              <div
                key={project.id}
                id={`project-card-${project.id}`}
                onClick={() => onSelectProject(project)}
                className="group relative bg-[#fdfdfc] border border-[#e0e0d8] p-6 sm:p-8 flex flex-col justify-between hover:border-[#121212] transition-colors cursor-pointer"
              >
                <div>
                  {/* Card Meta Row */}
                  <div className="flex items-center justify-between pb-4 mb-5 border-b border-[#e0e0d8]">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 bg-[#f7f7f0] border border-[#e0e0d8] flex items-center justify-center">
                        {getCategoryIcon(project.category)}
                      </div>
                      <span className="label-mono text-[#888880]">
                        {project.category}
                      </span>
                    </div>
                    <span className="font-mono-code text-[0.65rem] uppercase tracking-wider text-[#888880]">
                      {project.timeline}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="font-serif-display italic text-2xl sm:text-3xl font-light text-[#121212] mb-1 group-hover:translate-x-1 transition-transform">
                    {project.title}
                  </h3>
                  <p className="font-mono-code text-[0.7rem] uppercase tracking-wider text-[#888880] mb-4">
                    {project.subtitle}
                  </p>

                  <p className="text-xs sm:text-sm font-light text-[#444440] leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Key Metrics */}
                  <div className="grid grid-cols-2 gap-3 mb-6 p-3 bg-[#f7f7f0] border border-[#e0e0d8]">
                    {project.metrics.slice(0, 2).map((m, mIdx) => (
                      <div key={mIdx}>
                        <span className="block font-mono-code text-lg text-[#121212] font-normal">
                          {m.value}
                        </span>
                        <span className="block text-[10px] font-mono-code uppercase tracking-wider text-[#888880]">
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
                        className="px-2.5 py-0.5 text-[0.65rem] font-mono-code uppercase tracking-wider bg-[#f7f7f0] text-[#444440] border border-[#e0e0d8]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="pt-4 border-t border-[#e0e0d8] flex items-center justify-between gap-3 text-xs font-mono-code">
                  <div className="flex items-center gap-3">
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        id={`demo-btn-${project.id}`}
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1 text-[#121212] hover:underline uppercase text-[0.7rem] tracking-wider"
                      >
                        <ExternalLink className="w-3 h-3" />
                        <span>Live Demo</span>
                      </a>
                    )}
                    {project.repoUrl && (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noreferrer"
                        id={`repo-btn-${project.id}`}
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1 text-[#888880] hover:text-[#121212] hover:underline uppercase text-[0.7rem] tracking-wider"
                      >
                        <Code2 className="w-3 h-3" />
                        <span>Source</span>
                      </a>
                    )}
                  </div>

                  <button
                    onClick={() => onSelectProject(project)}
                    className="inline-flex items-center gap-1 text-[#121212] font-medium uppercase text-[0.7rem] tracking-wider group-hover:translate-x-1 transition-transform"
                  >
                    <span>{project.linkText || 'Details'}</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* List View */
          <div className="space-y-4">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                id={`project-row-${project.id}`}
                onClick={() => onSelectProject(project)}
                className="group p-5 sm:p-6 bg-[#fdfdfc] border border-[#e0e0d8] hover:border-[#121212] transition-colors flex flex-col md:flex-row items-start md:items-center justify-between gap-6 cursor-pointer"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="label-mono text-[#888880]">
                      {project.category}
                    </span>
                    <span className="text-[#888880] text-xs">•</span>
                    <span className="font-mono-code text-[0.65rem] uppercase tracking-wider text-[#888880]">
                      {project.timeline}
                    </span>
                  </div>

                  <h3 className="font-serif-display italic text-2xl font-light text-[#121212] mb-1">
                    {project.title}
                  </h3>
                  <p className="font-mono-code text-[0.7rem] uppercase tracking-wider text-[#888880] mb-2">
                    {project.subtitle}
                  </p>
                  <p className="text-xs sm:text-sm font-light text-[#444440] leading-relaxed max-w-3xl mb-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 text-[0.65rem] font-mono-code uppercase tracking-wider bg-[#f7f7f0] text-[#444440] border border-[#e0e0d8]"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div
                  className="flex flex-row md:flex-col items-center md:items-end gap-3 w-full md:w-auto pt-3 md:pt-0 border-t md:border-t-0 border-[#e0e0d8] font-mono-code text-xs"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="flex items-center gap-3">
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-[#121212] hover:underline uppercase text-[0.7rem] tracking-wider"
                      >
                        Demo
                      </a>
                    )}
                    {project.repoUrl && (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-[#888880] hover:text-[#121212] hover:underline uppercase text-[0.7rem] tracking-wider"
                      >
                        Repo
                      </a>
                    )}
                  </div>

                  <button
                    onClick={() => onSelectProject(project)}
                    className="inline-flex items-center gap-1 text-[#121212] uppercase text-[0.7rem] tracking-wider font-semibold group-hover:translate-x-1 transition-transform"
                  >
                    <span>Read Study</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};

