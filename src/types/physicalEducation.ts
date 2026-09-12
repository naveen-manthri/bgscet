export interface PhysicalEducationPerson {
  image: string;
  name: string;
  role: string;
  alt: string;
  className?: string;
}

export interface PhysicalEducationRecognition {
  image: string;
  text: string;
  alt: string;
}

export interface PhysicalEducationData {
  banner: {
    image: string;
    title: string;
  };
  people: PhysicalEducationPerson[];
  message: string;
  tugOfWarImage: string;
  achievementImage: string;
  achievementAlt: string;
  recognitions: PhysicalEducationRecognition[];
  annualSportsImages: string[];
}
