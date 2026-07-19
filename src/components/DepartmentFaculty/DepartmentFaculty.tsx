import "./DepartmentFaculty.css";

import DepartmentSectionHeading from "../DepartmentSectionHeading/DepartmentSectionHeading";

import { facultyMembers } from "../../data/cseDepartment";

const DepartmentFaculty = () => {
  return (
    <section className="department-faculty">
      <DepartmentSectionHeading title="Faculty" />

      <div className="department-faculty__grid">
        {facultyMembers.map((faculty) => (
          <article
            key={faculty.id}
            className="department-faculty__card"
          >
            <img
              src={faculty.image}
              alt={faculty.name}
              className="department-faculty__image"
            />

            <div className="department-faculty__info">
              <h3 className="department-faculty__name">
                {faculty.name}
              </h3>

              <p className="department-faculty__designation">
                {faculty.designation}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default DepartmentFaculty;