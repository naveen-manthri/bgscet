import type { ReactNode } from "react";
import "./InfoTable.css";

type InfoTableProps = {
  caption?: string;
  columns: string[];
  rows: ReactNode[][];
  className?: string;
};

export default function InfoTable({
  caption,
  columns,
  rows,
  className = "",
}: InfoTableProps) {
  return (
    <div className={`academic-info-table ${className}`.trim()}>
      <table>
        {caption && <caption>{caption}</caption>}

        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column} scope="col">
                {column}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}