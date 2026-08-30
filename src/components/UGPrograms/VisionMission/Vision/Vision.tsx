import DepartmentSectionHeading from "../../../DepartmentSectionHeading/DepartmentSectionHeading";

import type { DepartmentVision } from "../../../../types/ugprograms";

interface VisionProps {
  data: DepartmentVision;
  asList?: boolean;
}

const Vision = ({ data, asList = false }: VisionProps) => (
  <div className="vision-mission__section">
    <DepartmentSectionHeading title={data.title} className="department-section-heading--medium" />
    {asList ? (
      <ul className="vision-mission__list">
        <li className="vision-mission__item">{data.description}</li>
      </ul>
    ) : (
      <p className="vision-mission__text">{data.description}</p>
    )}
  </div>
);

export default Vision;
