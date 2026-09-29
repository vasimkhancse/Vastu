import React from 'react';
import { motion } from 'framer-motion';
import { Scale, Zap, Sparkles, HeartHandshake, Compass } from 'lucide-react';

export default function WisdomIntro() {
  const cards = [
    {
      id: 'balance',
      title: 'Balance',
      sanskrit: 'Samatva',
      description: 'Create spaces that feel balanced and harmonious by aligning architectural weight and openness with cosmic coordinates.',
      icon: Scale,
      color: 'text-sage-700 bg-sage-50 border-sage-200/80',
      glow: 'group-hover:border-sage-400'
    },
    {
      id: 'energy',
      title: 'Energy (Prana)',
      sanskrit: 'Prana Pravaha',
      description: 'Understand traditional Vastu concepts related to the smooth, unobstructed flow of life force through entryways and corridors.',
      icon: Zap,
      color: 'text-gold-700 bg-gold-50 border-gold-200/80',
      glow: 'group-hover:border-gold-400'
    },
    {
      id: 'elements',
      title: 'Five Elements',
      sanskrit: 'Pancha Mahabhuta',
      description: 'Explore Earth, Water, Fire, Air, and Space to establish equilibrium across your residential and professional quadrants.',
      icon: Sparkles,
      color: 'text-earth-700 bg-earth-50 border-earth-200/80',
      glow: 'group-hover:border-earth-400'
    },
    {
      id: 'harmony',
      title: 'Harmony & Intention',
      sanskrit: 'Sukha Nivasa',
      description: 'Design spaces with comfort, balance, and mindful intention, allowing daily living routines to nurture calm and prosperity.',
      icon: HeartHandshake,
      color: 'text-sage-800 bg-sage-100/60 border-sage-300/80',
      glow: 'group-hover:border-sage-500'
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-ivory-50/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-100/70 border border-gold-200 text-gold-800 text-xs font-semibold uppercase tracking-widest mb-3"
          >
            <Compass className="w-3.5 h-3.5 text-gold-600" />
            Vedic Spatial Philosophy
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-serif text-sage-950 font-normal tracking-tight"
          >
            The Wisdom of Vastu Shastra
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-earth-700 leading-relaxed font-normal"
          >
            Vastu Shastra is an ancient Indian architectural tradition that focuses on the relationship between people, spaces, nature, and the five elements.
          </motion.p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative spiritual-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center transition-transform duration-300 group-hover:scale-110 ${card.color}`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-medium tracking-widest text-earth-500 uppercase">
                      {card.sanskrit}
                    </span>
                  </div>

                  <h3 className="text-xl font-serif font-medium text-sage-900 mb-2.5">
                    {card.title}
                  </h3>

                  <p className="text-sm text-earth-700 leading-relaxed">
                    {card.description}
                  </p>
                </div>

                {/* <div className="mt-6 pt-4 border-t border-ivory-300/60 flex items-center text-xs font-semibold text-gold-700 group-hover:text-gold-800 transition-colors">
                  <span>Explore principle</span>
                  <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
                </div> */}
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
