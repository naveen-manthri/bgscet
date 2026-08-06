import DepartmentSectionHeading from "../../DepartmentSectionHeading/DepartmentSectionHeading";
import type { TitleBulletDescriptionSection } from "../../../types/careerDevelopment";
import "./TitleBulletDescription.css";

interface TitleBulletDescriptionProps {
  data: TitleBulletDescriptionSection;
}

const TitleBulletDescription = ({ data }: TitleBulletDescriptionProps) => {
  return (
    <section className="title-bullet-description">
      <DepartmentSectionHeading title={data.title} />

      <p>{data.description}</p>

      <ul className="title-bullet-description__list">
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
