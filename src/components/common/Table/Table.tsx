import DepartmentSectionHeading from "../../DepartmentSectionHeading/DepartmentSectionHeading";
import type { HostelTable } from "../../../types/hostel";
import "./Table.css";

interface TableProps {
  title: string;
  table: HostelTable;
  className?: string;
}

const Table = ({ title, table, className = "department-section-heading--default" }: TableProps) => {
  return (
    <section className="table-section">
      <DepartmentSectionHeading title={title} className={className} />

      <div className="table-section__wrapper">
        <table className="table-section__table">
          <thead>
            <tr>
              {table.columns.map((column) => <th key={column.key}>{column.label}</th>)}
            </tr>
          </thead>

          <tbody>
            {table.rows.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {table.columns.map((column) => (
                  <td key={column.key}>
                    {row[column.key]?.split("\n").map((value, valueIndex) => <span key={valueIndex} className="table-section__cell">{value}</span>)}
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

export default Table;