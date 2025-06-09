'use client';

import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        {/* Left Side - Text Content */}
        <div className="hero-content">
          <div className="content-overlay">
            <h1 className="hero-title">
              Where Inner Peace Meets Holistic Wellness
            </h1>
            <p className="hero-description">
              I believe in working with your body to restore balance 
              without the need for harsh or painful manipulation.
            </p>
            <div className="hero-buttons">
              <button className="btn-primary">
                Explore Services
              </button>
              <button className="btn-secondary">
                Book Appointment
              </button>
            </div>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="hero-image">
          <img 
            src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80" 
            alt="Woman receiving relaxing massage therapy"
            className="massage-image"
          />
          
          {/* Trust Badge */}
          <div className="trust-badge">
            <div className="stars">
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">★</span>
            </div>
            <p className="trust-text">
              TRUSTED BY 1,000+ PATIENTS
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
