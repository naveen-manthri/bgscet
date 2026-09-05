import DepartmentSectionHeading from "../../DepartmentSectionHeading/DepartmentSectionHeading";
import type { RichDescriptionSection } from "../../../types/careerDevelopment";
import "./RichDescription.css";

interface RichDescriptionProps {
  data: RichDescriptionSection;
}

const RichDescription = ({ data }: RichDescriptionProps) => {
  return (
    <section className="flex flex-direction-column rich-description">
      <DepartmentSectionHeading title={data.title} className="department-section-heading--medium"/>

      <p>{data.intro}</p>

      <div className="flex flex-direction-column rich-description__content">
        {data.items.map((item, index) => (
          <p key={index}>
            <strong>{item.heading}: </strong>
            {item.description}
          </p>
        ))}
      </div>
    </section>
  );
};

export default RichDescription;