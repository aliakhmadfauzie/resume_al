import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/resumeData';
import { ProfileMode } from '../types';
import {
  FileText,
  Mail,
  Layers,
  Menu,
  X,
  Compass,
  Cpu,
  Users,
  CheckCircle2,
  Workflow,
  Sparkles,
} from 'lucide-react';

interface HeaderProps {
  currentMode: ProfileMode;
  onSelectMode: (mode: ProfileMode) => void;
  onOpenResumeModal: () => void;
  onOpenContactModal: () => void;
  onNavigateHome?: (sectionId?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentMode,
  onSelectMode,
  onOpenResumeModal,
  onOpenContactModal,
  onNavigateHome,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Projects', href: '#projects' },
    { label: 'Articles', href: '#articles' },
    { label: 'Timeline', href: '#timeline' },
    { label: 'Architecture', href: '#architecture' },
    { label: 'Skills', href: '#skills' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (href: string, e: React.MouseEvent) => {
    if (onNavigateHome) {
      e.preventDefault();
      onNavigateHome(href.replace('#', ''));
    }
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 no-print ${
        isScrolled
          ? 'bg-[#121214]/90 backdrop-blur-md border-b border-white/10 shadow-2xl py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#home"
          id="logo-brand-link"
          onClick={(e) => handleLinkClick('#home', e)}
          className="flex items-center gap-3 group focus:outline-none"
        >
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#009de0] to-[#005580] flex items-center justify-center font-bold text-white text-sm shadow-md shadow-[#009de0]/20 group-hover:scale-105 transition-transform">
            {personalInfo.initials}
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-base tracking-tight text-white group-hover:text-[#8aceff] transition-colors">
              {personalInfo.name}
            </span>
            <span className="text-[11px] font-mono-code text-neutral-400">
              Kuala Lumpur • MYT (UTC+8)
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-5 text-sm font-medium text-neutral-300">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleLinkClick(link.href, e)}
              className="hover:text-white transition-colors relative py-1 hover:after:w-full after:w-0 after:h-[2px] after:bg-[#009de0] after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Quick Perspective Filter */}
          <div className="flex items-center bg-[#1c1c20] p-1 rounded-lg border border-white/10 text-xs">
            <button
              id="mode-hybrid-btn"
              onClick={() => onSelectMode('hybrid')}
              className={`px-2.5 py-1 rounded transition-all flex items-center gap-1.5 ${
                currentMode === 'hybrid'
                  ? 'bg-[#009de0] text-white font-medium shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
              title="All-around hybrid profile"
            >
              <Compass className="w-3 h-3" />
              <span>Full</span>
            </button>
            <button
              id="mode-architect-btn"
              onClick={() => onSelectMode('architect')}
              className={`px-2.5 py-1 rounded transition-all flex items-center gap-1.5 ${
                currentMode === 'architect'
                  ? 'bg-[#009de0] text-white font-medium shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
              title="Filter by Enterprise Architecture & Power Platform"
            >
              <Cpu className="w-3 h-3" />
              <span>Architect</span>
            </button>
            <button
              id="mode-ops-btn"
              onClick={() => onSelectMode('operations')}
              className={`px-2.5 py-1 rounded transition-all flex items-center gap-1.5 ${
                currentMode === 'operations'
                  ? 'bg-[#009de0] text-white font-medium shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
              title="Filter by Operations Leadership & Customer Delivery"
            >
              <Users className="w-3 h-3" />
              <span>Ops</span>
            </button>
          </div>

          {/* CV Button */}
          <button
            id="view-cv-nav-btn"
            onClick={onOpenResumeModal}
            className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/15 rounded-lg transition-all"
          >
            <FileText className="w-3.5 h-3.5 text-[#8aceff]" />
            <span>Interactive CV</span>
          </button>

          {/* Contact CTA */}
          <button
            id="nav-contact-btn"
            onClick={onOpenContactModal}
            className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-[#009de0] hover:bg-[#0087c2] rounded-lg shadow-md shadow-[#009de0]/25 transition-all"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Get in Touch</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            id="mobile-cv-quick-btn"
            onClick={onOpenResumeModal}
            className="p-2 rounded-lg bg-white/10 text-white border border-white/15 text-xs flex items-center gap-1"
          >
            <FileText className="w-4 h-4 text-[#8aceff]" />
            <span className="text-[11px] font-medium">CV</span>
          </button>
          <button
            id="mobile-menu-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-white/5 text-neutral-300 hover:text-white border border-white/10"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#161619] border-b border-white/10 px-4 py-5 space-y-4 animate-in slide-in-from-top duration-200">
          <div className="space-y-1">
            <span className="text-[11px] uppercase tracking-wider text-neutral-400 font-mono-code">
              Filter Experience View
            </span>
            <div className="grid grid-cols-3 gap-1.5 pt-1">
              <button
                onClick={() => {
                  onSelectMode('hybrid');
                  setMobileMenuOpen(false);
                }}
                className={`py-2 text-xs rounded text-center border ${
                  currentMode === 'hybrid'
                    ? 'bg-[#009de0] text-white border-[#009de0]'
                    : 'bg-white/5 text-neutral-300 border-white/10'
                }`}
              >
                Full Profile
              </button>
              <button
                onClick={() => {
                  onSelectMode('architect');
                  setMobileMenuOpen(false);
                }}
                className={`py-2 text-xs rounded text-center border ${
                  currentMode === 'architect'
                    ? 'bg-[#009de0] text-white border-[#009de0]'
                    : 'bg-white/5 text-neutral-300 border-white/10'
                }`}
              >
                Architect
              </button>
              <button
                onClick={() => {
                  onSelectMode('operations');
                  setMobileMenuOpen(false);
                }}
                className={`py-2 text-xs rounded text-center border ${
                  currentMode === 'operations'
                    ? 'bg-[#009de0] text-white border-[#009de0]'
                    : 'bg-white/5 text-neutral-300 border-white/10'
                }`}
              >
                Operations
              </button>
            </div>
          </div>

          <div className="border-t border-white/10 pt-3 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  handleLinkClick(link.href, e);
                  setMobileMenuOpen(false);
                }}
                className="block py-2 text-sm text-neutral-300 hover:text-[#8aceff]"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                onOpenResumeModal();
                setMobileMenuOpen(false);
              }}
              className="w-full py-2.5 text-xs font-semibold text-center bg-white/10 border border-white/15 text-white rounded-lg flex items-center justify-center gap-2"
            >
              <FileText className="w-4 h-4 text-[#8aceff]" />
              <span>Open ATS & Executive CV</span>
            </button>
            <button
              onClick={() => {
                onOpenContactModal();
                setMobileMenuOpen(false);
              }}
              className="w-full py-2.5 text-xs font-semibold text-center bg-[#009de0] text-white rounded-lg flex items-center justify-center gap-2 shadow-md shadow-[#009de0]/20"
            >
              <Mail className="w-4 h-4" />
              <span>Contact Ali Directly</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
