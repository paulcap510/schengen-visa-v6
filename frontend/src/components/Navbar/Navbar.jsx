import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <nav className={`navbar ${darkMode ? '' : 'light-mode'}`}>
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
      <div className="icon-container" onClick={toggleMode}>
        <FontAwesomeIcon icon={darkMode ? faMoon : faSun} />
      </div>
    </nav>
  );
};

export default Navbar;
