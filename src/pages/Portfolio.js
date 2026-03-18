import React from 'react';
import './Portfolio.css';

const portfolioItems = [
  { img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800", title: "Modern Modular Kitchen" },
  { img: "https://images.unsplash.com/photo-1595429035839-c99c298ffdde?auto=format&fit=crop&w=800", title: "Office Interior Work" },
  { img: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&w=800", title: "Steel Main Gate" },
  { img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800", title: "Custom Wardrobe" },
  { img: "https://images.unsplash.com/photo-1565538810643-b5bdb5d3e6b1?auto=format&fit=crop&w=800", title: "Balcony Railings" },
  { img: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800", title: "Living Room Unit" }
];

const Portfolio = () => {
  return (
    <div className="portfolio-page container">
      <div className="page-header">
        <h1>Our Portfolio</h1>
        <p>A glimpse of our recent projects</p>
      </div>

      <div className="gallery-grid">
        {portfolioItems.map((item, index) => (
          <div className="gallery-item" key={index}>
            <img src={item.img} alt={item.title} />
            <div className="overlay">
              <h3>{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;