'use client';

import { useEffect, useState } from 'react';
import './ZeedaaPreloader.css';

interface ZeedaaPreloaderProps {
  onComplete?: () => void;
}

const ZeedaaPreloader = ({ onComplete }: ZeedaaPreloaderProps) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  // Image URLs from the internet (massage-themed)
  const imageUrls = {
    stones: 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3BhJTIwc3RvbmVzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
    hands: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWFzc2FnZSUyMGhhbmRzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
    leaves: 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3BhJTIwbGVhdmVzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
  };

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setIsComplete(true);
          setTimeout(() => {
            onComplete?.();
          }, 800);
          return 100;
        }
        return prev + Math.random() * 4 + 1;
      });
    }, 100);

    return () => clearInterval(progressInterval);
  }, [onComplete]);

  return (
    <div className={`preloader-container ${isComplete ? 'fade-out' : ''}`}>
      {/* Background Gradient */}
      <div className="background-gradient"></div>
      
      {/* Floating Icons */}
      <div className="floating-icons">
        <div className="floating-icon icon-stones">
          <img src={imageUrls.stones} alt="Spa stones" />
        </div>
        <div className="floating-icon icon-hands">
          <img src={imageUrls.hands} alt="Massage hands" />
        </div>
        <div className="floating-icon icon-leaves">
          <img src={imageUrls.leaves} alt="Spa leaves" />
        </div>
      </div>

      {/* Particle Effects */}
      <div className="particles">
        {Array.from({ length: 30 }).map((_, i) => (
          <div key={i} className="particle" style={{ 
            '--delay': `${i * 0.2}s`,
            '--duration': `${3 + Math.random() * 2}s`
          } as React.CSSProperties}></div>
        ))}
      </div>

      {/* Main Content */}
      <div className="preloader-content">
        {/* Logo */}
        <div className="logo-container">
          <h1 className="logo-text">
            <span className="logo-char" style={{ '--char-delay': '0s' } as React.CSSProperties}>Z</span>
            <span className="logo-char" style={{ '--char-delay': '0.1s' } as React.CSSProperties}>e</span>
            <span className="logo-char" style={{ '--char-delay': '0.2s' } as React.CSSProperties}>e</span>
            <span className="logo-char" style={{ '--char-delay': '0.3s' } as React.CSSProperties}>d</span>
            <span className="logo-char" style={{ '--char-delay': '0.4s' } as React.CSSProperties}>a</span>
            <span className="logo-char" style={{ '--char-delay': '0.5s' } as React.CSSProperties}>a</span>
          </h1>
          <p className="logo-subtitle">M A S S A G E</p>
        </div>

        {/* Progress Bar */}
        <div className="progress-container">
          <div className="progress-bar">
            <div 
              className="progress-fill" 
              style={{ width: `${progress}%` }}
            ></div>
            <div className="progress-glow"></div>
          </div>
          <p className="loading-text">Loading Zen... {Math.round(progress)}%</p>
        </div>
      </div>

      {/* Holographic Overlay */}
      <div className="holographic-overlay"></div>
    </div>
  );
};

export default ZeedaaPreloader;