import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Compass, Check, X, ShieldAlert, Sparkles, Info } from 'lucide-react';
import { directionsData } from '../data/directions';

export default function Directions() {
  const [selectedDirectionId, setSelectedDirectionId] = useState('center');

  const selectedDir = directionsData.find((d) => d.id === selectedDirectionId) || directionsData[8];

  // 8 outer directions + center arranged for grid / compass
  const compassGrid = [
    { id: 'northwest', label: 'NW', title: 'Northwest', gridPos: 'col-start-1 row-start-1' },
    { id: 'north', label: 'N', title: 'North', gridPos: 'col-start-2 row-start-1' },
    { id: 'northeast', label: 'NE', title: 'Northeast', gridPos: 'col-start-3 row-start-1' },
    { id: 'west', label: 'W', title: 'West', gridPos: 'col-start-1 row-start-2' },
    { id: 'center', label: 'CENTER', title: 'Brahmasthan', gridPos: 'col-start-2 row-start-2' },
    { id: 'east', label: 'E', title: 'East', gridPos: 'col-start-3 row-start-2' },
    { id: 'southwest', label: 'SW', title: 'Southwest', gridPos: 'col-start-1 row-start-3' },
    { id: 'south', label: 'S', title: 'South', gridPos: 'col-start-2 row-start-3' },
    { id: 'southeast', label: 'SE', title: 'Southeast', gridPos: 'col-start-3 row-start-3' },
  ];

  return (
    <section id="directions" className="py-16 sm:py-24 bg-ivory-100/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-100/80 border border-gold-200 text-gold-800 text-xs font-semibold uppercase tracking-widest mb-3"
          >
            <Compass className="w-3.5 h-3.5 text-gold-600" />
            Interactive Spatial Compass
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-serif text-sage-950 font-normal tracking-tight"
          >
            Vastu Directions & The Mandala
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-earth-700 leading-relaxed font-normal"
          >
            Click any quadrant or the central Brahmasthan in the interactive mandala to reveal its governing deity, cosmic element, and optimal architectural placement.
          </motion.p>
        </div>

        {/* Interactive Layout: Mandala / 3x3 Grid on Left + Details on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Interactive 3x3 Mandala Matrix */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center">
            
            <div className="relative p-3 sm:p-5 bg-white/90 rounded-3xl border border-gold-200/80 shadow-soft-lg max-w-md w-full aspect-square flex items-center justify-center">
              
              {/* Outer decorative compass ring */}
              <div className="absolute inset-2 sm:inset-3 rounded-2xl border border-dashed border-gold-300/40 pointer-events-none" />

              <div className="grid grid-cols-3 gap-2.5 sm:gap-3 w-full h-full p-2">
                {compassGrid.map((item) => {
                  const isSelected = item.id === selectedDirectionId;
                  const isBrahmasthan = item.id === 'center';

                  return (
                    <motion.button
                      key={item.id}
                      onClick={() => setSelectedDirectionId(item.id)}
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.96 }}
                      className={`relative rounded-2xl p-2 sm:p-3 flex flex-col items-center justify-center transition-all duration-300 border ${
                        isSelected
                          ? isBrahmasthan
                            ? 'bg-gradient-to-br from-gold-500 to-gold-600 text-ivory-50 border-gold-400 shadow-gold-glow'
                            : 'bg-gradient-to-br from-sage-800 to-sage-700 text-ivory-50 border-sage-600 shadow-md'
                          : isBrahmasthan
                          ? 'bg-gold-50/80 hover:bg-gold-100 text-gold-900 border-gold-300 font-semibold'
                          : 'bg-ivory-50/90 hover:bg-white text-sage-900 border-ivory-300 hover:border-gold-300 shadow-2xs'
                      }`}
                    >
                      <span className={`text-base sm:text-xl font-serif font-bold ${isBrahmasthan ? 'text-xs sm:text-sm tracking-wider' : ''}`}>
                        {item.label}
                      </span>
                      <span className={`text-[10px] sm:text-xs font-medium tracking-tight mt-0.5 text-center line-clamp-1 ${
                        isSelected ? 'text-ivory-100' : isBrahmasthan ? 'text-gold-700' : 'text-earth-600'
                      }`}>
                        {item.title}
                      </span>

                      {isSelected && (
                        <motion.div
                          layoutId="active-indicator"
                          className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-gold-400 border-2 border-white"
                        />
                      )}
                    </motion.button>
                  );
                })}
              </div>

            </div>

            <div className="mt-4 text-xs text-earth-500 flex items-center gap-1.5">
              <Info className="w-3.5 h-3.5 text-gold-600" />
              <span>Tip: Click any square above to inspect direction guidelines</span>
            </div>

          </div>

          {/* Right Column: Direction Detailed Card */}
          <div className="lg:col-span-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedDir.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35 }}
                className="spiritual-card rounded-3xl p-6 sm:p-8 bg-white border border-gold-200 shadow-soft"
              >
                {/* Direction Header Badge */}
                <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-ivory-300">
                  <div>
                    <div className="text-xs font-semibold text-gold-700 tracking-widest uppercase">
                      {selectedDir.sanskrit} • {selectedDir.degree}
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-serif text-sage-900 font-medium">
                      {selectedDir.name} Quadrant
                    </h3>
                  </div>
                  <span className="px-3.5 py-1 rounded-full text-xs font-semibold bg-sage-50 text-sage-800 border border-sage-200">
                    {selectedDir.keyword}
                  </span>
                </div>

                {/* Meta details */}
                <div className="grid grid-cols-2 gap-3 py-4 text-xs">
                  <div className="p-3 bg-ivory-50 rounded-xl border border-ivory-200">
                    <span className="text-earth-500 font-medium block">Governing Deity / Energy</span>
                    <span className="font-bold text-sage-900 mt-0.5 block">{selectedDir.deity}</span>
                  </div>
                  <div className="p-3 bg-ivory-50 rounded-xl border border-ivory-200">
                    <span className="text-earth-500 font-medium block">Cosmic Element</span>
                    <span className="font-bold text-sage-900 mt-0.5 block">{selectedDir.element}</span>
                  </div>
                </div>

                <p className="text-sm text-earth-700 leading-relaxed">
                  {selectedDir.summary}
                </p>

                {/* Ideal vs Avoid Rooms */}
                <div className="mt-5 space-y-4 pt-4 border-t border-ivory-200">
                  <div>
                    <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-800 uppercase tracking-wider mb-2">
                      <Check className="w-4 h-4 text-emerald-600" />
                      <span>Ideal Functions for {selectedDir.name}:</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedDir.idealRooms.map((room, idx) => (
                        <span key={idx} className="px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-900 text-xs font-medium border border-emerald-200">
                          {room}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-1.5 text-xs font-bold text-amber-800 uppercase tracking-wider mb-2">
                      <ShieldAlert className="w-4 h-4 text-amber-600" />
                      <span>Avoid In This Quadrant:</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedDir.avoidRooms.map((room, idx) => (
                        <span key={idx} className="px-2.5 py-1 rounded-lg bg-amber-50 text-amber-900 text-xs font-medium border border-amber-200">
                          {room}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
