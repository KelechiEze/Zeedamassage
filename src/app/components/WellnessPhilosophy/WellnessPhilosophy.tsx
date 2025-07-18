'use client';

import React, { useEffect, useState } from 'react';
import { Flower2 } from 'lucide-react';
import './WellnessPhilosophy.css';

const WellnessPhilosophy = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const stats = [
    { number: "50+", label: "Treatments per month" },
    { number: "12", label: "Number of practitioners" },
    { number: "10+", label: "Total years of experience" },
    { number: "5", label: "Treatment rooms" }
  ];

  return (
    <div className="wellness-container1">
      <div className="wellness-content1">
        {/* Left Side - Image */}
        <div className={`wellness-image-section ${isVisible ? 'fade-in' : ''}`}>
          <div className="wellness-image-wrapper">
            <img 
              src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Woman receiving wellness treatment"
              className="wellness-image"
            />
            <div className="wellness-image-overlay"></div>
          </div>
        </div>

        {/* Right Side - Content */}
        <div className={`wellness-text-section ${isVisible ? 'slide-in-right' : ''}`}>
          <div className="lotus-watermark">
            <Flower2 className="lotus-icon" />
          </div>
          
          <div className="wellness-text-content">
            <div className="philosophy-label">OUR PHILOSOPHY</div>
            
            <h1 className="wellness-heading">
              Empowering You Through<br />
              Mindful Wellness
            </h1>
            
            <p className="wellness-description">
              Step into a space created with intention—a place where your body, mind, and spirit are 
              gently guided back into balance. At Wellness Bliss, we offer a range of holistic 
              therapies and nurturing experiences designed to help you reconnect with your true 
              self and restore your natural energy flow.
            </p>
            
            <button className="wellness-cta-button">
              More About Us
            </button>
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className={`wellness-stats ${isVisible ? 'fade-in-up' : ''}`}>
        <div className="stats-container">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="stat-item"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WellnessPhilosophy;
