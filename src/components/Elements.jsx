import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mountain, Droplets, Flame, Wind, Maximize2, Sparkles, CheckCircle2 } from 'lucide-react';
import { elementsData } from '../data/elements';

export default function Elements() {
  const [activeElementId, setActiveElementId] = useState('earth');

  const iconMap = {
    Mountain: Mountain,
    Droplets: Droplets,
    Flame: Flame,
    Wind: Wind,
    Maximize2: Maximize2,
  };

  const activeElement = elementsData.find((el) => el.id === activeElementId) || elementsData[0];

  return (
    <section id="elements" className="py-16 sm:py-24 bg-[#FDFBF7] relative overflow-hidden">
      
      {/* Ambient background soft glow */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-sage-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-gold-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sage-100/80 border border-sage-200 text-sage-800 text-xs font-semibold uppercase tracking-widest mb-3"
          >
            <Sparkles className="w-3.5 h-3.5 text-sage-600" />
            Pancha Mahabhuta
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-serif text-sage-950 font-normal tracking-tight"
          >
            The Five Cosmic Elements
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-earth-700 leading-relaxed font-normal"
          >
            According to Vastu, every home is a micro-universe governed by the balance of Earth, Water, Fire, Air, and Space.
          </motion.p>
        </div>

        {/* 5 Element Interactive Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4 mb-10">
          {elementsData.map((item, index) => {
            const IconComp = iconMap[item.icon] || Mountain;
            const isSelected = item.id === activeElementId;

            return (
              <motion.button
                key={item.id}
                onClick={() => setActiveElementId(item.id)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className={`relative text-left p-4 sm:p-5 rounded-2xl border transition-all duration-300 flex flex-col justify-between h-44 sm:h-48 group ${
                  isSelected
                    ? 'bg-white shadow-lg border-gold-400 ring-2 ring-gold-400/20'
                    : 'bg-white/80 hover:bg-white border-ivory-300 shadow-xs hover:shadow-md'
                }`}
              >
                <div className="flex items-start justify-between">
                  <div
                    className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}
                    style={{
                      backgroundColor: `${item.colorHex}15`,
                      color: item.colorHex
                    }}
                  >
                    <IconComp className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-earth-500">
                    0{index + 1}
                  </span>
                </div>

                <div>
                  <div className="text-[11px] font-medium tracking-wide text-earth-500 uppercase">
                    {item.sanskrit}
                  </div>
                  <h3 className="text-lg sm:text-xl font-serif font-medium text-sage-900 leading-snug">
                    {item.name}
                  </h3>
                  <p className="text-[11px] text-earth-600 truncate mt-0.5">
                    {item.attribute}
                  </p>
                </div>

                {isSelected && (
                  <div
                    className="absolute bottom-0 left-4 right-4 h-1 rounded-t-full"
                    style={{ backgroundColor: item.colorHex }}
                  />
                )}
              </motion.button>
            );
          })}
        </div>

        {/* Selected Element Interactive Deep Dive Showcase */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeElement.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="spiritual-card rounded-3xl p-6 sm:p-8 lg:p-10 border border-gold-200/80 bg-white/95"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Details */}
              <div className="lg:col-span-7 space-y-5">
                <div className="flex flex-wrap items-center gap-3">
                  <span
                    className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider"
                    style={{
                      backgroundColor: `${activeElement.colorHex}18`,
                      color: activeElement.colorHex
                    }}
                  >
                    {activeElement.sanskrit} • {activeElement.name} Element
                  </span>
                  <span className="text-xs text-earth-600 font-medium">
                    Governing Zone: <strong className="text-sage-900">{activeElement.direction}</strong>
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-serif text-sage-950 font-normal">
                  {activeElement.symbolicQuality}
                </h3>

                <p className="text-sm sm:text-base text-earth-700 leading-relaxed">
                  {activeElement.description}
                </p>

                {/* Practical Tips */}
                <div className="space-y-2.5 pt-2">
                  <div className="text-xs font-bold text-sage-900 uppercase tracking-wider">
                    Vastu Placement & Balancing Guidelines:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {activeElement.tips.map((tip, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-earth-700">
                        <CheckCircle2 className="w-4 h-4 text-gold-600 flex-shrink-0 mt-0.5" />
                        <span>{tip}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Ideal Rooms Card */}
              <div className="lg:col-span-5 bg-ivory-100/70 border border-ivory-300/80 rounded-2xl p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-sage-900 uppercase tracking-wider">
                    Recommended Rooms
                  </span>
                  <span className="text-[11px] text-gold-700 font-medium">Harmonious Flow</span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {activeElement.idealRooms.map((room, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 rounded-xl bg-white border border-ivory-300 text-xs font-medium text-sage-900 shadow-xs"
                    >
                      {room}
                    </span>
                  ))}
                </div>

                <div className="p-3.5 rounded-xl bg-white/80 border border-gold-200/60 text-xs text-earth-600 leading-relaxed">
                  <strong className="text-sage-900">Key Takeaway:</strong> When the {activeElement.name} element is balanced, the home experiences heightened {activeElement.attribute.toLowerCase()}.
                </div>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
