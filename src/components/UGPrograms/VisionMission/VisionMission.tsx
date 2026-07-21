import "./UGVisionMission.css";

import Vision from "./Vision/Vision";
import Mission from "./Mission/Mission";

import type { DepartmentVisionMission } from "../../../types/ugprograms";

interface VisionMissionProps {
  data: DepartmentVisionMission;
}

const VisionMission = ({ data }: VisionMissionProps) => (
  <section className="vision-mission">
    <Vision data={data.vision} />
    <Mission data={data.mission} />
  </section>
);

export default VisionMission;
