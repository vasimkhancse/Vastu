import React from 'react';
import Contact from '../components/Contact';
import { Mail, Sparkles, MapPin, Clock, ShieldCheck, HeartHandshake } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="py-12 sm:py-20 bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <Contact />
      </div>
    </div>
  );
}
