import DepartmentSectionHeading from "../../DepartmentSectionHeading/DepartmentSectionHeading";
import type { HostelFacilitySection } from "../../../types/hostel";
import "./HostelFacility.css";

interface HostelFacilityProps {
  data: HostelFacilitySection;
}

const HostelFacility = ({ data }: HostelFacilityProps) => {
  return (
    <section className="flex flex-direction-column hostel-facility hostel-page">
      <DepartmentSectionHeading title={data.title} className="department-section-heading--medium"/>

      <div className="flex flex-direction-column hostel-facility__content">
        <ul className="flex flex-direction-column hostel-facility__intro-list">
          {data.introductoryPoints.map((point, index) => <li key={index} className="hostel-facility__intro-item">{point}</li>)}
        </ul>

        <p className="hostel-facility__description">{data.description}</p>

        <ul className="flex flex-direction-column hostel-facility__facility-list">
          {data.facilityPoints.map((point, index) => <li key={index} className="hostel-facility__facility-item">{point}</li>)}
        </ul>
      </div>
    </section>
  );
};

export default HostelFacility;