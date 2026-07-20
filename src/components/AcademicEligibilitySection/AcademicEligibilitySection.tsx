import "./AcademicEligibilitySection.css";

import AcademicEligibility from "./AcademicEligibility/AcademicEligibility";
import ManagementFee from "./ManagementFee/ManagementFee";
import AdmissionInformation from "./AdmissionInformation/AdmissionInformation";

export default function AcademicEligibilitySection() {
  return (
    <section className="academic-eligibility-section">
      <AcademicEligibility />

      <ManagementFee />

      <AdmissionInformation />
    </section>
  );
}