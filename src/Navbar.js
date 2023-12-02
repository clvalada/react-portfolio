// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (  
    <nav className="navbar">
      <h1>Chris Valada</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about">About Me</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/contact">Contact Me</Link>
        <Link to="/resume">Resume</Link>
      </div> 
    </nav>
  );
};

export default Navbar;
