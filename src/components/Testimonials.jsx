import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote, Sparkles } from 'lucide-react';
import { testimonialsData } from '../data/testimonials';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextSlide, 6500);
    return () => clearInterval(interval);
  }, [isAutoPlaying, currentIndex]);

  const currentTestimonial = testimonialsData[currentIndex];

  return (
    <section className="py-16 sm:py-24 bg-ivory-100/50 relative overflow-hidden">
      
      {/* Decorative floral aura */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-100/80 border border-gold-200 text-gold-800 text-xs font-semibold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-gold-600" />
            Client Reflections
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-sage-950 font-normal tracking-tight">
            Harmonious Experiences
          </h2>
          <p className="mt-3 text-sm sm:text-base text-earth-700">
            Real stories from homeowners and founders who transformed their spaces.
          </p>
        </div>

        {/* Carousel Container */}
        <div
          className="relative spiritual-card rounded-3xl p-6 sm:p-10 lg:p-12 bg-white border border-gold-200/90 shadow-soft-lg"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <Quote className="absolute top-6 right-8 w-12 h-12 text-gold-200/60 pointer-events-none" />

          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial.id}
              initial={{ opacity: 0, x: 25 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -25 }}
              transition={{ duration: 0.4 }}
              className="space-y-6"
            >
              {/* Rating stars */}
              <div className="flex items-center gap-1 text-gold-500">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold-400 text-gold-500" />
                ))}
              </div>

              {/* Main Quote */}
              <p className="text-base sm:text-xl lg:text-2xl font-serif text-sage-900 leading-relaxed italic">
                “{currentTestimonial.quote}”
              </p>

              {/* Client Profile */}
              <div className="flex items-center gap-4 pt-4 border-t border-ivory-200">
                <img
                  src={currentTestimonial.avatar}
                  alt={currentTestimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-gold-300"
                />
                <div>
                  <h4 className="text-base font-serif font-semibold text-sage-950">
                    {currentTestimonial.name}
                  </h4>
                  <div className="text-xs text-earth-600 flex items-center gap-2">
                    <span>{currentTestimonial.role}</span>
                    <span>•</span>
                    <span className="text-gold-700 font-medium">{currentTestimonial.location}</span>
                  </div>
                  <div className="text-[11px] text-earth-500 mt-0.5">
                    Property: {currentTestimonial.propertyType}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Carousel Navigation Controls */}
          <div className="flex items-center justify-between mt-8 pt-4 border-t border-ivory-100">
            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonialsData.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === currentIndex ? 'w-6 bg-gold-600' : 'w-2 bg-ivory-300 hover:bg-earth-400'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex items-center gap-2">
              <button
                onClick={prevSlide}
                className="p-2.5 rounded-full border cursor-pointer border-ivory-300 hover:border-gold-300 hover:bg-ivory-100 text-sage-900 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextSlide}
                className="p-2.5 rounded-full border cursor-pointer border-ivory-300 hover:border-gold-300 hover:bg-ivory-100 text-sage-900 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
