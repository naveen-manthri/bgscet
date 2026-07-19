export interface DepartmentTab<T extends string = string> {
  id: T;
  label: string;
}

export interface DepartmentTabsProps<T extends string = string> {
  tabs: readonly DepartmentTab<T>[];
  activeTab: T;
  onTabChange: (id: T) => void;
}

export interface DepartmentSectionHeadingProps {
  title: string;
}
