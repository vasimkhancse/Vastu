import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';
import LotusLogo from './LotusLogo';

export default function CTA({ onOpenConsultation }) {
  return (
    <section className="py-20 sm:py-28 bg-[#F5EFEB] relative overflow-hidden">
      
      {/* Decorative Mandala Rings & Floating Lotus */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none opacity-20">
        <div className="w-full h-full rounded-full border border-gold-400/50 animate-spin-slow" />
        <div className="absolute inset-16 rounded-full border border-dashed border-sage-600/40" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Floating Lotus Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-6"
        >
          <div className="p-3 bg-white/90 rounded-full border border-gold-300/80 shadow-md">
            <LotusLogo className="w-12 h-12" showText={false} />
          </div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-serif text-sage-950 font-normal leading-tight tracking-tight"
        >
          Create a Space That Feels Like <span className="italic text-gold-600 font-normal">Home</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 text-base sm:text-lg text-earth-700 max-w-2xl mx-auto leading-relaxed font-normal"
        >
          Explore traditional Vastu principles and discover thoughtful ways to bring balance and harmony into your space.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={() => onOpenConsultation('Home Vastu Consultation')}
            className="w-full sm:w-auto px-8 py-4 cursor-pointer rounded-full bg-gradient-to-r from-sage-800 to-sage-700 hover:from-sage-900 hover:to-sage-800 text-ivory-50 text-sm font-semibold tracking-wide shadow-md hover:shadow-xl transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2 group"
          >
            <span>Book a Consultation</span>
            <Sparkles className="w-4 h-4 text-gold-300 group-hover:rotate-12 transition-transform" />
          </button>
        </motion.div>

        <p className="mt-4 text-xs text-earth-500">
          Personalized advice • 100% Non-demolition remedies • Private & confidential
        </p>

      </div>
    </section>
  );
}
