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
          <h3 className="principal__name">{name}</h3>
          <div className="principal__description">
            {topParagraphs.map((paragraph, index) => (
              <p className="principal__paragraph" key={index}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <div className="principal__image-container">
          <img className="principal__image" src={image} alt={imageAlt} />
        </div>
      </div>

      <div className="principal__bottom">
        {remainingParagraphs.map((paragraph, index) => (
          <p className="principal__paragraph" key={index}>
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
};

export default Principal;
