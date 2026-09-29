import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Compass, ShieldCheck, HeartHandshake, Eye, BookOpen, Sun, CheckCircle2 } from 'lucide-react';
import LotusLogo from '../components/LotusLogo';

export default function AboutPage({ onOpenConsultation }) {
  return (
    <div className="py-12 sm:py-20 bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24">
        
        {/* Header Hero */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-100/80 border border-gold-200 text-gold-800 text-xs font-semibold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5 text-gold-600" />
            Vedic Spatial Heritage
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-sage-950 font-normal tracking-tight">
            About GVS Vaasthu Square
          </h1>

          <p className="mt-4 text-base sm:text-lg text-earth-700 leading-relaxed font-normal">
            Led by expert Vastu consultant <strong>G V Satheeshkumar</strong> in Bangalore, bridging 5,000 years of traditional Indian architectural wisdom with modern daylight analysis, energy efficiency, and mindful spatial aesthetics.
          </p>
        </div>

        {/* Narrative Section 1: The Core Philosophy */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 relative">
            <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1545235617-9465d2a55698?auto=format&fit=crop&w=1000&q=80"
                alt="Meditation space and architectural harmony"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-6 space-y-5">
            <span className="text-xs font-bold text-gold-700 uppercase tracking-widest">
              Origins & Lineage
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-sage-900 font-normal">
              Ancient Principles for Contemporary Well-being
            </h2>
            <p className="text-sm sm:text-base text-earth-700 leading-relaxed font-normal">
              Vastu Shastra (literally <em>“the science of dwelling”</em>) emerged from the Vedic period as a holistic architectural guideline. Ancient masters realized that physical enclosures influence our nervous system, sleep cycles, clarity of thought, and family harmony.
            </p>
            <p className="text-sm sm:text-base text-earth-700 leading-relaxed font-normal">
              We treat your home as a living sanctuary. By carefully aligning orientations with solar trajectories (East to West) and Earth’s magnetic flux (North to South), we help you cultivate an environment that nurtures calm, creativity, and abundance.
            </p>
          </div>
        </div>

        {/* The Vastu Purusha Mandala Concept Box */}
        <div className="spiritual-card rounded-3xl p-8 sm:p-12 bg-white border border-gold-200/90 shadow-soft">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center justify-center p-3 bg-gold-50 text-gold-700 rounded-full border border-gold-200">
              <LotusLogo className="w-10 h-10" showText={false} />
            </div>

            <h3 className="text-2xl sm:text-3xl font-serif text-sage-900 font-normal">
              The Metaphor of Vastu Purusha Mandala
            </h3>

            <p className="text-sm sm:text-base text-earth-700 leading-relaxed">
              In classical texts, the cosmic energy of any plot or structure is represented as the <strong>Vastu Purusha</strong>—the spirit of the dwelling whose head rests in the Northeast (spiritual clarity), feet in the Southwest (grounded stability), and navel at the Center (Brahmasthan).
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 text-left">
              <div className="p-4 bg-ivory-100 rounded-2xl border border-ivory-200">
                <div className="text-xs font-bold text-sage-900 uppercase">Head in Northeast</div>
                <p className="text-xs text-earth-600 mt-1">
                  Keep Ishanya light, pure, and receptive to natural morning prana for mental peace.
                </p>
              </div>

              <div className="p-4 bg-ivory-100 rounded-2xl border border-ivory-200">
                <div className="text-xs font-bold text-sage-900 uppercase">Navel in Center</div>
                <p className="text-xs text-earth-600 mt-1">
                  The Brahmasthan core must remain open and unburdened by heavy load-bearing pillars.
                </p>
              </div>

              <div className="p-4 bg-ivory-100 rounded-2xl border border-ivory-200">
                <div className="text-xs font-bold text-sage-900 uppercase">Feet in Southwest</div>
                <p className="text-xs text-earth-600 mt-1">
                  Nairutya provides maximum grounding, perfect for the master bedroom and long-term security.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Pillars of Our Practice */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-serif text-sage-900 font-normal">
              Our 4 Consultation Standards
            </h3>
            <p className="text-xs sm:text-sm text-earth-600 mt-1">
              How we approach every residential and commercial consultation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="spiritual-card p-6 rounded-2xl bg-white space-y-3">
              <div className="w-10 h-10 rounded-xl bg-sage-50 text-sage-700 flex items-center justify-center font-bold">1</div>
              <h4 className="font-serif font-semibold text-sage-900">Zero Fear, Pure Logic</h4>
              <p className="text-xs text-earth-600 leading-relaxed">
                We never invoke superstition or fear. We explain the spatial, psychological, and elemental rationale behind every guideline.
              </p>
            </div>

            <div className="spiritual-card p-6 rounded-2xl bg-white space-y-3">
              <div className="w-10 h-10 rounded-xl bg-gold-50 text-gold-700 flex items-center justify-center font-bold">2</div>
              <h4 className="font-serif font-semibold text-sage-900">Non-Destructive Remedies</h4>
              <p className="text-xs text-earth-600 leading-relaxed">
                We specialize in remedies through color balancing, lighting, metallic strips, botanical placement, and furniture re-orientation.
              </p>
            </div>

            <div className="spiritual-card p-6 rounded-2xl bg-white space-y-3">
              <div className="w-10 h-10 rounded-xl bg-earth-50 text-earth-700 flex items-center justify-center font-bold">3</div>
              <h4 className="font-serif font-semibold text-sage-900">Architect-Friendly</h4>
              <p className="text-xs text-earth-600 leading-relaxed">
                We work harmoniously alongside your civil architects and interior designers, respecting structural feasibility and modern tastes.
              </p>
            </div>

            <div className="spiritual-card p-6 rounded-2xl bg-white space-y-3">
              <div className="w-10 h-10 rounded-xl bg-sage-100 text-sage-800 flex items-center justify-center font-bold">4</div>
              <h4 className="font-serif font-semibold text-sage-900">End-to-End Support</h4>
              <p className="text-xs text-earth-600 leading-relaxed">
                Comprehensive customized PDF report, blueprint overlay, and dedicated post-consultation clarification sessions.
              </p>
            </div>
          </div>
        </div>

        {/* CTA banner */}
        <div className="text-center py-10 bg-ivory-100 rounded-3xl border border-ivory-300">
          <h3 className="text-2xl font-serif text-sage-900">Ready to align your space?</h3>
          <p className="text-xs text-earth-600 mt-2 mb-6">Talk directly with G V Satheeshkumar at GVS Vaasthu Square today.</p>
          <button
            onClick={() => onOpenConsultation('Home Vastu Consultation')}
            className="px-6 py-3 cursor-pointer rounded-full  bg-sage-800 hover:bg-sage-900 text-ivory-50 text-xs font-semibold uppercase tracking-wider transition-colors shadow-sm"
          >
            Book a Consultation
          </button>
        </div>

      </div>
    </div>
  );
}
