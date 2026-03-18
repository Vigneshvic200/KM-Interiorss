import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>KM Interiors</h3>
          <p>Crafting wood and steel with perfection since 2010. We bring your vision to reality.</p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact Info</h4>
          <p>123 Workshop Lane, Industrial Area</p>
          <p>Phone: +91 98765 43210</p>
          <p>Email: info@kminteriors.com</p>
        </div>

        <div className="footer-section socials">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#!"><FaFacebookF /></a>
            <a href="#!"><FaInstagram /></a>
            <a href="#!"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 KM Interiors. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;