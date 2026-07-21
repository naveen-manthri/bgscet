import "./HomeCampusLife.css";

import SectionHeading from "../../common/SectionHeading";

import {
  campusLife,
  campusLifeGalleryLink,
} from "../../../data/campusLifeData";

function HomeCampusLife() {
  return (
    <section className="home-campus-life section-space">
      <div className="container">
        <SectionHeading
          subtitle="Campus Life"
          title="A Campus That"
          titleSecondLine="Lives After Dark."
          underlineFitContent
          center
        />

        <div className="campus-life-grid">
          {campusLife.map((item, index) => (
            <article
              key={item.id}
              className={`campus-life-card campus-life-card-${index + 1}`}
            >
              <img
                src={item.image}
                alt={item.alt}
                loading="lazy"
              />
            </article>
          ))}
        </div>

        <div className="campus-life-button-wrapper">
          <a
            href={campusLifeGalleryLink}
            className="campus-life-button"
          >
            View Full Gallery
          </a>
        </div>
      </div>
    </section>
  );
}

export default HomeCampusLife;