import React from 'react';
import { Sparkles, Heart, Flower, Leaf, Baby, Zap, Droplets, Hand } from 'lucide-react';
import { IconType } from 'react-icons';
import './ServicesSection.css';

interface PricingOption {
  duration: string;
  price: string;
}

interface Service {
  id: string;
  title: string;
  icon: IconType;
  image: string;
  description: string;
  pricing: PricingOption[];
}

const ServicesSection: React.FC = () => {
  const services: Service[] = [
    {
      id: 'swedish',
      title: 'Swedish Massage',
      icon: Heart,
      image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=300&h=300&fit=crop&crop=center',
      description: 'Gentle & Relaxing',
      pricing: [
        { duration: '60 mins', price: 'N50,000' },
        { duration: '40 mins', price: 'N30,000' }
      ]
    },
    {
      id: 'deep-tissue',
      title: 'Deep Tissue Massage', 
      icon: Sparkles,
      image: 'https://images.unsplash.com/photo-1520975954732-35dd22299614?w=300&h=300&fit=crop&crop=center',
      description: 'For Muscle Tension & Pain Relief',
      pricing: [
        { duration: '60 mins', price: 'N50,000' },
        { duration: '40 mins', price: 'N30,000' }
      ]
    },
    {
      id: 'aromatherapy',
      title: 'Aromatherapy Massage',
      icon: Flower,
      image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=300&h=300&fit=crop&crop=center',
      description: 'Relaxation with Essential Oils',
      pricing: [
        { duration: '60 mins', price: 'N45,000' },
        { duration: '40 mins', price: 'N25,000' }
      ]
    },
    {
      id: 'hot-stone',
      title: 'Hot Stone Massage',
      icon: Leaf,
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop&crop=center',
      description: 'Heated Stones for Deep Relaxation',
      pricing: [
        { duration: '60 mins', price: 'N55,000' },
        { duration: '40 mins', price: 'N35,000' }
      ]
    },
    {
      id: 'pregnancy',
      title: 'Pregnancy Massage',
      icon: Baby,
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=300&h=300&fit=crop&crop=center',
      description: 'For Expectant Mothers',
      pricing: [
        { duration: '60 mins', price: 'N45,000' },
        { duration: '40 mins', price: 'N25,000' }
      ]
    },
    {
      id: 'sports',
      title: 'Sports Massage',
      icon: Zap,
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop&crop=center',
      description: 'For Active Individuals',
      pricing: [
        { duration: '50 mins', price: 'N50,000' },
        { duration: '40 mins', price: 'N30,000' }
      ]
    },
    {
      id: 'lymphatic',
      title: 'Lymphatic Drainage Massage',
      icon: Droplets,
      image: 'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=300&h=300&fit=crop&crop=center',
      description: 'Gentle, Boosts Circulation',
      pricing: [
        { duration: '40 mins', price: 'N46,000' }
      ]
    },
    {
      id: 'reflexology',
      title: 'Reflexology',
      icon: Hand,
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300&h=300&fit=crop&crop=center',
      description: 'Hands & Feet Combined',
      pricing: [
        { duration: '45 mins', price: 'N40,000' }
      ]
    }
  ];

  return (
    <section id="services" className="services-light-section">
      <div className="services-light-container">
        <div className="services-light-header">
          <h2 className="services-light-title">Our Signature Services</h2>
          <p className="services-light-subtitle">Experience the ultimate relaxation and rejuvenation</p>
        </div>
        
        <div className="services-light-grid">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={service.id} 
                className="service-light-card"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="service-light-icon">
                  <IconComponent size={24} />
                </div>
                
                <div className="service-light-image-container">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="service-light-image"
                  />
                  <div className="image-light-overlay"></div>
                </div>
                
                <div className="service-light-content">
                  <h3 className="service-light-title">{service.title}</h3>
                  <p className="service-light-description">{service.description}</p>
                  <div className="service-light-pricing">
                    {service.pricing.map((option, idx) => (
                      <div key={idx} className="pricing-light-option">
                        <span className="service-light-duration">{option.duration}</span>
                        <span className="service-light-price">{option.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="service-light-arrow">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path 
                      d="M2 8h12m-6-6l6 6-6 6" 
                      stroke="currentColor" 
                      strokeWidth="1.5" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;