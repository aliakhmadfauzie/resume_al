import React from 'react';
import { personalInfo } from '../data/resumeData';
import { ArrowUp, Heart, Code2, Globe, Sparkles } from 'lucide-react';

interface FooterProps {
  onNavigateHome?: (sectionId?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigateHome }) => {
  const scrollToTop = () => {
    if (onNavigateHome) {
      onNavigateHome('home');
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleLinkClick = (href: string, e: React.MouseEvent) => {
    if (onNavigateHome) {
      e.preventDefault();
      onNavigateHome(href.replace('#', ''));
    }
  };

  return (
    <footer className="py-12 px-4 sm:px-6 bg-[#0e0e11] border-t border-white/10 text-xs font-mono-code text-neutral-400 no-print">
      <div className="max-w-[1140px] mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-8 border-b border-white/5">
          {/* Copyright & Identity */}
          <div className="flex flex-col sm:flex-row items-center gap-2 text-center sm:text-left">
            <span className="text-white font-bold">
              © 2017–2026 {personalInfo.name}
            </span>
            <span className="hidden sm:inline text-neutral-600">•</span>
            <span className="text-neutral-400">
              Enterprise Solution Architecture & Operations
            </span>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-neutral-400">
            <a href="#home" onClick={(e) => handleLinkClick('#home', e)} className="hover:text-white transition-colors">
              Home
            </a>
            <a href="#projects" onClick={(e) => handleLinkClick('#projects', e)} className="hover:text-white transition-colors">
              Projects
            </a>
            <a href="#articles" onClick={(e) => handleLinkClick('#articles', e)} className="hover:text-white transition-colors">
              Articles
            </a>
            <a href="#timeline" onClick={(e) => handleLinkClick('#timeline', e)} className="hover:text-white transition-colors">
              Timeline
            </a>
            <a href="#architecture" onClick={(e) => handleLinkClick('#architecture', e)} className="hover:text-white transition-colors">
              Architecture
            </a>
            <a href="#skills" onClick={(e) => handleLinkClick('#skills', e)} className="hover:text-white transition-colors">
              Skills
            </a>
            <a href="#contact" onClick={(e) => handleLinkClick('#contact', e)} className="hover:text-white transition-colors">
              Contact
            </a>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            id="back-to-top-btn"
            className="flex items-center gap-1 text-[#8aceff] hover:text-white hover:underline transition-all"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-neutral-500">
          <div className="flex items-center gap-1.5">
            <span>Built with React 19, TypeScript, Tailwind CSS & WebGL Canvas Shader</span>
          </div>
          <div className="flex items-center gap-2">
            <span>Kuala Lumpur, Malaysia (MYT UTC+8)</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
