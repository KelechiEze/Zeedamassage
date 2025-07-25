'use client';

import React from 'react';
import { Flower, Star, MapPin } from 'lucide-react';
import './WellnessIntroSection.css';

const WellnessIntroSection = () => {
  return (
    <section id="about" className="wellness-intro-section">
      <div className="wellness-container">
        {/* Header Section */}
        <div className="header-section">
          <p className="subtitle">WELCOME TO ZEEDAA BLISS</p>
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
            <h3 className="feature-title">Serving Since 2020</h3>
            <p className="feature-description">
              Over a 4 years of guiding guests toward balance, beauty, and inner peace.
            </p>
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default WellnessIntroSection;
