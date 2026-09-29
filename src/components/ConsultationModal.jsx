import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Clock, CheckCircle2, Sparkles, MapPin, Building, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ConsultationModal({ isOpen, onClose, initialService = 'Home Vastu Consultation' }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    service: initialService,
    propertyType: 'Apartment / Flat',
    preferredDate: '',
    timeSlot: 'Morning (10:00 AM - 1:00 PM)',
    notes: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        service: 'Home Vastu Consultation',
        propertyType: 'Apartment / Flat',
        preferredDate: '',
        timeSlot: 'Morning (10:00 AM - 1:00 PM)',
        notes: ''
      })
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#C5963E', '#3D6858', '#E2D5CA', '#D0A65B']
        });
      } catch (err) {
        // fallback
      }
    }, 900);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-sage-950/40 backdrop-blur-sm overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="relative w-full max-w-xl bg-[#FCFAF6] border border-gold-200/80 rounded-3xl shadow-2xl p-6 sm:p-8 my-8 max-h-[90vh] overflow-y-auto"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-5 right-5 p-2 rounded-full text-earth-600 hover:text-sage-900 hover:bg-ivory-200/60 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {!isSubmitted ? (
            <div>
              <div className="text-center mb-6">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-100/60 border border-gold-300/60 text-gold-800 text-xs font-medium uppercase tracking-wider mb-2">
                  <Sparkles className="w-3.5 h-3.5 text-gold-600" />
                  Personalized Spiritual Guidance
                </div>
                <h3 className="text-2xl sm:text-3xl font-serif text-sage-900 font-medium">
                  Book a Vastu Consultation
                </h3>
                <p className="text-earth-600 text-sm mt-1.5 max-w-md mx-auto">
                  Receive practical, non-destructive recommendations to align your space with natural harmony.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-earth-700 uppercase tracking-wider mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Radhika Sharma"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white border border-ivory-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-gold-400 text-sage-900 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-earth-700 uppercase tracking-wider mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white border border-ivory-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-gold-400 text-sage-900 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-earth-700 uppercase tracking-wider mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white border border-ivory-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-gold-400 text-sage-900 transition-all"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-earth-700 uppercase tracking-wider mb-1">
                      Consultation Service
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white border border-ivory-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-gold-400 text-sage-900 transition-all"
                    >
                      <option value="Home Vastu Consultation">Home Vastu Consultation</option>
                      <option value="Office & Corporate Vastu">Office & Corporate Vastu</option>
                      <option value="New Home Architectural Planning">New Home Architectural Planning</option>
                      <option value="Vastu Floor Plan Analysis">Vastu Floor Plan Analysis</option>
                      <option value="General Spatial Query">General Spatial Query</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-earth-700 uppercase tracking-wider mb-1">
                      Property Type
                    </label>
                    <select
                      value={formData.propertyType}
                      onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white border border-ivory-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-gold-400 text-sage-900 transition-all"
                    >
                      <option value="Apartment / Flat">Apartment / Flat</option>
                      <option value="Independent Villa / House">Independent Villa / House</option>
                      <option value="Commercial Office / Workspace">Commercial Office / Workspace</option>
                      <option value="Empty Plot / Blueprint">Empty Plot / Blueprint</option>
                      <option value="Retail / Restaurant">Retail / Restaurant</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-earth-700 uppercase tracking-wider mb-1">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white border border-ivory-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-gold-400 text-sage-900 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-earth-700 uppercase tracking-wider mb-1">
                      Preferred Time Slot
                    </label>
                    <select
                      value={formData.timeSlot}
                      onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white border border-ivory-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-gold-400 text-sage-900 transition-all"
                    >
                      <option value="Morning (10:00 AM - 1:00 PM)">Morning (10:00 AM - 1:00 PM)</option>
                      <option value="Afternoon (2:00 PM - 5:00 PM)">Afternoon (2:00 PM - 5:00 PM)</option>
                      <option value="Evening (5:00 PM - 8:00 PM)">Evening (5:00 PM - 8:00 PM)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-earth-700 uppercase tracking-wider mb-1">
                    Specific Spatial Concerns or Questions
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about your space layout, main door direction, or specific areas you want to harmonize..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white border border-ivory-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-gold-400 text-sage-900 transition-all"
                  ></textarea>
                </div>

                <div className="pt-2 flex items-center gap-2 text-xs text-earth-500">
                  <ShieldCheck className="w-4 h-4 text-sage-600 flex-shrink-0" />
                  <span>Your privacy is revered. No spam, 100% confidential consultation.</span>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-3.5 px-6 cursor-pointer rounded-2xl bg-gradient-to-r from-sage-800 via-sage-700 to-sage-800 text-ivory-50 font-medium text-sm tracking-wide shadow-md hover:shadow-lg hover:from-sage-900 hover:to-sage-800 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2 disabled:opacity-75"
                >
                  {isLoading ? (
                    <div className="w-5 h-5 border-2 border-ivory-100 border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <>
                      <span>Confirm & Book Consultation</span>
                      <Sparkles className="w-4 h-4 text-gold-300" />
                    </>
                  )}
                </button>
              </form>
            </div>
          ) : (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 bg-sage-100 text-sage-700 rounded-full flex items-center justify-center mx-auto mb-2">
                <CheckCircle2 className="w-10 h-10 text-sage-600" />
              </div>
              <h3 className="text-2xl font-serif text-sage-900 font-medium">
                Consultation Request Received!
              </h3>
              <p className="text-earth-600 text-sm max-w-md mx-auto leading-relaxed">
                Namaste, <strong className="text-sage-800">{formData.fullName}</strong>. Our senior Vastu consultant will review your details and reach out within 24 hours at <strong className="text-sage-800">{formData.email}</strong> to confirm your appointment time and blueprint checklist.
              </p>

              <div className="p-4 bg-ivory-100/80 rounded-2xl border border-ivory-200 text-xs text-earth-700 max-w-sm mx-auto text-left space-y-1">
                <div><span className="font-semibold text-sage-900">Service:</span> {formData.service}</div>
                <div><span className="font-semibold text-sage-900">Property:</span> {formData.propertyType}</div>
                <div><span className="font-semibold text-sage-900">Slot:</span> {formData.timeSlot}</div>
              </div>

              <button
                onClick={handleReset}
                className="mt-4 px-6 py-2.5 rounded-full bg-sage-800 text-ivory-50 text-sm hover:bg-sage-900 transition-colors"
              >
                Close & Return
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
