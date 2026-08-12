import "./Faculty.css";

import TechnicalFacultyCards from "./TechnicalFacultyCards/TechnicalFacultyCards";

import type { FacultyMember } from "../../../types/ugprograms";

interface TechnicalFacultyProps {
  data: FacultyMember[];
  title?: string;
}

const TechnicalFaculty = ({ data, title = "Technical Faculty" }: TechnicalFacultyProps) => (
  <section className="department-faculty TechnicalFaculty">
    <TechnicalFacultyCards data={data} title={title} />
  </section>
);

export default TechnicalFaculty;