import DepartmentSectionHeading from "../../../DepartmentSectionHeading/DepartmentSectionHeading";

import type { DepartmentVision } from "../../../../types/ugprograms";

interface VisionProps {
  data: DepartmentVision;
}

const Vision = ({ data }: VisionProps) => (
  <div className="vision-mission__section">
    <DepartmentSectionHeading title={data.title} />
    <p className="vision-mission__text">{data.description}</p>
  </div>
);

export default Vision;
