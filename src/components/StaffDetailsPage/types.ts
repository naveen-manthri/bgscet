import type { TableData } from "../../types/hostel";

export interface StaffDetailsContactLine {
  id: string;
  text?: string;
  emphasized?: boolean;
  label?: string;
  value?: string;
  href?: string;
  linkText?: string;
  external?: boolean;
}

export interface StaffDetailsPageData {
  staff: TableData;
  contactTitle: string;
  contactLines: StaffDetailsContactLine[];
}
