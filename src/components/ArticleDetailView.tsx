import React, { useEffect, useState } from 'react';
import { ArticleItem } from '../types';
import {
  ArrowLeft,
  Calendar,
  Clock,
  Share2,
  Check,
  Tag,
  User,
  BookOpen,
  Sparkles,
  ExternalLink,
  ChevronRight,
  Printer,
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

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'architecture':
        return 'bg-blue-500/20 text-blue-300 border-blue-500/30';
      case 'operations':
        return 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30';
      case 'ai':
        return 'bg-purple-500/20 text-purple-300 border-purple-500/30';
      case 'devops':
        return 'bg-amber-500/20 text-amber-300 border-amber-500/30';
      default:
        return 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30';
    }
  };

  return (
    <article id="article-detail-page" className="py-12 sm:py-16 px-4 sm:px-6 max-w-4xl mx-auto">
      {/* Navigation Top Bar */}
      <div className="flex items-center justify-between gap-4 mb-8 pb-4 border-b border-white/10">
        <button
          onClick={onBack}
          id="back-to-articles-btn"
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-semibold border border-white/15 transition-all group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back to All Articles</span>
        </button>

        <div className="flex items-center gap-2">
          <button
            onClick={() => window.print()}
            id="print-article-btn"
            className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white border border-white/10 text-xs transition-colors"
            title="Print or Save as PDF"
            aria-label="Print or Save as PDF"
          >
            <Printer className="w-4 h-4" />
          </button>
          <button
            onClick={handleCopyLink}
            id="share-article-btn"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#009de0]/20 hover:bg-[#009de0]/30 text-[#8aceff] border border-[#009de0]/30 text-xs font-medium transition-colors"
            title="Copy article link"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400">Link Copied!</span>
              </>
            ) : (
              <>
                <Share2 className="w-3.5 h-3.5" />
                <span>Share Article</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Article Header Card */}
      <header className="mb-10">
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span
            className={`text-xs font-mono-code uppercase px-3 py-1 rounded-md border font-semibold ${getCategoryColor(
              article.category
            )}`}
          >
            {article.category}
          </span>
          <span className="text-xs font-mono-code text-neutral-400 flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5" />
            <span>{article.date}</span>
          </span>
          <span className="text-xs text-neutral-500">•</span>
          <span className="text-xs font-mono-code text-neutral-400 flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5" />
            <span>{article.readTime}</span>
          </span>
          {article.isCustom && (
            <span className="text-[11px] font-mono-code bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded border border-emerald-500/30">
              Community Post
            </span>
          )}
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-6">
          {article.title}
        </h1>

        {/* Excerpt / Lead */}
        <p className="text-base sm:text-lg text-neutral-300 leading-relaxed font-medium bg-[#1a1a20] p-4 sm:p-5 rounded-2xl border border-white/10 border-l-4 border-l-[#009de0] mb-6">
          {article.excerpt}
        </p>

        {/* Author Card */}
        <div className="flex items-center gap-3 py-3 border-y border-white/10">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#009de0] to-[#005580] flex items-center justify-center font-bold text-white text-sm shadow-md">
            {article.author?.name ? article.author.name.slice(0, 2).toUpperCase() : 'AF'}
          </div>
          <div>
            <div className="text-sm font-semibold text-white">
              {article.author?.name || 'Ali Akhmad Fauzie'}
            </div>
            <div className="text-xs font-mono-code text-neutral-400">
              {article.author?.role || 'Power Platform Developer & Operations Leader'}
            </div>
          </div>
        </div>
      </header>

      {/* Article Markdown Body */}
      <div className="prose prose-invert max-w-none text-neutral-200 text-sm sm:text-base leading-relaxed space-y-5 bg-[#16161a] p-6 sm:p-10 rounded-2xl border border-white/10 shadow-xl">
        <ReactMarkdown>{article.content}</ReactMarkdown>
      </div>

      {/* Tags Section */}
      <div className="mt-8 pt-6 border-t border-white/10">
        <h4 className="text-xs font-mono-code uppercase text-neutral-400 tracking-wider mb-3 flex items-center gap-1.5">
          <Tag className="w-3.5 h-3.5 text-[#8aceff]" />
          <span>Topics & Keywords</span>
        </h4>
        <div className="flex flex-wrap gap-2">
          {article.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-lg text-xs font-mono-code bg-[#1a1a20] text-neutral-300 border border-white/10 hover:border-[#009de0] transition-colors"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* Related Articles Section */}
      {relatedArticles.length > 0 && (
        <section className="mt-14 pt-8 border-t border-white/10">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#8aceff]" />
              <span>More Articles & Insights</span>
            </h3>
            <button
              onClick={onBack}
              className="text-xs font-semibold text-[#8aceff] hover:underline"
            >
              View All
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {relatedArticles.map((rel) => (
              <div
                key={rel.id}
                onClick={() => onSelectArticle(rel)}
                className="bg-[#18181d] hover:bg-[#202026] border border-white/10 hover:border-white/25 rounded-xl p-4.5 cursor-pointer transition-all flex flex-col justify-between group shadow-md"
              >
                <div>
                  <div className="text-[11px] font-mono-code text-[#8aceff] uppercase mb-1.5">
                    {rel.category} • {rel.readTime}
                  </div>
                  <h4 className="text-sm font-bold text-white group-hover:text-[#8aceff] transition-colors line-clamp-2 mb-2">
                    {rel.title}
                  </h4>
                  <p className="text-xs text-neutral-400 line-clamp-2 mb-3">
                    {rel.excerpt}
                  </p>
                </div>
                <div className="flex items-center gap-1 text-[11px] font-semibold text-[#8aceff] pt-2 border-t border-white/5">
                  <span>Read Post</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </article>
  );
};
