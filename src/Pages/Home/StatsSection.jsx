import React, { useEffect } from 'react';
import './StatsSection.css';

const StatsSection = () => {
  useEffect(() => {
    const animateCounters = () => {
      const counters = document.querySelectorAll('.stat-value');
      const speed = 200;
      
      counters.forEach(counter => {
        const target = +counter.getAttribute('data-count');
        const count = +counter.innerText;
        const increment = target / speed;
        
        if (count < target) {
          counter.innerText = Math.ceil(count + increment);
          setTimeout(animateCounters, 1);
        } else {
          counter.innerText = target;
        }
      });
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounters();
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    
    const statsSection = document.querySelector('.stats-section');
    if (statsSection) {
      observer.observe(statsSection);
    }
    
    return () => {
      if (statsSection) {
        observer.unobserve(statsSection);
      }
    };
  }, []);

  return (
    <section className="stats-section">
      <div className="container">
        <div className="stat-card" data-aos="fade-up" data-aos-delay="100">
          <div className="stat-value" data-count="250">0</div>
          <div className="stat-label">Global Clients</div>
        </div>
        <div className="stat-card" data-aos="fade-up" data-aos-delay="200">
          <div className="stat-value" data-count="98">0</div>
          <div className="stat-label">Client Retention</div>
        </div>
        <div className="stat-card" data-aos="fade-up" data-aos-delay="300">
          <div className="stat-value" data-count="15">0</div>
          <div className="stat-label">Years Experience</div>
        </div>
        <div className="stat-card" data-aos="fade-up" data-aos-delay="400">
          <div className="stat-value" data-count="40">0</div>
          <div className="stat-label">Industry Awards</div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;