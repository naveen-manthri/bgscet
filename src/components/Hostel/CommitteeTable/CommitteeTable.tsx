import DepartmentSectionHeading from "../../DepartmentSectionHeading/DepartmentSectionHeading";
import type { HostelCommitteeSection } from "../../../types/hostel";
import "./CommitteeTable.css";

interface CommitteeTableProps {
  data: HostelCommitteeSection;
}

const CommitteeTable = ({ data }: CommitteeTableProps) => {
  return (
    <section className="committee-table flex flex-direction-column">
      <DepartmentSectionHeading title={data.title} className="department-section-heading--medium"/>

      <div className="committee-table__wrapper">
        <table className="committee-table__table">
          <thead>
            <tr>
              {data.table.columns.map((column) => <th key={column.key}>{column.label}</th>)}
            </tr>
          </thead>

          <tbody>
            {data.table.rows.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {data.table.columns.map((column) => (
                  <td key={column.key}>
                    {row[column.key]?.split("\n").map((value, valueIndex) => (
                      <span key={valueIndex} className="committee-table__cell">
                        {value}
                      </span>
                    ))}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default CommitteeTable;