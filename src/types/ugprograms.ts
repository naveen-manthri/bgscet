export interface DepartmentTab {
  id: string;
  label: string;
}

export interface DepartmentBanner {
  image: string;
  title: string;
}

export interface HodMessage {
  title: string;
  image: string;
  name: string;
  designation: string[];
  description: string;
}

export interface AboutDepartment {
  title: string;
  description: string;
}

export interface CareerOpportunities {
  title: string;
  description: string;
  image: string;
  opportunities: string[];
}

export interface InfrastructureFaculty {
  title: string;
  description: string;
}

export interface DepartmentVision {
  title: string;
  description: string;
}

export interface DepartmentMission {
  title: string;
  points: string[];
}

export interface DepartmentVisionMission {
  vision: DepartmentVision;
  mission: DepartmentMission;
}

export interface FacultyMember {
  id: number;
  image: string;
  name: string;
  designation: string;
}

export interface AchievementItem {
  id: number;
  title: string;
  image: string;
  alt: string;
}

export interface AchievementSectionData {
  title: string;
  achievements: AchievementItem[];
}

export interface DepartmentEvent {
  id: number;
  title: string;
  image: string;
  alt: string;
}

export interface DepartmentNewsletter {
  id: number;
  title: string;
}

export interface DepartmentEventsData {
  title: string;
  newsletterTitle: string;
  events: DepartmentEvent[];
  newsletters: DepartmentNewsletter[];
}

export interface UGDepartmentData {
  slug: string;
  banner: DepartmentBanner;
  tabs: DepartmentTab[];
  hodMessage: HodMessage;
  aboutDepartment: AboutDepartment;
  careerOpportunities: CareerOpportunities;
  infrastructureFaculty: InfrastructureFaculty;
  visionMission: DepartmentVisionMission;
  facultyMembers: FacultyMember[];
  achievementData: AchievementSectionData;
  eventsData: DepartmentEventsData;
}
