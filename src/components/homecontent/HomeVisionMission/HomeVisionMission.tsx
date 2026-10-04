import { homeVisionMission } from '../../../data/homePageData';
import './HomeVisionMission.css';

function HomeVisionMission() {
  return (
    <section className="home-vision-mission" aria-labelledby="home-vision-mission">
          <div className="image-hover-container home-vision-mission__image-container">
            <img className="home-vision-mission__image image-hover-scale" src={homeVisionMission.image} alt="Sri Adichunchanagiri Mutt event" />
          </div>
          <div className="home-vision-mission__content flex flex-direction-column flex-one">
            <h2 className="home-section-title" id="home-vision-mission-title">
              {homeVisionMission.title}
            </h2>
            <p>{homeVisionMission.description}</p>
          </div>
        </section>
  );
}

export default HomeVisionMission;
