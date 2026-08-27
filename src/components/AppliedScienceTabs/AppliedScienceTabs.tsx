import "../DepartmentTabs/DepartmentTabs.css";

import DepartmentTabs from "../DepartmentTabs/DepartmentTabs";
import type { DepartmentTab } from "../../types/department";

interface AppliedScienceTabsProps {
  tabs: readonly DepartmentTab[];
  activeTab: string;
  onTabChange: (id: string) => void;
}

/** Applied-science tabs share the UG tab styling but accept any tab count. */
const AppliedScienceTabs = ({ tabs, activeTab, onTabChange }: AppliedScienceTabsProps) => (
  <DepartmentTabs tabs={tabs} activeTab={activeTab} onTabChange={onTabChange} />
);

export default AppliedScienceTabs;
