import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="footer-top">
      <div className="footer-brand">
        <h2>Brewtique</h2>
        <p>Your café companion for smooth operations and cozy vibes.</p>
      </div>

      <div className="footer-links">
        <h4>Explore</h4>
        <ul>
          <li><a href="#menu">Menu</a></li>
          <li><a href="#facility">Facility</a></li>
          <li><a href="#reviews">Reviews</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>

      <div className="footer-contact">
        <h4>Contact</h4>
        <p>Email: support@brewtique.com</p>
        <p>Phone: +91 98765 43210</p>
        <p>Location: Borivali, Mumbai</p>
      </div>

      <div className="footer-social">
        <h4>Follow Us</h4>
        <div className="social-icons">
          <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">Twitter</a>
        </div>
      </div>
    </div>

    <div className="footer-bottom">
      <p>© 2025 Brewtique Café Manager. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
