import React from 'react';
import Hero from '../components/Hero';
import WisdomIntro from '../components/WisdomIntro';
import Elements from '../components/Elements';
import Directions from '../components/Directions';
import HomeRooms from '../components/HomeRooms';
import Services from '../components/Services';
import About from '../components/About';
import Testimonials from '../components/Testimonials';
import Articles from '../components/Articles';
import CTA from '../components/CTA';
import Contact from '../components/Contact';

export default function Home({ onOpenConsultation }) {
  return (
    <div className="space-y-0">
      <Hero onOpenConsultation={onOpenConsultation} />
      <WisdomIntro />
      <Elements />
      <Directions />
      <HomeRooms />
      <Services onOpenConsultation={onOpenConsultation} />
      <About onOpenConsultation={onOpenConsultation} />
      <Testimonials />
      <Articles />
      <CTA onOpenConsultation={onOpenConsultation} />
      <Contact />
    </div>
  );
}
