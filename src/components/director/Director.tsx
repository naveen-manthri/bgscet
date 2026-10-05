import DepartmentSectionHeading from "../DepartmentSectionHeading/DepartmentSectionHeading";
import { directorData } from "./data";
import type { DirectorData } from "./types";
import "./Director.css";

const Director = () => {
  const {
    name,
    topParagraphs,
    remainingParagraphs,
    image,
    imageAlt,
  }: DirectorData = directorData;

  return (
    <section className="director">
      <DepartmentSectionHeading title="About Director" className="department-section-heading--medium" />

      <div className="director__top">
        <div className="director__content">
          <figure className="director__image-wrapper image-hover-container">
            <img className="director__image image-hover-scale" src={image} alt={imageAlt} />
            <figcaption className="guru-card__caption">{name}</figcaption>
          </figure>
          <div className="director__description">
            {topParagraphs.map((paragraph, index) => (
              <p className="director__paragraph" key={index}>
                {paragraph}
              </p>
            ))}
          </div>

          <div className="director__bottom">
            {remainingParagraphs.map((paragraph, index) => (
              <p className="director__paragraph" key={index}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Director;
