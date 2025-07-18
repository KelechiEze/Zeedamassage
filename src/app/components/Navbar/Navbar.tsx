'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <div className="logo-icon">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="16" cy="16" r="12" stroke="#EF5C32" strokeWidth="2" fill="none"/>
              <path d="M12 16 L16 20 L20 12" stroke="#EF5C32" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="16" cy="8" r="2" fill="#EF5C32"/>
              <circle cx="24" cy="16" r="1.5" fill="#EF5C32"/>
              <circle cx="8" cy="16" r="1.5" fill="#EF5C32"/>
              <circle cx="16" cy="24" r="1.5" fill="#EF5C32"/>
            </svg>
          </div>
          <span className="logo-text1">ZeedaaBliss</span>
        </div>

        {/* Desktop Menu */}
        <div className="navbar-menu">
          <Link 
            href="#home" 
            className="menu-link"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('home');
            }}
          >
            Home
          </Link>
          
          <Link 
            href="#about" 
            className="menu-link"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('about');
            }}
          >
            About Us
          </Link>
          
          <Link 
            href="#services" 
            className="menu-link"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('services');
            }}
          >
            Services
          </Link>
          
          <Link 
            href="#contact" 
            className="menu-link"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('contact');
            }}
          >
            Contact
          </Link>
        </div>

        {/* Right Side Actions */}
        <div className="navbar-actions">
          <button 
            className="book-appointment-btn"
            onClick={() => handleNavClick('contact')}
          >
            Book Appointment
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="mobile-menu-toggle" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="mobile-menu">
          <Link 
            href="#home" 
            className="mobile-menu-link"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('home');
            }}
          >
            Home
          </Link>
          
          <Link 
            href="#about" 
            className="mobile-menu-link"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('about');
            }}
          >
            About Us
          </Link>
          
          <Link 
            href="#services" 
            className="mobile-menu-link"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('services');
            }}
          >
            Services
          </Link>
          
          <Link 
            href="#contact" 
            className="mobile-menu-link"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('contact');
            }}
          >
            Contact
          </Link>
          
          <div className="mobile-actions">
            <button 
              className="mobile-book-btn"
              onClick={() => handleNavClick('contact')}
            >
              Book Appointment
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;