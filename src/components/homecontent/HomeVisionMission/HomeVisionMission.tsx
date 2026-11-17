import { homeVisionMission } from '../../../data/homePageData';
import './HomeVisionMission.css';

function HomeVisionMission() {
  const [vision, ...missionItems] = homeVisionMission.description.split('\n');

  return (
    <section className="home-vision-mission" aria-labelledby="home-vision-mission-title">
      <div className="home-vision-mission__inner">
        <div className="image-container-vision-mission image-hover-container">
          <img className="home-vision-mission__image image-hover-scale" src={homeVisionMission.image} alt="A swamiji inaugurating a campus event" loading="lazy" />


        </div>
        <div className="home-vision-mission__content">
          <div className="home-vision-mission__vision">
            <h2 id="home-vision-mission-title">Vision</h2>
            <p>{vision}</p>
          </div>
          <div className="home-vision-mission__mission">
            <h2>Mission</h2>
            <ul>
              {missionItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeVisionMission;
