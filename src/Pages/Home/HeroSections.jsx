import React from 'react';
import { FaMedal, FaShieldAlt, FaArrowRight, FaPlayCircle, FaChevronDown } from 'react-icons/fa';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text" data-aos="fade-right" data-aos-delay="300">
          <h1>Transform Your Business with <span>Digital Excellence</span></h1>
          <p className="subtitle">We deliver cutting-edge solutions that drive growth, efficiency, and competitive advantage for businesses worldwide.</p>
          <div className="hero-cta">
            <button className="cta-btn primary">Get Started <FaArrowRight /></button>
            <button className="cta-btn secondary">Watch Demo <FaPlayCircle /></button>
          </div>
          <div className="trust-badges">
            <div className="badge-item">
              <FaMedal />
              <span>Premium Partner</span>
            </div>
            <div className="badge-item">
              <FaShieldAlt />
              <span>Secure Solutions</span>
            </div>
          </div>
        </div>
        <div className="hero-image" data-aos="fade-left" data-aos-delay="500">
          <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Business team discussing digital strategy" />
          <div className="floating-card analytics">
            <i className="fas fa-chart-line"></i>
            <div>
              <span className="value">+87%</span>
              <span className="label">Client Growth</span>
            </div>
          </div>
          <div className="floating-card clients">
            <i className="fas fa-users"></i>
            <div>
              <span className="value">250+</span>
              <span className="label">Satisfied Clients</span>
            </div>
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <span>Scroll Down</span>
        <FaChevronDown />
      </div>
    </section>
  );
};

export default HeroSection;