import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Services.css';

const Services = () => {
  useEffect(() => {
    document.title = "Our Services | TridentCo";
    AOS.init({ duration: 800, easing: 'ease-in-out', once: true });
  }, []);

  return (
    <section className="services-container">
      {/* Cybersecurity Services */}
      <div className="service-card" data-aos="fade-up">
        <div className="service-grid">
          <div className="service-content">
            <div className="service-icon">
              <i className="fas fa-shield-alt"></i>
            </div>
            <h2>Cybersecurity Services</h2>
            <p className="service-description">
              Protect your digital assets with our comprehensive security solutions. 
              We provide end-to-end protection against evolving cyber threats.
            </p>
            <ul className="service-features">
              <li><i className="fas fa-check"></i> Security Risk Assessments</li>
              <li><i className="fas fa-check"></i> Penetration Testing</li>
              <li><i className="fas fa-check"></i> SOC Services</li>
              <li><i className="fas fa-check"></i> Compliance Support</li>
              <li><i className="fas fa-check"></i> Incident Response</li>
            </ul>
            <button className="service-cta">Secure Your Business</button>
          </div>
          <div className="service-image">
            <img 
              src="https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
              alt="Cybersecurity" 
            />
          </div>
        </div>
      </div>

      {/* Data Analytics & AI */}
      <div className="service-card" data-aos="fade-up">
        <div className="service-grid reverse">
          <div className="service-content">
            <div className="service-icon">
              <i className="fas fa-brain"></i>
            </div>
            <h2>Data Analytics & AI</h2>
            <p className="service-description">
              Turn your data into actionable insights with our advanced analytics 
              and AI solutions to drive decision-making and innovation.
            </p>
            <ul className="service-features">
              <li><i className="fas fa-check"></i> Business Intelligence</li>
              <li><i className="fas fa-check"></i> Machine Learning</li>
              <li><i className="fas fa-check"></i> Big Data Processing</li>
              <li><i className="fas fa-check"></i> Data Visualization</li>
              <li><i className="fas fa-check"></i> AI Implementation</li>
            </ul>
            <button className="service-cta">Unlock Insights</button>
          </div>
          <div className="service-image">
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
              alt="Data Analytics" 
            />
          </div>
        </div>
      </div>

      {/* Cloud & DevOps Services */}
      <div className="service-card" data-aos="fade-up">
        <div className="service-grid">
          <div className="service-content">
            <div className="service-icon">
              <i className="fas fa-cloud"></i>
            </div>
            <h2>Cloud & DevOps Services</h2>
            <p className="service-description">
              Accelerate your digital transformation with our comprehensive cloud 
              solutions for maximum performance and cost efficiency.
            </p>
            <ul className="service-features">
              <li><i className="fas fa-check"></i> Cloud Migration</li>
              <li><i className="fas fa-check"></i> AWS/Azure/GCP Solutions</li>
              <li><i className="fas fa-check"></i> CI/CD Pipelines</li>
              <li><i className="fas fa-check"></i> Infrastructure as Code</li>
              <li><i className="fas fa-check"></i> Containerization</li>
            </ul>
            <button className="service-cta">Migrate to Cloud</button>
          </div>
          <div className="service-image">
            <img 
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
              alt="Cloud Services" 
            />
          </div>
        </div>
      </div>

      {/* Custom Software Development */}
      <div className="service-card" data-aos="fade-up">
        <div className="service-grid reverse">
          <div className="service-content">
            <div className="service-icon">
              <i className="fas fa-code"></i>
            </div>
            <h2>Custom Software Development</h2>
            <p className="service-description">
              We build robust, scalable applications that solve your unique 
              business challenges across web, mobile, and enterprise systems.
            </p>
            <ul className="service-features">
              <li><i className="fas fa-check"></i> Web Applications</li>
              <li><i className="fas fa-check"></i> Mobile Apps (iOS/Android)</li>
              <li><i className="fas fa-check"></i> Enterprise Solutions</li>
              <li><i className="fas fa-check"></i> API Development</li>
              <li><i className="fas fa-check"></i> System Modernization</li>
            </ul>
            <button className="service-cta">Build Your Solution</button>
          </div>
          <div className="service-image">
            <img 
              src="https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
              alt="Software Development" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;