import "./AcademicEligibilitySection.css";

import AcademicEligibility from "./AcademicEligibility/AcademicEligibility";
import ManagementFee from "./ManagementFee/ManagementFee";
import AdmissionInformation from "./AdmissionInformation/AdmissionInformation";

export default function AcademicEligibilitySection() {
  return (
    <section className="academic-eligibility-section flex flex-direction-column mobile-margin-top mobile-padding">
      <AcademicEligibility />

      <ManagementFee />

      <AdmissionInformation />
    </section>
  );
}