import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo navbar-links">
        <Link to="/">Paul's Visa Calculator</Link>
      </div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/visa-api">Visa API</Link>
        <Link to="/search">Search</Link>
        <button className="navbar-button">Account (coming soon)</button>
      </div>
    </nav>
  );
};

export default Navbar;
