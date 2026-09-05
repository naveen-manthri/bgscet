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
        data={grievanceRedressalData.objectives}
      />

      <BulletSection
        data={grievanceRedressalData.procedure}
      />

      <div className="grievance-redressal-cell__button-row flex flex-center">
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSfuXjnNeEcz5q7yYjYU3ZcfA5WQNHI6yEIGhYGq9mHVRkLHzQ/viewform?pli=1"
          className="committee-btn grievance-redressal-cell__button flex flex-center"
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
