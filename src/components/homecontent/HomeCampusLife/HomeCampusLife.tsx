import "./HomeCampusLife.css";

import SectionHeading from "../../common/SectionHeading";

import {
  campusLife,
  campusLifeGalleryLink,
} from "../../../data/campusLifeData";

function HomeCampusLife() {
  return (
    <section className="home-campus-life section-space">
      <div className="flex flex-direction-column flex-align-center container">
        <SectionHeading subtitle="Campus Life" title="A Campus That" titleSecondLine="Lives After Dark." underlineFitContent center />

        <div className="campus-life-grid">
          {campusLife.map((item, index) => {
            if (index === 0) {
              return (
                <div key={item.id} className="campus-life-card campus-life-card-1">
                  <iframe src="https://www.youtube.com/embed/fKuqEGjjWc0?rel=0"  title="BGSCET campus life video" allowFullScreen style={{ width: '100%', height: '100%', border: 0, display: 'block' }} />
                </div>
              );
            }

            return (
              <article key={item.id} className={`campus-life-card campus-life-card-${index + 1}`}>
                <img src={item.image} alt={item.alt} loading="lazy" />
              </article>
            );
          })}
        </div>

        <div className="campus-life-button-wrapper flex flex-center">
          <a  href={campusLifeGalleryLink} className="campus-life-button flex inline-flex-center" >  View Full Gallery </a>
        </div>
      </div>
    </section>
  );
}

export default HomeCampusLife;