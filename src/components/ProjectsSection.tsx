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
  CheckCircle2,
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
        return <Database className="w-5 h-5 text-white/90" />;
      case 'analytics':
        return <BarChart3 className="w-5 h-5 text-white/90" />;
      case 'ai':
        return <Bot className="w-5 h-5 text-white/90" />;
      case 'workflow':
        return <GitBranch className="w-5 h-5 text-white/90" />;
      default:
        return <Layers className="w-5 h-5 text-white/90" />;
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
    <section id="projects" className="py-20 px-4 sm:px-6 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#009de0]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1180px] mx-auto relative z-10">
        {/* Section Header with Reveal Animation */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono-code text-[#8aceff] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Featured Case Studies & Repositories</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-2">
            Engineering & Operational Projects
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg font-medium max-w-2xl mx-auto">
            High-impact modernization programs, automated analytics engines, AI copilots, and enterprise workflow architectures.
          </p>

          {/* Controls Bar: Search, Category Filters, and Grid/List view toggle */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mt-8 bg-[#16161a]/95 backdrop-blur-md p-3 sm:p-4 rounded-2xl border border-white/10 shadow-xl">
            {/* Search Input */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                id="search-projects-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search projects or stack..."
                className="w-full bg-[#1e1e24] text-white text-xs pl-9 pr-3.5 py-2 rounded-xl border border-white/10 focus:outline-none focus:border-[#009de0] placeholder-neutral-500 transition-colors"
              />
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-1.5 w-full md:w-auto">
              {[
                { id: 'all', label: 'All Projects' },
                { id: 'enterprise', label: 'Enterprise Modernization' },
                { id: 'analytics', label: 'Operational Analytics' },
                { id: 'ai', label: 'AI & Automation' },
                { id: 'workflow', label: 'Workflow Engines' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  id={`project-filter-${tab.id}`}
                  onClick={() => setFilterCategory(tab.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all relative ${
                    filterCategory === tab.id
                      ? 'bg-[#009de0] text-white shadow-md shadow-[#009de0]/25 font-semibold'
                      : 'bg-[#1e1e24] text-neutral-400 hover:text-white border border-white/10 hover:border-white/20'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Grid / List Toggle */}
            <div className="flex items-center gap-1 bg-[#1e1e24] p-1 rounded-xl border border-white/10 self-end md:self-auto">
              <button
                id="view-grid-btn"
                onClick={() => setViewMode('grid')}
                className={`p-1.5 rounded-lg transition-all ${
                  viewMode === 'grid'
                    ? 'bg-[#009de0] text-white shadow-sm'
                    : 'text-neutral-400 hover:text-white'
                }`}
                title="Grid layout"
                aria-label="Grid layout"
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
              <button
                id="view-list-btn"
                onClick={() => setViewMode('list')}
                className={`p-1.5 rounded-lg transition-all ${
                  viewMode === 'list'
                    ? 'bg-[#009de0] text-white shadow-sm'
                    : 'text-neutral-400 hover:text-white'
                }`}
                title="List layout"
                aria-label="List layout"
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Empty state */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-16 bg-[#18181d] rounded-2xl border border-white/10 text-neutral-400"
          >
            <p className="text-sm">No projects found matching "{searchQuery}".</p>
            <button
              onClick={() => {
                setFilterCategory('all');
                setSearchQuery('');
              }}
              className="mt-3 text-xs text-[#8aceff] underline"
            >
              Reset filters
            </button>
          </motion.div>
        )}

        {/* Grid View with Smooth Hover & Layout Animations */}
        {viewMode === 'grid' ? (
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, idx) => (
                <motion.div
                  key={project.id}
                  id={`project-card-${project.id}`}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{
                    duration: 0.35,
                    delay: Math.min(idx * 0.05, 0.3),
                    ease: 'easeOut',
                  }}
                  whileHover={{
                    y: -7,
                    scale: 1.012,
                    boxShadow: '0 20px 35px -10px rgba(0, 157, 224, 0.22), 0 1px 3px 0 rgba(0, 0, 0, 0.4)',
                    transition: { duration: 0.22, ease: 'easeOut' },
                  }}
                  whileTap={{ scale: 0.99 }}
                  className="group relative rounded-2xl p-7 flex flex-col justify-between overflow-hidden border border-white/10 hover:border-white/35 cursor-pointer select-none"
                  style={{
                    backgroundColor: project.cardColor,
                    backgroundImage: `linear-gradient(135deg, ${project.cardColor} 0%, rgba(18, 18, 20, 0.95) 100%)`,
                  }}
                >
                  {/* Subtle top edge highlight line */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Ambient glow in corner */}
                  <div
                    className="absolute -right-12 -top-12 w-52 h-52 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-300 pointer-events-none"
                    style={{ backgroundColor: project.accentHex }}
                  />

                  {/* Card Top Content */}
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-11 h-11 rounded-xl bg-white/15 backdrop-blur-md flex items-center justify-center border border-white/20 shadow-inner group-hover:scale-110 group-hover:rotate-2 transition-transform duration-300">
                        {getCategoryIcon(project.category)}
                      </div>
                      <span className="text-xs font-mono-code bg-black/40 text-white/80 px-2.5 py-1 rounded-full border border-white/10 backdrop-blur-sm group-hover:border-white/25 transition-colors">
                        {project.timeline}
                      </span>
                    </div>

                    <h3
                      onClick={() => onSelectProject(project)}
                      className="text-xl sm:text-2xl font-bold text-white mb-1.5 tracking-tight group-hover:text-[#8aceff] transition-colors duration-200"
                    >
                      {project.title}
                    </h3>
                    <p className="text-xs font-mono-code text-white/70 mb-4 tracking-wide uppercase">
                      {project.subtitle}
                    </p>

                    <p className="text-sm text-white/90 leading-relaxed mb-5">
                      {project.description}
                    </p>

                    {/* Key Metrics Chips */}
                    <div className="grid grid-cols-2 gap-2 mb-5">
                      {project.metrics.slice(0, 2).map((m, mIdx) => (
                        <div
                          key={mIdx}
                          className="bg-black/30 rounded-lg p-2 border border-white/10 backdrop-blur-sm group-hover:border-white/20 transition-colors"
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
                          className="px-2.5 py-1 rounded-md text-[11px] font-mono-code bg-black/40 text-white/90 border border-white/15 group-hover:border-white/25 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Bottom: Action Links with Lift Effect */}
                  <div className="pt-4 border-t border-white/15 flex flex-wrap items-center justify-between gap-2.5 relative z-10">
                    <div className="flex items-center gap-2">
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noreferrer"
                          id={`demo-btn-${project.id}`}
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/20 hover:bg-white/30 text-white text-xs font-semibold backdrop-blur-md border border-white/20 hover:scale-105 transition-all shadow-sm"
                          title="Open live interactive demo"
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
                          id={`repo-btn-${project.id}`}
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/40 hover:bg-black/60 text-white text-xs font-semibold border border-white/15 hover:border-white/30 hover:scale-105 transition-all"
                          title="View source code repository"
                        >
                          <Code2 className="w-3.5 h-3.5 text-[#8aceff]" />
                          <span>Source Code</span>
                        </a>
                      )}
                    </div>

                    <button
                      onClick={() => onSelectProject(project)}
                      id={`details-btn-${project.id}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider uppercase text-white hover:text-[#8aceff] transition-colors py-1.5 group/btn"
                    >
                      <span>{project.linkText || 'Details'}</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          /* List View Format with Subtle Lift & Glow */
          <motion.div
            layout
            className="space-y-4"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, idx) => (
                <motion.div
                  key={project.id}
                  id={`project-row-${project.id}`}
                  layout
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{
                    duration: 0.3,
                    delay: Math.min(idx * 0.04, 0.25),
                  }}
                  whileHover={{
                    x: 6,
                    y: -2,
                    boxShadow: '0 12px 25px -5px rgba(0, 157, 224, 0.18), 0 1px 3px 0 rgba(0, 0, 0, 0.3)',
                    transition: { duration: 0.2 },
                  }}
                  className="group relative rounded-2xl p-5 sm:p-6 bg-[#18181d] border border-white/10 hover:border-white/30 transition-colors flex flex-col md:flex-row items-start md:items-center justify-between gap-5 shadow-lg overflow-hidden cursor-pointer"
                  style={{
                    borderLeft: `4px solid ${project.cardColor}`,
                  }}
                  onClick={() => onSelectProject(project)}
                >
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                        {getCategoryIcon(project.category)}
                      </div>
                      <span className="text-xs font-mono-code text-[#8aceff] uppercase font-semibold">
                        {project.category}
                      </span>
                      <span className="text-xs text-neutral-500">•</span>
                      <span className="text-xs font-mono-code text-neutral-400">
                        {project.timeline}
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-[#8aceff] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs font-mono-code text-neutral-400 mb-2">
                      {project.subtitle}
                    </p>
                    <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-3 max-w-3xl">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded text-[11px] font-mono-code bg-white/5 text-neutral-300 border border-white/10"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right Side Actions in List View */}
                  <div
                    className="flex flex-row md:flex-col items-center md:items-end gap-2.5 w-full md:w-auto pt-3 md:pt-0 border-t md:border-t-0 border-white/10 relative z-10"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="flex items-center gap-2">
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noreferrer"
                          id={`list-demo-btn-${project.id}`}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#009de0] hover:bg-[#0087c2] text-white text-xs font-semibold shadow-md shadow-[#009de0]/20 hover:scale-105 transition-all"
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
                          id={`list-repo-btn-${project.id}`}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/15 text-white border border-white/15 hover:scale-105 text-xs font-semibold transition-all"
                        >
                          <Code2 className="w-3.5 h-3.5 text-[#8aceff]" />
                          <span>Repo</span>
                        </a>
                      )}
                    </div>

                    <button
                      onClick={() => onSelectProject(project)}
                      id={`list-details-btn-${project.id}`}
                      className="inline-flex items-center gap-1 text-xs font-bold text-neutral-300 hover:text-white transition-colors group/subbtn"
                    >
                      <span>Full Case Study</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/subbtn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </div>
    </section>
  );
};
