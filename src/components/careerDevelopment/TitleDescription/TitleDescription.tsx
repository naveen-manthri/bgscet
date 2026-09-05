

import DepartmentSectionHeading from "../../DepartmentSectionHeading/DepartmentSectionHeading";
import type { TitleDescriptionSection } from "../../../types/careerDevelopment";
import "./TitleDescription.css";

interface TitleDescriptionProps {
  data: TitleDescriptionSection;
  className?: string;
  sectionClassName?: string;
}

const TitleDescription = ({
  data,
  className = "department-section-heading--default",
  sectionClassName = "",
}: TitleDescriptionProps) => {
  return (
    <section className={`title-description ${sectionClassName}`.trim()}>
      <DepartmentSectionHeading title={data.title} className={className} />

      <p>{data.description}</p>
    </section>
  );
};

export default TitleDescription;