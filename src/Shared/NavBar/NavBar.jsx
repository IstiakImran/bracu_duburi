import React, { useState } from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchBarOpen, setIsSearchBarOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleSearchBar = () => {
    setIsSearchBarOpen(!isSearchBarOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <img src="/logo.png" alt="Logo" />
      </div>
      {!isSearchBarOpen  ? (
        <div className="header-right">
          <nav className={`nav-links ${isMobileMenuOpen ? 'open' : ''}`}>
            <Link className="nav-link" to='/'>Home</Link>
            <Link className="nav-link" to='/about'>About</Link>
            <Link className="nav-link" to='/vehicles'>Vehicles</Link>
            <Link className="nav-link" to="/teams">Teams</Link>
            <Link className="nav-link" to="/robosub">RoboSub</Link>
            <Link className="nav-link" to="/contactus">Contact Us</Link>
          </nav>
          <div className="buttons search">
            <button className="icon-button" onClick={toggleSearchBar}>
              <div className="icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
                </svg>
              </div>
            </button>
          </div>
          <button className="hamburger" onClick={toggleMobileMenu}>
            <div className="icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                <path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"></path>
              </svg>
            </div>
          </button>
        </div>
      ) : (
        <div className="header-right">
          <input type="text" name="" id="" />
          <button onClick={toggleSearchBar}>X</button>
        </div>
      )}
    </header>
  );
}

export default NavBar;