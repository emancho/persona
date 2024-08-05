import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function NavBar() {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><Link to="/" className="nav-item">Home</Link></li>
        <li><Link to="/aboutMe" className="nav-item">About Me</Link></li>
        <li><Link to="/contact" className="nav-item">Contact</Link></li>
        <li><Link to="/projects" className="nav-item">Projects</Link></li>
        <li><Link to="/radioPage" className="nav-item">Radio</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;
