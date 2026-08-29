import React, { useState } from 'react';
import { ArticleItem } from '../types';
import { motion, AnimatePresence } from 'motion/react';
import {
  BookOpen,
  Calendar,
  Clock,
  Search,
  Sparkles,
  ArrowRight,
  PenLine,
} from 'lucide-react';

interface ArticlesSectionProps {
  articles: ArticleItem[];
  onSelectArticle: (article: ArticleItem) => void;
  onOpenCreateModal: () => void;
}

export const ArticlesSection: React.FC<ArticlesSectionProps> = ({
  articles,
  onSelectArticle,
  onOpenCreateModal,
}) => {
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredArticles = articles.filter((article) => {
    const matchesCategory =
      filterCategory === 'all' || article.category === filterCategory;
    const matchesSearch =
      searchQuery.trim() === '' ||
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  const featuredArticle = articles.find((a) => a.featured) || articles[0];

  const getCategoryBadgeClass = (category: string) => {
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
    <section id="articles" className="py-20 px-4 sm:px-6 relative overflow-hidden">
      <div className="max-w-[1180px] mx-auto relative z-10">
        {/* Section Header with Motion Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono-code text-[#8aceff] mb-3">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Engineering & Operations Blog</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-2">
              Articles & Technical Writings
            </h2>
            <p className="text-neutral-400 text-base sm:text-lg font-medium max-w-2xl">
              Deep dives on Microsoft Power Platform architecture, enterprise modernization, AI workflows, and large-scale operations delivery.
            </p>
          </div>

          {/* Action: Create Article Button */}
          <button
            onClick={onOpenCreateModal}
            id="open-create-article-btn"
            className="self-start md:self-auto flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#009de0] hover:bg-[#0087c2] text-white text-xs font-semibold shadow-lg shadow-[#009de0]/25 hover:scale-105 transition-all group"
          >
            <PenLine className="w-4 h-4 group-hover:rotate-12 transition-transform" />
            <span>Write New Article</span>
          </button>
        </motion.div>

        {/* Featured Hero Article Banner */}
        {!searchQuery && filterCategory === 'all' && featuredArticle && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            whileHover={{
              y: -5,
              boxShadow: '0 25px 40px -15px rgba(0, 157, 224, 0.3)',
              borderColor: 'rgba(0, 157, 224, 0.6)',
              transition: { duration: 0.25 },
            }}
            id="featured-article-hero"
            onClick={() => onSelectArticle(featuredArticle)}
            className="group relative mb-12 rounded-3xl p-6 sm:p-10 bg-gradient-to-r from-[#18233c] via-[#121c2e] to-[#121216] border border-blue-500/30 cursor-pointer shadow-2xl overflow-hidden"
          >
            <div className="absolute right-0 top-0 w-96 h-96 bg-[#009de0]/15 rounded-full blur-3xl pointer-events-none group-hover:opacity-100 opacity-60 transition-opacity" />

            <div className="max-w-3xl relative z-10">
              <div className="flex flex-wrap items-center gap-2.5 mb-4">
                <span className="px-3 py-1 rounded-md bg-[#009de0] text-white text-xs font-semibold uppercase tracking-wider shadow-sm">
                  Featured Insight
                </span>
                <span
                  className={`text-xs font-mono-code uppercase px-2.5 py-0.5 rounded border ${getCategoryBadgeClass(
                    featuredArticle.category
                  )}`}
                >
                  {featuredArticle.category}
                </span>
                <span className="text-xs font-mono-code text-neutral-400 flex items-center gap-1">
                  <Calendar className="w-3 h-3 text-[#8aceff]" />
                  <span>{featuredArticle.date}</span>
                </span>
                <span className="text-xs text-neutral-500">•</span>
                <span className="text-xs font-mono-code text-neutral-400 flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  <span>{featuredArticle.readTime}</span>
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight group-hover:text-[#8aceff] transition-colors">
                {featuredArticle.title}
              </h3>

              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed mb-6 font-normal">
                {featuredArticle.excerpt}
              </p>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10">
                <div className="flex flex-wrap gap-1.5">
                  {featuredArticle.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono-code bg-white/10 text-white/90 border border-white/15"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="inline-flex items-center gap-2 text-xs font-bold text-[#8aceff] group-hover:translate-x-1 transition-transform">
                  <span>Read Full Article</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Search & Category Filter Toolbar */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8 bg-[#16161a] p-3 sm:p-4 rounded-2xl border border-white/10 shadow-lg"
        >
          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              id="search-articles-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search articles by title or tag..."
              className="w-full bg-[#1e1e24] text-white text-xs pl-9 pr-3.5 py-2 rounded-xl border border-white/10 focus:outline-none focus:border-[#009de0] placeholder-neutral-500 transition-colors"
            />
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 w-full md:w-auto">
            {[
              { id: 'all', label: 'All Articles' },
              { id: 'powerplatform', label: 'Power Platform' },
              { id: 'architecture', label: 'Architecture' },
              { id: 'operations', label: 'Operations' },
              { id: 'ai', label: 'AI & Automation' },
              { id: 'devops', label: 'DevOps & ALM' },
            ].map((cat) => (
              <button
                key={cat.id}
                id={`article-filter-${cat.id}`}
                onClick={() => setFilterCategory(cat.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  filterCategory === cat.id
                    ? 'bg-[#009de0] text-white shadow-md shadow-[#009de0]/20 font-semibold'
                    : 'bg-[#1e1e24] text-neutral-400 hover:text-white border border-white/10'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Empty state */}
        {filteredArticles.length === 0 && (
          <div className="text-center py-16 bg-[#18181d] rounded-2xl border border-white/10 text-neutral-400">
            <BookOpen className="w-8 h-8 text-neutral-500 mx-auto mb-3" />
            <p className="text-sm">No articles found matching "{searchQuery}".</p>
            <button
              onClick={() => {
                setFilterCategory('all');
                setSearchQuery('');
              }}
              className="mt-3 text-xs text-[#8aceff] underline"
            >
              Clear filters
            </button>
          </div>
        )}

        {/* Articles Index Grid with Card Lift and Glow Hover Effects */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredArticles.map((article, idx) => (
              <motion.div
                key={article.id}
                id={`article-card-${article.id}`}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{
                  duration: 0.35,
                  delay: Math.min(idx * 0.05, 0.3),
                  ease: 'easeOut',
                }}
                whileHover={{
                  y: -6,
                  scale: 1.015,
                  boxShadow: '0 20px 30px -10px rgba(0, 157, 224, 0.2), 0 2px 4px 0 rgba(0, 0, 0, 0.3)',
                  borderColor: 'rgba(0, 157, 224, 0.5)',
                  transition: { duration: 0.2, ease: 'easeOut' },
                }}
                whileTap={{ scale: 0.99 }}
                onClick={() => onSelectArticle(article)}
                className="group relative rounded-2xl p-6 bg-[#18181d] border border-white/10 cursor-pointer flex flex-col justify-between shadow-xl overflow-hidden"
              >
                {/* Subtle top edge shine */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#8aceff]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  {/* Meta Header */}
                  <div className="flex items-center justify-between gap-2 mb-3.5">
                    <span
                      className={`text-[11px] font-mono-code uppercase px-2.5 py-0.5 rounded border font-semibold ${getCategoryBadgeClass(
                        article.category
                      )}`}
                    >
                      {article.category}
                    </span>
                    <div className="flex items-center gap-2 text-[11px] font-mono-code text-neutral-400">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-[#8aceff]" />
                        <span>{article.date}</span>
                      </span>
                      <span>•</span>
                      <span>{article.readTime}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white mb-2.5 tracking-tight group-hover:text-[#8aceff] transition-colors line-clamp-2">
                    {article.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {article.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded text-[11px] font-mono-code bg-white/5 text-neutral-300 border border-white/10 group-hover:border-white/20 transition-colors"
                      >
                        #{tag}
                      </span>
                    ))}
                    {article.tags.length > 3 && (
                      <span className="text-[10px] text-neutral-500 self-center">
                        +{article.tags.length - 3}
                      </span>
                    )}
                  </div>
                </div>

                {/* Bottom Action */}
                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-semibold text-[#8aceff]">
                  <span>Read Full Post</span>
                  <div className="w-6 h-6 rounded-full bg-[#009de0]/15 flex items-center justify-center group-hover:translate-x-1.5 group-hover:bg-[#009de0]/30 transition-all">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
