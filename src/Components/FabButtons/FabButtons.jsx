import React, { useState } from 'react';
import './FabButtons.css';
import { FaCommentDots, FaWhatsapp, FaPhone, FaEnvelope } from 'react-icons/fa';

const FabButton = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleFab = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={`fab-container ${isActive ? 'active' : ''}`}>
      <button className="fab-main" onClick={toggleFab}>
        <FaCommentDots />
      </button>
      <div className="fab-options">
        <a href="https://wa.me/1234567890" className="fab-option whatsapp" target="_blank" rel="noreferrer">
          <FaWhatsapp />
        </a>
        <a href="tel:+1234567890" className="fab-option phone">
          <FaPhone />
        </a>
        <a href="mailto:info@tridentco.com" className="fab-option email">
          <FaEnvelope />
        </a>
      </div>
    </div>
  );
};

export default FabButton;