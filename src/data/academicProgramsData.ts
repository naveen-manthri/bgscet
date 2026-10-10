// src/data/academicProgramsData.ts

import artificialIntelligence from "../assets/images/academic/artificial-intelligence.png";
import InformationScience from "../assets/images/academic/informationScience.png";
import computerScienceEngineering from "../assets/images/academic/computerScience.png";
import csdDepartmentImage from "../assets/images/academic/CSDdepartment.png";
import aidsDeptImage from "../assets/images/academic/aidsDept.png";

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
    duration: "Duration - 4 Years",
    description:
      "The CSE department, established in 2022-23 with an intake of 60, now has an intake of 120 students for the current year, CSE is a branch of Engineering that deals with computing theories, programming languages, program design, algorithms, computer hardware and software, and integrates several fields of computer science. Computer science engineers are involved in many aspects of computing, from the design of individual microprocessors, personal computers, and supercomputers to circuit designing and writing software. CSE offers abundant opportunities for graduates to be at the forefront of technological innovation. From robotics and nanotechnology to space structures and weaponry, the systems of computer frameworks are at the center of the new-age world.",
    readMore: "Read More",
    image: computerScienceEngineering,
    route: "/ug-programs/cse",
  },
  {
    id: 2,
    title: "Information Science",
    duration: "Duration - 4 Years",
    description:
      "The department of ISE is established during the academic year 2022-23 with an intake of 60. ISE graduates will be able to design, development and implement the software applications for real-world problems by using latest modern IT tools and technologies to meet the industry requirements. There is not much difference between Computer science & Information Science.",
    readMore: "Read More",
    image: InformationScience,
    route: "/ug-programs/ise",
  },
  {
    id: 3,
    title: "AIML Department",
    duration: "Duration - 4 Years",
    description:
      "The department of Artificial intelligence and Machine learning(AI&ML) is established during the academic year 2022-23 with an intake of 60. Artificial intelligence and Machine learning(AI&ML) areas are the branches of Computer Science and rapidly growing technologies, used to create intelligent systems that can simulate human thinking capability and behavior across service and non-service sectors. In other words, AI&ML enables the Computer to mimic the human brain in terms of making decisions accurately without manual intervention. AI&ML is an exciting field of study that brings together theories, standards, methods, and innovative ideas from various domains like mathematics, cognitive science, electronics, and embedded systems. Its purpose is to create remarkable advancements by leveraging the power of these diverse disciplines, intelligent systems that mimic human behaviour.",
    readMore: "Read More",
    image: artificialIntelligence,
    route: "/ug-programs/aiml",
  },
  {
    id: 4,
    title: "CSD Department",
    duration: "Duration - 4 Years",
    description:
      "The department of Computer Science and Design is established during the academic year 2022-23 with an intake of 60. Computer Science and Design is in high demand across the globe in the current era. The students will have the ability to design creative solutions in areas such as animation, AI powered gaming, virtual reality and augmented reality etc. This graduation programme combines core design courses with solid programming underpinnings. This programme prepares students for a variety of careers in disciplines such as entertainment, arts, games, digital analytics, mobile application development, web/product design, cyber security, multimedia, and other interactive industries around the world. The first year of study is identical to all engineering branches, and the remaining years of study comprise core subjects and its electives.",
    readMore: "Read More",
    image: csdDepartmentImage,
    route: "/ug-programs/csd",
  },
  {
    id: 5,
    title: "AIDS Department",
    duration: "Duration - 4 Years",
    description:
      "The department of Artificial Intelligence and Data Science (AI&DS) is established during the academic year 2022-23 with an intake of 60. Artificial Intelligence is a human-like intelligence provided to machines where machines act and think as humanly & solve problems faster than humans. Speech recognition, translation tools, etc., are the building areas of AI. Artificial Intelligence is the implementation of a predictive model to forecast future events and trends, Automation of the process & uses machine learning techniques Data Science is a subset of Artificial Intelligence. Data science is a collection of data to analyze and make a decision. It uses scientific methods, processes, algorithms, and insights from many structural and unstructured data. Data Science is a detailed process that mainly involves pre-processing analysis, visualization, and prediction with a high degree of scientific processing & extensive tools will be used to process the data uses the technique of data analysis and data analytics.",
    readMore: "Read More",
    image: aidsDeptImage,
    route: "/ug-programs/aids",
  }
];