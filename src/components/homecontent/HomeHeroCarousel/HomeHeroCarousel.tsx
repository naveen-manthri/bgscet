import { useEffect, useState } from 'react';
import { homeHeroSlides, whatsappLink } from '../../../data/homePageData';
import './HomeHeroCarousel.css';
import WhatsAppIcon from "../../assets/images/whatsapp-icon.png";

function HomeHeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % homeHeroSlides.length);
    }, 4200);

    return () => window.clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };

  const goToPrevious = () => {
    setActiveIndex((current) => (current === 0 ? homeHeroSlides.length - 1 : current - 1));
  };

  const goToNext = () => {
    setActiveIndex((current) => (current + 1) % homeHeroSlides.length);
  };

  return (
    <section className="home-hero" aria-label="Campus highlights">
      <div className="home-hero__carousel">
        <div className="home-hero__track">
          {homeHeroSlides.map((slide, index) => (
            <article className={`home-hero__slide${index === activeIndex ? ' is-active' : ''}`} key={slide.id}>
              <img className="home-hero__image" src={slide.image} alt={slide.title} />
            </article>
          ))}
        </div>

        <button className="home-hero__control home-hero__control--prev" type="button" onClick={goToPrevious}>
          <span aria-hidden="true">‹</span>
          <span className="home-hero__sr">Previous slide</span>
        </button>

        <button className="home-hero__control home-hero__control--next" type="button" onClick={goToNext}>
          <span aria-hidden="true">›</span>
          <span className="home-hero__sr">Next slide</span>
        </button>

        <div className="home-hero__dots" aria-label="Hero carousel navigation">
          {homeHeroSlides.map((slide, index) => (
            <button
              className={`home-hero__dot${index === activeIndex ? ' is-active' : ''}`}
              type="button"
              key={slide.id}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === activeIndex}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>

        <a className="home-hero__whatsapp" href={whatsappLink} aria-label="Contact BGSCET on WhatsApp">
          {/* <span aria-hidden="true">wa</span> */}
          <img src={WhatsAppIcon} alt="WhatsApp" className="home-hero__whatsapp-icon" />
        </a>
      </div>

      
    </section>
  );
}

export default HomeHeroCarousel;
