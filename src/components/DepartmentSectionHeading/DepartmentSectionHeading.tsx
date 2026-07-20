import "./DepartmentSectionHeading.css";

import type { DepartmentSectionHeadingProps } from "../../types/department";

const DepartmentSectionHeading = ({
  title,
}: DepartmentSectionHeadingProps) => {
  return (
    <header className="department-section-heading">
      <h2 className="department-section-heading__title">
        {title}
      </h2>
    </header>
  );
};

export default DepartmentSectionHeading;