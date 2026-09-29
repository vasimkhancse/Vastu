import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, CheckCircle2, Clock, FileText, ArrowRight, ShieldCheck, HelpCircle, ChevronDown } from 'lucide-react';
import Services from '../components/Services';
import { servicesData } from '../data/services';
import { faqsData } from '../data/testimonials';

export default function ServicesPage({ onOpenConsultation }) {
  const [openFaq, setOpenFaq] = useState(null);

  const processSteps = [
    {
      step: '01',
      title: 'Blueprint & Compass Sharing',
      description: 'Submit your 2D layout drawing with the North direction marked, along with photos or video of the property.'
    },
    {
      step: '02',
      title: '16-Zone Grid Analysis',
      description: 'We overlay the Vedic Vastu Purusha Mandala and 16 energy zones across your floor plan with compass accuracy.'
    },
    {
      step: '03',
      title: 'Zero-Demolition Remedy Report',
      description: 'You receive an easy-to-read customized PDF outlining elemental adjustments, color schemes, and room optimizations.'
    },
    {
      step: '04',
      title: '1-on-1 Video Consultation',
      description: 'We walk you through every nuance on a live video session, addressing your family or workplace requirements.'
    }
  ];

  return (
    <div className="py-12 sm:py-20 bg-[#FDFBF7] space-y-16 sm:space-y-24">
      
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-100/80 border border-gold-200 text-gold-800 text-xs font-semibold uppercase tracking-widest mb-4">
          <Sparkles className="w-3.5 h-3.5 text-gold-600" />
          Spatial Consulting
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-sage-950 font-normal tracking-tight">
          Vastu Consultation Services
        </h1>

        <p className="mt-4 text-base sm:text-lg text-earth-700 leading-relaxed font-normal">
          From residential homes and high-rise apartments to corporate offices and new architectural blueprints—experience non-invasive spatial harmony.
        </p>
      </div>

      {/* Services Grid Component */}
      <Services onOpenConsultation={onOpenConsultation} />

      {/* Step by Step Process */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-semibold text-gold-700 uppercase tracking-wider">
            Clear & Transparent
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-sage-900 font-normal mt-1">
            Our 4-Step Consultation Process
          </h2>
          <p className="text-sm text-earth-600 mt-2">
            Seamless remote or on-site engagement tailored to your schedule.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((item, idx) => (
            <div key={idx} className="spiritual-card p-6 sm:p-7 rounded-3xl bg-white border border-ivory-300 relative space-y-3">
              <div className="text-3xl font-serif font-bold text-gold-600/80">
                {item.step}
              </div>
              <h3 className="text-lg font-serif font-semibold text-sage-900">
                {item.title}
              </h3>
              <p className="text-xs text-earth-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* FAQs Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h3 className="text-2xl sm:text-3xl font-serif text-sage-900 font-normal">
            Consultation FAQs
          </h3>
          <p className="text-xs sm:text-sm text-earth-600 mt-1">
            Common questions regarding our process and remedies.
          </p>
        </div>

        <div className="space-y-3">
          {faqsData.map((faq, idx) => (
            <div key={idx} className="spiritual-card rounded-2xl p-5 bg-white border border-ivory-300">
              <button
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full text-left flex items-center justify-between font-serif font-medium text-sage-950 text-base"
              >
                <span>{faq.question}</span>
                <ChevronDown className={`w-4 h-4 text-earth-500 transition-transform ${openFaq === idx ? 'rotate-180' : ''}`} />
              </button>
              {openFaq === idx && (
                <p className="text-xs sm:text-sm text-earth-700 mt-3 pt-3 border-t border-ivory-200 leading-relaxed">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
