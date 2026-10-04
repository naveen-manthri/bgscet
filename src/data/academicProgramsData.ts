// src/data/academicProgramsData.ts

import artificialIntelligence from "../assets/images/academic/artificial-intelligence.png";
import InformationScience from "../assets/images/academic/informationScience.png";
import computerScienceEngineering from "../assets/images/academic/computerScience.png";
import csdDepartmentImage from "../assets/images/academic/CSDdepartment.png";

export interface AcademicProgram {
  id: number;
  title: string;
  duration: string;
  description: string;
  readMore: string;
  image: string;
  route: string;
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
    route: "/ug-programs/cse",
  },
  {
    id: 2,
    title: "Information Science",
    duration: "Duration- 4 Years",
    description:
      "It Is A Long Established Fact That A Reader Will Be Distracted By The Readable Content Of A Page",
    readMore: "Read More",
    image: InformationScience,
    route: "/ug-programs/ise",
  },
  {
    id: 3,
    title: "AIML Department",
    duration: "Duration- 4 Years",
    description:
      "It Is A Long Established Fact That A Reader Will Be Distracted By The Readable Content Of A Page",
    readMore: "Read More",
    image: artificialIntelligence,
    route: "/ug-programs/aiml",
  },
  {
    id: 4,
    title: "CSD Department",
    duration: "Duration- 4 Years",
    description:
      "It Is A Long Established Fact That A Reader Will Be Distracted By The Readable Content Of A Page",
    readMore: "Read More",
    image: csdDepartmentImage,
    route: "/ug-programs/csd",
  },
 
  
];