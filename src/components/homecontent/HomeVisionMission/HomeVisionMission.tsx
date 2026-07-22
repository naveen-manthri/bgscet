import { homeVisionMission } from '../../../data/homePageData';
import './HomeVisionMission.css';

function HomeVisionMission() {
  return (
    <section className="home-vision-mission" aria-labelledby="home-vision-mission">
          <img className="home-vision-mission__image" src={homeVisionMission.image} alt="Sri Adichunchanagiri Mutt event" />
          <div className="home-vision-mission__content">
            <h2 className="home-section-title" id="home-vision-mission-title">
              {homeVisionMission.title}
            </h2>
            <p>{homeVisionMission.description}</p>
          </div>
        </section>
  );
}

export default HomeVisionMission;
