import hodImage from "../../assets/images/csedepartment/hod.png";
import careerImage from "../../assets/images/csedepartment/career-opportunities.jpg";

import event1Image from "../../assets/images/cseevents/event-1.jpg";
import event2Image from "../../assets/images/cseevents/event-2.jpg";
import cseBannerImage from "../../assets/images/banner/department-banner-cse.png";
import sumanthCGowda from "../../assets/images/csedepartment/sumanth-c-gowda.jpeg";
import manasaCK from "../../assets/images/csedepartment/Manasa-CK.jpeg";
import mrSatishG from "../../assets/images/csedepartment/Mr-Satish-g.jpeg";
import drVaniV from "../../assets/images/csedepartment/dr-vani-v.jpeg";
import mrChethanHV from "../../assets/images/csedepartment/Mr.-Chethan-H-V.jpg";
import mrsVedha from "../../assets/images/csedepartment/Mrs.vedha.jpg";
import pricipal from "../../assets/images/csedepartment/pricipal.jpg";
import jayashree from "../../assets/images/csedepartment/jayashree.jpeg";
import rohiniC from "../../assets/images/csedepartment/rohini-c.jpeg";
import mrsAshaSN from "../../assets/images/csedepartment/Mrs.-Asha-S-N.jpg";
import volleyballTour from "../../assets/images/achievement/cse-achievements/Volleyball-tour-.jpg";
import jvtmImage from "../../assets/images/achievement/cse-achievements/JVTM-image-.jpeg";
import rohiniInternship from "../../assets/images/achievement/cse-achievements/Rohini-internship.jpeg";
import devSprintHackathon from "../../assets/images/achievement/cse-achievements/DEVSPRINT-A-24-Hour-Hackathon.jpeg";
import cseExhibition from "../../assets/images/achievement/cse-achievements/Students-CSE-Won-2nd-Prize-in-Dance-JVTM-2024.jpg";
import toppers20222026FourthSem from "../../assets/images/achievement/cse-achievements/Toppers-of-2022-2026-4th-sem-VTU-Aug-Sep-2024.jpeg";
import toppers20222026FifthSem from "../../assets/images/achievement/cse-achievements/Toppers-2022-2026-5th-sem-VTU.jpeg";
import toppers20232027 from "../../assets/images/achievement/cse-achievements/Toppers-Batch-2023-2027.jpeg";
import techIUMwinners from "../../assets/images/achievement/cse-achievements/Tech-IUM-Winners.jpeg";


import type {
  DepartmentTab,
  HodMessage,
  AboutDepartment,
  CareerOpportunities,
  InfrastructureFaculty,
  DepartmentVisionMission,
  FacultyMember,
  AchievementSectionData,
  DepartmentEventsData,
  UGDepartmentData,
} from "../../types/ugprograms";


export const departmentTabs: DepartmentTab[] = [
  {
    id: "about",
    label: "About Department",
  },
  {
    id: "vision",
    label: "Vision & Mission",
  },
  {
    id: "faculty",
    label: "Faculty",
  },
  {
    id: "achievements",
    label: "Achievements",
  },
  {
    id: "events",
    label: "Events & Newsletter",
  },
];


export const hodMessage: HodMessage = {
  title: "HOD's Message",

  image: hodImage,

  name: "Dr. Manjula G",

  designation: [
    "Professor and HOD, Computer",
    "Science and Engineering",
    "Watch on YouTube",
  ],

  description: `Greetings from the Department of Computer Science and Engineering, BGSCET. It has been universally accredited that the flagship branch of engineering, computer science discipline, is dedicated to ensuring great careers for its students. The Department is committed to working towards developing Engineers with a rich blend of competent, technical, managerial, and social skills and contributing to societal needs and nation-building. This tends to forge deeper industry associations than ever before, creating a research culture from day one and ensuring unified education using the best technology available anywhere. We are focused not only on delivering technical education to our students but also on the leadership proficiencies through which they can lead to economic development for others. The intellectual ambiance in the Department of CSE is conducive to the holistic development of the students. The excellent infrastructure, experienced and scholarly team of faculty members are dedicated to strengthening effective teaching-learning processes, thereby ensuring quality education. The department places emphasis on reinforcing the laboratory infrastructure by adopting novel industry-relevant technologies to empower students to learn and stimulate integrated learning to take up industry-relevant projects. Innovative teaching and learning methods are used to achieve learning abilities through practice, exposure, and motivation. Our goal is to foster critical thinking and analytical skills to ensure that graduates are employable, entrepreneurs, and ethical members of Society.`
};


export const aboutDepartment: AboutDepartment = {
  title: "About CSE",

  description: `The CSE department, established in 2022-23 with an intake of 60, now has an intake of 120 students for the current year, CSE is a branch of Engineering that deals with computing theories, programming languages, program design, algorithms, computer hardware and software, and integrates several fields of computer science. Computer science engineers are involved in many aspects of computing, from the design of individual microprocessors, personal computers, and supercomputers to circuit designing and writing software. CSE offers abundant opportunities for graduates to be at the forefront of technological innovation. From robotics and nanotechnology to space structures and weaponry, the systems of computer frameworks are at the center of the new-age world.
`
};


export const careerOpportunities: CareerOpportunities = {
  title: "Career Opportunities",

  description:
    "Astounding employment opportunities available for CSE graduates have significantly increased across the world in the past couple of years, with demand easily outstripping supply. A list of major career profiles includes:",

  image: careerImage,

  opportunities: [
    "Software Engineer",
    "Programmer",
    "Data Scientist",
    "Applications Developer",
    "Machine Learning Engineer",
    "Web Analyst",
    "Network Engineer",
    "Cyber Security Analyst",
    "UX Designer",
    "IT Analyst",
  ],
};


export const infrastructureFaculty: InfrastructureFaculty = {
  title: "Infrastructure & Faculty",

  description:
    "The department will have the best infrastructure with the latest high-end computing facilities to cater to the academic needs of the VTU-prescribed syllabus and provide a real-time experience to the students. The department will have renowned faculty members with long academic experience and experts from industries in India and abroad.",
};


export const visionMission: DepartmentVisionMission = {
  vision: {
    title: "Vision",

    description:
      "Nurturing young minds to making them industry ready IT professionals",
  },

  mission: {
    title: "Mission",

    points: [
      "M1: Providing strong foundational knowledge of mathematics, science, and computational approaches on solving theoretical and practical problems of Computer Science.",
      "M2: Imparting high quality advanced knowledge in experiential learning to get expertise in modern software tools and to cater to the real time requirements of the industry.",
        "M3: Fostering the professionalism to achieve goals by inculcating niche skills for Successful Entrepreneur",
        "M4: Provide a conducive environment to train students in progressive and convergent research themes.",
        "M5: Inculcate problem solving and team building skills and promote lifelong learning with a sense of societal and value based ethical responsibilitie"
    ],
  },
};


export const facultyMembers: FacultyMember[] = [
  {
    id: 1,
    image: pricipal,
    name: "Dr. Ravikumar GK",
    designation: "Principal",
  },

  {
    id: 2,
    image: hodImage,
    name: "Dr. Manjula G",
    designation: "Professor and HOD",
  },
  {
    id: 3,
    image: mrsVedha,
    name: "Mrs.Vedha.C",
    designation: "Assistant Professor",
  },

  {
    id: 4,
    image: mrChethanHV,
    name: "Mr.Chethan H V",
    designation: "Associate Professor",
  },
  {
    id: 5,
    image: drVaniV,
    name: "Dr Vani V",
    designation: "Associate Professor",
  },

  {
    id: 6,
    image: mrSatishG,
    name: "Mr. SATHISHA G",
    designation: "Assistant Professor",
  },
  {
    id: 7,
    image: mrsAshaSN,
    name: "Mrs. Asha S N",
    designation: "Assistant Professor",
  },

  {
    id: 8,
    image: rohiniC,
    name: "Rohini C",
    designation: "Assistant Professor",
  },
  {
    id: 9,
    image: manasaCK,
    name: "Manasa C.K",
    designation: "Assistant Professor",
  },

  {
    id: 10,
    image: sumanthCGowda,
    name: "Sumanth C Gowda",
    designation: "Assistant Professor",
  },
  {
    id: 11,
    image: jayashree,
    name: "Jayashree",
    designation: "Assistant Professor",
  },
];


export const achievementData: AchievementSectionData = {
  title: "Student Success Stories",

  achievements: [
  {
    id: 1,
    title: "Tech IUM Winners",
    image: techIUMwinners,
    alt: "Tech IUM Winners",
  },
  {
    id: 2,
    title: "Toppers of the Batch 2023–2027 in the 3rd Semester in VTU Examination",
    image: toppers20232027,
    alt: "Toppers of the Batch 2023–2027",
  },
  {
    id: 3,
    title: "Toppers of the Batch 2022–2026 in the 5th Semester in VTU Examination",
    image: toppers20222026FifthSem,
    alt: "Toppers of the Batch 2022–2026 in the 5th Semester",
  },
  {
    id: 4,
    title: "Toppers of the Batch 2022–2026 in the 4th Semester in VTU Examination Held in August–September 2024",
    image: toppers20222026FourthSem,
    alt: "Toppers of the Batch 2022–2026 in the 4th Semester",
  },
  {
    id: 5,
    title: "Students from Department of CSE Exhibited Their Extraordinary Talent and Won 2nd Prize in Dance at JVTM Cultural Fest, February 2024",
    image: cseExhibition,
    alt: "CSE Students Won 2nd Prize in Dance",
  },
  {
    id: 6,
    title: "Students from Department of CSE Participated in 'DEVSPRINT – A 24 Hour Hackathon' on 21st–22nd December 2023 at Vidyavardhaka College of Engineering, Mysuru, and Bagged 2nd Prize",
    image: devSprintHackathon,
    alt: "DEVSPRINT Hackathon Achievement",
  },
  {
    id: 7,
    title: "3rd Sem CSE Students Manushree V & Rohini M Gained Internship Opportunity at Vinjey's Software Systems with a Stipend of ₹20K",
    image: rohiniInternship,
    alt: "Internship Achievement",
  },
  {
    id: 8,
    title: "Students of CSE at JVTM – Jnana Vignana Tantragnana Mela, 19th & 20th February 2024, with Beloved Swamiji and Principal Dr. Ravikumar G K",
    image: jvtmImage,
    alt: "JVTM Exhibition",
  },
  {
    id: 9,
    title: "Sports: CSE 3rd Semester Girls Represented BGSCET at CMRIT–VTU Throwball Tournament (13th February 2024) and Volleyball Tournament (11th January 2024)",
    image: volleyballTour,
    alt: "Sports Achievement",
  },
],
};


export const cseEventsData: DepartmentEventsData = {
  title: "CSE Events",
  newsletterTitle: "CSE Newsletter",

  events: [
    {
      id: 1,
      title:
        "BGS Invited Lecture Series Talk On Intellectual Property Rights (IPR)",
      image: event1Image,
      alt: "IPR Lecture Series",
    },

    {
      id: 2,
      title:
        "Three Days Skill Development Program On Generative AI Hands-On Learning From Concepts To Applications",
      image: event2Image,
      alt: "AI Programme",
    },
  ],

  newsletters: [
    {
      id: 1,
      title: "CSE Newsletter Vol 1",
    },

    {
      id: 2,
      title: "CSE Newsletter Vol 2",
    },
  ],
};

const cseDepartment: UGDepartmentData = {
  slug: "cse",
  banner: {
    image: cseBannerImage,
    title: "CSE Department",
  },
  tabs: departmentTabs,
  hodMessage,
  aboutDepartment,
  careerOpportunities,
  infrastructureFaculty,
  visionMission,
  facultyMembers,
  achievementData,
  eventsData: cseEventsData,
};

export default cseDepartment;
