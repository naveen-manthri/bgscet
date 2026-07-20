import "./AboutCSE.css";

import DepartmentSectionHeading from "../../DepartmentSectionHeading/DepartmentSectionHeading";

import { aboutCSE } from "../../../data/cseDepartment";

const AboutCSE = () => {
  return (
    <section className="about-cse">
      <DepartmentSectionHeading title={aboutCSE.title} />

      <div className="about-cse__content">
        <p className="about-cse__description">
          {aboutCSE.description}
        </p>
      </div>
    </section>
  );
};

export default AboutCSE;