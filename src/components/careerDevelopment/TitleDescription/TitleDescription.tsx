

import DepartmentSectionHeading from "../../DepartmentSectionHeading/DepartmentSectionHeading";
import type { TitleDescriptionSection } from "../../../types/careerDevelopment";
import "./TitleDescription.css";

interface TitleDescriptionProps {
  data: TitleDescriptionSection;
}

const TitleDescription = ({ data }: TitleDescriptionProps) => {
  return (
    <section className="title-description">
      <DepartmentSectionHeading title={data.title} />

      <p>{data.description}</p>
    </section>
  );
};

export default TitleDescription;