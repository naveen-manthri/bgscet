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
      {/* <div className="banner-wrapper"> */}
        <img
          src={image}
          alt={title}
          className="banner-image"
        />

        {/* <div className="banner-overlay"></div> */}

        <h2 className="banner-title">{title}</h2>
      {/* </div> */}
    </section>
  );
}

export default BannerSection;