import React from 'react';
import { FaCouch, FaDoorOpen, FaTools, FaHardHat } from 'react-icons/fa';
import './Services.css';

const servicesData = [
  {
    icon: <FaCouch />,
    title: "Modular Kitchens",
    desc: "Custom-designed modular kitchens with premium plywood and finish.",
    category: "Carpentry"
  },
  {
    icon: <FaDoorOpen />,
    title: "Wardrobes & Furniture",
    desc: "Space-saving wardrobes and bespoke furniture pieces.",
    category: "Carpentry"
  },
  {
    icon: <FaTools />,
    title: "Gates & Grills",
    desc: "Sturdy and decorative steel gates, window grills, and fences.",
    category: "Steel"
  },
  {
    icon: <FaHardHat />,
    title: "Structural Fabrication",
    desc: "Industrial sheds, staircases, and heavy steel structures.",
    category: "Steel"
  }
];

const Services = () => {
  return (
    <div className="services-page container">
      <div className="page-header">
        <h1>Our Services</h1>
        <p>Comprehensive solutions in Woodwork and Steel Fabrication</p>
      </div>

      <div className="services-grid">
        {servicesData.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="icon-box">
              {service.icon}
            </div>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
            <span className={`tag ${service.category === 'Carpentry' ? 'wood' : 'steel'}`}>
              {service.category}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;