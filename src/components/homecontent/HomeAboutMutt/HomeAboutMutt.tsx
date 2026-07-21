import { homeAboutMutt } from '../../../data/homePageData';
import './HomeAboutMutt.css';

function HomeAboutMutt() {
  return (
    <section className="home-about-mutt" aria-labelledby="home-about-mutt-title">
      <div className="home-about-mutt__inner">
        <article className="home-about-mutt__content">
          <h2 className="home-section-title home-section-title--left" id="home-about-mutt-title">
            {homeAboutMutt.title}
          </h2>
          <p>{homeAboutMutt.description}</p>
        </article>

        <img className="home-about-mutt__image" src={homeAboutMutt.image} alt="Sri Adichunchanagiri Mutt event" />
      </div>
    </section>
  );
}

export default HomeAboutMutt;
