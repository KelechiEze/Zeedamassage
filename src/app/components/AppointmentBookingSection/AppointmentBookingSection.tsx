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
    day: '30',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] =
    useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/book-appointment', {
        method: 'POST',
        mode: 'cors',                    // ✨ NEW: tell the browser this is a CORS request
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          phone: '',
          email: '',
          service: '',
          date: '',
          month: '08',
          day: '30',
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="appointment-booking-section">
      <div className="booking-container">
        {/* Left Side – Image */}
        <div className="image-section">
          <img
            src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            alt="Relaxing spa treatment"
            className="spa-image"
          />
        </div>

        {/* Right Side – Form */}
        <div className="form-section">
          <div className="form-content">
            {/* Icon and Heading */}
            <div className="header-section">
              <Flower2 className="mandala-icon" size={48} />
              <h2 className="booking-title">Book an Appointment</h2>
              <p className="booking-subtitle">
                Your life is waiting. Fast, long‑lasting relief is nearby.
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

              {/* Phone & Email */}
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

              {/* Service */}
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

              {/* Date */}
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
                  {Array.from({ length: 12 }, (_, i) => (
                    <option key={i + 1} value={String(i + 1).padStart(2, '0')}>
                      {String(i + 1).padStart(2, '0')}
                    </option>
                  ))}
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

              {/* Submit */}
              <button type="submit" className="submit-button" disabled={isSubmitting}>
                {isSubmitting ? 'Booking...' : 'Book Massage'}
              </button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="success-message">
                  Appointment booked successfully! We’ll contact you shortly.
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="error-message">
                  Something went wrong. Please try again later.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentBookingSection;
