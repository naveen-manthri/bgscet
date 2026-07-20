import "./AboutDepartmentTitle.css";

import DepartmentSectionHeading from "../../../DepartmentSectionHeading/DepartmentSectionHeading";

import type { AboutDepartment as AboutDepartmentType } from "../../../../types/ugprograms";


interface AboutDepartmentProps {
  data: AboutDepartmentType;
}


const AboutDepartment = ({
  data,
}: AboutDepartmentProps) => {
  return (
    <section className="about-cse">

      <DepartmentSectionHeading
        title={data.title}
      />

      <div className="about-cse__content">
        <p className="about-cse__description">
          {data.description}
        </p>
      </div>

    </section>
  );
};


export default AboutDepartment;