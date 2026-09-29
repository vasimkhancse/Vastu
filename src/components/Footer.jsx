import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowUp } from 'lucide-react';
import LotusLogo from './LotusLogo';

export default function Footer({ onOpenConsultation }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#FAF7F2] border-t border-ivory-300 pt-16 pb-12 text-earth-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-ivory-300">
          
          {/* Brand & Mission (Col 1-5) */}
          <div className="lg:col-span-5 space-y-4">
            <Link to="/" onClick={scrollToTop} className="inline-block">
              <LotusLogo className="w-9 h-9" textClassName="text-2xl" />
            </Link>
            
            <p className="text-sm text-earth-600 max-w-sm leading-relaxed font-normal">
              Harmonizing residential and commercial spaces across Bangalore and globally through authentic Vastu Shastra principles, non-destructive remedies, and personalized architectural consultation.
            </p>

            <div className="space-y-1.5 text-xs text-earth-700 pt-1">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-sage-900">Lead Consultant:</span>
                <span>G V SATHEESH KUMAR</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-sage-900">Phone:</span>
                <a href="tel:+919845878915" className="hover:text-gold-700 transition-colors">+91 98458 78915</a>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-sage-900">Email:</span>
                <a href="mailto:info@gvsvaasthusquare.in" className="hover:text-gold-700 transition-colors">info@gvsvaasthusquare.in</a>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-sage-900">Location:</span>
                <span>Bangalore, Karnataka, India</span>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-white border border-ivory-300 flex items-center justify-center text-sage-800 hover:text-gold-600 hover:border-gold-300 transition-colors shadow-2xs"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-white border border-ivory-300 flex items-center justify-center text-sage-800 hover:text-gold-600 hover:border-gold-300 transition-colors shadow-2xs"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="w-9 h-9 rounded-full bg-white border border-ivory-300 flex items-center justify-center text-sage-800 hover:text-gold-600 hover:border-gold-300 transition-colors shadow-2xs"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/>
                  <polygon points="10 15 15 12 10 9 10 15" fill="currentColor"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Navigation Links (Col 6-8) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-sage-950 font-sans">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-earth-700">
              <li>
                <Link to="/" onClick={scrollToTop} className="hover:text-gold-700 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" onClick={scrollToTop} className="hover:text-gold-700 transition-colors">
                  About GVS Vaasthu
                </Link>
              </li>
              <li>
                <Link to="/principles" onClick={scrollToTop} className="hover:text-gold-700 transition-colors">
                  Principles & Elements
                </Link>
              </li>
              <li>
                <Link to="/services" onClick={scrollToTop} className="hover:text-gold-700 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/articles" onClick={scrollToTop} className="hover:text-gold-700 transition-colors">
                  Articles & Insights
                </Link>
              </li>
              <li>
                <Link to="/contact" onClick={scrollToTop} className="hover:text-gold-700 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Consultation Column (Col 9-12) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-sage-950 font-sans">
              Consultation Guidance
            </h4>
            <p className="text-xs text-earth-600 leading-relaxed">
              Book a private floor plan review or on-site analysis in Bangalore with G V Satheeshkumar.
            </p>

            <button
              onClick={() => onOpenConsultation('Home Vastu Consultation')}
              className="w-full py-3 px-4 cursor-pointer rounded-xl bg-sage-800 hover:bg-sage-900 text-ivory-50 text-xs font-semibold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-xs cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-gold-300" />
              <span>Book a Consultation</span>
            </button>
          </div>

        </div>

        {/* Disclaimer & Copyright Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-earth-600">
          
          <div className="max-w-2xl leading-relaxed text-earth-500 italic">
            “Vastu Shastra is a traditional architectural practice. Its principles should not be considered a substitute for professional architectural, engineering, medical, or financial advice.”
          </div>

          <div className="flex items-center gap-6 flex-shrink-0">
            <span>© 2026 GVS VAASTHU SQUARE. All rights reserved.</span>
            
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-white border border-ivory-300 hover:bg-ivory-200 text-sage-900 transition-colors cursor-pointer"
              title="Scroll to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
}
