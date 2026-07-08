import "./BannerSection.css";
import whatsAppIcon from "../../assets/images/whatsapp-icon.png";
interface BannerSectionProps {
  image: string;
  title: string;
  whatsappLink: string;
}

function BannerSection({
  image,
  title,
  whatsappLink,
}: BannerSectionProps) {
  return (
    <section className="banner-section">
      <div className="banner-wrapper">
        <img
          src={image}
          alt={title}
          className="banner-image"
        />

        <div className="banner-overlay"></div>

        <h2 className="banner-title">{title}</h2>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="banner-whatsapp"
          aria-label="Chat with us on WhatsApp"
        >
          <img
            src={whatsAppIcon}
            alt="WhatsApp"
            className="banner-whatsapp-icon"
          />
        </a>
      </div>
    </section>
  );
}

export default BannerSection;