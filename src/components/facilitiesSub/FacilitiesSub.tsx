import "./FacilitiesSub.css";
import DepartmentSectionHeading from "../DepartmentSectionHeading/DepartmentSectionHeading";
import type { TitleDescription } from "../../types/facilitiesSub";

interface FacilitiesSubProps {
  data: TitleDescription;
}

const FacilitiesSub = ({ data }: FacilitiesSubProps) => {
  return (
    <section className="facilities-sub">
      <DepartmentSectionHeading title={data.title} className="department-section-heading--medium" />

      {data.description.map((paragraph, index) => (
        <p key={index} className="facilities-sub__description">
          {paragraph}
        </p>
      ))}
    </section>
  );
};

export default FacilitiesSub;