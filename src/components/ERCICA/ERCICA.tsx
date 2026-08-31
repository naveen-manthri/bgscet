import "./ERCICA.css";
import DepartmentSectionHeading from "../DepartmentSectionHeading/DepartmentSectionHeading";

import {
  ercicaWelcomeData,
  bestPaperAwardData,
} from "../../data/ercicaPage";

const ERCICA = () => {
  return (
    <section className="ercica">
      <div className="ercica__container">
        <section className="ercica__section">
          <DepartmentSectionHeading title={ercicaWelcomeData.title} className="department-section-heading--medium"/>

          <div className="ercica__content">
            {ercicaWelcomeData.description.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </section>

        <section className="ercica__section">
          <DepartmentSectionHeading title={bestPaperAwardData.title} className="department-section-heading--medium" />

          <div className="ercica__content">
            {bestPaperAwardData.description.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
};

export default ERCICA;