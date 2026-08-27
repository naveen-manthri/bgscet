import "./UGVisionMission.css";

import Vision from "./Vision/Vision";
import Mission from "./Mission/Mission";

import type { DepartmentVisionMission } from "../../../types/ugprograms";

interface VisionMissionProps {
  data: DepartmentVisionMission;
  columns?: boolean;
}

const VisionMission = ({ data, columns = false }: VisionMissionProps) => (
  <section className={`vision-mission${columns ? " vision-mission--columns" : ""}`}>
    <Vision data={data.vision} />
    <Mission data={data.mission} />
  </section>
);

export default VisionMission;
