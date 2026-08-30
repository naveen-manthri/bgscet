import "./LabSection.css";

import type { DepartmentLabSection } from "../../../types/ugprograms";

const LabSection = ({ data }: { data: DepartmentLabSection }) => (
  <section className="department-lab-section">
    <img className="department-lab-section__image" src={data.image} alt="Physics department laboratory" />
    {data.description ? <p className="department-lab-section__description">{data.description}</p> : null}
  </section>
);

export default LabSection;
