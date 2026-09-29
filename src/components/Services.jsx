import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, Briefcase, Compass, FileText, ArrowRight, CheckCircle2, Sparkles, Clock, X } from 'lucide-react';
import { servicesData } from '../data/services';

export default function Services({ onOpenConsultation }) {
  const [activeServiceModal, setActiveServiceModal] = useState(null);

  const iconMap = {
    Home: Home,
    Briefcase: Briefcase,
    Compass: Compass,
    FileText: FileText,
  };

  return (
    <section id="services" className="py-16 sm:py-24 bg-ivory-50/80 relative">
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
            <Sparkles className="w-3.5 h-3.5 text-gold-600" />
            Bespoke Spatial Consultations
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-serif text-sage-950 font-normal tracking-tight"
          >
            Consultation Services
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-earth-700 leading-relaxed font-normal"
          >
            Professional, non-invasive Vastu solutions customized for your home, commercial workspace, or upcoming architectural blueprint.
          </motion.p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((service, index) => {
            const IconComp = iconMap[service.icon] || Home;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="spiritual-card rounded-3xl p-6 sm:p-7 flex flex-col justify-between group bg-white relative"
              >
                {service.popular && (
                  <span className="absolute -top-3 right-6 px-3 py-0.5 rounded-full bg-gold-500 text-ivory-50 text-[10px] font-bold uppercase tracking-wider shadow-sm">
                    Most Popular
                  </span>
                )}

                <div>
                  <div className="w-12 h-12 rounded-2xl bg-sage-50 text-sage-700 border border-sage-200/80 flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110">
                    <IconComp className="w-6 h-6" />
                  </div>

                  <span className="text-[11px] font-semibold text-gold-700 uppercase tracking-wider block mb-1">
                    {service.subtitle}
                  </span>

                  <h3 className="text-xl font-serif font-medium text-sage-900 mb-2">
                    {service.title}
                  </h3>

                  <p className="text-xs text-earth-600 mb-5 leading-relaxed">
                    {service.tagline}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-ivory-200">
                    {service.deliverables.slice(0, 2).map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-earth-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-sage-600 flex-shrink-0 mt-0.5" />
                        <span className="line-clamp-2">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-ivory-200/80 flex flex-col gap-2">
                  <button
                    onClick={() => setActiveServiceModal(service)}
                    className="inline-flex items-center cursor-pointer text-xs font-semibold text-sage-800 hover:text-gold-700 transition-colors group/btn py-1"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1.5 transition-transform group-hover/btn:translate-x-1" />
                  </button>

                  <button
                    onClick={() => onOpenConsultation(service.title)}
                    className="w-full py-2.5 px-4 rounded-xl cursor-pointer bg-ivory-100 hover:bg-sage-800 hover:text-ivory-50 text-sage-900 text-xs font-semibold transition-all duration-200"
                  >
                    Book Consultation
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Service Detailed Modal */}
        <AnimatePresence>
          {activeServiceModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-sage-950/40 backdrop-blur-xs">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full border border-gold-200 shadow-2xl relative space-y-5"
              >
                <button
                  onClick={() => setActiveServiceModal(null)}
                  className="absolute top-5 right-5 p-2 rounded-full text-earth-500 hover:bg-ivory-200 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                <div>
                  <span className="text-xs font-semibold text-gold-700 uppercase tracking-wider">
                    {activeServiceModal.subtitle}
                  </span>
                  <h3 className="text-2xl font-serif text-sage-900 font-medium mt-1">
                    {activeServiceModal.title}
                  </h3>
                  <p className="text-xs text-earth-600 mt-1">
                    {activeServiceModal.tagline}
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="text-xs font-bold text-sage-900 uppercase tracking-wider">
                    Consultation Deliverables:
                  </div>
                  <div className="space-y-2">
                    {activeServiceModal.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-earth-700">
                        <CheckCircle2 className="w-4 h-4 text-sage-600 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-3.5 bg-ivory-100 rounded-2xl text-xs space-y-1 text-earth-700">
                  <div><strong className="text-sage-900">Ideal For:</strong> {activeServiceModal.idealFor}</div>
                  <div className="flex items-center gap-1.5 pt-1 text-sage-800">
                    <Clock className="w-3.5 h-3.5" />
                    <span>Typical turnaround: <strong>{activeServiceModal.turnaround}</strong></span>
                  </div>
                </div>

                <button
                  onClick={() => {
                    const serviceName = activeServiceModal.title;
                    setActiveServiceModal(null);
                    onOpenConsultation(serviceName);
                  }}
                  className="w-full py-3 bg-sage-800 cursor-pointer hover:bg-sage-900 text-ivory-50 text-sm font-semibold rounded-2xl transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-gold-300" />
                  <span>Request Consultation for {activeServiceModal.title}</span>
                </button>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
