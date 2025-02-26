import React from 'react';
    import { Link } from 'react-router-dom';

    function Navbar() {
      return (
        <nav className="navbar">
          <div className="navbar-container">
            <Link to="/" className="navbar-brand">AI Glossary</Link>
            <ul className="nav-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/glossary">Glossary</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
        </nav>
      );
    }

    export default Navbar;
