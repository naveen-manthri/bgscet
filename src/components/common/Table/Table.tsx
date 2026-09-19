import DepartmentSectionHeading from "../../DepartmentSectionHeading/DepartmentSectionHeading";
import type { ReactNode } from "react";
import type { HostelTable, HostelTableColumn, HostelTableRow } from "../../../types/hostel";
import "./Table.css";

interface TableProps {
  title: string;
  description?: string;
  table: HostelTable;
  className?: string;
  renderCell?: (value: string | undefined, column: HostelTableColumn, row: HostelTableRow) => ReactNode;
}

const Table = ({ title, description, table, className, renderCell }: TableProps) => {
  return (
    <section className={`table-section flex flex-direction-column ${className ?? ""}`.trim()}>
      <DepartmentSectionHeading title={title} className="department-section-heading--medium" />
      {description && <p className="table-section__description">{description}</p>}

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
                    {renderCell
                      ? renderCell(row[column.key], column, row)
                      : row[column.key]?.split("\n").map((value, valueIndex) => <span key={valueIndex} className=" flex flex-direction-column table-section__cell ">{value}</span>)}
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