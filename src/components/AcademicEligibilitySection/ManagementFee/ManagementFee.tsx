import "./ManagementFee.css";

import AcademicHeading from "../../common/AcademicEligibilityHeading/AcademicEligibilityHeading";
import InfoTable from "../InfoTable/InfoTable";

import { managementFeeData } from "../../../data/academic";

export default function ManagementFee() {
  return (
    <section className="management-fee flex flex-direction-column">
      <AcademicHeading
        blackTitle={managementFeeData.title.black}
        redTitle={managementFeeData.title.red}
      />

      <InfoTable
  columns={managementFeeData.table.columns}
  rows={managementFeeData.table.rows}
/>

      <div className="management-fee__notes flex flex-direction-column">
        <h3>Note:</h3>

        <ul>
          {managementFeeData.notes.map((note) => (
            <li key={note}>{note}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}