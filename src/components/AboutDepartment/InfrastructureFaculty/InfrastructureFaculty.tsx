import "./InfrastructureFaculty.css";

import DepartmentSectionHeading from "../../DepartmentSectionHeading/DepartmentSectionHeading";

import { infrastructureFaculty } from "../../../data/cseDepartment";

const InfrastructureFaculty = () => {
  return (
    <section className="infrastructure-faculty">
      <DepartmentSectionHeading
        title={infrastructureFaculty.title}
      />

      <div className="infrastructure-faculty__content">
        <p className="infrastructure-faculty__description">
          {infrastructureFaculty.description}
        </p>
      </div>
    </section>
  );
};

export default InfrastructureFaculty;