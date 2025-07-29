import React from 'react';
import './Footer.css';
import logo from "/logo/trident-1-logo.png";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col about-col">
            <div className="logo-container">
              <img src={logo} alt="TridentCo Logo" className="logo" />
              <h1>Trident<span>Co</span></h1>
            </div>
            <p className="footer-about">We deliver innovative technology solutions that drive business growth and digital transformation for organizations worldwide.</p>
            <div className="social-links">
              <a href="#" className="social-link"><i className="fab fa-linkedin-in"></i></a>
              <a href="#" className="social-link"><i className="fab fa-twitter"></i></a>
              <a href="#" className="social-link"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="social-link"><i className="fab fa-instagram"></i></a>
              <a href="#" className="social-link"><i className="fab fa-youtube"></i></a>
            </div>
          </div>
          
          <div className="footer-col services-col">
            <h3 className="footer-title">Services</h3>
            <ul className="footer-links">
              <li><a href="#">Custom Software Development</a></li>
              <li><a href="#">Cloud & DevOps</a></li>
              <li><a href="#">Data Analytics & AI</a></li>
              <li><a href="#">Cybersecurity</a></li>
              <li><a href="#">Digital Transformation</a></li>
              <li><a href="#">IT Consulting</a></li>
            </ul>
          </div>
          
          <div className="footer-col industries-col">
            <h3 className="footer-title">Industries</h3>
            <ul className="footer-links">
              <li><a href="#">Financial Services</a></li>
              <li><a href="#">Healthcare</a></li>
              <li><a href="#">Retail & E-commerce</a></li>
              <li><a href="#">Manufacturing</a></li>
              <li><a href="#">Education</a></li>
              <li><a href="#">Government</a></li>
            </ul>
          </div>
          
          <div className="footer-col contact-col">
            <h3 className="footer-title">Contact Us</h3>
            <ul className="footer-contact-info">
              <li><i className="fas fa-map-marker-alt"></i> 123 Business Ave, Suite 500<br />San Francisco, CA 94107</li>
              <li><i className="fas fa-phone-alt"></i> +1 (555) 123-4567</li>
              <li><i className="fas fa-envelope"></i> info@tridentco.com</li>
            </ul>
            <div className="footer-newsletter">
              <h4>Subscribe to Our Newsletter</h4>
              <form className="newsletter-form">
                <input type="email" placeholder="Your Email Address" />
                <button type="submit"><i className="fas fa-paper-plane"></i></button>
              </form>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>&copy; 2023 TridentCo. All Rights Reserved.</p>
          </div>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;