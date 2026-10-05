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
          <h3 className="director__name">{name}</h3>
          {topParagraphs.map((paragraph, index) => (
            <p className="director__paragraph" key={index}>
              {paragraph}
            </p>
          ))}
        </div>

        <div className="director__image-wrapper">
          <img className="director__image" src={image} alt={imageAlt} />
        </div>
      </div>

      <div className="director__bottom">
        {remainingParagraphs.map((paragraph, index) => (
          <p className="director__paragraph" key={index}>
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
};

export default Director;
