import React from 'react';
import { Instagram, MessageCircle, Music } from 'lucide-react';
import './SocialMediaModal.css';

interface SocialMediaModalProps {
  isOpen: boolean;
  onClose: () => void;
  formData: {
    name: string;
    phone: string;
    email: string;
    service: string;
    date: string;
    month: string;
    day: string;
  };
}

const SocialMediaModal: React.FC<SocialMediaModalProps> = ({ isOpen, onClose, formData }) => {
  // Format the appointment message
  const formatAppointmentMessage = () => {
    const serviceNames: Record<string, string> = {
      massage: 'Deep Tissue Massage',
      facial: 'Rejuvenating Facial', 
      aromatherapy: 'Aromatherapy Session',
      couples: 'Couples Retreat',
      wellness: 'Wellness Package'
    };

    const serviceName = formData.service ? (serviceNames[formData.service] || formData.service) : 'Not specified';
    
    // Format date for better readability if available
    const formattedDate = formData.date ? new Date(formData.date).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }) : 'Not specified';

    return `Hello! I would like to book an appointment with you. Here are my info:

👤 Name: ${formData.name || 'Not specified'}
📞 Phone: ${formData.phone || 'Not specified'}
📧 Email: ${formData.email || 'Not specified'}
💆‍♀️ Service: ${serviceName}
📅 Preferred Date: ${formattedDate}
📆 Alternate Date: ${formData.month}/${formData.day}

Please confirm my appointment. Thank you!`;
  };

  const appointmentMessage = formatAppointmentMessage();
  
  // Social media links with message handling
  const socialMediaLinks = {
    whatsapp: {
      url: `https://wa.me/2349013067278?text=${encodeURIComponent(appointmentMessage)}`,
      handler: () => window.open(`https://wa.me/2349013067278?text=${encodeURIComponent(appointmentMessage)}`, '_blank')
    },
    instagram: {
      url: 'https://instagram.com/zeedaa_coco',
      handler: async () => {
        try {
          // Instagram DM deep link (works on mobile)
          const instagramUrl = `https://www.instagram.com/direct/new/?text=${encodeURIComponent(appointmentMessage)}`;
          window.open(instagramUrl, '_blank');
          
          // Fallback: Copy to clipboard if the deep link doesn't work
          await navigator.clipboard.writeText(appointmentMessage);
          showClipboardNotification();
        } catch (err) {
          console.error('Failed to open Instagram:', err);
          // Fallback to regular Instagram URL
          window.open('https://instagram.com/zeedaa_coco', '_blank');
          await navigator.clipboard.writeText(appointmentMessage);
          showClipboardNotification();
        }
      }
    },
    tiktok: {
      url: 'https://tiktok.com/@babylee_thevoice',
      handler: async () => {
        try {
          // TikTok doesn't support direct messaging from web, so we'll copy to clipboard
          await navigator.clipboard.writeText(appointmentMessage);
          showClipboardNotification();
          window.open('https://tiktok.com/@babylee_thevoice', '_blank');
        } catch (err) {
          console.error('Failed to copy to clipboard:', err);
          window.open('https://tiktok.com/@babylee_thevoice', '_blank');
        }
      }
    }
  };

  const showClipboardNotification = () => {
    const notification = document.createElement('div');
    notification.className = 'clipboard-notification';
    notification.textContent = 'Message copied to clipboard! Please paste it in your message.';
    document.body.appendChild(notification);
    
    setTimeout(() => {
      document.body.removeChild(notification);
    }, 3000);
  };

  const handleSocialMediaClick = async (platform: keyof typeof socialMediaLinks) => {
    await socialMediaLinks[platform].handler();
    onClose();
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className={`modal-overlay ${isOpen ? 'modal-open' : ''}`} onClick={handleOverlayClick}>
      <div className={`modal-container ${isOpen ? 'modal-show' : ''}`}>
        <button className="modal-close" onClick={onClose}>
          ×
        </button>
        
        <div className="modal-header">
          <div className="modal-icon-wrapper">
            <div className="modal-success-icon">✓</div>
          </div>
          <h3 className="modal-title">Appointment Request Received!</h3>
          <p className="modal-subtitle">Choose your preferred social media to connect with us</p>
        </div>

        <div className="social-media-grid">
          <button 
            className="social-media-option whatsapp"
            onClick={() => handleSocialMediaClick('whatsapp')}
          >
            <div className="social-icon-wrapper">
              <MessageCircle size={32} />
            </div>
            <span className="social-label">WhatsApp</span>
            <div className="social-description">Message with appointment details</div>
          </button>

          <button 
            className="social-media-option instagram"
            onClick={() => handleSocialMediaClick('instagram')}
          >
            <div className="social-icon-wrapper">
              <Instagram size={32} />
            </div>
            <span className="social-label">Instagram</span>
            <div className="social-description">Open DM with your details</div>
          </button>

          <button 
            className="social-media-option tiktok"
            onClick={() => handleSocialMediaClick('tiktok')}
          >
            <div className="social-icon-wrapper">
              <Music size={32} />
            </div>
            <span className="social-label">TikTok</span>
            <div className="social-description">Copy details & message us</div>
          </button>
        </div>

        <div className="modal-footer">
          <p className="footer-text">We&apos;ll contact you within 24 hours to confirm your appointment</p>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaModal;