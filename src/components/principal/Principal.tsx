import DepartmentSectionHeading from "../DepartmentSectionHeading/DepartmentSectionHeading";
import { principalData } from "./data";
import type { PrincipalData } from "./types";
import "./Principal.css";

const Principal = () => {
  const { name, topParagraphs, remainingParagraphs, image, imageAlt }: PrincipalData = principalData;

  return (
    <section className="principal">
      <DepartmentSectionHeading title="About Principal" className="department-section-heading--medium" />

      <div className="principal__top">
        <div className="principal__content">
          <figure className="principal__image-container image-hover-container">
            <img className="principal__image image-hover-scale" src={image} alt={imageAlt} />
            <figcaption className="guru-card__caption">{name}</figcaption>
          </figure>
          <div className="principal__description">
            {topParagraphs.map((paragraph, index) => (
              <p className="director__paragraph" key={index}>
                {paragraph}
              </p>
            ))}
          </div>

          <div className="principal__bottom">
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

export default Principal;
