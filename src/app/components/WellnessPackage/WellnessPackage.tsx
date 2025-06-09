'use client';

import React from 'react';
import { Flower2, Sparkles } from 'lucide-react';
import './WellnessPackage.css';

const WellnessPackage = () => {
  const packages = [
    {
      id: 1,
      title: "Deep Restoration",
      description: "Optimizing your individual abilities",
      image: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: Flower2
    },
    {
      id: 2,
      title: "Balance & Recenter", 
      description: "Overcoming the challenges of limb loss",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: Sparkles
    },
    {
      id: 3,
      title: "Serenity Starter",
      description: "Recovering ability, mobility and more",
      image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: Flower2
    },
    {
      id: 4,
      title: "Inner Glow Detox",
      description: "Discovering the path to independence",
      image: "https://images.unsplash.com/photo-1596178065887-1198b6148b2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: Sparkles
    },
    {
      id: 5,
      title: "Moon & Soul Ritual",
      description: "Restoring the skills to rebuild your life",
      image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: Flower2
    }
  ];

  // Duplicate packages for infinite scroll effect
  const duplicatedPackages = [...packages, ...packages, ...packages];

  return (
    <section className="wellness-packages">
      <div className="wellness-packages__container">
        <div className="wellness-packages__header">
          <h5 className="wellness-packages__subtitle">WELLNESS PACKAGES</h5>
          <h1 className="wellness-packages__title">
            Your Journey to Balance<br />Begins Here
          </h1>
        </div>

        <div className="wellness-packages__slider-container">
          <div className="wellness-packages__slider">
            {duplicatedPackages.map((pkg, index) => {
              const IconComponent = pkg.icon;
              return (
                <div
                  key={`${pkg.id}-${index}`}
                  className="wellness-packages__card"
                  style={{ backgroundImage: `url(${pkg.image})` }}
                >
                  <div className="wellness-packages__overlay">
                    <div className="wellness-packages__content">
                      <div className="wellness-packages__icon">
                        <IconComponent size={32} />
                      </div>
                      <h3 className="wellness-packages__card-title">{pkg.title}</h3>
                      <p className="wellness-packages__card-description">{pkg.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WellnessPackage;
