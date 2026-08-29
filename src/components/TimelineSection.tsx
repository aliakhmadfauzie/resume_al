import React, { useState } from 'react';
import { timelineData } from '../data/resumeData';
import { TimelineItem, ProfileMode } from '../types';
import {
  Briefcase,
  GraduationCap,
  Award,
  ChevronDown,
  ChevronUp,
  MapPin,
  Calendar,
  CheckCircle2,
  Filter,
  Sparkles,
} from 'lucide-react';

interface TimelineSectionProps {
  currentMode: ProfileMode;
}

export const TimelineSection: React.FC<TimelineSectionProps> = ({ currentMode }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'experience' | 'education'>('all');
  const [expandedId, setExpandedId] = useState<string | null>('independent-consultant-2025');

  const filteredItems = timelineData.filter((item) => {
    if (activeFilter === 'all') return true;
    return item.type === activeFilter;
  });

  const getNodeIcon = (type: string, category: string) => {
    if (type === 'education') {
      return <GraduationCap className="w-4 h-4 text-[#8aceff]" />;
    }
    if (category === 'architect') {
      return <Briefcase className="w-4 h-4 text-[#009de0]" />;
    }
    return <Briefcase className="w-4 h-4 text-emerald-400" />;
  };

  return (
    <section id="timeline" className="py-20 px-4 sm:px-6 relative">
      <div className="max-w-[1000px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono-code text-[#8aceff] mb-3">
            <Calendar className="w-3.5 h-3.5" />
            <span>Chronological Career Narrative</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-2">
            Timeline
          </h2>
          <p className="text-neutral-400 text-lg font-medium">
            Professional trajectory in Solution Architecture, Leadership & Academic Foundations
          </p>

          {/* Filter Pills */}
          <div className="flex items-center justify-center gap-2 mt-6">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeFilter === 'all'
                  ? 'bg-[#009de0] text-white shadow-md shadow-[#009de0]/20'
                  : 'bg-[#1c1c20] text-neutral-400 hover:text-white border border-white/10'
              }`}
            >
              All Milestones ({timelineData.length})
            </button>
            <button
              onClick={() => setActiveFilter('experience')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeFilter === 'experience'
                  ? 'bg-[#009de0] text-white shadow-md shadow-[#009de0]/20'
                  : 'bg-[#1c1c20] text-neutral-400 hover:text-white border border-white/10'
              }`}
            >
              Work Experience (6)
            </button>
            <button
              onClick={() => setActiveFilter('education')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeFilter === 'education'
                  ? 'bg-[#009de0] text-white shadow-md shadow-[#009de0]/20'
                  : 'bg-[#1c1c20] text-neutral-400 hover:text-white border border-white/10'
              }`}
            >
              Education & Honors (1)
            </button>
          </div>
        </div>

        {/* Vertical Timeline Axis matching Image 5 & 6 */}
        <div className="relative">
          {/* Central 2px Axis Line */}
          <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-[2px] -translate-x-1/2 bg-gradient-to-b from-[#009de0] via-white/20 to-[#009de0]/40 z-0" />

          <div className="space-y-12 relative z-10">
            {filteredItems.map((item, index) => {
              const isEven = index % 2 === 0;
              const isExpanded = expandedId === item.id;

              return (
                <div
                  key={item.id}
                  className={`flex flex-col md:flex-row items-start md:items-center gap-6 ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Content Card (Half Width on Desktop) */}
                  <div className="w-full md:w-[calc(50%-2rem)] pl-10 md:pl-0">
                    <div
                      className={`bg-[#19191e]/90 border rounded-2xl p-6 backdrop-blur-md shadow-xl transition-all duration-300 ${
                        item.featured
                          ? 'border-[#009de0]/40 hover:border-[#009de0]'
                          : 'border-white/10 hover:border-white/20'
                      }`}
                    >
                      {/* Top Header: Period & Category Badge */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <span className="inline-flex items-center gap-1 text-xs font-mono-code text-[#8aceff] font-semibold">
                          <Calendar className="w-3 h-3 text-[#009de0]" />
                          <span>{item.period}</span>
                        </span>
                        <span className="text-[11px] font-mono-code px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-neutral-400">
                          {item.company}
                        </span>
                      </div>

                      {/* Role Heading */}
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
                        {item.role}
                      </h3>

                      <div className="flex items-center gap-1.5 text-xs text-neutral-400 mb-4">
                        <MapPin className="w-3.5 h-3.5 text-neutral-500" />
                        <span>{item.location}</span>
                      </div>

                      {/* Quantifiable Metrics Strip */}
                      {item.metrics && item.metrics.length > 0 && (
                        <div className="grid grid-cols-2 gap-2 mb-4">
                          {item.metrics.map((metric, idx) => (
                            <div
                              key={idx}
                              className="bg-black/30 rounded-lg p-2 border border-white/5"
                            >
                              <span className="block text-sm font-bold text-white font-mono-code">
                                {metric.value}
                              </span>
                              <span className="block text-[11px] text-neutral-400">
                                {metric.label}
                              </span>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Description Points (Collapsible if long) */}
                      <div className="space-y-2 mb-4">
                        {(isExpanded ? item.description : item.description.slice(0, 2)).map(
                          (bullet, idx) => (
                            <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-neutral-300">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#009de0] shrink-0 mt-0.5" />
                              <span className="leading-relaxed">{bullet}</span>
                            </div>
                          )
                        )}
                      </div>

                      {item.description.length > 2 && (
                        <button
                          onClick={() => setExpandedId(isExpanded ? null : item.id)}
                          className="text-xs text-[#8aceff] hover:text-white flex items-center gap-1 font-mono-code mb-4"
                        >
                          <span>{isExpanded ? 'Show less details' : `Show all ${item.description.length} accomplishments`}</span>
                          {isExpanded ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                        </button>
                      )}

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/10">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 rounded text-[11px] font-mono-code bg-white/5 text-neutral-300 border border-white/10"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Center Node on 2px axis */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-[#121214] border-2 border-[#009de0] flex items-center justify-center shadow-lg shadow-[#009de0]/30 z-20">
                    {getNodeIcon(item.type, item.category)}
                  </div>

                  {/* Date indicator tag for the opposite side on desktop */}
                  <div className={`hidden md:block w-[calc(50%-2rem)] text-xs font-mono-code text-neutral-400 ${isEven ? 'text-right pr-6' : 'text-left pl-6'}`}>
                    <span className="px-3 py-1.5 rounded-full bg-[#1c1c20] border border-white/10 text-neutral-300">
                      {item.period}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-12 text-xs font-mono-code text-neutral-500 italic">
          Showing complete professional trajectory. All roles verified with references & project documentation.
        </div>
      </div>
    </section>
  );
};
