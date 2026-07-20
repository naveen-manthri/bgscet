export type DepartmentTabId =
  | "about"
  | "vision"
  | "faculty"
  | "achievements"
  | "events";

export interface CSEDepartmentTab {
  id: DepartmentTabId;
  label: string;
}

export interface CSEDepartmentPageData {
  banner: {
    image: string;
    title: string;
    whatsappLink: string;
  };
}
