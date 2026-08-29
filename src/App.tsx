import React, { useState } from 'react';
import { ShaderBackground } from './components/ShaderBackground';
import { ScrollProgress } from './components/ScrollProgress';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ArticlesSection } from './components/ArticlesSection';
import { ArticleDetailView } from './components/ArticleDetailView';
import { CreateArticleModal } from './components/CreateArticleModal';
import { ArchitectureDiagram } from './components/ArchitectureDiagram';
import { TimelineSection } from './components/TimelineSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { SkillsSection } from './components/SkillsSection';
import { CertificationsSection } from './components/CertificationsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { ResumeModal } from './components/ResumeModal';
import { StickyQuickDock } from './components/StickyQuickDock';
import { ProjectItem, ArticleItem, ProfileMode } from './types';
import { initialArticlesData } from './data/articlesData';
import { motion, AnimatePresence } from 'motion/react';

const STORAGE_KEY_ARTICLES = 'ali_resume_custom_articles_v1';

export default function App() {
  const [currentMode, setCurrentMode] = useState<ProfileMode>('full');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [resumeModalOpen, setResumeModalOpen] = useState<boolean>(false);
  const [createArticleModalOpen, setCreateArticleModalOpen] = useState<boolean>(false);

  // Articles state initialized from local storage + initial seeds
  const [articles, setArticles] = useState<ArticleItem[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_ARTICLES);
      if (saved) {
        const customArticles: ArticleItem[] = JSON.parse(saved);
        return [...customArticles, ...initialArticlesData];
      }
    } catch (e) {
      console.warn('Failed to load custom articles from localStorage', e);
    }
    return initialArticlesData;
  });

  const [selectedArticle, setSelectedArticle] = useState<ArticleItem | null>(null);

  const handleCreateArticle = (newArticle: ArticleItem) => {
    setArticles((prev) => {
      const updated = [newArticle, ...prev];
      try {
        const customOnly = updated.filter((a) => a.isCustom);
        localStorage.setItem(STORAGE_KEY_ARTICLES, JSON.stringify(customOnly));
      } catch (e) {
        console.warn('Failed to save article to localStorage', e);
      }
      return updated;
    });
    // Open the newly created article for previewing/reading immediately
    setSelectedArticle(newArticle);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateHome = (sectionId?: string) => {
    setSelectedArticle(null);
    if (sectionId) {
      setTimeout(() => {
        const elem = document.getElementById(sectionId);
        if (elem) {
          elem.scrollIntoView({ behavior: 'smooth' });
        }
      }, 50);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleOpenContactModal = () => {
    if (selectedArticle) {
      setSelectedArticle(null);
      setTimeout(() => {
        const contactElem = document.getElementById('contact');
        if (contactElem) {
          contactElem.scrollIntoView({ behavior: 'smooth' });
        }
      }, 50);
    } else {
      const contactElem = document.getElementById('contact');
      if (contactElem) {
        contactElem.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="relative min-h-screen bg-[#fdfdfc] text-[#121212] selection:bg-[#dcdccb] selection:text-[#121212]">
      {/* Top Scroll Indicator & Back to Top Floating Button */}
      <ScrollProgress onScrollToTop={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />

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
          onNavigateHome={handleNavigateHome}
        />

        {/* Main Content Sections or Individual Article Page with Smooth View Transition */}
        <main className="flex-grow pt-16 sm:pt-20 pb-20 sm:pb-24">
          <AnimatePresence mode="wait">
            {selectedArticle ? (
              /* Dedicated Individual Article Page with Smooth Entrance */
              <motion.div
                key="article-detail-page"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
              >
                <ArticleDetailView
                  article={selectedArticle}
                  allArticles={articles}
                  onBack={() => handleNavigateHome('articles')}
                  onSelectArticle={(art) => {
                    setSelectedArticle(art);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                />
              </motion.div>
            ) : (
              /* Portfolio Index & Sections with Smooth Page Load */
              <motion.div
                key="portfolio-index-page"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35 }}
              >
                {/* Profile Hero & Overview */}
                <HeroSection
                  currentMode={currentMode}
                  onSelectMode={setCurrentMode}
                  onOpenResumeModal={() => setResumeModalOpen(true)}
                  onOpenContactModal={handleOpenContactModal}
                />

                {/* Projects Section with Grid/List Toggle & Live Demo/Repo Links */}
                <ProjectsSection
                  currentMode={currentMode}
                  onSelectProject={setSelectedProject}
                />

                {/* Blog & Articles Section */}
                <ArticlesSection
                  articles={articles}
                  onSelectArticle={(art) => {
                    setSelectedArticle(art);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  onOpenCreateModal={() => setCreateArticleModalOpen(true)}
                />

                {/* Chronological Timeline */}
                <TimelineSection currentMode={currentMode} />

                {/* Professional Testimonials & Client Feedback Carousel */}
                <TestimonialsSection />

                {/* Enterprise CI/CD & Solution Architecture Pipeline */}
                <ArchitectureDiagram />

                {/* Skills & Competencies Breakdown */}
                <SkillsSection currentMode={currentMode} />

                {/* Certifications & Education */}
                <CertificationsSection />

                {/* Direct Contact & Outreach */}
                <ContactSection />
              </motion.div>
            )}
          </AnimatePresence>
        </main>

        {/* Minimalist Footer */}
        <Footer onNavigateHome={handleNavigateHome} />
      </div>

      {/* Sticky Recruiter Quick Action Dock */}
      <StickyQuickDock
        currentMode={currentMode}
        onOpenResumeModal={() => setResumeModalOpen(true)}
        onOpenContactModal={handleOpenContactModal}
      />

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

      {/* Create New Article Dialog Modal */}
      <CreateArticleModal
        isOpen={createArticleModalOpen}
        onClose={() => setCreateArticleModalOpen(false)}
        onCreateArticle={handleCreateArticle}
      />
    </div>
  );
}
