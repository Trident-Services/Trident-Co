import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './Header.css';
import logo from '/logo/trident-1-logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const [activeLink, setActiveLink] = useState('/');

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  const isActive = (path) => {
    return activeLink === path ? 'active' : '';
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-wrapper">
          <img src={logo} alt="TridentCo" className="logo-main" />
          <div className="logo-meta">
            <span className="logo-title">TRIDENT</span>
          </div>
        </div>

        <nav className={`nav-main ${isMenuOpen ? 'active' : ''}`}>
          <a 
            href="/" 
            className={`nav-item ${isActive('/')}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </a>
          <a 
            href="/services" 
            className={`nav-item ${isActive('/services')}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Services
          </a>
          <button className="nav-cta pulse-animate">
            <span>Get Consultation</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </nav>

        <button 
          className={`hamburger ${isMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </div>
    </header>
  );
};

export default Header;