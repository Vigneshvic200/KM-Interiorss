import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page container">
      <div className="about-content">
        <div className="about-text">
          <h1>About KM Interiors</h1>
          <p>Founded in 2010, KM Interiors has established itself as a premier name in the carpentry and steel fabrication industry. We combine age-old craftsmanship with modern technology to deliver products that stand the test of time.</p>
          <p>Our team consists of skilled carpenters and welders who are passionate about their trade. Whether it's a custom-designed modular kitchen or a heavy-duty industrial gate, we ensure every project receives the same level of dedication and attention to detail.</p>
          
          <div className="mission-vision">
            <div className="mv-box">
              <h3>Our Mission</h3>
              <p>To provide durable, aesthetic, and cost-effective interior and fabrication solutions that exceed client expectations.</p>
            </div>
            <div className="mv-box">
              <h3>Our Vision</h3>
              <p>To be the most trusted partner for home and business renovation projects in the region.</p>
            </div>
          </div>
        </div>
        <div className="about-image">
          <img src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800" alt="Carpenter at work" />
        </div>
      </div>
    </div>
  );
};

export default About;