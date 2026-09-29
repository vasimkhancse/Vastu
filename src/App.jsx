import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ConsultationModal from './components/ConsultationModal';

import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import PrinciplesPage from './pages/PrinciplesPage';
import ServicesPage from './pages/ServicesPage';
import ArticlesPage from './pages/ArticlesPage';
import ContactPage from './pages/ContactPage';

function ScrollToTopOnNavigate() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('Home Vastu Consultation');

  const handleOpenConsultation = (serviceName = 'Home Vastu Consultation') => {
    setSelectedService(serviceName);
    setIsConsultationOpen(true);
  };

  const handleCloseConsultation = () => {
    setIsConsultationOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FDFBF7] text-earth-800 antialiased selection:bg-gold-200 selection:text-sage-950">
      <ScrollToTopOnNavigate />
      
      {/* Sticky Navbar */}
      <Navbar onOpenConsultation={handleOpenConsultation} />

      {/* Main Content View with Routes */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home onOpenConsultation={handleOpenConsultation} />} />
          <Route path="/about" element={<AboutPage onOpenConsultation={handleOpenConsultation} />} />
          <Route path="/principles" element={<PrinciplesPage onOpenConsultation={handleOpenConsultation} />} />
          <Route path="/services" element={<ServicesPage onOpenConsultation={handleOpenConsultation} />} />
          <Route path="/articles" element={<ArticlesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<Home onOpenConsultation={handleOpenConsultation} />} />
        </Routes>
      </main>

      {/* Global Footer */}
      <Footer onOpenConsultation={handleOpenConsultation} />

      {/* Interactive Consultation Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={handleCloseConsultation}
        initialService={selectedService}
      />
    </div>
  );
}
