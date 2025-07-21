import React from 'react';
import { Instagram, MessageCircle, Music } from 'lucide-react';
import './SocialMediaModal.css';

interface SocialMediaModalProps {
  isOpen: boolean;
  onClose: () => void;
  message: string;
}

const SocialMediaModal: React.FC<SocialMediaModalProps> = ({ isOpen, onClose, message }) => {
  
  // Social media links with message handling
  const socialMediaLinks = {
    whatsapp: {
      url: `https://wa.me/2349013067278?text=${encodeURIComponent(message)}`,
      handler: () => window.open(`https://wa.me/2349013067278?text=${encodeURIComponent(message)}`, '_blank')
    },
    instagram: {
      url: 'https://instagram.com/zeedaa_coco',
      handler: async () => {
        try {
          // Instagram DM deep link (works on mobile)
          const instagramUrl = `https://www.instagram.com/direct/new/?text=${encodeURIComponent(message)}`;
          window.open(instagramUrl, '_blank');
          
          // Fallback: Copy to clipboard if the deep link doesn't work
          await navigator.clipboard.writeText(message);
          showClipboardNotification();
        } catch (err) {
          console.error('Failed to open Instagram:', err);
          // Fallback to regular Instagram URL
          window.open('https://instagram.com/zeedaa_coco', '_blank');
          await navigator.clipboard.writeText(message);
          showClipboardNotification();
        }
      }
    },
    tiktok: {
      url: 'https://tiktok.com/@babylee_thevoice',
      handler: async () => {
        try {
          // TikTok doesn't support direct messaging from web, so we'll copy to clipboard
          await navigator.clipboard.writeText(message);
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
      if (document.body.contains(notification)) {
        document.body.removeChild(notification);
      }
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
            <div className="social-content">
              <span className="social-label">WhatsApp</span>
              <div className="social-description">Message with appointment details</div>
            </div>
            <div className="social-arrow">→</div>
          </button>

          <button 
            className="social-media-option instagram"
            onClick={() => handleSocialMediaClick('instagram')}
          >
            <div className="social-icon-wrapper">
              <Instagram size={32} />
            </div>
            <div className="social-content">
              <span className="social-label">Instagram</span>
              <div className="social-description">Open DM with your details</div>
            </div>
            <div className="social-arrow">→</div>
          </button>

          <button 
            className="social-media-option tiktok"
            onClick={() => handleSocialMediaClick('tiktok')}
          >
            <div className="social-icon-wrapper">
              <Music size={32} />
            </div>
            <div className="social-content">
              <span className="social-label">TikTok</span>
              <div className="social-description">Copy details & message us</div>
            </div>
            <div className="social-arrow">→</div>
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