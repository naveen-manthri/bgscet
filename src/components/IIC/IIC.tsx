import "./IIC.css";
import { iicData } from "../../data/iic";
import DepartmentSectionHeading from "../DepartmentSectionHeading/DepartmentSectionHeading";


import Section from "./Section";

const IIC = () => {
  return (
    <main className="iic-container">
      <DepartmentSectionHeading title={iicData.pageTitle} className="department-section-heading--medium" />

      {iicData.sections.map((section: (typeof iicData.sections)[number]) => (
        <Section  key={section.title}  section={section} />
      ))}
    </main>
  );
};

export default IIC;
