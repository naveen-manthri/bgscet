import { aboutMutt } from '../../data/aboutData';
import './AboutMutt.css';

function AboutMutt() {
  return (
    <section className="about-mutt-section" aria-labelledby="about-mutt-title">
      <div className="about-container about-two-column">
        <div className="about-copy">
          <h2 id="about-mutt-title" className="about-title">
            {aboutMutt.title}
          </h2>
          <p className="about-description">{aboutMutt.description}</p>
        </div>
        <div className="about-image-panel">
          <img src={aboutMutt.image} alt="Sri Adichunchanagiri Mutt event" loading="lazy" />
        </div>
      </div>
    </section>
  );
}

export default AboutMutt;
