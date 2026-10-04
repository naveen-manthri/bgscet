// src/data/academicProgramsData.ts

import artificialIntelligence from "../assets/images/academic/artificial-intelligence.png";
import InformationScience from "../assets/images/academic/informationScience.png";
import computerScienceEngineering from "../assets/images/academic/computerScience.png";
import csdDepartmentImage from "../assets/images/academic/CSDdepartment.png";
import appliedScienceImage from "../assets/images/academic/appliedScience.png";

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
    image: computerScienceEngineering,
    slug: "computer-science",
  },
  {
    id: 2,
    title: "Information Science",
    duration: "Duration- 4 Years",
    description:
      "It Is A Long Established Fact That A Reader Will Be Distracted By The Readable Content Of A Page",
    readMore: "Read More",
    image: InformationScience,
    slug: "information-science",
  },
  {
    id: 3,
    title: "AIML Department",
    duration: "Duration- 4 Years",
    description:
      "It Is A Long Established Fact That A Reader Will Be Distracted By The Readable Content Of A Page",
    readMore: "Read More",
    image: artificialIntelligence,
    slug: "aiml-department",
  },
  {
    id: 4,
    title: "CSD Department",
    duration: "Duration- 4 Years",
    description:
      "It Is A Long Established Fact That A Reader Will Be Distracted By The Readable Content Of A Page",
    readMore: "Read More",
    image: csdDepartmentImage,
    slug: "csd-department",
  },
  {
    id: 5,
    title: "Applied Science",
    duration: "Duration- 4 Years",
    description:
      "It Is A Long Established Fact That A Reader Will Be Distracted By The Readable Content Of A Page",
    readMore: "Read More",
    image: appliedScienceImage,
    slug: "applied-science",
  },
  
];