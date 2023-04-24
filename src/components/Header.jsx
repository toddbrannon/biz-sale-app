import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';

function Header() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        My Website
      </div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/" className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/listings" className="nav-link">Listings</Link>
        </li>
        <li className="nav-item">
          <Link to="/login" className="nav-link">Login</Link>
        </li>
        <li className="nav-item">
          <Link to="/signup" className="nav-link">Signup</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;