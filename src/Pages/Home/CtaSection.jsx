import React from 'react';
import './CtaSection.css';

const CtaSection = () => {
  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-content" data-aos="fade-right">
          <h2>Ready to Transform Your Business?</h2>
          <p>Schedule a free consultation with our experts to discuss your project needs and discover how we can help you achieve your goals.</p>
        </div>
        <div className="cta-form" data-aos="fade-left">
          <form className="consultation-form">
            <div className="form-group">
              <input type="text" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <input type="tel" placeholder="Phone Number" />
            </div>
            <div className="form-group">
              <select required>
                <option value="" disabled selected>Service Interest</option>
                <option>Software Development</option>
                <option>Cloud Services</option>
                <option>Data Analytics</option>
                <option>Cybersecurity</option>
                <option>Other</option>
              </select>
            </div>
            <button type="submit">Request Free Consultation</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;