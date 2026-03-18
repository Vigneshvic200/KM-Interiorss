import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          KM <span>Interiors</span>
        </Link>
        
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item"><Link to="/" onClick={closeMenu}>Home</Link></li>
          <li className="nav-item"><Link to="/about" onClick={closeMenu}>About</Link></li>
          <li className="nav-item"><Link to="/services" onClick={closeMenu}>Services</Link></li>
          <li className="nav-item"><Link to="/portfolio" onClick={closeMenu}>Portfolio</Link></li>
          <li className="nav-item"><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
        </ul>

        <div className="nav-icon" onClick={handleClick}>
          {click ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;