import React from 'react';
import { FaCode, FaCloud, FaChartPie, FaShieldAlt, FaCheckCircle, FaArrowRight } from 'react-icons/fa';
import './ServicesSections.css';

const ServicesSection = () => {
  return (
    <section className="services-section">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <p className="section-subtitle">Our Expertise</p>
          <h2>Comprehensive Business Solutions</h2>
          <p className="section-description">
            We offer end-to-end services designed to address your most critical business challenges and opportunities.
          </p>
        </div>
        
        <div className="services-grid">
          <div className="service-card" data-aos="fade-up" data-aos-delay="100">
            <div className="service-icon">
              <FaCode />
            </div>
            <h3>Custom Software Development</h3>
            <p>Tailored applications built to streamline your operations and enhance productivity with cutting-edge technology.</p>
            <ul className="service-features">
              <li><FaCheckCircle className="feature-icon" /> Web & Mobile Applications</li>
              <li><FaCheckCircle className="feature-icon" /> Enterprise Solutions</li>
              <li><FaCheckCircle className="feature-icon" /> API Integrations</li>
            </ul>
            <a href="#!" className="learn-more">Explore <FaArrowRight className="arrow-icon" /></a>
          </div>
          
          <div className="service-card" data-aos="fade-up" data-aos-delay="200">
            <div className="service-icon">
              <FaCloud />
            </div>
            <h3>Cloud & DevOps Services</h3>
            <p>Scalable cloud infrastructure and CI/CD pipelines to accelerate your digital transformation journey.</p>
            <ul className="service-features">
              <li><FaCheckCircle className="feature-icon" /> AWS/Azure/GCP Migration</li>
              <li><FaCheckCircle className="feature-icon" /> Containerization</li>
              <li><FaCheckCircle className="feature-icon" /> Infrastructure as Code</li>
            </ul>
            <a href="#!" className="learn-more">Explore <FaArrowRight className="arrow-icon" /></a>
          </div>
          
          <div className="service-card" data-aos="fade-up" data-aos-delay="300">
            <div className="service-icon">
              <FaChartPie />
            </div>
            <h3>Data Analytics & AI</h3>
            <p>Turn your data into actionable insights with our advanced analytics and machine learning solutions.</p>
            <ul className="service-features">
              <li><FaCheckCircle className="feature-icon" /> Business Intelligence</li>
              <li><FaCheckCircle className="feature-icon" /> Predictive Analytics</li>
              <li><FaCheckCircle className="feature-icon" /> AI/ML Implementation</li>
            </ul>
            <a href="#!" className="learn-more">Explore <FaArrowRight className="arrow-icon" /></a>
          </div>
          
          <div className="service-card" data-aos="fade-up" data-aos-delay="400">
            <div className="service-icon">
              <FaShieldAlt />
            </div>
            <h3>Cybersecurity Services</h3>
            <p>Comprehensive protection for your digital assets with our enterprise-grade security solutions.</p>
            <ul className="service-features">
              <li><FaCheckCircle className="feature-icon" /> Risk Assessment</li>
              <li><FaCheckCircle className="feature-icon" /> Penetration Testing</li>
              <li><FaCheckCircle className="feature-icon" /> Security Operations</li>
            </ul>
            <a href="#!" className="learn-more">Explore <FaArrowRight className="arrow-icon" /></a>
          </div>
        </div>
        
        <div className="cta-banner" data-aos="fade-up">
          <div className="banner-content">
            <h3>Need a custom solution?</h3>
            <p>Our experts can design a tailored package specifically for your business needs.</p>
          </div>
          <button className="banner-cta">Request Consultation</button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;