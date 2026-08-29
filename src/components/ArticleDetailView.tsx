import React, { useEffect, useState } from 'react';
import { ArticleItem } from '../types';
import {
  ArrowLeft,
  Calendar,
  Clock,
  Share2,
  Check,
  Tag,
  Printer,
  ChevronRight,
} from 'lucide-react';
import ReactMarkdown from 'react-markdown';

interface ArticleDetailViewProps {
  article: ArticleItem;
  allArticles: ArticleItem[];
  onBack: () => void;
  onSelectArticle: (article: ArticleItem) => void;
}

export const ArticleDetailView: React.FC<ArticleDetailViewProps> = ({
  article,
  allArticles,
  onBack,
  onSelectArticle,
}) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [article.id]);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const relatedArticles = allArticles
    .filter((a) => a.id !== article.id)
    .slice(0, 3);

  return (
    <article id="article-detail-page" className="py-12 sm:py-16 px-6 sm:px-10 max-w-4xl mx-auto bg-[#fdfdfc]">
      {/* Navigation Top Bar */}
      <div className="flex items-center justify-between gap-4 mb-8 pb-4 border-b border-[#e0e0d8] font-mono-code text-xs">
        <button
          onClick={onBack}
          id="back-to-articles-btn"
          className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#f7f7f0] hover:bg-[#e0e0d8] text-[#121212] border border-[#e0e0d8] uppercase tracking-wider transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Index</span>
        </button>

        <div className="flex items-center gap-2">
          <button
            onClick={() => window.print()}
            id="print-article-btn"
            className="p-1.5 bg-[#f7f7f0] hover:bg-[#e0e0d8] text-[#121212] border border-[#e0e0d8] transition-colors"
            title="Print or Save as PDF"
            aria-label="Print or Save as PDF"
          >
            <Printer className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={handleCopyLink}
            id="share-article-btn"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#121212] hover:bg-[#222222] text-[#fdfdfc] uppercase tracking-wider transition-colors"
            title="Copy article link"
          >
            {copied ? (
              <>
                <Check className="w-3 h-3" />
                <span>Copied</span>
              </>
            ) : (
              <>
                <Share2 className="w-3 h-3" />
                <span>Share</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Article Header */}
      <header className="mb-10">
        <div className="flex flex-wrap items-center gap-3 mb-4 font-mono-code text-xs">
          <span className="label-mono bg-[#121212] text-[#fdfdfc] px-2 py-0.5">
            {article.category}
          </span>
          <span className="text-[#888880] flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            <span>{article.date}</span>
          </span>
          <span className="text-[#e0e0d8]">•</span>
          <span className="text-[#888880] flex items-center gap-1">
            <Clock className="w-3 h-3" />
            <span>{article.readTime}</span>
          </span>
        </div>

        <h1 className="font-serif-display italic text-3xl sm:text-4xl md:text-5xl font-light text-[#121212] tracking-tight leading-tight mb-6">
          {article.title}
        </h1>

        {/* Excerpt / Lead */}
        <p className="text-base sm:text-lg text-[#444440] font-light leading-relaxed bg-[#f7f7f0] p-6 border-l-2 border-[#121212] mb-6">
          {article.excerpt}
        </p>

        {/* Author Card */}
        <div className="flex items-center gap-3 py-4 border-y border-[#e0e0d8]">
          <div className="w-10 h-10 bg-[#f7f7f0] border border-[#e0e0d8] flex items-center justify-center font-serif-display italic text-lg text-[#121212]">
            {article.author?.name ? article.author.name.slice(0, 2).toUpperCase() : 'AF'}
          </div>
          <div>
            <div className="font-serif-display italic text-base font-normal text-[#121212]">
              {article.author?.name || 'Ali Akhmad Fauzie'}
            </div>
            <div className="label-mono text-[#888880]">
              {article.author?.role || 'Power Platform Developer & Operations Leader'}
            </div>
          </div>
        </div>
      </header>

      {/* Article Markdown Body */}
      <div className="prose prose-neutral max-w-none text-[#222220] font-light text-sm sm:text-base leading-relaxed space-y-5 bg-[#fdfdfc] p-6 sm:p-10 border border-[#e0e0d8]">
        <ReactMarkdown>{article.content}</ReactMarkdown>
      </div>

      {/* Tags Section */}
      <div className="mt-8 pt-6 border-t border-[#e0e0d8]">
        <div className="label-mono mb-3 flex items-center gap-1.5">
          <Tag className="w-3 h-3 text-[#888880]" />
          <span>Keywords</span>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {article.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 text-[0.65rem] font-mono-code uppercase tracking-wider bg-[#f7f7f0] text-[#444440] border border-[#e0e0d8]"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* Related Articles Section */}
      {relatedArticles.length > 0 && (
        <section className="mt-14 pt-8 border-t border-[#e0e0d8]">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-serif-display italic text-2xl font-light text-[#121212] tracking-tight">
              Related Articles & Writings
            </h3>
            <button
              onClick={onBack}
              className="label-mono text-[#121212] hover:underline"
            >
              View All
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {relatedArticles.map((rel) => (
              <div
                key={rel.id}
                onClick={() => onSelectArticle(rel)}
                className="bg-[#fdfdfc] hover:bg-[#f7f7f0] border border-[#e0e0d8] hover:border-[#121212] p-5 cursor-pointer transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="label-mono text-[#888880] mb-2">
                    {rel.category} • {rel.readTime}
                  </div>
                  <h4 className="font-serif-display italic text-lg font-light text-[#121212] mb-2 line-clamp-2">
                    {rel.title}
                  </h4>
                  <p className="text-xs text-[#444440] font-light line-clamp-2 mb-3">
                    {rel.excerpt}
                  </p>
                </div>
                <div className="flex items-center gap-1 text-[0.65rem] font-mono-code uppercase tracking-wider text-[#121212] pt-2 border-t border-[#e0e0d8]">
                  <span>Read Post</span>
                  <ChevronRight className="w-3 h-3" />
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </article>
  );
};

