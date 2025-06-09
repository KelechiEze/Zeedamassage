'use client';

import { useState } from 'react';
import { Search, Menu, X, ChevronDown } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleDropdownToggle = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
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
          <span className="logo-text">ZeedaBliss</span>
        </div>

        {/* Desktop Menu */}
        <div className="navbar-menu">
          <div className="menu-item dropdown">
            <button 
              className="menu-link"
              onClick={() => handleDropdownToggle('home')}
            >
              Home <ChevronDown size={16} />
            </button>
            {activeDropdown === 'home' && (
              <div className="dropdown-content">
                <a href="#" className="dropdown-item">Main Home</a>
                <a href="#" className="dropdown-item">Home Variant</a>
              </div>
            )}
          </div>
          
          <a href="#" className="menu-link">About Us</a>
          
          <div className="menu-item dropdown">
            <button 
              className="menu-link"
              onClick={() => handleDropdownToggle('services')}
            >
              Services <ChevronDown size={16} />
            </button>
            {activeDropdown === 'services' && (
              <div className="dropdown-content">
                <a href="#" className="dropdown-item">Massage Therapy</a>
                <a href="#" className="dropdown-item">Wellness Coaching</a>
                <a href="#" className="dropdown-item">Meditation</a>
              </div>
            )}
          </div>
          
          <div className="menu-item dropdown">
            <button 
              className="menu-link"
              onClick={() => handleDropdownToggle('pages')}
            >
              Pages <ChevronDown size={16} />
            </button>
            {activeDropdown === 'pages' && (
              <div className="dropdown-content">
                <a href="#" className="dropdown-item">About</a>
                <a href="#" className="dropdown-item">Contact</a>
                <a href="#" className="dropdown-item">Blog</a>
              </div>
            )}
          </div>
          
          <a href="#" className="menu-link">Contacts</a>
        </div>

        {/* Right Side Actions */}
        <div className="navbar-actions">
          <button className="search-btn">
            <Search size={20} />
          </button>
          <button className="book-appointment-btn">
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
          <div className="mobile-menu-item">
            <button 
              className="mobile-menu-link"
              onClick={() => handleDropdownToggle('mobile-home')}
            >
              Home <ChevronDown size={16} />
            </button>
            {activeDropdown === 'mobile-home' && (
              <div className="mobile-dropdown">
                <a href="#" className="mobile-dropdown-item">Main Home</a>
                <a href="#" className="mobile-dropdown-item">Home Variant</a>
              </div>
            )}
          </div>
          
          <a href="#" className="mobile-menu-link">About Us</a>
          
          <div className="mobile-menu-item">
            <button 
              className="mobile-menu-link"
              onClick={() => handleDropdownToggle('mobile-services')}
            >
              Services <ChevronDown size={16} />
            </button>
            {activeDropdown === 'mobile-services' && (
              <div className="mobile-dropdown">
                <a href="#" className="mobile-dropdown-item">Massage Therapy</a>
                <a href="#" className="mobile-dropdown-item">Wellness Coaching</a>
                <a href="#" className="mobile-dropdown-item">Meditation</a>
              </div>
            )}
          </div>
          
          <div className="mobile-menu-item">
            <button 
              className="mobile-menu-link"
              onClick={() => handleDropdownToggle('mobile-pages')}
            >
              Pages <ChevronDown size={16} />
            </button>
            {activeDropdown === 'mobile-pages' && (
              <div className="mobile-dropdown">
                <a href="#" className="mobile-dropdown-item">About</a>
                <a href="#" className="mobile-dropdown-item">Contact</a>
                <a href="#" className="mobile-dropdown-item">Blog</a>
              </div>
            )}
          </div>
          
          <a href="#" className="mobile-menu-link">Contacts</a>
          
          <div className="mobile-actions">
            <button className="mobile-search-btn">
              <Search size={20} /> Search
            </button>
            <button className="mobile-book-btn">
              Book Appointment
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
