import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, Compass, ShieldCheck, SunMedium } from 'lucide-react';

export default function Hero({ onOpenConsultation }) {
  return (
    <section className="relative overflow-hidden pt-6 pb-16 sm:pt-10 lg:pt-14 lg:pb-24 bg-radial-soft-gold">
      {/* Background Decorative Mandala Rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] sm:w-[750px] sm:h-[750px] lg:w-[900px] lg:h-[900px] pointer-events-none opacity-25">
        <div className="w-full h-full rounded-full border border-gold-400/40 animate-spin-slow" />
        <div className="absolute inset-12 rounded-full border border-dashed border-sage-500/30" />
        <div className="absolute inset-28 rounded-full border border-gold-300/40" />
        <div className="absolute inset-48 rounded-full border border-earth-300/20" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* Visual Column: Sacred Lotus Mandala (FIRST on Mobile: order-1, on Desktop: order-2 lg:col-span-5) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="order-1 lg:order-2 lg:col-span-5 flex justify-center relative my-2 lg:my-0"
          >
            <div className="relative w-[280px] sm:w-[360px] lg:w-[420px] aspect-square flex items-center justify-center">
              
              {/* Continuous Breathing Glowing Aura Backdrop */}
              <motion.div
                animate={{
                  scale: [0.92, 1.06, 0.92],
                  opacity: [0.45, 0.75, 0.45],
                  rotate: [0, 90, 180, 270, 360]
                }}
                transition={{
                  scale: { duration: 5, repeat: Infinity, ease: 'easeInOut' },
                  opacity: { duration: 5, repeat: Infinity, ease: 'easeInOut' },
                  rotate: { duration: 40, repeat: Infinity, ease: 'linear' }
                }}
                className="absolute inset-0 rounded-full bg-gradient-to-tr from-gold-300/50 via-sage-200/50 to-ivory-100/70 blur-2xl pointer-events-none"
              />

              {/* Continuous Floating Container */}
              <motion.div
                animate={{
                  y: [0, -12, 0],
                  rotate: [0, 1, -1, 0]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
                className="relative w-full h-full flex items-center justify-center"
              >
                {/* Concentric Sacred Geometry Mandala & Floating Lotus */}
                <svg
                  viewBox="0 0 400 400"
                  className="w-full h-full relative z-10 filter drop-shadow-md select-none"
                >
                  <circle cx="200" cy="200" r="185" fill="#FAF7F2" stroke="#E2D5CA" strokeWidth="1.5" />
                  <circle cx="200" cy="200" r="165" fill="none" stroke="#C5963E" strokeWidth="1" strokeDasharray="4 4" opacity="0.6" />
                  <circle cx="200" cy="200" r="140" fill="#F4ECE1" fillOpacity="0.4" stroke="#7AA392" strokeWidth="1" />

                  {/* 8-Direction Radial Rays with soft pulse */}
                  {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
                    <g key={angle} transform={`rotate(${angle} 200 200)`}>
                      <line x1="200" y1="35" x2="200" y2="70" stroke="#C5963E" strokeWidth="1.5" opacity="0.7" />
                      <circle cx="200" cy="35" r="3" fill="#3D6858" />
                    </g>
                  ))}

                  {/* Cardinal Direction Text Glyphs */}
                  <text x="200" y="24" textAnchor="middle" fill="#203930" fontSize="11" fontWeight="700" fontFamily="sans-serif">N • KUBERA</text>
                  <text x="382" y="204" textAnchor="end" fill="#203930" fontSize="11" fontWeight="700" fontFamily="sans-serif">E • INDRA</text>
                  <text x="200" y="388" textAnchor="middle" fill="#203930" fontSize="11" fontWeight="700" fontFamily="sans-serif">S • YAMA</text>
                  <text x="20" y="204" textAnchor="start" fill="#203930" fontSize="11" fontWeight="700" fontFamily="sans-serif">W • VARUNA</text>

                  {/* Central Vastu Lotus Flower with Continuous Blossoming Breath */}
                  <g transform="translate(200, 195)">
                    {/* Animated Lotus Group */}
                    <g transform="translate(-60, -65) scale(1.2)">
                      <defs>
                        <linearGradient id="heroLotusCrown" x1="50" y1="8" x2="50" y2="80" gradientUnits="userSpaceOnUse">
                          <stop offset="0%" stopColor="#FFF4D6" />
                          <stop offset="30%" stopColor="#ECC265" />
                          <stop offset="70%" stopColor="#C5963E" />
                          <stop offset="100%" stopColor="#8C611D" />
                        </linearGradient>
                        <linearGradient id="heroLotusInnerL" x1="32" y1="20" x2="50" y2="80" gradientUnits="userSpaceOnUse">
                          <stop offset="0%" stopColor="#EED28B" />
                          <stop offset="100%" stopColor="#966B24" />
                        </linearGradient>
                        <linearGradient id="heroLotusInnerR" x1="68" y1="20" x2="50" y2="80" gradientUnits="userSpaceOnUse">
                          <stop offset="0%" stopColor="#FFF4D6" />
                          <stop offset="100%" stopColor="#A07228" />
                        </linearGradient>
                        <linearGradient id="heroLotusMidL" x1="20" y1="30" x2="50" y2="80" gradientUnits="userSpaceOnUse">
                          <stop offset="0%" stopColor="#DFBA67" />
                          <stop offset="100%" stopColor="#6C4912" />
                        </linearGradient>
                        <linearGradient id="heroLotusMidR" x1="80" y1="30" x2="50" y2="80" gradientUnits="userSpaceOnUse">
                          <stop offset="0%" stopColor="#F5DC96" />
                          <stop offset="100%" stopColor="#7E5616" />
                        </linearGradient>
                        <linearGradient id="heroLotusOuterL" x1="8" y1="46" x2="50" y2="82" gradientUnits="userSpaceOnUse">
                          <stop offset="0%" stopColor="#4A7564" />
                          <stop offset="100%" stopColor="#1E392F" />
                        </linearGradient>
                        <linearGradient id="heroLotusOuterR" x1="92" y1="46" x2="50" y2="82" gradientUnits="userSpaceOnUse">
                          <stop offset="0%" stopColor="#558572" />
                          <stop offset="100%" stopColor="#223F34" />
                        </linearGradient>
                      </defs>

                      {/* 1. Background Spreading Green/Sage Petals */}
                      <path d="M 50 78 C 32 76 10 68 6 48 C 16 46 32 58 50 78 Z" fill="url(#heroLotusOuterL)" opacity="0.95" />
                      <path d="M 50 78 C 68 76 90 68 94 48 C 84 46 68 58 50 78 Z" fill="url(#heroLotusOuterR)" opacity="0.95" />

                      {/* 2. Mid Blooming Gold Petals */}
                      <path d="M 50 79 C 32 75 14 54 18 32 C 28 38 42 58 50 79 Z" fill="url(#heroLotusMidL)" />
                      <path d="M 18 32 C 28 42 40 60 48 76" stroke="#FFF2D1" strokeWidth="0.6" strokeOpacity="0.4" fill="none" />
                      <path d="M 50 79 C 68 75 86 54 82 32 C 72 38 58 58 50 79 Z" fill="url(#heroLotusMidR)" />
                      <path d="M 82 32 C 72 42 60 60 52 76" stroke="#FFF2D1" strokeWidth="0.6" strokeOpacity="0.5" fill="none" />

                      {/* 3. Inner Layer Petals */}
                      <path d="M 50 80 C 38 72 26 48 31 20 C 41 28 47 54 50 80 Z" fill="url(#heroLotusInnerL)" />
                      <path d="M 31 20 C 38 34 45 56 48 76" stroke="#FFFFFF" strokeWidth="0.7" strokeOpacity="0.45" fill="none" />
                      <path d="M 50 80 C 62 72 74 48 69 20 C 59 28 53 54 50 80 Z" fill="url(#heroLotusInnerR)" />
                      <path d="M 69 20 C 62 34 55 56 52 76" stroke="#FFFFFF" strokeWidth="0.7" strokeOpacity="0.6" fill="none" />

                      {/* 4. Central Crown Petal */}
                      <path d="M 50 8 C 41 24 40 56 50 81 C 60 56 59 24 50 8 Z" fill="url(#heroLotusCrown)" />
                      <path d="M 50 10 Q 50 46 50 76" stroke="#FFFFFF" strokeWidth="0.9" strokeOpacity="0.8" strokeLinecap="round" />

                      {/* 5. Center Golden Pericarp Jewel */}
                      <ellipse cx="50" cy="76" rx="5.5" ry="3" fill="#7A4E10" />
                      <ellipse cx="50" cy="75" rx="4.5" ry="2.4" fill="#F0C35B" />
                      <circle cx="50" cy="74.5" r="1.6" fill="#FFFFFF" />
                      <circle cx="47" cy="75" r="0.7" fill="#FFF6D6" />
                      <circle cx="53" cy="75" r="0.7" fill="#FFF6D6" />

                      {/* 6. Ripple base */}
                      <path d="M 36 83 C 44 86 56 86 64 83 C 58 85 42 85 36 83 Z" fill="#C5963E" opacity="0.8" />
                    </g>
                  </g>

                  <text x="200" y="284" textAnchor="middle" fill="#3D6858" fontSize="10" letterSpacing="2" fontWeight="600">BRAHMASTHAN</text>
                </svg>

                {/* Floating Elements Badges with Continuous Float */}
                <motion.div
                  animate={{
                    y: [0, -9, 0],
                    x: [0, 4, 0]
                  }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -bottom-3 -left-2 sm:left-4 bg-white/95 backdrop-blur-md px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-2xl border border-gold-200/80 shadow-soft text-[11px] sm:text-xs flex items-center gap-2"
                >
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                  <span className="font-semibold text-sage-900">Pancha Mahabhuta</span>
                </motion.div>

                <motion.div
                  animate={{
                    y: [0, 9, 0],
                    x: [0, -4, 0]
                  }}
                  transition={{ duration: 5.2, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                  className="absolute -top-2 -right-2 sm:right-4 bg-white/95 backdrop-blur-md px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-2xl border border-ivory-300 shadow-soft text-[11px] sm:text-xs flex items-center gap-2 text-earth-700"
                >
                  <Sparkles className="w-3.5 h-3.5 text-gold-600" />
                  <span className="font-medium text-sage-900">Harmonic Prana</span>
                </motion.div>
              </motion.div>

            </div>
          </motion.div>

          {/* Content Column: Text & Buttons (SECOND on Mobile: order-2, on Desktop: order-1 lg:col-span-7) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="order-2 lg:order-1 lg:col-span-7 text-center lg:text-left space-y-5 sm:space-y-6"
          >
            {/* Subtle Pill Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-ivory-100/90 border border-gold-300/60 shadow-xs"
            >
              <span className="w-2 h-2 rounded-full bg-gold-500 animate-pulse"></span>
              <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-widest text-gold-800">
                GVS VAASTHU SQUARE • Bangalore
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="text-3xl sm:text-5xl lg:text-6xl font-serif text-sage-950 font-normal leading-[1.18] sm:leading-[1.15] tracking-tight"
            >
              Bring <span className="italic font-normal text-gold-600">Harmony</span> Into Your Space
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.7 }}
              className="text-sm sm:text-base lg:text-lg text-earth-700 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal"
            >
              Expert Vastu Shastra consultation by <strong className="text-sage-950 font-medium">G V SATHEESH KUMAR</strong>. Create spaces that inspire balance, prosperity, and natural energetic flow with zero demolition.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-1 sm:pt-2"
            >
              <button
                onClick={() => onOpenConsultation('Home Vastu Consultation')}
                className="w-full sm:w-auto px-7 cursor-pointer py-3.5 rounded-full bg-gradient-to-r from-sage-800 to-sage-700 hover:from-sage-900 hover:to-sage-800 text-ivory-50 text-sm font-semibold tracking-wide shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Book a Consultation</span>
                <Sparkles className="w-4 h-4 text-gold-300 group-hover:rotate-12 transition-transform" />
              </button>

              <Link
                to="/principles"
                onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })}
                className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-white/90 hover:bg-white text-earth-800 border border-ivory-300 hover:border-gold-300 text-sm font-semibold tracking-wide shadow-xs hover:shadow-sm transition-all flex items-center justify-center gap-2 group"
              >
                <span>Explore Vastu</span>
                <ArrowRight className="w-4 h-4 text-earth-500 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            {/* Trust Highlights */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.65, duration: 0.8 }}
              className="pt-6 border-t border-ivory-300/70 grid grid-cols-3 gap-2 sm:gap-6 max-w-lg mx-auto lg:mx-0 text-left"
            >
              <div className="flex items-center gap-2 sm:gap-2.5">
                <div className="w-8 h-8 rounded-full bg-sage-50 border border-sage-200/60 flex items-center justify-center flex-shrink-0 text-sage-700">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] sm:text-xs font-bold text-sage-900 leading-tight">Zero Demolition</div>
                  <div className="text-[10px] sm:text-[11px] text-earth-600">Non-invasive</div>
                </div>
              </div>

              <div className="flex items-center gap-2 sm:gap-2.5">
                <div className="w-8 h-8 rounded-full bg-gold-50 border border-gold-200/60 flex items-center justify-center flex-shrink-0 text-gold-700">
                  <SunMedium className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] sm:text-xs font-bold text-sage-900 leading-tight">5 Elements</div>
                  <div className="text-[10px] sm:text-[11px] text-earth-600">Harmonized</div>
                </div>
              </div>

              <div className="flex items-center gap-2 sm:gap-2.5">
                <div className="w-8 h-8 rounded-full bg-earth-50 border border-earth-200/60 flex items-center justify-center flex-shrink-0 text-earth-700">
                  <Compass className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] sm:text-xs font-bold text-sage-900 leading-tight">500+ Homes</div>
                  <div className="text-[10px] sm:text-[11px] text-earth-600">Peace aligned</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
