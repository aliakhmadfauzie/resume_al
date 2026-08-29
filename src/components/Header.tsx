import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/resumeData';
import { ProfileMode } from '../types';
import {
  FileText,
  Mail,
  Menu,
  X,
  Compass,
  Cpu,
  Users,
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
    { label: 'Work', href: '#projects' },
    { label: 'Insight', href: '#articles' },
    { label: 'Timeline', href: '#timeline' },
    { label: 'Architecture', href: '#architecture' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Systems', href: '#skills' },
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 no-print border-b border-[#e0e0d8] ${
        isScrolled
          ? 'bg-[#fdfdfc]/95 backdrop-blur-md py-3 shadow-[0_2px_12px_rgba(0,0,0,0.03)]'
          : 'bg-[#fdfdfc]/90 backdrop-blur-sm py-4'
      }`}
    >
      <div className="max-w-[1360px] mx-auto px-6 sm:px-10 flex items-center justify-between">
        {/* Brand Logo / Monogram */}
        <a
          href="#home"
          id="logo-brand-link"
          onClick={(e) => handleLinkClick('#home', e)}
          className="flex items-center gap-3 group focus:outline-none"
        >
          <span className="font-mono-code font-bold text-xs uppercase tracking-[0.2em] text-[#121212] group-hover:text-[#888880] transition-colors">
            Ali Fauzie
          </span>
          <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-[#121212]" />
          <span className="hidden sm:inline-block font-mono-code text-[0.65rem] uppercase tracking-[0.15em] text-[#888880]">
            Solution Arch
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-[0.75rem] font-mono-code uppercase tracking-[0.12em] text-[#121212]">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleLinkClick(link.href, e)}
              className="text-[#121212] hover:text-[#888880] transition-colors py-1 relative hover:after:w-full after:w-0 after:h-[1px] after:bg-[#121212] after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Controls & Location Stamp */}
        <div className="hidden lg:flex items-center gap-4">
          {/* Perspective Switcher */}
          <div className="flex items-center bg-[#f7f7f0] p-0.5 rounded-full border border-[#e0e0d8] text-[0.65rem] font-mono-code uppercase tracking-[0.1em]">
            <button
              id="mode-hybrid-btn"
              onClick={() => onSelectMode('hybrid')}
              className={`px-3 py-1 rounded-full transition-all flex items-center gap-1 ${
                currentMode === 'hybrid'
                  ? 'bg-[#121212] text-[#fdfdfc] font-medium'
                  : 'text-[#888880] hover:text-[#121212]'
              }`}
              title="All-around hybrid profile"
            >
              <Compass className="w-2.5 h-2.5" />
              <span>Full</span>
            </button>
            <button
              id="mode-architect-btn"
              onClick={() => onSelectMode('architect')}
              className={`px-3 py-1 rounded-full transition-all flex items-center gap-1 ${
                currentMode === 'architect'
                  ? 'bg-[#121212] text-[#fdfdfc] font-medium'
                  : 'text-[#888880] hover:text-[#121212]'
              }`}
              title="Filter by Enterprise Architecture & Power Platform"
            >
              <Cpu className="w-2.5 h-2.5" />
              <span>Arch</span>
            </button>
            <button
              id="mode-ops-btn"
              onClick={() => onSelectMode('operations')}
              className={`px-3 py-1 rounded-full transition-all flex items-center gap-1 ${
                currentMode === 'operations'
                  ? 'bg-[#121212] text-[#fdfdfc] font-medium'
                  : 'text-[#888880] hover:text-[#121212]'
              }`}
              title="Filter by Operations Leadership & Customer Delivery"
            >
              <Users className="w-2.5 h-2.5" />
              <span>Ops</span>
            </button>
          </div>

          {/* Location Badge */}
          <div className="font-mono-code text-[0.65rem] uppercase tracking-[0.2em] text-[#888880] px-2 py-1">
            Kuala Lumpur, MY
          </div>

          {/* CV Button */}
          <button
            id="view-cv-nav-btn"
            onClick={onOpenResumeModal}
            className="flex items-center gap-1.5 px-3.5 py-1.5 font-mono-code text-[0.7rem] uppercase tracking-[0.1em] text-[#121212] bg-[#f7f7f0] hover:bg-[#ebebe2] border border-[#e0e0d8] rounded transition-all"
          >
            <FileText className="w-3 h-3 text-[#121212]" />
            <span>CV</span>
          </button>

          {/* Contact CTA */}
          <button
            id="nav-contact-btn"
            onClick={onOpenContactModal}
            className="flex items-center gap-1.5 px-4 py-1.5 font-mono-code text-[0.7rem] uppercase tracking-[0.15em] text-[#fdfdfc] bg-[#121212] hover:bg-[#333333] transition-all"
          >
            <Mail className="w-3 h-3" />
            <span>Transmit</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            id="mobile-cv-quick-btn"
            onClick={onOpenResumeModal}
            className="p-1.5 rounded bg-[#f7f7f0] text-[#121212] border border-[#e0e0d8] text-xs flex items-center gap-1 font-mono-code"
          >
            <FileText className="w-3.5 h-3.5" />
            <span className="text-[10px] font-medium">CV</span>
          </button>
          <button
            id="mobile-menu-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded bg-[#f7f7f0] text-[#121212] border border-[#e0e0d8]"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#fdfdfc] border-b border-[#e0e0d8] px-6 py-6 space-y-5 animate-in slide-in-from-top duration-200">
          <div className="space-y-2">
            <span className="label-mono">
              Profile Perspective
            </span>
            <div className="grid grid-cols-3 gap-2 pt-1 font-mono-code text-xs">
              <button
                onClick={() => {
                  onSelectMode('hybrid');
                  setMobileMenuOpen(false);
                }}
                className={`py-2 text-[0.7rem] uppercase tracking-wider rounded text-center border ${
                  currentMode === 'hybrid'
                    ? 'bg-[#121212] text-[#fdfdfc] border-[#121212]'
                    : 'bg-[#f7f7f0] text-[#121212] border-[#e0e0d8]'
                }`}
              >
                Full
              </button>
              <button
                onClick={() => {
                  onSelectMode('architect');
                  setMobileMenuOpen(false);
                }}
                className={`py-2 text-[0.7rem] uppercase tracking-wider rounded text-center border ${
                  currentMode === 'architect'
                    ? 'bg-[#121212] text-[#fdfdfc] border-[#121212]'
                    : 'bg-[#f7f7f0] text-[#121212] border-[#e0e0d8]'
                }`}
              >
                Arch
              </button>
              <button
                onClick={() => {
                  onSelectMode('operations');
                  setMobileMenuOpen(false);
                }}
                className={`py-2 text-[0.7rem] uppercase tracking-wider rounded text-center border ${
                  currentMode === 'operations'
                    ? 'bg-[#121212] text-[#fdfdfc] border-[#121212]'
                    : 'bg-[#f7f7f0] text-[#121212] border-[#e0e0d8]'
                }`}
              >
                Ops
              </button>
            </div>
          </div>

          <div className="border-t border-[#e0e0d8] pt-4 space-y-3 font-mono-code text-[0.75rem] uppercase tracking-[0.15em]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  handleLinkClick(link.href, e);
                  setMobileMenuOpen(false);
                }}
                className="block py-1 text-[#121212] hover:text-[#888880]"
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
              className="w-full py-2.5 font-mono-code text-xs uppercase tracking-[0.15em] text-center bg-[#f7f7f0] border border-[#e0e0d8] text-[#121212] flex items-center justify-center gap-2"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Executive CV</span>
            </button>
            <button
              onClick={() => {
                onOpenContactModal();
                setMobileMenuOpen(false);
              }}
              className="w-full py-2.5 font-mono-code text-xs uppercase tracking-[0.15em] text-center bg-[#121212] text-[#fdfdfc] flex items-center justify-center gap-2"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Send Transmission</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

