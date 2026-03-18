import React from 'react';
import { Link } from 'react-router-dom';
import { FaChevronRight } from 'react-icons/fa';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Crafting Wood & Steel with Perfection</h1>
          <p>Premium Carpentry & Custom Steel Fabrication for your dream spaces.</p>
          <div className="hero-btns">
            <Link to="/contact" className="btn btn-primary">Get Quote <FaChevronRight /></Link>
            <Link to="/portfolio" className="btn btn-outline">Our Work</Link>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="intro-section container">
        <div className="intro-content">
          <h2>Excellence in Every Detail</h2>
          <p>At KM Interiors, we blend traditional craftsmanship with modern design. Specializing in high-quality woodwork and durable steel structures, we transform your ideas into reality.</p>
        </div>
        <div className="intro-stats">
          <div className="stat">
            <h3>15+</h3>
            <p>Years Experience</p>
          </div>
          <div className="stat">
            <h3>500+</h3>
            <p>Projects Completed</p>
          </div>
          <div className="stat">
            <h3>100%</h3>
            <p>Client Satisfaction</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;