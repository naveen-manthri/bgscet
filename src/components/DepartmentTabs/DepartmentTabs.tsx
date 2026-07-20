import "./DepartmentTabs.css";

import type { DepartmentTabsProps } from "../../types/department";

const DepartmentTabs = <T extends string,>({
  tabs,
  activeTab,
  onTabChange,
}: DepartmentTabsProps<T>) => {
  return (
    <nav
      className="department-tabs"
      aria-label="Department Navigation"
      role="tablist"
    >
      {tabs.map((tab) => (
        <button
          key={tab.id}
          type="button"
          role="tab"
          className={`department-tabs__button ${
            activeTab === tab.id ? "department-tabs__button--active" : ""
          }`}
          onClick={() => onTabChange(tab.id)}
          aria-selected={activeTab === tab.id}
        >
          {tab.label}
        </button>
      ))}
    </nav>
  );
};

export default DepartmentTabs;
