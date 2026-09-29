import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Search, Clock, ArrowRight, User, X, Sparkles } from 'lucide-react';
import { articlesData } from '../data/articles';

export default function ArticlesPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [readingArticle, setReadingArticle] = useState(null);

  const categories = ['All', 'Fundamentals', 'Elemental Wisdom', 'Directional Guide', 'Modern Living'];

  const filteredArticles = articlesData.filter((article) => {
    const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="py-12 sm:py-20 bg-[#FDFBF7] space-y-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sage-100/80 border border-sage-200 text-sage-800 text-xs font-semibold uppercase tracking-widest mb-4">
            <BookOpen className="w-3.5 h-3.5 text-sage-600" />
            Knowledge Repository
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-sage-950 font-normal tracking-tight">
            Vastu Knowledge & Articles
          </h1>

          <p className="mt-4 text-base sm:text-lg text-earth-700 leading-relaxed font-normal">
            Deep dive into Vedic architectural theory, spatial alignments, and modern practical case studies.
          </p>
        </div>

        {/* Search & Category Filter Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-ivory-300">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                  selectedCategory === cat
                    ? 'bg-sage-800 text-ivory-50 shadow-xs'
                    : 'bg-white hover:bg-ivory-100 text-earth-700 border border-ivory-300'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-earth-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-white border border-ivory-300 rounded-full text-xs focus:outline-none focus:ring-2 focus:ring-gold-400 text-sage-900"
            />
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="spiritual-card rounded-3xl overflow-hidden flex flex-col justify-between bg-white border border-ivory-300 group"
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-ivory-200">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/95 text-[10px] font-bold uppercase tracking-wider text-sage-900 shadow-xs">
                    {article.category}
                  </span>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-earth-500 mb-2">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {article.readTime}
                    </span>
                    <span>•</span>
                    <span>{article.publishedDate}</span>
                  </div>

                  <h2 className="text-xl font-serif font-medium text-sage-900 group-hover:text-gold-700 transition-colors mb-3 leading-snug">
                    {article.title}
                  </h2>

                  <p className="text-xs text-earth-600 line-clamp-3 leading-relaxed">
                    {article.summary}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button
                  onClick={() => setReadingArticle(article)}
                  className="w-full py-2.5 px-4 rounded-xl border border-ivory-300 hover:border-gold-300 hover:bg-gold-50/60 text-xs font-semibold text-sage-900 hover:text-gold-900 transition-colors flex items-center justify-between"
                >
                  <span>Read Full Article</span>
                  <ArrowRight className="w-3.5 h-3.5 text-earth-500" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Modal for full reading */}
        <AnimatePresence>
          {readingArticle && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-sage-950/50 backdrop-blur-sm overflow-y-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="bg-white rounded-3xl p-6 sm:p-10 max-w-2xl w-full border border-gold-200 shadow-2xl relative max-h-[85vh] overflow-y-auto space-y-6"
              >
                <button
                  onClick={() => setReadingArticle(null)}
                  className="absolute top-6 right-6 p-2 rounded-full text-earth-500 hover:bg-ivory-200 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-xs text-earth-600">
                    <span className="px-3 py-1 rounded-full bg-gold-100 text-gold-800 font-semibold uppercase tracking-wider text-[10px]">
                      {readingArticle.category}
                    </span>
                    <span>{readingArticle.readTime}</span>
                    <span>•</span>
                    <span>{readingArticle.publishedDate}</span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-serif text-sage-950 font-normal leading-snug">
                    {readingArticle.title}
                  </h2>

                  <div className="flex items-center gap-2 text-xs text-earth-500 pt-1">
                    <User className="w-3.5 h-3.5 text-sage-700" />
                    <span>Written by {readingArticle.author}</span>
                  </div>
                </div>

                <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-ivory-200">
                  <img
                    src={readingArticle.image}
                    alt={readingArticle.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="prose prose-stone max-w-none text-sm sm:text-base text-earth-800 leading-relaxed space-y-4 whitespace-pre-line font-normal">
                  {readingArticle.content}
                </div>

                <div className="pt-4 border-t border-ivory-200 flex justify-end">
                  <button
                    onClick={() => setReadingArticle(null)}
                    className="px-6 py-2.5 bg-sage-800 cursor-pointer hover:bg-sage-900 text-ivory-50 text-sm font-medium rounded-xl transition-colors"
                  >
                    Close Article
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
