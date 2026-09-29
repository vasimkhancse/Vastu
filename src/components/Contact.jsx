import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, Sparkles, CheckCircle2, ChevronDown } from 'lucide-react';
import confetti from 'canvas-confetti';
import { faqsData } from '../data/testimonials';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    service: 'Home Vastu Consultation',
    message: ''
  });

  const [isSent, setIsSent] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSent(true);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      service: 'Home Vastu Consultation',
      message: ''
    });
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 }
      });
    } catch (err) {}
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-ivory-50/70 relative">
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
            <Mail className="w-3.5 h-3.5 text-gold-600" />
            Connect With Us
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-serif text-sage-950 font-normal tracking-tight"
          >
            Begin Your Spatial Journey
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-earth-700 leading-relaxed font-normal"
          >
            Have a question about your home, apartment blueprint, or workspace orientation? Reach out directly.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-9 border border-gold-200/80 shadow-soft"
          >
            {!isSent ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-2xl font-serif text-sage-900 font-medium mb-4">
                  Send an Enquiry
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-earth-700 uppercase tracking-wider mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Vikramaditya"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-ivory-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-gold-400 text-sage-900 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-earth-700 uppercase tracking-wider mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98458 78915"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-ivory-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-gold-400 text-sage-900 transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-earth-700 uppercase tracking-wider mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="you@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-ivory-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-gold-400 text-sage-900 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-earth-700 uppercase tracking-wider mb-1">
                      Service of Interest
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-ivory-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-gold-400 text-sage-900 transition-all"
                    >
                      <option value="Home Vastu Consultation">Home Vastu Consultation</option>
                      <option value="Office Vastu">Office Vastu</option>
                      <option value="New Home Planning">New Home Planning</option>
                      <option value="Vastu Analysis">Vastu Analysis</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-earth-700 uppercase tracking-wider mb-1">
                    Message / Space Details *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us about your property type, current concerns, or preferred consultation mode..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-ivory-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-gold-400 text-sage-900 transition-all"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 cursor-pointer rounded-2xl bg-gradient-to-r from-sage-800 to-sage-700 hover:from-sage-900 hover:to-sage-800 text-ivory-50 text-sm font-semibold tracking-wide shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 group"
                >
                  <span>Send Enquiry</span>
                  <Send className="w-4 h-4 text-gold-300 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            ) : (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center mx-auto text-sage-700">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-serif text-sage-900 font-medium">
                  Enquiry Sent Successfully
                </h3>
                <p className="text-sm text-earth-700 max-w-md mx-auto">
                  Thank you, <strong>{formData.fullName}</strong>. Our team will review your message and reach out via {formData.email} shortly.
                </p>
                <button
                  onClick={() => setIsSent(false)}
                  className="mt-4 px-6 py-2 rounded-full border border-sage-700 text-sage-800 text-xs font-semibold hover:bg-sage-50"
                >
                  Send another message
                </button>
              </div>
            )}
          </motion.div>

          {/* Right Column: Office Info & FAQs */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Contact Details Card */}
            <div className="spiritual-card rounded-3xl p-6 sm:p-7 bg-white border border-gold-200/80 space-y-5">
              <div>
                <p className="text-lg font-semibold text-earth-600">
                  GVS VAASTHU SQUARE
                </p>
                <p className="text-xs text-earth-600 font-medium mt-0.5">
                  Chief Consultant: <span className="text-sage-900 font-semibold">G V Sathish Kumar</span>
                </p>
              </div>

              <div className="space-y-4 text-sm text-earth-700">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-gold-50 text-gold-700 border border-gold-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-earth-500 uppercase font-semibold block">Phone / WhatsApp</span>
                    <a href="tel:+919845878915" className="font-medium text-sage-900 hover:text-gold-700 transition-colors">
                      +91 98458 78915
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-sage-50 text-sage-700 border border-sage-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-earth-500 uppercase font-semibold block">Email</span>
                    <a href="mailto:info@gvsvaasthusquare.in" className="font-medium text-sage-900 hover:text-gold-700 transition-colors">
                      info@gvsvaasthusquare.in
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-earth-50 text-earth-700 border border-earth-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-earth-500 uppercase font-semibold block">Location</span>
                    <span className="font-medium text-sage-900">
                      Bangalore, Karnataka, India
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-ivory-200 text-earth-700 border border-ivory-300 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-earth-500 uppercase font-semibold block">Consultation Hours</span>
                    <span className="font-medium text-sage-900">
                      Monday – Saturday: 9:30 AM – 7:00 PM IST <br />
                      <span className="text-xs text-earth-500 font-normal">On-site (Bangalore) & Remote Global Consultations</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick FAQs */}
            <div className="bg-white rounded-3xl p-6 border border-ivory-300 shadow-xs space-y-3">
              <h4 className="text-base font-serif font-semibold text-sage-900 mb-2">
                Frequently Asked
              </h4>

              {faqsData.slice(0, 2).map((faq, idx) => (
                <div key={idx} className="border-b border-ivory-200 pb-2.5 last:border-0 last:pb-0">
                  <button
                    onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                    className="w-full text-left flex items-center justify-between text-xs font-semibold text-sage-900 py-1"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown className={`w-3.5 h-3.5 text-earth-500 transition-transform ${activeFaq === idx ? 'rotate-180' : ''}`} />
                  </button>
                  {activeFaq === idx && (
                    <p className="text-xs text-earth-600 mt-1.5 leading-relaxed">
                      {faq.answer}
                    </p>
                  )}
                </div>
              ))}
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
