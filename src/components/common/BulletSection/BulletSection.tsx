import DepartmentSectionHeading from "../../DepartmentSectionHeading/DepartmentSectionHeading";
import type { BulletSection as BulletSectionType } from "../../../types/careerDevelopment";
import "./BulletSection.css";

interface BulletSectionProps {
  data: BulletSectionType;
}

const BulletSection = ({ data }: BulletSectionProps) => {
  const hasTitle = Boolean(data.title?.trim());

  return (
    <section className="flex flex-direction-column bullet-section">
      {hasTitle && (
        <DepartmentSectionHeading title={data.title} className="department-section-heading--medium" />
      )}

      {data.description && <p className="bullet-section__description">{data.description}</p>}

      <ul className="flex flex-direction-column bullet-section__list">
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