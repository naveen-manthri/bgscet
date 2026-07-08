import { homeVisionMission } from '../../data/homePageData';
import './HomeVisionMission.css';

function HomeVisionMission() {
  return (
    <section className="home-vision-mission" aria-labelledby="home-vision-mission-title">
      <div className="home-vision-mission__inner">
        <img
          className="home-vision-mission__image"
          src={homeVisionMission.image}
          alt="BGSCET faculty and students"
        />

        <article className="home-vision-mission__content">
          <h2 className="home-section-title home-section-title--left" id="home-vision-mission-title">
            {homeVisionMission.title}
          </h2>
          <p>{homeVisionMission.description}</p>
        </article>
      </div>
    </section>
  );
}

export default HomeVisionMission;
