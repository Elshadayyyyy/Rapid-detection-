import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css'; 

function Navigation() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">Rapid detection</div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/" className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/register" className="nav-link">Register</Link>
        </li>
        <li className="nav-item">
          <Link to="/history" className="nav-link">History</Link>
        </li>
        <li className="nav-item">
          <Link to="/detect" className="nav-link">Detect</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;