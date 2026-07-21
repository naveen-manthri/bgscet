import DepartmentSectionHeading from "../../../DepartmentSectionHeading/DepartmentSectionHeading";

import type { FacultyMember } from "../../../../types/ugprograms";

interface FacultyCardsProps {
  data: FacultyMember[];
  title: string;
}

const FacultyCards = ({ data, title }: FacultyCardsProps) => (
  <>
    <DepartmentSectionHeading title={title} />
    <div className="department-faculty__grid">
      {data.map((faculty) => (
        <article key={faculty.id} className="department-faculty__card">
          <img src={faculty.image} alt={faculty.name} className="department-faculty__image" />
          <div className="department-faculty__info">
            <h3 className="department-faculty__name">{faculty.name}</h3>
            <p className="department-faculty__designation">{faculty.designation}</p>
          </div>
        </article>
      ))}
    </div>
  </>
);

export default FacultyCards;
