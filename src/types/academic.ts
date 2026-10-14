import type { NumberedListItemValue } from "./numberedList";

export interface AcademicTitle {
  black: string;
  red: string;
}

export interface EligibilityItem {
  heading: string;
  description: string;
}

export type AcademicContent =
  | { type: "text"; value: string }
  | { type: "link"; label: string; href: string };

export interface ExaminationItem {
  title: string;
  content: AcademicContent[];
}

export interface AcademicSection {
  title: AcademicTitle;

  eligibility: {
    generalMerit: EligibilityItem;
    reservedCategory: EligibilityItem;
    note: string;
  };

  entranceExaminations: string[];

  examinations: {
    kcet: ExaminationItem;
    comedk: ExaminationItem;
  };

  documents: NumberedListItemValue[];
}

export interface ManagementFeeSection {
  title: AcademicTitle;

  table: {
    caption?: string;
    columns: string[];
    rows: string[][];
  };

  notes: string[];
}

export interface AdmissionContact {
  name: string;
  designation: string;
  email: string;
  phone: string;
}

export interface AdmissionInformationSection {
  // title: AcademicTitle;
  title:string;
  contacts: AdmissionContact[];
}
