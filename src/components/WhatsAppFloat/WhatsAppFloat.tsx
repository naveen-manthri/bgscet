import { FaWhatsapp } from 'react-icons/fa';
import { whatsappLink } from '../../data/homePageData';
import './WhatsAppFloat.css';

const WhatsAppFloat = () => {
  return (
    <a href={whatsappLink} target="_blank" rel="noreferrer" aria-label="Chat with BGSCET on WhatsApp" className="whatsapp-float">
      <FaWhatsapp aria-hidden="true" className="whatsapp-float__icon" />
    </a>
  );
};

export default WhatsAppFloat;
