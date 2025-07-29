import React from 'react';
import './Home.css';
import HeroSection from './HeroSections';
import ServicesSection from './ServicesSection';
import StatsSection from './StatsSection';
import TestimonialsSection from './TestimonialsSections';
import CaseStudiesSection from './CaseStudiesSection';
import CtaSection from './CtaSection';

const Home = () => {
  return (
    <div className="home-page">
      <HeroSection />
      <ServicesSection />
      <StatsSection />
      <TestimonialsSection />
      <CaseStudiesSection />
      <CtaSection />
    </div>
  );
};

export default Home;