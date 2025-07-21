'use client';

import React, { useEffect, useState } from 'react';
import { Flower2, Heart, Sparkles, Flower, Leaf, Baby, Zap, Droplets, Hand } from 'lucide-react';
import SocialMediaModal from '../SocialMediaModal/SocialMediaModal';
import './AppointmentBookingSection.css';

const services = [
  {
    id: 'swedish',
    title: 'Swedish Massage',
    icon: Heart,
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400&h=400&fit=crop&crop=center&auto=format&q=80',
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
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop&crop=center&auto=format&q=80',
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
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&h=400&fit=crop&crop=center&auto=format&q=80',
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
    image: 'https://images.unsplash.com/photo-1596178065887-1198b6148b2b?w=400&h=400&fit=crop&crop=center&auto=format&q=80',
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
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=400&fit=crop&crop=center&auto=format&q=80',
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
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=400&fit=crop&crop=center&auto=format&q=80',
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
    image: 'https://images.unsplash.com/photo-1552693673-1bf958298935?w=400&h=400&fit=crop&crop=center&auto=format&q=80',
    description: 'Gentle, Boosts Circulation',
    pricing: [
      { duration: '40 mins', price: 'N46,000' }
    ]
  },
  {
    id: 'reflexology',
    title: 'Reflexology',
    icon: Hand,
    image: 'https://images.unsplash.com/photo-1591343395082-e120087004b4?w=400&h=400&fit=crop&crop=center&auto=format&q=80',
    description: 'Hands & Feet Combined',
    pricing: [
      { duration: '45 mins', price: 'N40,000' }
    ]
  }
];

type Service = typeof services[0];

const AppointmentBookingSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    duration: '',
    price: '',
    date: '',
    time: '',
  });

  const [showModal, setShowModal] = useState(false);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [selectedDuration, setSelectedDuration] = useState('');
  const [clientReady, setClientReady] = useState(false);
  const [confirmationMessage, setConfirmationMessage] = useState('');
  const [showDurationOptions, setShowDurationOptions] = useState(false);
  const [showDateTimeFields, setShowDateTimeFields] = useState(false);

  useEffect(() => {
    setClientReady(true);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    if (name === 'service') {
      const service = services.find(s => s.id === value) || null;
      setSelectedService(service);
      setFormData(prev => ({
        ...prev,
        service: value,
        duration: service?.pricing[0]?.duration || '',
        price: service?.pricing[0]?.price || ''
      }));
      setSelectedDuration(service?.pricing[0]?.duration || '');
      if (service) {
        setTimeout(() => setShowDurationOptions(true), 100);
      } else {
        setShowDurationOptions(false);
        setShowDateTimeFields(false);
      }
    } else if (name === 'duration') {
      const selectedOption = selectedService?.pricing.find(p => p.duration === value);
      setSelectedDuration(value);
      setFormData(prev => ({
        ...prev,
        duration: value,
        price: selectedOption?.price || ''
      }));
      if (value) {
        setTimeout(() => setShowDateTimeFields(true), 100);
      } else {
        setShowDateTimeFields(false);
      }
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.email || !formData.service || 
        !formData.duration || !formData.date || !formData.time) {
      alert('Please fill all required fields');
      return;
    }
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setFormData({
      name: '',
      phone: '',
      email: '',
      service: '',
      duration: '',
      price: '',
      date: '',
      time: '',
    });
    setSelectedService(null);
    setSelectedDuration('');
    setShowDurationOptions(false);
    setShowDateTimeFields(false);
  };

  const formatDate = (dateString: string): string => {
    if (!dateString) return 'Not specified';
    try {
      const date = new Date(dateString);
      if (isNaN(date.getTime())) return dateString;
      return date.toLocaleDateString('en-US', { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      });
    } catch {
      return dateString;
    }
  };

  useEffect(() => {
    if (showModal) {
      const message = `Hello! I would like to book an appointment with you. Here are my details:

Name: ${formData.name || 'Not provided'}
Phone: ${formData.phone || 'Not provided'}
Email: ${formData.email || 'Not provided'}
Service: ${selectedService?.title || 'Not selected'} (${formData.duration || '--'} - ${formData.price || '--'})
Preferred Date: ${formatDate(formData.date)} at ${formData.time || '--:--'}

Please confirm my appointment. Thank you!`;
      setConfirmationMessage(message);
    }
  }, [showModal, formData, selectedService]);

  return (
    <section id="contact" className="appointment-booking-section">
      <div className="booking-container">
        <div className="image-section">
          <img
            src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&h=800&fit=crop&crop=center&auto=format&q=80"
            alt="Luxury spa massage therapy"
            className="spa-image"
          />
          <div className="image-overlay">
            <div className="overlay-content">
              <h3>Professional Wellness Care</h3>
              <p>Experience rejuvenation like never before</p>
            </div>
          </div>
        </div>

        <div className="form-section">
          <div className="form-content">
            <div className="header-section">
              <Flower2 className="mandala-icon" size={48} />
              <h2 className="booking-title">Book an Appointment</h2>
              <p className="booking-subtitle">
                Your life is waiting. Fast, long‑lasting relief is nearby.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="booking-form">
              <div className="form-group animate-slide-up">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="form-input full-width"
                  required
                />
              </div>

              <div className="form-row animate-slide-up">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your Phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="form-input half-width"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="form-input half-width"
                  required
                />
              </div>

              <div className="form-group animate-slide-up">
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="form-select full-width"
                  required
                >
                  <option value="">Choose a Service</option>
                  {services.map((service) => (
                    <option key={service.id} value={service.id}>
                      {service.title} - {service.description}
                    </option>
                  ))}
                </select>
              </div>

              <div className={`dropdown-container ${showDurationOptions ? 'show' : 'hide'}`}>
                {selectedService && (
                  <div className="form-group duration-dropdown">
                    <select
                      name="duration"
                      value={selectedDuration}
                      onChange={handleInputChange}
                      className="form-select full-width"
                      required
                    >
                      <option value="">Select Duration & Price</option>
                      {selectedService.pricing.map((option, index) => (
                        <option key={index} value={option.duration}>
                          {option.duration} - {option.price}
                        </option>
                      ))}
                    </select>
                  </div>
                )}
              </div>

              <div className={`dropdown-container ${showDateTimeFields ? 'show' : 'hide'}`}>
                {selectedService && selectedDuration && (
                  <div className="form-row datetime-fields">
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      className="form-input half-width"
                      required
                    />
                    <input
                      type="time"
                      name="time"
                      value={formData.time}
                      onChange={handleInputChange}
                      className="form-input half-width"
                      required
                    />
                  </div>
                )}
              </div>

              <div className={`submit-container ${showDateTimeFields ? 'show' : 'hide'}`}>
                <button type="submit" className="submit-button">
                  <span>Book Massage</span>
                  <div className="button-shine"></div>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {clientReady && showModal && (
        <SocialMediaModal 
          isOpen={showModal} 
          onClose={handleCloseModal}
          message={confirmationMessage}
        />
      )}
    </section>
  );
};

export default AppointmentBookingSection;