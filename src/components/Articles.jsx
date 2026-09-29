import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, ArrowRight, Clock, Calendar, Sparkles, X, User } from 'lucide-react';
import { articlesData } from '../data/articles';

export default function Articles() {
  const [readingArticle, setReadingArticle] = useState(null);

  return (
    <section id="articles" className="py-16 sm:py-24 bg-[#FDFBF7] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sage-100/80 border border-sage-200 text-sage-800 text-xs font-semibold uppercase tracking-widest mb-3"
          >
            <BookOpen className="w-3.5 h-3.5 text-sage-600" />
            Knowledge & Insights
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-serif text-sage-950 font-normal tracking-tight"
          >
            Vastu Wisdom Articles
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-earth-700 leading-relaxed font-normal"
          >
            Explore articles explaining traditional spatial philosophy, elemental harmony, and their application in contemporary homes.
          </motion.p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {articlesData.map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="spiritual-card rounded-2xl overflow-hidden flex flex-col justify-between group bg-white"
            >
              <div>
                {/* Thumbnail Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-ivory-200">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-xs text-[10px] font-bold uppercase tracking-wider text-sage-900 border border-ivory-200">
                    {article.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6">
                  <div className="flex items-center gap-3 text-[11px] text-earth-500 mb-2">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {article.readTime}
                    </span>
                    <span>•</span>
                    <span>{article.publishedDate}</span>
                  </div>

                  <h3 className="text-lg font-serif font-medium text-sage-900 group-hover:text-gold-700 transition-colors line-clamp-2 mb-2">
                    {article.title}
                  </h3>

                  <p className="text-xs text-earth-600 line-clamp-3 leading-relaxed">
                    {article.summary}
                  </p>
                </div>
              </div>

              {/* Read Action Link */}
              <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0">
                <button
                  onClick={() => setReadingArticle(article)}
                  className="w-full py-2 px-3 rounded-xl cursor-pointer border border-ivory-300 hover:border-gold-300 hover:bg-gold-50/50 text-xs font-semibold text-sage-900 hover:text-gold-900 transition-colors flex items-center justify-between group/link"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5 text-earth-500 group-hover/link:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Interactive Full Article Reader Modal */}
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
    </section>
  );
}
