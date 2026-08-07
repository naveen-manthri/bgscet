import type { DepartmentEvent } from "../../types/ugprograms";

import techTalkOnCyb from "../../assets/images/corporate-lecture-series/TECH-TALK-ON-CYB.jpeg";
import campusEngagementAndCareerGuidance from "../../assets/images/corporate-lecture-series/Campus-Engagement-and-Career-Guidance-Program-1.jpg";
import hrConclaveBannerScaled from "../../assets/images/corporate-lecture-series/HR-Conclave-Banner-scaled.jpg";
import sumaAnnegowdaLinkedinWorkshop from "../../assets/images/corporate-lecture-series/Suma-Annegowda-Linkedin-Workshop.png";
import mrAmbarishRoyTechTalkOnDecoding from "../../assets/images/corporate-lecture-series/Mr.-Ambarish-Roy-Tech-Talk-on-Decodin-Tomorrow.png";
import drManjunathOrientationProgram from "../../assets/images/corporate-lecture-series/Dr.-Manjunath-Orientation-Program-on-Career-Guidance-and-Placement-Preperation.png";
import careerDevelopmentTalkSunilDeshpande from "../../assets/images/corporate-lecture-series/Career-Development-Talk-Sunil-Deshpande-1.png";


export const corporateLectureSeriesData: DepartmentEvent[] = [
  {
    id: 1,
    title: "Tech Talk on Cyber Security",
    image: techTalkOnCyb,
    alt: "TECH-TALK-ON-CYB",
  },
  {
    id: 2,
    title: "Tech Talk on Cyber Security",
    image: campusEngagementAndCareerGuidance,
    alt: "Campus Engagement and Career Guidance",
  },
  {
    id: 3,
    title: "HRCAMPUS Engagement and Career Guidance Program for 6th SEM Students",
    image: hrConclaveBannerScaled,
    alt: "HR Conclave Banner",
  },
  {
    id: 4,
    title: "Linked IN Workshop",
    image: sumaAnnegowdaLinkedinWorkshop,
    alt: "Suma Annegowda Linkedin Workshop",
  },
  {
    id: 5,
    title: "Tech Talk",
    image: mrAmbarishRoyTechTalkOnDecoding,
    alt: "Mr. Ambarish Roy Tech Talk",
  },
  {
    id: 6,
    title: "ORIENTATION PROGRAM ON CAREER GUIDANCE AND PLACEMENT PREPARATION",
    image: drManjunathOrientationProgram,
    alt: "ORIENTATION PROGRAM ON CAREER GUIDANCE AND PLACEMENT PREPARATION",
  },
  {
    id: 7,
    title: "Career Development Talk",
    image: careerDevelopmentTalkSunilDeshpande,
    alt: "Career Development Talk - Sunil Deshpande",
  },
];

export default corporateLectureSeriesData;