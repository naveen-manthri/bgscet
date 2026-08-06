export interface TitleDescriptionSection {
  title: string;
  description: string;
}

export interface BulletSection {
  title: string;
  points: string[];
}

export interface TitleBulletDescriptionSection {
  title: string;
  description: string;
  points: string[];
}

export interface RichDescriptionItem {
  heading: string;
  description: string;
}

export interface RichDescriptionSection {
  title: string;
  intro: string;
  items: RichDescriptionItem[];
}

export interface ProfileSection {
  title: string;
  image: string;
  alt: string;
  name: string;
  designation: string;
  college: string;
  mobile: string;
  email: string;
  qualification: string;
  linkedin: string;
}

export interface CareerDevelopmentData {
  about: TitleDescriptionSection;
  facilities: BulletSection;
  trainingPlacement: TitleDescriptionSection;
  aimsObjectives: BulletSection;
  glimpseTraining: RichDescriptionSection;
  whyRecruit: BulletSection;
  coordinator: ProfileSection;
}