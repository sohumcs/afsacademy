import React from 'react';
import { Link } from 'react-router-dom'; // Use Link for navigation
import '../styles/Navbar.css';
import logo from "C:/Users/Sohum Srivastava/Desktop/afsacademy/afsacademy/src/media/logo.jpg";

const Navbar = ({ toggleTheme, theme }) => {
  return (
    <nav className={`navbar ${theme}`}>
      <div className="navbar-left">
        {/* Logo as Home link */}
        <Link to="/" className="navbar-logo-link">
          {/* Ensure this path is correct */}
          <img src={logo} alt="Logo" className="navbar-logo" />
        </Link>
      </div>
      
      <div className="navbar-links">
        <Link to="/batches">Batches</Link>
        <Link to="/team">Team</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
