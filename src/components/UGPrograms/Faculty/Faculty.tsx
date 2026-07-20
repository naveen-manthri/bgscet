import "./Faculty.css";

import FacultyCards from "./FacultyCards/FacultyCards";

import type { FacultyMember } from "../../../types/ugprograms";

interface FacultyProps {
  data: FacultyMember[];
  title?: string;
}

const Faculty = ({ data, title = "Faculty" }: FacultyProps) => (
  <section className="department-faculty">
    <FacultyCards data={data} title={title} />
  </section>
);

export default Faculty;
