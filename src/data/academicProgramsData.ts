// src/data/academicProgramsData.ts

import mechanicalEngineering from "../assets/images/academic/mechanical-engineering.jpg";
import electronicsEngineering from "../assets/images/academic/electronics-engineering.jpg";
import computerScienceEngineering from "../assets/images/academic/computer-science.jpg";

export interface AcademicProgram {
  id: number;
  title: string;
  duration: string;
  description: string;
  readMore: string;
  image: string;
  slug: string;
}

export const academicPrograms: AcademicProgram[] = [
  {
    id: 1,
    title: "Computer Science",
    duration: "Duration- 4 Years",
    description:
      "It Is A Long Established Fact That A Reader Will Be Distracted By The Readable Content Of A Page",
    readMore: "Read More",
    image: mechanicalEngineering,
    slug: "computer-science",
  },
  {
    id: 2,
    title: "Information Science",
    duration: "Duration- 4 Years",
    description:
      "It Is A Long Established Fact That A Reader Will Be Distracted By The Readable Content Of A Page",
    readMore: "Read More",
    image: electronicsEngineering,
    slug: "information-science",
  },
  {
    id: 3,
    title: "AIML Department",
    duration: "Duration- 4 Years",
    description:
      "It Is A Long Established Fact That A Reader Will Be Distracted By The Readable Content Of A Page",
    readMore: "Read More",
    image: computerScienceEngineering,
    slug: "aiml-department",
  },
];