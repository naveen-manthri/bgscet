import DepartmentSectionHeading from "../../DepartmentSectionHeading/DepartmentSectionHeading";
import type { BulletSection as BulletSectionType } from "../../../types/hostel";
import "./BulletSection.css";

interface BulletSectionProps {
  data: BulletSectionType;
}

const BulletSection = ({ data }: BulletSectionProps) => {
  return (
    <section className="bullet-section flex flex-direction-column hostel-page">
      <DepartmentSectionHeading title={data.title} className="department-section-heading--medium"/>

      <ul className="bullet-section__list flex flex-direction-column">
        {data.points.map((point, index) => <li key={index} className="bullet-section__item">{point}</li>)}
      </ul>
    </section>
  );
};

export default BulletSection;