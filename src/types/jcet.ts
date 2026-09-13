import type { BulletSection, TitleDescriptionSection } from "./careerDevelopment";
import type { HostelTable } from "./hostel";

export interface JournalInformationItem {
  label: string;
  value: string;
}

export interface ArticleSubmission {
  authorGuidelines: string;
  contents: string;
  subscriptionModes: string;
}

export interface EditorialBoardMember {
  name: string;
  details: string[];
}

export interface BibliographicDetails {
  title: string;
  description: string;
  table: HostelTable;
}

export interface JCETData {
  descriptions: string[];
  whatSetsJCETApart: BulletSection;
  journalInformation: JournalInformationItem[];
  publisherDetails: string[];
  aimsAndScope: string;
  subjectCoverage: BulletSection;
  articleSubmission: ArticleSubmission;
  callForPapers: TitleDescriptionSection;
  editorialBoard: EditorialBoardMember[];
  bibliographicDetails: BibliographicDetails;
}
