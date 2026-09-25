import type { BulletSection, TitleDescriptionSection } from './careerDevelopment';

export interface LinkagesData {
  title: string;
  paragraphs: string[];
  industryLinkagesTitle: string;
  industryLinkagesItems: string[];
  communityLinkages: TitleDescriptionSection;
  technicalInstitutionLinkages: TitleDescriptionSection;
  institutionalExcellenceLinkages: TitleDescriptionSection;
  linkagesAbroad: BulletSection;
  researchLabLinkages: BulletSection;
  closingText: string;
}
