import DepartmentSectionHeading from "../../DepartmentSectionHeading/DepartmentSectionHeading";
import type { TitleBulletDescriptionSection } from "../../../types/careerDevelopment";
import "./TitleBulletDescription.css";

interface TitleBulletDescriptionProps {
  data: TitleBulletDescriptionSection;
}

const TitleBulletDescription = ({ data }: TitleBulletDescriptionProps) => {
  return (
    <section className="title-bullet-description flex flex-direction-column  mobile-margin-top  ">
      <DepartmentSectionHeading title={data.title} className="department-section-heading--medium"/>

      <p>{data.description}</p>

      <ul className="title-bullet-description__list flex flex-direction-column">
        {data.points.map((point, index) => (
          <li key={index} className="title-bullet-description__item">
            {point}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default TitleBulletDescription;
