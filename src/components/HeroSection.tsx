import React, { useState } from 'react';
import { personalInfo } from '../data/resumeData';
import { ProfileMode } from '../types';
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MessageSquare,
  Globe,
  Award,
  Key,
  Download,
  ArrowDown,
  CheckCircle2,
  Cpu,
  Users,
  Compass,
  Copy,
  Check,
  MapPin,
  ExternalLink,
  Sparkles,
} from 'lucide-react';

interface HeroSectionProps {
  currentMode: ProfileMode;
  onSelectMode: (mode: ProfileMode) => void;
  onOpenResumeModal: () => void;
  onOpenContactModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  currentMode,
  onSelectMode,
  onOpenResumeModal,
  onOpenContactModal,
}) => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const getActiveTitle = () => {
    switch (currentMode) {
      case 'architect':
        return personalInfo.titles.architect;
      case 'operations':
        return personalInfo.titles.operations;
      default:
        return personalInfo.titles.hybrid;
    }
  };

  return (
    <section id="home" className="relative pt-32 pb-16 px-4 sm:px-6">
      <div className="max-w-[880px] mx-auto text-center">
        {/* Profile Avatar Card */}
        <div className="relative inline-block mb-6 group">
          <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl p-1 bg-gradient-to-b from-white/20 to-white/5 border border-white/20 shadow-2xl overflow-hidden mx-auto">
            {/* Real photo representation / fallback */}
            <div className="w-full h-full rounded-xl bg-[#1c1c22] overflow-hidden relative flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80"
                alt="Ali Akhmad Fauzie"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300 transform group-hover:scale-105"
                onError={(e) => {
                  // Fallback to initials badge if image blocked
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121214] via-transparent to-transparent opacity-40" />
            </div>
          </div>

          {/* Status Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#182a20] border border-emerald-500/30 text-emerald-400 text-[11px] font-mono-code shadow-lg -mt-3 relative z-10">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Open for Architecture & Leadership</span>
          </div>
        </div>

        {/* Primary Name Display */}
        <h1
          id="hero-name-heading"
          className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-3"
        >
          {personalInfo.name}
        </h1>

        {/* Subtitle & Role Tagline */}
        <div className="min-h-[36px] flex items-center justify-center mb-6">
          <p className="text-lg sm:text-xl font-medium text-[#8aceff] tracking-tight">
            {getActiveTitle()}
          </p>
        </div>

        {/* Perspective Mode Switcher Pills */}
        <div className="inline-flex items-center justify-center bg-[#1c1c22]/90 border border-white/10 rounded-full p-1.5 mb-8 backdrop-blur-sm shadow-xl">
          <button
            id="hero-tab-hybrid"
            onClick={() => onSelectMode('hybrid')}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs transition-all ${
              currentMode === 'hybrid'
                ? 'bg-[#009de0] text-white font-semibold shadow-md shadow-[#009de0]/20'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            <Compass className="w-3.5 h-3.5" />
            <span>Complete Profile</span>
          </button>
          <button
            id="hero-tab-architect"
            onClick={() => onSelectMode('architect')}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs transition-all ${
              currentMode === 'architect'
                ? 'bg-[#009de0] text-white font-semibold shadow-md shadow-[#009de0]/20'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            <Cpu className="w-3.5 h-3.5" />
            <span>Power Platform & Arch</span>
          </button>
          <button
            id="hero-tab-ops"
            onClick={() => onSelectMode('operations')}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs transition-all ${
              currentMode === 'operations'
                ? 'bg-[#009de0] text-white font-semibold shadow-md shadow-[#009de0]/20'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            <Users className="w-3.5 h-3.5" />
            <span>Operations & Leadership</span>
          </button>
        </div>

        {/* Social / Contact Icons Row matching Image 5 & 6 */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs text-neutral-300 mb-10">
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            id="social-linkedin"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#009de0]/50 transition-all hover:text-white"
          >
            <Linkedin className="w-3.5 h-3.5 text-[#0077b5]" />
            <span>LinkedIn</span>
          </a>

          <button
            onClick={handleCopyEmail}
            id="social-email-copy"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#009de0]/50 transition-all hover:text-white"
            title="Click to copy email address"
          >
            {copiedEmail ? (
              <Check className="w-3.5 h-3.5 text-emerald-400" />
            ) : (
              <Mail className="w-3.5 h-3.5 text-[#8aceff]" />
            )}
            <span>{copiedEmail ? 'Email Copied!' : 'Email'}</span>
          </button>

          <a
            href={personalInfo.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="social-whatsapp"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-emerald-500/50 transition-all hover:text-white"
          >
            <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
            <span>WhatsApp</span>
          </a>

          <a
            href={`tel:${personalInfo.phoneMY.replace(/\s+/g, '')}`}
            id="social-phone"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#009de0]/50 transition-all hover:text-white"
          >
            <Phone className="w-3.5 h-3.5 text-neutral-400" />
            <span>{personalInfo.phoneMY}</span>
          </a>

          <a
            href={personalInfo.portfolioUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="social-portfolio"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#009de0]/50 transition-all hover:text-white"
          >
            <Globe className="w-3.5 h-3.5 text-[#8aceff]" />
            <span>Live Portfolio</span>
          </a>

          <a
            href="#certifications"
            id="social-six-sigma"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-emerald-500/50 transition-all hover:text-white"
          >
            <Award className="w-3.5 h-3.5 text-emerald-400" />
            <span>Six Sigma Green Belt</span>
          </a>

          <span
            id="social-gpg"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-neutral-400 font-mono-code text-[11px]"
            title="Public Key"
          >
            <Key className="w-3 h-3 text-neutral-500" />
            <span>GPG: {personalInfo.gpgKey}</span>
          </span>
        </div>

        {/* Hey! Introductory Paragraph matching Image 5 & 6 */}
        <div className="max-w-[680px] mx-auto bg-[#18181c]/70 border border-white/10 rounded-2xl p-6 sm:p-7 backdrop-blur-md mb-10 shadow-xl text-left">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-mono-code uppercase tracking-wider text-[#8aceff] font-semibold">
              // Professional Summary
            </span>
            <div className="h-[1px] flex-1 bg-white/10" />
          </div>

          <h3 className="text-xl font-bold text-white mb-2">
            Hey! I'm Ali from Kuala Lumpur.
          </h3>
          <p className="text-neutral-300 text-sm sm:text-base leading-relaxed mb-4">
            {personalInfo.aboutParagraphs[0]}
          </p>
          <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
            {personalInfo.aboutParagraphs[1]}
          </p>

          <div className="flex flex-wrap items-center justify-between gap-4 mt-6 pt-4 border-t border-white/10 text-xs text-neutral-400">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#009de0]" />
              <span>Based in Kuala Lumpur & Bandung • Worldwide Delivery</span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={onOpenResumeModal}
                className="text-[#8aceff] hover:underline flex items-center gap-1 font-medium"
              >
                <span>Read Full CV</span>
                <ExternalLink className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>

        {/* High-Impact Stat Metrics Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-10">
          {personalInfo.stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-[#19191d]/80 border border-white/10 rounded-xl p-3 text-center backdrop-blur-sm hover:border-[#009de0]/40 transition-colors"
            >
              <div className="text-xl sm:text-2xl font-extrabold text-white font-mono-code tracking-tight">
                {stat.value}
              </div>
              <div className="text-[11px] text-neutral-400 leading-snug mt-1 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Quick CTA Actions */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <a
            href="#projects"
            id="hero-explore-projects-btn"
            className="px-5 py-2.5 rounded-xl bg-[#009de0] hover:bg-[#0087c2] text-white font-semibold text-sm flex items-center gap-2 shadow-lg shadow-[#009de0]/20 transition-all hover:scale-[1.02]"
          >
            <span>Explore Portfolio Projects</span>
            <ArrowDown className="w-4 h-4" />
          </a>
          <button
            onClick={onOpenResumeModal}
            id="hero-open-cv-btn"
            className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-white font-semibold text-sm flex items-center gap-2 transition-all"
          >
            <Download className="w-4 h-4 text-[#8aceff]" />
            <span>Print / Download Resume</span>
          </button>
        </div>
      </div>
    </section>
  );
};
