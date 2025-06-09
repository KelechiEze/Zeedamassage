'use client';

import React from 'react';
import { Flower, Star, MapPin } from 'lucide-react';
import './WellnessIntroSection.css';

const WellnessIntroSection = () => {
  return (
    <section className="wellness-intro-section">
      <div className="wellness-container">
        {/* Header Section */}
        <div className="header-section">
          <p className="subtitle">WELCOME TO ZEEDA BLISS</p>
          <h1 className="main-title">
            Integrated Healing with Therapeutic<br />
            Massage, Energy Healing, Holistic<br />
            Facials & Guided Meditations
          </h1>
        </div>

        {/* Features Grid */}
        <div className="features-grid">
          {/* Left Box */}
          <div className="feature-box">
            <div className="icon-wrapper">
              <Flower className="feature-icon" />
            </div>
            <h3 className="feature-title">Serving Since 2012</h3>
            <p className="feature-description">
              Over a decade of guiding guests toward balance, beauty, and inner peace.
            </p>
            <button className="feature-button">About Us</button>
          </div>

          {/* Vertical Divider */}
          <div className="vertical-divider"></div>

          {/* Middle Box */}
          <div className="feature-box">
            <div className="icon-wrapper">
              <Star className="feature-icon" />
            </div>
            <h3 className="feature-title">Trusted by Thousands</h3>
            <p className="feature-description">
              We offer high quality services. Check out clients&#39; testimonials!
            </p>
            <button className="feature-button">View Reviews</button>
          </div>

          {/* Vertical Divider */}
          <div className="vertical-divider"></div>

          {/* Right Box */}
          <div className="feature-box">
            <div className="icon-wrapper">
              <MapPin className="feature-icon" />
            </div>
            <h3 className="feature-title">Convenient Locations</h3>
            <p className="feature-description">
              Our tranquil retreats are thoughtfully placed for ease, access, and serenity.
            </p>
            <button className="feature-button">Read More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WellnessIntroSection;
