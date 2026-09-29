import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Compass, Sparkles, CheckCircle2, AlertTriangle, Lightbulb, Search } from 'lucide-react';
import Elements from '../components/Elements';
import Directions from '../components/Directions';
import HomeRooms from '../components/HomeRooms';
import { homeRoomsData } from '../data/homeRooms';

export default function PrinciplesPage({ onOpenConsultation }) {
  const [selectedRoomIndex, setSelectedRoomIndex] = useState(0);
  const activeRoom = homeRoomsData[selectedRoomIndex];

  return (
    <div className="py-12 sm:py-20 bg-[#FDFBF7] space-y-16 sm:space-y-24">
      
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-100/80 border border-gold-200 text-gold-800 text-xs font-semibold uppercase tracking-widest mb-4">
          <Compass className="w-3.5 h-3.5 text-gold-600" />
          Vedic Architectural Science
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-sage-950 font-normal tracking-tight">
          Vastu Principles & Guidelines
        </h1>

        <p className="mt-4 text-base sm:text-lg text-earth-700 leading-relaxed font-normal">
          Explore the core tenets of spatial equilibrium: the 5 Elements (Pancha Mahabhuta), the 8 Directions + Brahmasthan, and room-by-room architectural alignment.
        </p>
      </div>

      {/* Interactive Room Compass Advisor Widget */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="spiritual-card rounded-3xl p-6 sm:p-10 bg-white border border-gold-300/80 shadow-soft-lg">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-semibold text-gold-700 uppercase tracking-wider">
              Interactive Tool
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif text-sage-900 font-medium mt-1">
              Room Orientation & Remedies Finder
            </h2>
            <p className="text-xs sm:text-sm text-earth-600 mt-1">
              Select any room to view its ideal placement, directional remedies, and design tips.
            </p>
          </div>

          {/* Room Selector Pills */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {homeRoomsData.map((room, idx) => (
              <button
                key={room.id}
                onClick={() => setSelectedRoomIndex(idx)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                  selectedRoomIndex === idx
                    ? 'bg-sage-800 text-ivory-50 shadow-sm'
                    : 'bg-ivory-100 hover:bg-ivory-200 text-earth-800 border border-ivory-300'
                }`}
              >
                {room.title}
              </button>
            ))}
          </div>

          {/* Active Room Guide Box */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 bg-ivory-50/80 rounded-2xl p-6 border border-ivory-200">
            <div className="lg:col-span-6 space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-serif font-semibold text-sage-950">
                  {activeRoom.title} ({activeRoom.sanskritName})
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-earth-700 leading-relaxed">
                {activeRoom.vastuConcept}
              </p>

              <div className="p-3 bg-white rounded-xl border border-ivory-200 text-xs text-earth-700">
                <span className="font-bold text-sage-900 block mb-1">Architectural Rationale:</span>
                {activeRoom.modernExplanation}
              </div>
            </div>

            <div className="lg:col-span-6 space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 bg-emerald-50/70 border border-emerald-200 rounded-xl text-xs">
                  <span className="font-bold text-emerald-900 block mb-1">Ideal Directions:</span>
                  <span className="text-emerald-800">{activeRoom.idealDirections.join(', ')}</span>
                </div>

                <div className="p-3 bg-amber-50/70 border border-amber-200 rounded-xl text-xs">
                  <span className="font-bold text-amber-900 block mb-1">Avoid Zones:</span>
                  <span className="text-amber-800">{activeRoom.avoidDirections.join(', ')}</span>
                </div>
              </div>

              <div className="space-y-1.5 pt-1">
                <span className="text-xs font-bold text-sage-900 uppercase tracking-wider block">
                  Actionable Recommendations:
                </span>
                {activeRoom.recommendations.map((rec, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-earth-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-sage-600 flex-shrink-0 mt-0.5" />
                    <span>{rec}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Five Elements Section */}
      <Elements />

      {/* Directions Section */}
      <Directions />

      {/* Home Rooms Section */}
      <HomeRooms />

      {/* Bottom CTA */}
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="p-8 sm:p-10 bg-sage-900 text-ivory-50 rounded-3xl space-y-4">
          <h3 className="text-2xl sm:text-3xl font-serif">Have a unique floor plan query?</h3>
          <p className="text-xs sm:text-sm text-ivory-200 max-w-lg mx-auto">
            Our experts review 2D drawings with 360-degree compass alignment to provide precise recommendations.
          </p>
          <button
            onClick={() => onOpenConsultation('Vastu Floor Plan Analysis')}
            className="px-6 py-3 rounded-full bg-gold-500 hover:bg-gold-600 text-sage-950 font-semibold text-xs uppercase tracking-wider transition-colors shadow-md"
          >
            Request Floor Plan Analysis
          </button>
        </div>
      </div>

    </div>
  );
}
