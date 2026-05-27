import { Link } from 'react-router-dom';
import { heroSlides } from '../../data/homeData';

function HeroCarousel() {
  return (
    <section className="hero-carousel-section">
      <div id="heroCarousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
        <div className="carousel-indicators">
          {heroSlides.map((slide, index) => (
            <button
              key={slide.id}
              type="button"
              data-bs-target="#heroCarousel"
              data-bs-slide-to={index}
              className={index === 0 ? 'active' : ''}
              aria-current={index === 0 ? 'true' : undefined}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>

        <div className="carousel-inner">
          {heroSlides.map((slide, index) => (
            <div
              key={slide.id}
              className={`carousel-item ${index === 0 ? 'active' : ''}`}
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="hero-overlay" />
              <div className="container h-100 d-flex align-items-center">
                <div className="row w-100">
                  <div className="col-lg-8">
                    <div className="hero-content">
                      <span className="hero-subtitle d-inline-block mb-3">{slide.subtitle}</span>
                      <h2 className="hero-title mb-3">{slide.title}</h2>
                      <p className="hero-description mb-4">{slide.description}</p>
                      <div className="hero-actions d-flex flex-wrap gap-2 gap-sm-3">
                        <Link to="/admissions" className="btn btn-brand-primary btn-lg">
                          Apply Now
                        </Link>
                        <Link to="/departments" className="btn btn-brand-outline btn-lg">
                          Explore Departments
                        </Link>
                        <Link to="/contact" className="btn btn-light btn-lg text-dark">
                          Contact Us
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
}

export default HeroCarousel;
