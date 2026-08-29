import React, { useState } from 'react';
import { ArticleItem, NewArticleInput } from '../types';
import { X, Plus, Sparkles, BookOpen, Eye, Edit3, Calendar, Tag, AlertCircle } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

interface CreateArticleModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreateArticle: (newArticle: ArticleItem) => void;
}

export const CreateArticleModal: React.FC<CreateArticleModalProps> = ({
  isOpen,
  onClose,
  onCreateArticle,
}) => {
  const todayFormatted = new Date().toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  const [formData, setFormData] = useState<NewArticleInput>({
    title: '',
    date: todayFormatted,
    category: 'powerplatform',
    excerpt: '',
    content: '',
    tags: '',
    authorName: 'Ali Akhmad Fauzie',
  });

  const [activeTab, setActiveTab] = useState<'write' | 'preview'>('write');
  const [errorMessage, setErrorMessage] = useState<string>('');

  if (!isOpen) return null;

  const calculateReadTime = (text: string) => {
    const words = text.trim().split(/\s+/).length;
    const minutes = Math.max(1, Math.ceil(words / 180));
    return `${minutes} min read`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title.trim()) {
      setErrorMessage('Please enter an article title.');
      return;
    }
    if (!formData.excerpt.trim()) {
      setErrorMessage('Please enter a brief excerpt or summary.');
      return;
    }
    if (!formData.content.trim()) {
      setErrorMessage('Please write some content for your article.');
      return;
    }

    const slug = formData.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '');

    const tagsArray = formData.tags
      .split(',')
      .map((t) => t.trim())
      .filter((t) => t.length > 0);

    const articleItem: ArticleItem = {
      id: `art-custom-${Date.now()}`,
      slug: slug || `article-${Date.now()}`,
      title: formData.title.trim(),
      date: formData.date || todayFormatted,
      readTime: calculateReadTime(formData.content),
      category: formData.category,
      excerpt: formData.excerpt.trim(),
      content: formData.content.trim(),
      tags: tagsArray.length > 0 ? tagsArray : ['Engineering', 'Power Platform'],
      author: {
        name: formData.authorName?.trim() || 'Ali Akhmad Fauzie',
        role: 'Author & Contributor',
      },
      featured: false,
      isCustom: true,
    };

    onCreateArticle(articleItem);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-[#18181d] border border-white/20 rounded-2xl w-full max-w-3xl shadow-2xl overflow-hidden relative my-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 bg-gradient-to-b from-white/5 to-transparent border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#009de0]/20 border border-[#009de0]/30 flex items-center justify-center text-[#8aceff]">
              <Edit3 className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white tracking-tight">
                Publish New Article / Post
              </h2>
              <p className="text-xs font-mono-code text-neutral-400">
                Share technical insights, architecture patterns, or operational playbooks
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            id="close-create-article-modal-btn"
            className="p-2 rounded-full bg-white/10 text-neutral-300 hover:text-white hover:bg-white/20 transition-all"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Switcher: Write vs Markdown Preview */}
        <div className="flex items-center justify-between px-6 py-2.5 bg-[#141418] border-b border-white/10">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setActiveTab('write')}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                activeTab === 'write'
                  ? 'bg-[#009de0] text-white shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <Edit3 className="w-3.5 h-3.5" />
              <span>Editor</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('preview')}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                activeTab === 'preview'
                  ? 'bg-[#009de0] text-white shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Live Markdown Preview</span>
            </button>
          </div>
          <span className="text-[11px] font-mono-code text-neutral-400">
            Supports Markdown formatting
          </span>
        </div>

        {/* Form or Preview */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[65vh] overflow-y-auto">
          {errorMessage && (
            <div className="p-3 bg-red-950/40 border border-red-500/30 rounded-xl text-red-300 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          {activeTab === 'write' ? (
            <>
              {/* Title */}
              <div>
                <label className="block text-xs font-mono-code uppercase tracking-wider text-neutral-300 mb-1.5">
                  Article Title *
                </label>
                <input
                  type="text"
                  id="article-title-input"
                  required
                  placeholder="e.g. Building Resilient Power Automate Cloud Flows with Scopes"
                  value={formData.title}
                  onChange={(e) => {
                    setFormData({ ...formData, title: e.target.value });
                    if (errorMessage) setErrorMessage('');
                  }}
                  className="w-full bg-[#121215] border border-white/15 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#009de0] placeholder-neutral-500"
                />
              </div>

              {/* Grid: Category, Date, Author */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-mono-code uppercase tracking-wider text-neutral-300 mb-1.5">
                    Category
                  </label>
                  <select
                    id="article-category-select"
                    value={formData.category}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        category: e.target.value as NewArticleInput['category'],
                      })
                    }
                    className="w-full bg-[#121215] border border-white/15 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#009de0]"
                  >
                    <option value="powerplatform">Power Platform</option>
                    <option value="architecture">Enterprise Architecture</option>
                    <option value="operations">Operations & Leadership</option>
                    <option value="ai">AI & Automation</option>
                    <option value="devops">DevOps & ALM</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono-code uppercase tracking-wider text-neutral-300 mb-1.5 flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-[#8aceff]" />
                    <span>Publish Date</span>
                  </label>
                  <input
                    type="text"
                    id="article-date-input"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full bg-[#121215] border border-white/15 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#009de0]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono-code uppercase tracking-wider text-neutral-300 mb-1.5">
                    Author
                  </label>
                  <input
                    type="text"
                    id="article-author-input"
                    value={formData.authorName}
                    onChange={(e) =>
                      setFormData({ ...formData, authorName: e.target.value })
                    }
                    className="w-full bg-[#121215] border border-white/15 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#009de0]"
                  />
                </div>
              </div>

              {/* Tags */}
              <div>
                <label className="block text-xs font-mono-code uppercase tracking-wider text-neutral-300 mb-1.5 flex items-center gap-1">
                  <Tag className="w-3 h-3 text-[#8aceff]" />
                  <span>Tags (Comma-separated)</span>
                </label>
                <input
                  type="text"
                  id="article-tags-input"
                  placeholder="Power Apps, Dataverse, CI/CD, Architecture"
                  value={formData.tags}
                  onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                  className="w-full bg-[#121215] border border-white/15 rounded-xl px-4 py-2 text-xs text-white focus:outline-none focus:border-[#009de0] placeholder-neutral-500"
                />
              </div>

              {/* Excerpt / Summary */}
              <div>
                <label className="block text-xs font-mono-code uppercase tracking-wider text-neutral-300 mb-1.5">
                  Brief Summary / Excerpt *
                </label>
                <textarea
                  id="article-excerpt-input"
                  required
                  rows={2}
                  placeholder="A one or two sentence overview displayed on the index feed..."
                  value={formData.excerpt}
                  onChange={(e) => {
                    setFormData({ ...formData, excerpt: e.target.value });
                    if (errorMessage) setErrorMessage('');
                  }}
                  className="w-full bg-[#121215] border border-white/15 rounded-xl px-4 py-2 text-xs text-white focus:outline-none focus:border-[#009de0] placeholder-neutral-500"
                />
              </div>

              {/* Content in Markdown */}
              <div>
                <label className="block text-xs font-mono-code uppercase tracking-wider text-neutral-300 mb-1.5">
                  Article Body (Markdown Supported) *
                </label>
                <textarea
                  id="article-content-input"
                  required
                  rows={9}
                  placeholder="Write your article in Markdown... (e.g. ## Heading, *bullet points*, `code` snippets, etc.)"
                  value={formData.content}
                  onChange={(e) => {
                    setFormData({ ...formData, content: e.target.value });
                    if (errorMessage) setErrorMessage('');
                  }}
                  className="w-full bg-[#121215] border border-white/15 rounded-xl p-4 font-mono-code text-xs text-neutral-200 focus:outline-none focus:border-[#009de0] placeholder-neutral-600 leading-relaxed"
                />
              </div>
            </>
          ) : (
            /* Live Markdown Preview */
            <div className="space-y-4 py-2">
              <div className="border-b border-white/10 pb-4">
                <span className="text-xs font-mono-code text-[#8aceff] uppercase">
                  {formData.category}
                </span>
                <h1 className="text-2xl font-bold text-white mt-1">
                  {formData.title || 'Untitled Article'}
                </h1>
                <p className="text-xs text-neutral-400 mt-1">
                  {formData.date} • {calculateReadTime(formData.content || '')} • By{' '}
                  {formData.authorName}
                </p>
              </div>

              <div className="prose prose-invert max-w-none text-neutral-300 text-sm leading-relaxed space-y-4">
                {formData.content ? (
                  <ReactMarkdown>{formData.content}</ReactMarkdown>
                ) : (
                  <p className="text-neutral-500 italic">No content typed yet.</p>
                )}
              </div>
            </div>
          )}

          {/* Form Actions */}
          <div className="pt-4 border-t border-white/10 flex items-center justify-between">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-semibold transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              id="publish-article-submit-btn"
              className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-[#009de0] hover:bg-[#0087c2] text-white text-xs font-semibold shadow-md shadow-[#009de0]/25 transition-all"
            >
              <Plus className="w-4 h-4" />
              <span>Publish Article</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
