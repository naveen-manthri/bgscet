import { visionMission } from '../../data/aboutData';
import './VisionMission.css';

function VisionMission() {
  return (
    <section className="vision-mission-section" aria-labelledby="vision-mission-title">
      <div className="about-container vision-mission-grid">
        <div className="vision-image-panel">
          <img src={visionMission.image} alt="BGSCET students and faculty collaboration" loading="lazy" />
        </div>
        <div className="about-copy">
          <h2 id="vision-mission-title" className="about-title">
            {visionMission.title}
          </h2>
          <p className="about-description">{visionMission.description}</p>
        </div>
      </div>
    </section>
  );
}

export default VisionMission;
