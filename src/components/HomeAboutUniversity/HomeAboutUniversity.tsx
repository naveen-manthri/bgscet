import { useId } from 'react';
import { homeAboutUniversity } from '../../data/homePageData';
import AdmissionButton from "../../components/AdmissionButton/AdmissionButton";
import './HomeAboutUniversity.css';

function HomeAboutUniversity() {
  const badgeTextPathId = useId();

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
          <div className="home-about-university__badge" aria-label="Admission open by 2025 BGSCET">
            <svg className="home-about-university__badge-ring" viewBox="0 0 120 120" aria-hidden="true">
              <defs>
                <path
                  id={badgeTextPathId}
                  d="M60,60 m-44,0 a44,44 0 1,1 88,0 a44,44 0 1,1 -88,0"
                />
              </defs>
              <circle className="home-about-university__badge-fill" cx="60" cy="60" r="58" />
              <text className="home-about-university__badge-text">
                <textPath href={`#${badgeTextPathId}`} startOffset="0%">
                  ADMISSION OPEN BY 2026 • BGSCET •
                </textPath>
              </text>
            </svg>
          </div>
        </div>

        <div className="home-about-university__content">
          <h2 className="home-section-title" id="home-about-university-title">
            {homeAboutUniversity.title}
          </h2>
          <p>{homeAboutUniversity.description}</p>
          <button className="home-button" type="button">
            <AdmissionButton variant="primary" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default HomeAboutUniversity;
