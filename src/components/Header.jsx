import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';

function Header() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        Brand | Logo
      </div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/" className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/listings" className="nav-link">Listings</Link>
        </li>
        <li className="nav-item">
          <Link to="https://biz-sale-app-regauth.onrender.com/login" className="nav-link">Login</Link>
        </li>
        <li className="nav-item">
          <Link to="https://biz-sale-app-regauth.onrender.com/register-free" className="nav-link">Signup</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
