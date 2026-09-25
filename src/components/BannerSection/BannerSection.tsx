import "./BannerSection.css";
interface BannerSectionProps {
  image: string;
  title: string;
  homeHero?: boolean;
}

function BannerSection({
  image,
  title,
  homeHero = false,
}: BannerSectionProps) {
  return (
    <section className="banner-section">
        <img src={image} alt={title} className="banner-image" />
        {homeHero ? (
          <div className="home-hero__content">
            <h1 className="home-hero__title">
              <span className="home-hero__title-line home-hero__title-line--orange">Building Engineers.</span>
              <span className="home-hero__title-line home-hero__title-line--deep">Shaping the Future.</span>
            </h1>
            <p className="home-hero__description">
              Empowering future engineers with industry focused education, innovation, and hands-on learning.
            </p>
          </div>
        ) : (
          <h2 className="banner-title flex flex-center">{title}</h2>
        )}
    </section>
  );
}

export default BannerSection;