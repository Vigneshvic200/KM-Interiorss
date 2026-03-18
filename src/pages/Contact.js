import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you ${formData.name}! We will contact you shortly.`);
    setFormData({ name: '', phone: '', message: '' });
  };

  return (
    <div className="contact-page container">
      <div className="page-header">
        <h1>Contact Us</h1>
        <p>Have a project in mind? Let's build something great together.</p>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <div className="info-item">
            <FaMapMarkerAlt className="icon" />
            <div>
              <h4>Location</h4>
              <p>123 Industrial Area, New Delhi, India</p>
            </div>
          </div>
          <div className="info-item">
            <FaPhone className="icon" />
            <div>
              <h4>Phone</h4>
              <p>+91 98765 43210</p>
            </div>
          </div>
          <div className="info-item">
            <FaEnvelope className="icon" />
            <div>
              <h4>Email</h4>
              <p>info@kminteriors.com</p>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input 
            type="text" 
            name="name" 
            placeholder="Your Name" 
            value={formData.name}
            onChange={handleChange}
            required 
          />
          <input 
            type="tel" 
            name="phone" 
            placeholder="Phone Number" 
            value={formData.phone}
            onChange={handleChange}
            required 
          />
          <textarea 
            name="message" 
            rows="5" 
            placeholder="Your Message / Requirements"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;