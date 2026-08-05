import DepartmentSectionHeading from "../../DepartmentSectionHeading/DepartmentSectionHeading";
import type { TableData } from "../../../types/hostel";
import "./MessTimings.css";

interface MessTimingsProps {
  data: TableData;
}

const MessTimings = ({ data }: MessTimingsProps) => {
  return (
    <section className="mess-timings hostel-page">
      <DepartmentSectionHeading title={data.title} />

      <div className="mess-timings__wrapper">
        <table className="mess-timings__table">
          <thead>
            <tr>
              {data.table.columns.map((column) => <th key={column.key}>{column.label}</th>)}
            </tr>
          </thead>

          <tbody>
            {data.table.rows.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {data.table.columns.map((column) => <td key={column.key}>{row[column.key]}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default MessTimings;