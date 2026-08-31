import "../committeeCards/committeeCards.css";
import "./GrievanceRedressalCell.css";

import TitleDescription from "../careerDevelopment/TitleDescription/TitleDescription";
import BulletSection from "../careerDevelopment/BulletSection/BulletSection";
import { grievanceRedressalData } from "../../data/grievanceRedressalData";

const GrievanceRedressalCell = () => {
  return (
    <main className="grievance-redressal-cell">
      <TitleDescription
        data={grievanceRedressalData.overview}
        className="department-section-heading--medium"
      />

      <BulletSection
        data={grievanceRedressalData.process}
        className="department-section-heading--medium"
      />

      <BulletSection
        data={grievanceRedressalData.process}
        className="department-section-heading--medium"
      />

      <div className="grievance-redressal-cell__button-row">
        <a
          href="#"
          className="committee-btn grievance-redressal-cell__button"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click Here
        </a>
      </div>
    </main>
  );
};

export default GrievanceRedressalCell;
