'use client';

import React, { useState } from 'react';
import { Flower2 } from 'lucide-react';
import './AppointmentBookingSection.css';

const AppointmentBookingSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    date: '',
    month: '08',
    day: '30'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Booking submitted:', formData);
    // Handle form submission logic here
  };

  return (
    <section id="contact" className="appointment-booking-section">
      <div className="booking-container">
        {/* Left Side - Image */}
        <div className="image-section">
          <img 
            src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            alt="Relaxing spa treatment"
            className="spa-image"
          />
        </div>

        {/* Right Side - Form */}
        <div className="form-section">
          <div className="form-content">
            {/* Icon and Header */}
            <div className="header-section">
              <Flower2 className="mandala-icon" size={48} />
              <h2 className="booking-title">Book an Appointment</h2>
              <p className="booking-subtitle">
                Your life is waiting. Fast, long-lasting relief is nearby.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="booking-form">
              {/* Full Name */}
              <div className="form-group">
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

              {/* Phone and Email Row */}
              <div className="form-row">
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

              {/* Service Selection */}
              <div className="form-group">
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="form-select full-width"
                  required
                >
                  <option value="">Choose a Service</option>
                  <option value="massage">Deep Tissue Massage</option>
                  <option value="facial">Rejuvenating Facial</option>
                  <option value="aromatherapy">Aromatherapy Session</option>
                  <option value="couples">Couples Retreat</option>
                  <option value="wellness">Wellness Package</option>
                </select>
              </div>

              {/* Date Selection Row */}
              <div className="form-row">
                <input
                  type="date"
                  name="date"
                  placeholder="Select Date"
                  value={formData.date}
                  onChange={handleInputChange}
                  className="form-input date-input"
                  required
                />
                <select
                  name="month"
                  value={formData.month}
                  onChange={handleInputChange}
                  className="form-select month-select"
                >
                  <option value="01">01</option>
                  <option value="02">02</option>
                  <option value="03">03</option>
                  <option value="04">04</option>
                  <option value="05">05</option>
                  <option value="06">06</option>
                  <option value="07">07</option>
                  <option value="08">08</option>
                  <option value="09">09</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                </select>
                <select
                  name="day"
                  value={formData.day}
                  onChange={handleInputChange}
                  className="form-select day-select"
                >
                  {Array.from({ length: 31 }, (_, i) => (
                    <option key={i + 1} value={String(i + 1).padStart(2, '0')}>
                      {String(i + 1).padStart(2, '0')}
                    </option>
                  ))}
                </select>
              </div>

              {/* Submit Button */}
              <button type="submit" className="submit-button">
                Book Massage
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentBookingSection;
