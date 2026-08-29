import React from 'react';
import { certificationsData } from '../data/resumeData';
import { Award, CheckCircle2, ShieldCheck, ExternalLink, Sparkles } from 'lucide-react';

export const CertificationsSection: React.FC = () => {
  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 bg-[#151518]/50 border-t border-white/5 relative">
      <div className="max-w-[1140px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono-code text-[#8aceff] mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Verified Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-2">
            Certifications & Executive Education
          </h2>
          <p className="text-neutral-400 text-lg font-medium">
            Continuous professional mastery in Six Sigma, AI Engineering & Business Automation
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {certificationsData.map((cert, idx) => (
            <div
              key={idx}
              className="bg-[#19191e] border border-white/10 hover:border-[#009de0]/50 rounded-xl p-5 backdrop-blur-sm transition-all duration-200 hover:-translate-y-1 shadow-lg flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-9 h-9 rounded-lg bg-[#009de0]/10 border border-[#009de0]/30 flex items-center justify-center text-[#8aceff]">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono-code px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>{cert.status}</span>
                  </span>
                </div>

                <h3 className="text-sm font-bold text-white mb-1.5 leading-snug">
                  {cert.name}
                </h3>
                <p className="text-xs text-neutral-400 font-medium">
                  {cert.issuer}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono-code text-neutral-500">
                <span>{cert.year}</span>
                <span className="text-[#8aceff]">Verified Credential</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
