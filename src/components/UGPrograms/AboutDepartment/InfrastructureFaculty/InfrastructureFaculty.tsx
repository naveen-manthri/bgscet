import "./InfrastructureFaculty.css";

import DepartmentSectionHeading from "../../../DepartmentSectionHeading/DepartmentSectionHeading";

import type {
  InfrastructureFaculty as InfrastructureFacultyType,
} from "../../../../types/ugprograms";


interface InfrastructureFacultyProps {
  data: InfrastructureFacultyType;
}


const InfrastructureFaculty = ({
  data,
}: InfrastructureFacultyProps) => {
  return (
    <section className="infrastructure-faculty">

      <DepartmentSectionHeading
        title={data.title}
      />


      <div className="infrastructure-faculty__content">

        <p className="infrastructure-faculty__description">
          {data.description}
        </p>

      </div>

    </section>
  );
};


export default InfrastructureFaculty;