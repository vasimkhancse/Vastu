import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Award, Users, CheckCircle, ShieldCheck, HeartHandshake } from 'lucide-react';
import LotusLogo from './LotusLogo';

export default function About({ onOpenConsultation }) {
  const stats = [
    { label: 'Years Experience', value: '10+', desc: 'Dedicated spatial study' },
    { label: 'Consultations', value: '500+', desc: 'Residential & offices' },
    { label: 'Major Projects', value: '100+', desc: 'From blueprints to finish' },
    { label: 'Client Satisfaction', value: '98%', desc: 'Peaceful living outcomes' },
  ];

  return (
    <section id="about" className="py-16 sm:py-24 bg-[#FDFBF7] relative overflow-hidden">
      
      {/* Decorative subtle background pattern */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Visual Spiritual Image & Sacred Lotus Layer */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Image Frame with Warm Spiritual Atmosphere */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3] sm:aspect-[16/11]">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80"
                  alt="Harmonious Spiritual Architecture"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sage-950/60 via-transparent to-transparent" />
                
                {/* Floating caption */}
                <div className="absolute bottom-4 left-5 right-5 text-white">
                  <div className="text-xs uppercase tracking-widest text-gold-300 font-semibold">
                    Natural Equilibrium
                  </div>
                  <div className="text-sm sm:text-base font-serif font-medium">
                    Spaces engineered for inner peace & natural light
                  </div>
                </div>
              </div>

              {/* Floating Lotus Decorative Badge */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-5 -left-4 sm:-left-6 bg-white/95 backdrop-blur-md p-3 sm:p-4 rounded-2xl border border-gold-200/80 shadow-soft-lg flex items-center gap-3"
              >
                <LotusLogo className="w-8 h-8" showText={false} />
                <div>
                  <div className="text-xs font-bold text-sage-950">Vedic Authenticity</div>
                  <div className="text-[10px] text-earth-600">Pure classical foundations</div>
                </div>
              </motion.div>

              {/* Zero Demolition Commitment Pill */}
              <div className="absolute -bottom-5 -right-4 sm:-right-6 bg-sage-900 text-ivory-50 px-4 py-3 rounded-2xl shadow-xl border border-sage-700/60 text-xs flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-gold-400" />
                <span className="font-semibold tracking-wide">100% Non-Invasive Remedies</span>
              </div>

            </div>
          </motion.div>

          {/* Right Column: Narrative & Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-100/80 border border-gold-200 text-gold-800 text-xs font-semibold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5 text-gold-600" />
              Our Guiding Philosophy
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-sage-950 font-normal leading-tight">
              Ancient Wisdom, <br />
              <span className="italic text-gold-600 font-normal">Thoughtfully</span> Presented
            </h2>

            <p className="text-sm sm:text-base text-earth-700 leading-relaxed font-normal">
              At <strong className="text-sage-950 font-medium">GVS Vaasthu Square</strong>, guided by principal consultant <strong className="text-sage-950 font-medium">G V SATHEESH KUMAR</strong> in Bangalore, we bridge the sacred spatial science of ancient India with the functional realities of contemporary architecture. We do not promote superstition, dogma, or destructive demolition.
            </p>

            <p className="text-sm sm:text-base text-earth-700 leading-relaxed font-normal">
              Instead, we evaluate light trajectories, natural ventilation, magnetic coordinates, and elemental balance to create environments where you and your loved ones can thrive in tranquility, health, and sustained prosperity.
            </p>

            {/* Statistics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 pt-4 border-t border-ivory-300">
              {stats.map((stat, idx) => (
                <div key={idx} className="p-3 bg-ivory-100/60 rounded-2xl border border-ivory-200 text-center">
                  <div className="text-2xl sm:text-3xl font-serif font-bold text-sage-900 leading-tight">
                    {stat.value}
                  </div>
                  <div className="text-xs font-semibold text-earth-800 mt-0.5">
                    {stat.label}
                  </div>
                  <div className="text-[10px] text-earth-500 mt-0.5 hidden sm:block">
                    {stat.desc}
                  </div>
                </div>
              ))}
            </div>

            {/* Action CTA */}
            <div className="pt-2">
              <button
                onClick={() => onOpenConsultation('Home Vastu Consultation')}
                className="px-6 py-3 rounded-full cursor-pointer bg-sage-800 hover:bg-sage-900 text-ivory-50 text-xs font-semibold uppercase tracking-wider transition-all shadow-sm hover:shadow-md flex items-center gap-2"
              >
                <span>Speak with a Consultant</span>
                <HeartHandshake className="w-4 h-4 text-gold-300" />
              </button>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
