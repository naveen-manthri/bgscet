import "./BannerSection.css";
interface BannerSectionProps {
  image: string;
  title: string;
}

function BannerSection({
  image,
  title,
}: BannerSectionProps) {
  return (
    <section className="banner-section">
        <img
          src={image}
          alt={title}
          className="banner-image"
        />
        <h2 className="banner-title">{title}</h2>
    </section>
  );
}

export default BannerSection;