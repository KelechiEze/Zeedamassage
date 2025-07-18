'use client';

import React from 'react';
import { Phone, Mail, Facebook, Instagram, X } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const navigationLinks = [
    { name: 'Home', href: '#', active: true },
    { name: 'About Us', href: '#' },
    { name: 'Contact Us', href: '#' }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: 'https://www.instagram.com/zeedaa_coco/', label: 'Instagram' },
    { icon: X, href: '#', label: 'Twitter' }
  ];

  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Newsletter Section */}
        <div className="newsletter-section">
          <div className="newsletter-text">
            <h2>Get a special 50% new client discount</h2>
            <h3>and unleash your health.</h3>
          </div>
          {/*<div className="newsletter-form">
            <h4>SIGN UP TO NEWSLETTER</h4>
            <div className="form-group">
              <input 
                type="email" 
                placeholder="Email*" 
                className="email-input"
              />
              <button className="signup-btn">Sign Up</button>
            </div>
          </div>*/}
        </div>

        <div className="separator"></div>

        {/* Main Footer Content */}
        <div className="footer-main">
          {/* Brand Section */}
          <div className="brand-section">
            <div className="logo-container">
              <div className="logo-icon">
                <svg viewBox="0 0 40 40" className="mandala-icon">
                  <circle cx="20" cy="20" r="18" fill="none" stroke="currentColor" strokeWidth="1"/>
                  <circle cx="20" cy="20" r="12" fill="none" stroke="currentColor" strokeWidth="1"/>
                  <circle cx="20" cy="20" r="6" fill="none" stroke="currentColor" strokeWidth="1"/>
                  <path d="M20 2 L20 38 M2 20 L38 20 M8.9 8.9 L31.1 31.1 M31.1 8.9 L8.9 31.1" stroke="currentColor" strokeWidth="0.5"/>
                </svg>
              </div>
              <span className="brand-name">ZeedaBliss</span>
            </div>
          </div>

          {/* Information Columns */}
          <div className="info-columns">
            {/* Address Column */}
           <div className="info-column">
  <h4>Address</h4>
  <div className="column-content">
    <p>Opposite chicken wings lounge no.5 Ogudu ojota</p>
    <a href="#" className="view-directions">View Directions</a>
  </div>
</div>

            {/* Work Hours Column */}
            <div className="info-column">
              <h4>Work Hours</h4>
              <div className="column-content">
                <p>Monday to Friday: 9AM – 6PM</p>
                <p>Saturday: 9AM – 6PM</p>
              </div>
            </div>

            {/* Contacts Column */}
            <div className="info-column">
              <h4>Contacts</h4>
              <div className="column-content">
                <div className="contact-item">
                  <Phone size={16} />
                  <span>09013067278</span>
                </div>
                <div className="contact-item">
                  <Mail size={16} />
                  <span>Zeedaas43@gmail.com</span>
                </div>
                {/* Social Media Icons */}
                <div className="social-icons">
                  {socialLinks.map((social, index) => (
                    <a 
                      key={index}
                      href={social.href}
                      className="social-icon"
                      aria-label={social.label}
                    >
                      <social.icon size={18} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="navigation-section">
          <nav className="footer-nav">
            {navigationLinks.map((link, index) => (
              <a 
                key={index}
                href={link.href}
                className={`nav-link ${link.active ? 'active' : ''}`}
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>

        {/* Bottom Text */}
        <div className="footer-bottom">
          <p>This is Zeedas website – cmsmasters © 2025 – All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
