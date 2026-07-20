import type { CSEDepartmentTab } from "./types";

export const cseDepartmentTabs: readonly CSEDepartmentTab[] = [
  { id: "about", label: "About Department" },
  { id: "vision", label: "Vision & Mission" },
  { id: "faculty", label: "Faculty" },
  { id: "achievements", label: "Achievements" },
  { id: "events", label: "Events & Newsletter" },
];

export const defaultCseDepartmentTab = "about";
