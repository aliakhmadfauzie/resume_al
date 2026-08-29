import React, { useState, useRef, useEffect } from 'react';
import { personalInfo } from '../data/resumeData';
import { ProfileMode } from '../types';
import { motion } from 'motion/react';
import {
  Linkedin,
  Mail,
  Phone,
  MessageSquare,
  Globe,
  Award,
  Download,
  ArrowDown,
  Cpu,
  Users,
  Compass,
  Check,
  Camera,
  Sparkles,
  ArrowRight,
  Send,
  ExternalLink,
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
  const [profilePhoto, setProfilePhoto] = useState<string>(personalInfo.avatarUrl || '');
  const [imageLoadError, setImageLoadError] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const saved = localStorage.getItem('user_profile_photo');
    if (saved) {
      setProfilePhoto(saved);
      setImageLoadError(false);
    }
  }, []);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (uploadEvent) => {
        const result = uploadEvent.target?.result as string;
        if (result) {
          setProfilePhoto(result);
          setImageLoadError(false);
          localStorage.setItem('user_profile_photo', result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

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
    <section id="home" className="relative pt-24 sm:pt-28 pb-0 border-b border-[#e0e0d8] overflow-hidden">
      <div className="max-w-[1360px] mx-auto grid grid-cols-1 lg:grid-cols-12 border-x border-[#e0e0d8]">
        
        {/* Left Column: Hero & Key Statements */}
        <div className="lg:col-span-7 xl:col-span-8 p-6 sm:p-12 xl:p-16 lg:border-r border-[#e0e0d8] flex flex-col justify-center bg-[#fdfdfc]">
          
          {/* Top Label & Perspective Filter Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <span className="label-mono">
              Fullstack Engineer & Architect
            </span>
            <div className="flex items-center gap-1.5 font-mono-code text-[0.65rem] uppercase tracking-wider text-[#888880]">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available for Enterprise Engagements</span>
            </div>
          </div>

          {/* Large Serif Headline */}
          <motion.h1
            id="hero-name-heading"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="font-serif-display italic text-6xl sm:text-7xl md:text-8xl lg:text-[6.8rem] xl:text-[7.8rem] font-light leading-[0.88] tracking-[-0.04em] text-[#121212] my-4 sm:my-6"
          >
            Ali Akhmad<br />
            <span className="text-[#121212]">Fauzie</span>
          </motion.h1>

          {/* Subtitle / Focus */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
            className="text-base sm:text-lg md:text-xl font-light text-[#444440] leading-relaxed max-w-2xl mt-2 mb-6"
          >
            Architecting the digital shift. Specializing in enterprise-scale modernization, mobile engineering across iOS & Android, and high-impact Lark bot automations.
          </motion.p>

          {/* Concentrix BPO Highlight Banner */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15, ease: 'easeOut' }}
            className="mb-8 p-3.5 sm:p-4 rounded-none bg-[#f7f7f0] border border-[#e0e0d8] flex items-center gap-3 text-xs sm:text-sm text-[#121212]"
          >
            <Sparkles className="w-4 h-4 text-[#121212] flex-shrink-0" />
            <span className="font-mono-code text-xs uppercase tracking-wider text-[#444440]">
              <strong className="text-[#121212]">Concentrix Milestone:</strong> Multilingual BPO team scaling across 7 markets and automated Lark bot workflows.
            </span>
          </motion.div>

          {/* Profile Photo & Developer Accreditations Row */}
          <div className="flex flex-wrap items-center gap-6 mb-10 pb-8 border-b border-[#e0e0d8]">
            {/* Interactive Photo Avatar */}
            <div
              onClick={() => fileInputRef.current?.click()}
              className="relative group cursor-pointer flex items-center gap-4"
              title="Click to change or upload photo"
            >
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileUpload}
                accept="image/*"
                className="hidden"
              />
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border border-[#e0e0d8] p-1 bg-[#fdfdfc] overflow-hidden relative group-hover:border-[#121212] transition-colors">
                <div className="w-full h-full rounded-full overflow-hidden bg-[#f7f7f0] relative">
                  {!imageLoadError && profilePhoto ? (
                    <img
                      src={profilePhoto}
                      alt="Ali Akhmad Fauzie"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      onError={() => setImageLoadError(true)}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center font-mono-code text-sm font-bold">
                      {personalInfo.initials}
                    </div>
                  )}
                  <div className="absolute inset-0 bg-[#121212]/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                    <Camera className="w-4 h-4" />
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-mono-code text-xs uppercase tracking-wider text-[#121212] font-semibold">
                  Ali A. Fauzie
                </span>
                <span className="text-[11px] text-[#888880] font-mono-code">
                  Kuala Lumpur & Bandung
                </span>
                <button
                  type="button"
                  className="text-[10px] font-mono-code text-[#121212] underline mt-1 text-left"
                >
                  Change Photo
                </button>
              </div>
            </div>

            {/* Developer Ecosystem Pills */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-mono-code text-[0.65rem] uppercase tracking-wider px-3 py-1.5 rounded-full border border-[#e0e0d8] bg-[#f7f7f0] text-[#121212]">
                Google Dev (Android/Cloud)
              </span>
              <span className="font-mono-code text-[0.65rem] uppercase tracking-wider px-3 py-1.5 rounded-full border border-[#e0e0d8] bg-[#f7f7f0] text-[#121212]">
                Certified Lark Developer
              </span>
              <span className="font-mono-code text-[0.65rem] uppercase tracking-wider px-3 py-1.5 rounded-full border border-[#e0e0d8] bg-[#f7f7f0] text-[#121212]">
                Microsoft Power Platform
              </span>
            </div>
          </div>

          {/* Experience Statistics Bar */}
          <div className="grid grid-cols-3 gap-6 sm:gap-10 mb-10">
            <div className="stat-item">
              <span className="label-mono block mb-1">Applications</span>
              <h4 className="font-mono-code text-3xl sm:text-4xl text-[#121212] font-normal">16+</h4>
            </div>
            <div className="stat-item">
              <span className="label-mono block mb-1">SLA Rate</span>
              <h4 className="font-mono-code text-3xl sm:text-4xl text-[#121212] font-normal">98%</h4>
            </div>
            <div className="stat-item">
              <span className="label-mono block mb-1">Legacy Forms</span>
              <h4 className="font-mono-code text-3xl sm:text-4xl text-[#121212] font-normal">361</h4>
            </div>
          </div>

          {/* Featured Case Study Rows */}
          <div className="project-list">
            <div className="label-mono mb-3">Featured Case Studies</div>
            
            {/* Case 01 */}
            <a
              href="#projects"
              className="grid grid-cols-12 py-5 border-t border-[#e0e0d8] items-start group hover:bg-[#f7f7f0]/50 transition-colors"
            >
              <div className="col-span-3 sm:col-span-2 label-mono pt-1 text-[#888880] group-hover:text-[#121212]">
                CASE 01
              </div>
              <div className="col-span-6 sm:col-span-7 pr-4">
                <h3 className="font-serif-display text-2xl sm:text-3xl font-light italic text-[#121212] group-hover:translate-x-1 transition-transform">
                  IOI Modernization
                </h3>
                <p className="text-xs sm:text-sm text-[#888880] mt-1 font-light leading-relaxed">
                  Modernizing 361 legacy forms & apps for 2,000+ users via Dataverse & Power Platform.
                </p>
              </div>
              <div className="col-span-3 text-right label-mono pt-1 text-[#121212]">
                Solution Arch →
              </div>
            </a>

            {/* Case 02 */}
            <a
              href="#projects"
              className="grid grid-cols-12 py-5 border-t border-b border-[#e0e0d8] items-start group hover:bg-[#f7f7f0]/50 transition-colors"
            >
              <div className="col-span-3 sm:col-span-2 label-mono pt-1 text-[#888880] group-hover:text-[#121212]">
                CASE 02
              </div>
              <div className="col-span-6 sm:col-span-7 pr-4">
                <h3 className="font-serif-display text-2xl sm:text-3xl font-light italic text-[#121212] group-hover:translate-x-1 transition-transform">
                  Concentrix Scaling
                </h3>
                <p className="text-xs sm:text-sm text-[#888880] mt-1 font-light leading-relaxed">
                  Scaling multilingual BPO support across 7 regional markets via custom Lark bot automation.
                </p>
              </div>
              <div className="col-span-3 text-right label-mono pt-1 text-[#121212]">
                BPO Strategy →
              </div>
            </a>
          </div>

        </div>

        {/* Right Column: Details & Interaction Hub */}
        <div className="lg:col-span-5 xl:col-span-4 grid grid-rows-2 bg-[#fdfdfc]">
          
          {/* Detail Block 01: Expertise Hub */}
          <div className="p-6 sm:p-10 border-b border-[#e0e0d8] flex flex-col justify-between">
            <div>
              <span className="label-mono">01 — Expertise Hub</span>

              <div className="mt-6 sm:mt-8">
                <span className="label-mono block mb-3 text-[#121212]">
                  Development Stack
                </span>
                <div className="flex flex-wrap gap-2">
                  {['Kotlin', 'Swift', 'React Native', 'TypeScript', 'C#', 'Python', 'Flutter'].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 border border-[#e0e0d8] rounded-full text-xs font-mono-code text-[#444440] hover:border-[#121212] hover:text-[#121212] transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6">
                <span className="label-mono block mb-3 text-[#121212]">
                  Platforms & Operations
                </span>
                <div className="flex flex-wrap gap-2">
                  {['Power Platform', 'Dataverse', 'Azure DevOps', 'Six Sigma', 'Lark Open Platform', 'CI/CD'].map((plat) => (
                    <span
                      key={plat}
                      className="px-3 py-1 border border-[#e0e0d8] rounded-full text-xs font-mono-code text-[#444440] hover:border-[#121212] hover:text-[#121212] transition-colors"
                    >
                      {plat}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-[#e0e0d8] flex items-center justify-between text-xs font-mono-code text-[#888880]">
              <span>PROFILE PERSPECTIVE</span>
              <button
                onClick={() => onSelectMode(currentMode === 'hybrid' ? 'architect' : currentMode === 'architect' ? 'operations' : 'hybrid')}
                className="text-[#121212] font-semibold underline uppercase"
              >
                {currentMode.toUpperCase()} VIEW
              </button>
            </div>
          </div>

          {/* Detail Block 02: Interaction & Transmissions */}
          <div className="p-6 sm:p-10 bg-[#f7f7f0] flex flex-col justify-between">
            <div>
              <span className="label-mono">02 — Interaction</span>
              <p className="mt-4 text-xs sm:text-sm text-[#444440] leading-relaxed font-light">
                Available for enterprise architecture, solution modernization, mobile application delivery, and high-impact digital workflows.
              </p>

              {/* Solid Ink Action Button */}
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="#contact"
                  id="hero-cta-transmission"
                  className="inline-flex items-center gap-2 bg-[#121212] text-[#fdfdfc] px-6 py-3.5 font-mono-code text-xs uppercase tracking-[0.15em] hover:bg-[#333333] transition-colors shadow-sm"
                >
                  <span>Send Transmission</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>

                <button
                  onClick={onOpenResumeModal}
                  id="hero-cta-cv-direct"
                  className="inline-flex items-center gap-2 bg-[#fdfdfc] text-[#121212] border border-[#e0e0d8] px-5 py-3.5 font-mono-code text-xs uppercase tracking-[0.15em] hover:border-[#121212] transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>CV</span>
                </button>
              </div>

              {/* Direct Channels Bar */}
              <div className="mt-6 flex flex-wrap items-center gap-4 text-xs font-mono-code text-[#444440]">
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#121212] underline"
                >
                  LinkedIn
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="hover:text-[#121212] underline"
                >
                  {copiedEmail ? 'Email Copied' : 'Email'}
                </button>
                <a
                  href={personalInfo.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#121212] underline"
                >
                  WhatsApp
                </a>
                <a
                  href={`tel:${personalInfo.phoneMY.replace(/\s+/g, '')}`}
                  className="hover:text-[#121212] underline"
                >
                  Call
                </a>
              </div>
            </div>

            {/* Recent Insight / Article Preview */}
            <div className="mt-8 pt-6 border-t border-[#e0e0d8]">
              <span className="label-mono">Recent Insight</span>
              <p className="font-serif-display text-lg sm:text-xl italic text-[#121212] my-1 font-light">
                "Migrating 361 legacy applications to Dataverse"
              </p>
              <a
                href="#articles"
                className="label-mono text-[#121212] hover:text-[#888880] inline-flex items-center gap-1 mt-1"
              >
                <span>Read insight</span>
                <span>→</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

