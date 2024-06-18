import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="social-media">
          <h3>Follow Us</h3>
          <a href="https://www.facebook.com/BRACU-Duburi-AUV" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://twitter.com/BRACU_Duburi_AUV" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://www.instagram.com/bracu_duburi_auv/" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
        <div className="team-advisors">
          <h3>Our Advisors</h3>
          <p>Masum Billah</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
