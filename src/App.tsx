import React, { useState } from 'react';
import { ShaderBackground } from './components/ShaderBackground';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ArchitectureDiagram } from './components/ArchitectureDiagram';
import { TimelineSection } from './components/TimelineSection';
import { SkillsSection } from './components/SkillsSection';
import { CertificationsSection } from './components/CertificationsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { ResumeModal } from './components/ResumeModal';
import { ProjectItem, ProfileMode } from './types';

export default function App() {
  const [currentMode, setCurrentMode] = useState<ProfileMode>('hybrid');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [resumeModalOpen, setResumeModalOpen] = useState<boolean>(false);

  const handleOpenContactModal = () => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#121214] text-[#e5e2e1] selection:bg-[#009de0] selection:text-white">
      {/* Dynamic WebGL Shader Background Canvas */}
      <ShaderBackground />

      {/* Main Page Layout Layer */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Sticky Header Navigation */}
        <Header
          currentMode={currentMode}
          onSelectMode={setCurrentMode}
          onOpenResumeModal={() => setResumeModalOpen(true)}
          onOpenContactModal={handleOpenContactModal}
        />

        {/* Main Content Sections */}
        <main className="flex-grow">
          {/* Profile Hero & Overview */}
          <HeroSection
            currentMode={currentMode}
            onSelectMode={setCurrentMode}
            onOpenResumeModal={() => setResumeModalOpen(true)}
            onOpenContactModal={handleOpenContactModal}
          />

          {/* Portfolio & Top Projects Grid */}
          <ProjectsSection
            currentMode={currentMode}
            onSelectProject={setSelectedProject}
          />

          {/* Chronological Timeline */}
          <TimelineSection currentMode={currentMode} />

          {/* Enterprise CI/CD & Solution Architecture Pipeline */}
          <ArchitectureDiagram />

          {/* Skills & Competencies Breakdown */}
          <SkillsSection />

          {/* Certifications & Education */}
          <CertificationsSection />

          {/* Direct Contact & Outreach */}
          <ContactSection />
        </main>

        {/* Minimalist Footer */}
        <Footer />
      </div>

      {/* Case Study & Deep Dive Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Interactive & Print-Ready ATS / Executive Resume Modal */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
        initialMode={currentMode}
      />
    </div>
  );
}
