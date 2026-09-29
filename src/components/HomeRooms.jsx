import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  DoorOpen, Sofa, Bed, UtensilsCrossed, Sparkles, BookOpen, 
  ArrowRight, Compass, CheckCircle2, ChevronRight 
} from 'lucide-react';
import { homeRoomsData } from '../data/homeRooms';

export default function HomeRooms() {
  const [selectedRoom, setSelectedRoom] = useState(null);

  const iconMap = {
    DoorOpen: DoorOpen,
    Sofa: Sofa,
    Bed: Bed,
    UtensilsCrossed: UtensilsCrossed,
    Sparkles: Sparkles,
    BookOpen: BookOpen,
  };

  return (
    <section id="rooms" className="py-16 sm:py-24 bg-[#FDFBF7] relative">
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
            <Compass className="w-3.5 h-3.5 text-sage-600" />
            Room-by-Room Guide
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-serif text-sage-950 font-normal tracking-tight"
          >
            Create a Harmonious Home
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-earth-700 leading-relaxed font-normal"
          >
            Thoughtful spatial arrangements combining traditional Vedic concepts with modern architectural sensibilities for every room.
          </motion.p>
        </div>

        {/* Room Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {homeRoomsData.map((room, index) => {
            const IconComp = iconMap[room.icon] || DoorOpen;

            return (
              <motion.div
                key={room.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="spiritual-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Bar with Icon & Direction Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-sage-50 text-sage-700 border border-sage-200/80 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-semibold text-gold-700 bg-gold-50 border border-gold-200/80 px-2.5 py-1 rounded-full">
                      Ideal: {room.idealDirections[0]}
                    </span>
                  </div>

                  <h3 className="text-xl font-serif font-medium text-sage-900 mb-1">
                    {room.title}
                  </h3>
                  <div className="text-[11px] text-earth-500 uppercase tracking-wider mb-4">
                    {room.sanskritName}
                  </div>

                  {/* Traditional Concept */}
                  <div className="p-3 bg-ivory-100/70 rounded-xl border border-ivory-200 mb-3 text-xs text-earth-800 leading-relaxed">
                    <span className="font-bold text-sage-900 block mb-0.5">Traditional Vastu Concept:</span>
                    {room.vastuConcept}
                  </div>

                  {/* Modern Architectural Explanation */}
                  <div className="text-xs text-earth-600 leading-relaxed">
                    <span className="font-semibold text-earth-800">Modern Spatial View: </span>
                    {room.modernExplanation}
                  </div>
                </div>

                {/* Practical Recommendations Trigger */}
                <div className="mt-5 pt-4 border-t border-ivory-300/60">
                  <button
                    onClick={() => setSelectedRoom(room)}
                    className="w-full py-2 px-3 rounded-xl cursor-pointer bg-ivory-100 hover:bg-gold-50 text-xs font-semibold text-sage-900 hover:text-gold-900 transition-colors flex items-center justify-between group/btn"
                  >
                    <span>View Layout Tips</span>
                    <ChevronRight className="w-4 h-4 text-earth-400 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Room Detail Modal */}
        <AnimatePresence>
          {selectedRoom && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-sage-950/40 backdrop-blur-xs">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full border border-gold-200 shadow-2xl space-y-5"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-xs font-semibold text-gold-700 tracking-wider uppercase">
                      {selectedRoom.sanskritName}
                    </span>
                    <h3 className="text-2xl font-serif text-sage-900 font-medium">
                      {selectedRoom.title} Guidelines
                    </h3>
                  </div>
                  <button
                    onClick={() => setSelectedRoom(null)}
                    className="p-1.5 rounded-full text-earth-500 hover:bg-ivory-200 transition-colors"
                  >
                    ✕
                  </button>
                </div>

                <div className="space-y-2.5">
                  <div className="text-xs font-bold text-sage-900 uppercase tracking-wider">
                    Recommended Design Principles:
                  </div>
                  {selectedRoom.recommendations.map((rec, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-earth-700">
                      <CheckCircle2 className="w-4 h-4 text-sage-600 flex-shrink-0 mt-0.5" />
                      <span>{rec}</span>
                    </div>
                  ))}
                </div>

                <div className="p-3 bg-ivory-100 rounded-xl text-xs text-earth-600">
                  <span className="font-semibold text-sage-900">Optimal Orientations: </span>
                  {selectedRoom.idealDirections.join(', ')}
                </div>

                <button
                  onClick={() => setSelectedRoom(null)}
                  className="w-full py-2.5 bg-sage-800 hover:bg-sage-900 text-ivory-50 text-sm font-medium rounded-xl transition-colors"
                >
                  Close
                </button>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
