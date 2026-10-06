import "./BannerSection.css";
import { useEffect, useState } from "react";
import LatestNews from "../LatestNews/LatestNews";

interface BannerSlide {
  image: string;
  alt: string;
}

interface BannerSectionProps {
  image: string;
  title: string;
  homeHero?: boolean;
  homeHeroSlides?: BannerSlide[];
  fullImage?: boolean;
}

function BannerSection({
  image,
  title,
  homeHero = false,
  homeHeroSlides,
  fullImage = false,
}: BannerSectionProps) {
  const slides = homeHeroSlides?.length
    ? homeHeroSlides
    : [{ image, alt: title }];
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [isLatestNewsOpen, setIsLatestNewsOpen] = useState(false);

  useEffect(() => {
    if (!homeHero || slides.length < 2) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setActiveSlideIndex((currentIndex) => (currentIndex + 1) % slides.length);
    }, 5000);

    return () => window.clearInterval(intervalId);
  }, [homeHero, slides.length]);

  return (
    <section className={`banner-section${fullImage ? " banner-section--full-image" : ""}`}>
        {homeHero ? (
          <>
            <div className="home-hero__carousel">
              {slides.map((slide, index) => (
                <img  key={slide.image} src={slide.image}alt={slide.alt}  className={`banner-image home-hero__slide${index === activeSlideIndex ? ' home-hero__slide--active' : ''}`} aria-hidden={index !== activeSlideIndex} />
              ))}
            </div>
            {activeSlideIndex === 0 && (
              <>
                <div className="home-hero__text-wrap">
                  <div className="home-hero__content">
                    <h1 className="home-hero__title">
                      <span className="home-hero__title-line home-hero__title-line--orange">Building Engineers.</span>
                      <span className="home-hero__title-line home-hero__title-line--deep">Shaping the Future.</span>
                    </h1>
                    <p className="home-hero__description">
                      Empowering future engineers with industry focused education, innovation, and hands-on learning.
                    </p>
                  </div>
                  <nav className="home-hero__actions" aria-label="Homepage banner actions">
                    <a className="home-hero__action home-hero__action--apply" href="https://docs.google.com/forms/d/13meA-3MxbPAW-cDO2Z4xKnQmR49Q6h4pQwFgd6rgu0E/closedform">
                      Apply Now
                    </a>
                    <button className="home-hero__action home-hero__action--news" type="button" onClick={() => setIsLatestNewsOpen(true)}>
                      Latest News
                    </button>
                  </nav>
                </div>
              </>
            )}
            <LatestNews isOpen={isLatestNewsOpen} onClose={() => setIsLatestNewsOpen(false)} />
            {slides.length > 1 && (
              <div className="home-hero__controls"  role="group" aria-label="Homepage banner carousel controls" >
                <button  className="home-hero__control" type="button" aria-label="Previous banner" onClick={() => setActiveSlideIndex((activeSlideIndex - 1 + slides.length) % slides.length)} >
                  &#8249;
                </button>
                <div className="home-hero__indicators">
                  {slides.map((slide, index) => (
                    <button  key={slide.image} className={`home-hero__indicator${index === activeSlideIndex ? ' home-hero__indicator--active' : ''}`} type="button" aria-label={`Show banner ${index + 1}`} aria-pressed={index === activeSlideIndex} onClick={() => setActiveSlideIndex(index)} />
                  ))}
                </div>
                <button  className="home-hero__control" type="button" aria-label="Next banner" onClick={() => setActiveSlideIndex((activeSlideIndex + 1) % slides.length)} >
                  &#8250;
                </button>
              </div>
            )}
          </>
        ) : (
          <>
            <img src={image} alt={title} className="banner-image" />
            <h2 className="banner-title flex flex-center">{title}</h2>
          </>
        )}
    </section>
  );
}

export default BannerSection;
