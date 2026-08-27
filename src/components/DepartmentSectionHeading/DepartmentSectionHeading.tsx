import "./DepartmentSectionHeading.css";

import type { DepartmentSectionHeadingProps } from "../../types/department";

const DepartmentSectionHeading = ({
  title,
  id,
  className,
}: DepartmentSectionHeadingProps) => {
  return (
    <header className={`department-section-heading ${className ?? ""}`.trim()}>
      <h2 id={id} className="department-section-heading__title">
        {title}
      </h2>
    </header>
  );
};

export default DepartmentSectionHeading;