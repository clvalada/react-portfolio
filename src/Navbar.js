// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (  
    <nav className="navbar">
      <h1 className="nav-h1">Chris Valada | Full Stack Developer</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/Portfolio">Portfolio</Link>
        <Link to="/About">About Me</Link>
        {/*<Link to="/contact">Contact Me</Link>*/}
        {/*<Link to="/resume">Resume</Link>*/}
      </div> 
    </nav>
  );
};

export default Navbar;
