import "./DepartementVisionMission.css";

import DepartmentSectionHeading from "../DepartmentSectionHeading/DepartmentSectionHeading";

import { DepartementvisionMission } from "../../data/cseDepartment";

const VisionMission = () => {
  return (
    <section className="vision-mission">
      <div className="vision-mission__section">
        <DepartmentSectionHeading title={DepartementvisionMission.vision.title} />

        <p className="vision-mission__text">
          {DepartementvisionMission.vision.description}
        </p>
      </div>

      <div className="vision-mission__section">
        <DepartmentSectionHeading title={DepartementvisionMission.mission.title} />

        <ul className="vision-mission__list">
          {DepartementvisionMission.mission.points.map((point) => (
            <li key={point} className="vision-mission__item">
              {point}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default VisionMission;