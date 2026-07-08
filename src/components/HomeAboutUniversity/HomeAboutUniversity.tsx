import { homeAboutUniversity } from '../../data/homePageData';
import './HomeAboutUniversity.css';

function HomeAboutUniversity() {
  return (
    <section className="home-about-university" aria-labelledby="home-about-university-title">
      <div className="home-about-university__inner">
        <div className="home-about-university__media" aria-label="University campus photos">
          <img
            className="home-about-university__image home-about-university__image--front"
            src={homeAboutUniversity.imageOne}
            alt="BGSCET ceremony"
          />
          <img
            className="home-about-university__image home-about-university__image--back"
            src={homeAboutUniversity.imageTwo}
            alt="BGSCET campus building"
          />
          <div className="home-about-university__badge" aria-label="Innovation driven excellence">
            <img src={homeAboutUniversity.badgeImage} alt="" aria-hidden="true" />
            <span>Innovation Driven Excellence</span>
          </div>
        </div>

        <div className="home-about-university__content">
          <h2 className="home-section-title" id="home-about-university-title">
            {homeAboutUniversity.title}
          </h2>
          <p>{homeAboutUniversity.description}</p>
          <button className="home-button" type="button">
            For Admission Click Here
          </button>
        </div>
      </div>
    </section>
  );
}

export default HomeAboutUniversity;
