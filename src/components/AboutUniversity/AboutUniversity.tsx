import { Link } from 'react-router-dom';
import { aboutUniversity } from '../../data/aboutData';
import './AboutUniversity.css';

function AboutUniversity() {
  return (
    <section className="about-university-section" aria-labelledby="about-university-title">
      <div className="about-container about-university-grid">
        <div className="about-university-media" aria-label="BGSCET campus and community">
          <img
            className="about-university-image about-university-image-primary"
            src={aboutUniversity.images.primary}
            alt="BGSCET campus building"
            loading="eager"
          />
          <img
            className="about-university-image about-university-image-secondary"
            src={aboutUniversity.images.secondary}
            alt="BGSCET academic community"
            loading="eager"
          />
          <div className="about-circle-badge" aria-hidden="true">
            <span>BGS BGSCET</span>
          </div>
        </div>

        <div className="about-copy">
          <h1 id="about-university-title" className="about-title about-title-accent">
            {aboutUniversity.title}
          </h1>
          <p className="about-description">{aboutUniversity.description}</p>
          <Link className="admission-button" to="/admissions">
            {aboutUniversity.buttonText}
          </Link>
        </div>
      </div>
    </section>
  );
}

export default AboutUniversity;
