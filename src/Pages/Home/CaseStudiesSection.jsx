import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import './CaseStudiesSection.css';

const caseStudies = [
  {
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "E-commerce",
    title: "Revolutionizing Online Retail",
    description: "How we helped a fashion retailer increase conversions by 210%"
  },
  {
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "FinTech",
    title: "Digital Transformation in Banking",
    description: "Modernizing legacy systems for a leading financial institution"
  },
  {
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "Healthcare",
    title: "AI-Powered Diagnostics",
    description: "Developing cutting-edge medical imaging solutions"
  }
];

const CaseStudiesSection = () => {
  return (
    <section className="case-studies-section">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <p className="section-subtitle">Our Impact</p>
          <h2>Success Stories</h2>
          <p className="section-description">Explore how we've helped businesses overcome challenges and achieve remarkable results.</p>
        </div>
        
        <div className="case-studies-grid">
          {caseStudies.map((study, index) => (
            <div className="case-study-card" key={index} data-aos="fade-up" data-aos-delay={`${(index + 1) * 100}`}>
              <div className="case-study-image">
                <img src={study.image} alt={study.category} />
                <div className="case-study-overlay">
                  <span className="case-study-category">{study.category}</span>
                  <h3>{study.title}</h3>
                  <p>{study.description}</p>
                  <a href="#" className="case-study-link">View Case Study <FaArrowRight /></a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;