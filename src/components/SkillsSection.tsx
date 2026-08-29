import React, { useState } from 'react';
import { skillCategories, languagesData } from '../data/resumeData';
import {
  Cpu,
  Code2,
  Sparkles,
  Users,
  Terminal,
  Globe,
  Search,
  CheckCircle2,
  Star,
  Check,
  Zap,
} from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-[#009de0]" />;
      case 'Code2':
        return <Code2 className="w-5 h-5 text-[#8aceff]" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-amber-400" />;
      case 'Users':
        return <Users className="w-5 h-5 text-emerald-400" />;
      case 'Terminal':
        return <Terminal className="w-5 h-5 text-purple-400" />;
      default:
        return <Cpu className="w-5 h-5 text-[#009de0]" />;
    }
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 relative">
      <div className="max-w-[1140px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono-code text-[#8aceff] mb-3">
            <Zap className="w-3.5 h-3.5" />
            <span>Technical & Operational Stack</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-2">
            Skills & Competencies
          </h2>
          <p className="text-neutral-400 text-lg font-medium">
            Bridging low-code enterprise velocity with pro-code engineering & operational scale
          </p>

          {/* Search bar */}
          <div className="max-w-md mx-auto mt-6 relative">
            <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search skills (e.g. Dataverse, AI Builder, React, SLA, Six Sigma)..."
              className="w-full bg-[#1a1a20] border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-xs sm:text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#009de0] transition-colors"
            />
          </div>
        </div>

        {/* Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {skillCategories.map((category) => {
            const filteredSkills = category.skills.filter((s) =>
              s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
              s.level.toLowerCase().includes(searchQuery.toLowerCase()) ||
              (s.yearsOrScope && s.yearsOrScope.toLowerCase().includes(searchQuery.toLowerCase()))
            );

            if (searchQuery && filteredSkills.length === 0) return null;

            return (
              <div
                key={category.title}
                className="bg-[#19191e]/90 border border-white/10 hover:border-white/20 rounded-2xl p-6 backdrop-blur-md shadow-xl flex flex-col justify-between transition-all"
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                      {getCategoryIcon(category.iconName)}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white leading-tight">
                        {category.title}
                      </h3>
                      <p className="text-xs text-neutral-400 font-mono-code">
                        {category.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2 mt-4">
                    {filteredSkills.map((skill) => (
                      <div
                        key={skill.name}
                        className="flex items-center justify-between p-2 rounded-lg bg-black/20 border border-white/5 hover:border-white/10 transition-colors"
                      >
                        <div className="flex items-center gap-2">
                          {skill.highlight ? (
                            <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400/20 shrink-0" />
                          ) : (
                            <Check className="w-3.5 h-3.5 text-[#009de0] shrink-0" />
                          )}
                          <span className="text-xs text-white font-medium">
                            {skill.name}
                          </span>
                        </div>
                        <div className="flex items-center gap-1.5 shrink-0">
                          {skill.yearsOrScope && (
                            <span className="text-[10px] font-mono-code px-1.5 py-0.5 rounded bg-white/5 text-neutral-400">
                              {skill.yearsOrScope}
                            </span>
                          )}
                          <span
                            className={`text-[10px] font-mono-code px-1.5 py-0.5 rounded ${
                              skill.level === 'Expert'
                                ? 'bg-[#009de0]/20 text-[#8aceff] font-semibold'
                                : skill.level === 'Production-Grade'
                                ? 'bg-emerald-500/20 text-emerald-300'
                                : 'bg-white/10 text-neutral-300'
                            }`}
                          >
                            {skill.level}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Languages Strip */}
        <div className="bg-[#19191e]/80 border border-white/10 rounded-2xl p-6 sm:p-7 backdrop-blur-md shadow-xl">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4">
            <div className="flex items-center gap-2.5">
              <Globe className="w-5 h-5 text-[#009de0]" />
              <h3 className="text-lg font-bold text-white">
                Multilingual Operations & International Communication
              </h3>
            </div>
            <span className="text-xs font-mono-code text-neutral-400">
              Experienced leading global teams across 7 regional markets
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {languagesData.map((lang) => (
              <div
                key={lang.language}
                className="bg-black/30 rounded-xl p-4 border border-white/5 flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{lang.flag}</span>
                  <div>
                    <span className="block text-sm font-bold text-white">
                      {lang.language}
                    </span>
                    <span className="block text-xs text-neutral-400 font-mono-code">
                      {lang.proficiency}
                    </span>
                  </div>
                </div>
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
