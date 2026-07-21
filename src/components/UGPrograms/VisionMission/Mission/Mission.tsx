import DepartmentSectionHeading from "../../../DepartmentSectionHeading/DepartmentSectionHeading";

import type { DepartmentMission } from "../../../../types/ugprograms";

interface MissionProps {
  data: DepartmentMission;
}

const Mission = ({ data }: MissionProps) => (
  <div className="vision-mission__section">
    <DepartmentSectionHeading title={data.title} />
    <ul className="vision-mission__list">
      {data.points.map((point) => (
        <li key={point} className="vision-mission__item">{point}</li>
      ))}
    </ul>
  </div>
);

export default Mission;
