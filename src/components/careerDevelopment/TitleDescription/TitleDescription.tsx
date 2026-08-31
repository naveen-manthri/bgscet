

import DepartmentSectionHeading from "../../DepartmentSectionHeading/DepartmentSectionHeading";
import type { TitleDescriptionSection } from "../../../types/careerDevelopment";
import "./TitleDescription.css";

interface TitleDescriptionProps {
  data: TitleDescriptionSection;
  className?: string;
}

const TitleDescription = ({ data, className = "department-section-heading--default" }: TitleDescriptionProps) => {
  return (
    <section className="title-description">
      <DepartmentSectionHeading title={data.title} className={className} />

      <p>{data.description}</p>
    </section>
  );
};

export default TitleDescription;