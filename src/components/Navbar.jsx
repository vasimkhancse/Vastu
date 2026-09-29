import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, Sparkles, PhoneCall } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import LotusLogo from './LotusLogo';

export default function Navbar({ onOpenConsultation }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Vastu', path: '/about' },
    { name: 'Principles', path: '/principles' },
    { name: 'Services', path: '/services' },
    { name: 'Articles', path: '/articles' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#FDFBF7]/95 backdrop-blur-md shadow-sm border-b border-ivory-300/60 py-3'
          : 'bg-[#FDFBF7]/80 backdrop-blur-sm border-b border-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <Link to="/" className="flex items-center">
          <LotusLogo className="w-9 h-9 sm:w-10 sm:h-10" textClassName="text-xl sm:text-2xl" />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `px-3.5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'text-sage-800 bg-sage-50/80 font-semibold'
                    : 'text-earth-700 hover:text-sage-900 hover:bg-ivory-200/50'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Desktop Action CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={() => onOpenConsultation('Home Vastu Consultation')}
            className="group relative inline-flex cursor-pointer items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider text-ivory-50 bg-gradient-to-r from-sage-800 to-sage-700 hover:from-sage-900 hover:to-sage-800 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5 border border-sage-600/30"
          >
            <Sparkles className="w-3.5 h-3.5 text-gold-300 group-hover:rotate-12 transition-transform duration-300" />
            <span>Book a Consultation</span>
          </button>
        </div>

        {/* Mobile Menu Trigger */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={() => onOpenConsultation('Home Vastu Consultation')}
            className="p-2 rounded-full bg-sage-50 text-sage-800 hover:bg-sage-100 transition-colors border border-sage-200"
            title="Book Consultation"
          >
            <PhoneCall className="w-4 h-4" />
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            className="p-2.5 rounded-xl text-sage-900 hover:bg-ivory-200/60 focus:outline-none transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Animated Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="lg:hidden border-b border-ivory-300 bg-[#FCFAF6] shadow-xl overflow-hidden"
          >
            <div className="px-5 pt-3 pb-6 space-y-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `block px-4 py-2.5 rounded-xl text-base font-medium transition-colors ${
                      isActive
                        ? 'bg-sage-100/70 text-sage-900 font-semibold'
                        : 'text-earth-800 hover:bg-ivory-200/70 hover:text-sage-900'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}

              <div className="pt-4 mt-2 border-t border-ivory-300/80">
                <button
                  onClick={() => {
                    setIsOpen(false);
                    onOpenConsultation('Home Vastu Consultation');
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-sage-800 text-ivory-50 font-medium text-sm shadow-md hover:bg-sage-900 transition-colors"
                >
                  <Sparkles className="w-4 h-4 text-gold-300" />
                  <span>Book a Consultation</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
