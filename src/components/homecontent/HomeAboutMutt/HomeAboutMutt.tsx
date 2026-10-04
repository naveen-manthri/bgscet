import { homeAboutMutt } from '../../../data/homePageData';
import './HomeAboutMutt.css';

function HomeAboutMutt() {
  return (
    <section className="home-about-mutt" aria-labelledby="home-about-mutt-title">
      <div className="home-about-mutt__content flex flex-direction-column flex-one">
        <h2 className="home-section-title" id="home-about-mutt-title">
          {homeAboutMutt.title}
        </h2>
        <p>{homeAboutMutt.description}</p>
      </div>
      <div className="image-hover-container home-about-mutt__image-container">
        <img className="home-about-mutt__image image-hover-scale" src={homeAboutMutt.image} alt="Sri Adichunchanagiri Mutt event" />
      </div>
    </section>
  );
}

export default HomeAboutMutt;
