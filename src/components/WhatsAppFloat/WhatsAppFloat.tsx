import { useEffect, useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { whatsappLink } from '../../data/homePageData';
import './WhatsAppFloat.css';

const WhatsAppFloat = () => {
  const [isAnchoredToBanner, setIsAnchoredToBanner] = useState(true);

  useEffect(() => {
    const updatePosition = () => {
      const banner = document.querySelector('.banner-section');
      const bannerHeight = banner ? banner.getBoundingClientRect().height : Math.min(window.innerHeight * 0.7, 620);

      setIsAnchoredToBanner(window.scrollY < bannerHeight - 120);
    };

    updatePosition();
    window.addEventListener('scroll', updatePosition, { passive: true });
    window.addEventListener('resize', updatePosition);

    return () => {
      window.removeEventListener('scroll', updatePosition);
      window.removeEventListener('resize', updatePosition);
    };
  }, []);

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with BGSCET on WhatsApp"
      className={`whatsapp-float ${isAnchoredToBanner ? 'whatsapp-float--anchored' : ''}`}
    >
      <FaWhatsapp aria-hidden="true" className="whatsapp-float__icon" />
    </a>
  );
};

export default WhatsAppFloat;
