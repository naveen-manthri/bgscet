import DepartmentSectionHeading from "../../DepartmentSectionHeading/DepartmentSectionHeading";
import type { BulletSection as BulletSectionType } from "../../../types/careerDevelopment";
import "./BulletSection.css";

interface BulletSectionProps {
  data: BulletSectionType;
}

const BulletSection = ({ data }: BulletSectionProps) => {
  return (
    <section className="bullet-section">
      <DepartmentSectionHeading title={data.title} />

      <ul className="bullet-section__list">
        {data.points.map((point, index) => (
          <li key={index} className="bullet-section__item">
            {point}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default BulletSection;