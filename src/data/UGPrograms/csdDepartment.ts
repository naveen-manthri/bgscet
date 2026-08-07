import careerImage from "../../assets/images/csedepartment/career-opportunities.jpg";


import csdBannerImage from "../../assets/images/academic/academic-01.jpg";
import trishaS from "../../assets/images/csddepartment/Trisha-s.png";
import sowjanyaK from "../../assets/images/csddepartment/Sowjanya-K.png";
import sanjitha from "../../assets/images/csddepartment/sanjitha.jpeg";
import nagarajKalligud from "../../assets/images/csddepartment/Nagaraj_kalligud.jpg";
import drChandrakalaHL from "../../assets/images/csddepartment/Dr. Chandrakala-H-L.jpeg";
import hod from "../../assets/images/csddepartment/Dr.-Madhu-Patil.jpg";
import aishwaryaS from "../../assets/images/csddepartment/Trisha-s.png";
import kavya from "../../assets/images/csddepartment/KavyaR.png";
import chethanKumar from "../../assets/images/csddepartment/ChethanKumar_CSD.jpeg";
import event1Image from "../../assets/images/csddepartment/CSD-EVENTS/CSD-EVENTS-1.jpeg";
import event2Image from "../../assets/images/csddepartment/CSD-EVENTS/CSD-EVENTS-2.jpeg";
import event3Image from "../../assets/images/csddepartment/CSD-EVENTS/CSD-EVENTS-3.jpeg";
import event4Image from "../../assets/images/csddepartment/CSD-EVENTS/CSD-EVENTS-4.jpeg";
import event5Image from "../../assets/images/csddepartment/CSD-EVENTS/CSD-EVENTS-5.jpeg";

import nityashreeImage from "../../assets/images/csddepartment/CSD-ACHIEVEMENTS/Nityashree-1.jpeg";
import toppers3SemImage from "../../assets/images/csddepartment/CSD-ACHIEVEMENTS/3-sem-toppers-2023-batch.jpeg";
import toppers5SemImage from "../../assets/images/csddepartment/CSD-ACHIEVEMENTS/5th-sem-toppers-2022-batch.jpeg";
import toppers4SemImage from "../../assets/images/csddepartment/CSD-ACHIEVEMENTS/Topper-Batch-2022-2026-4th-SEM.jpeg";
import radhikaLikithaImage from "../../assets/images/csddepartment/CSD-ACHIEVEMENTS/Radhika-Ran-Likitha.jpeg";
import volleyballImage from "../../assets/images/csddepartment/CSD-ACHIEVEMENTS/AbhisheK-Prateek-Surendra-VOLLEYBALL.jpg";
import iotCompetitionImage from "../../assets/images/csddepartment/CSD-ACHIEVEMENTS/Inter-Collg-IOT-Project-Competition-2023.jpg";
import csdLabImage from "../../assets/images/csddepartment/CSD-ACHIEVEMENTS/3rd-sem-CSD-LAB.jpeg";


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

  image: hod,

  name: "Dr.Madhu Patil",

  designation: [
    "Professor and HOD",
    "Department of CSD",
    "Watch on YouTube",
  ],

  description: `Welcome to Department of Computer Science and design. Computer Science and Design is a field that combines the principles of computer science with the principles of design. It is an interdisciplinary field that involves the study of software development, human-computer interaction, and user experience design.The main objective of Computer Science and Design is to create software that is not only functional but also visually appealing, with an emphasis on usability and accessibility.Computer Science and Design involves the study of programming languages, data structures, algorithms, software engineering, and user experience design.

The Department is committed to work towards developing Engineers with a rich blend of competent, technical, managerial and social skills and contribute to the societal needs and nation building. We are focused not only to deliver technical education to our students but also the leadership proficiencies through which they can lead to economic development to others. The intellectual ambiance in the Department of CSD is conducive for the holistic development of the students. The excellent infrastructure, experienced and scholarly team of faculty members are dedicated to strengthen effective teaching learning process there by ensuring quality education.

The Department focusses on students to acquire skills in programming languages, data structures, algorithms, software engineering, and user experience design. Our goal is to provide students with a balance of intellectual and practical experiences that enable them to serve a variety of societal needs. In our department students are nurtured to become best software professionals as Project Managers, System Analysts or Team leaders in Industry or become Entrepreneurs in their own innovative way. The Department seeks to combine excellence in education with service to the industry.`
};


export const aboutDepartment: AboutDepartment = {
  title: "About CSD",

  description: `The CSE department, established in 2022-23 with an intake of 60, now has an intake of 120 students for the current year, CSE is a branch of Engineering that deals with computing theories, programming languages, program design, algorithms, computer hardware and software, and integrates several fields of computer science. Computer science engineers are involved in many aspects of computing, from the design of individual microprocessors, personal computers, and supercomputers to circuit designing and writing software. CSE offers abundant opportunities for graduates to be at the forefront of technological innovation. From robotics and nanotechnology to space structures and weaponry, the systems of computer frameworks are at the center of the new-age world.
`
};


export const careerOpportunities: CareerOpportunities = {
  title: "Career Opportunities",

  description:
    "Huge employment opportunities available for CSD engineers & have significantly increased across the global market in the past couple of years, in the field of",
  image: careerImage,

  opportunities: [
    "Design Engineer",
  "UX Designer",
  "Graphics Designer",
  "Computer Scientist",
  "Systems Architect",
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
      "To produce globally competent software Professionals with Strong Computing skills and Design based approaches",
  },

  mission: {
    title: "Mission",

    points: [
      "M1: To formulate intellectual, professional and ethical graduates, proficient of meeting challenges in the field of Computer Science and Design through effective teaching learning process.",
      "M2: To develop a knowledgeable individual for a dynamic industrial scenario.",
        "M3: To inculcate research, entrepreneurial skills and human values in order to cater the needs of the society.",
    ],
  },
};


export const facultyMembers: FacultyMember[] = [
  {
  id: 1,
  image: hod,
  name: "Dr.Madhu Patil",
  designation: "Assistant Professor",
},
{
  id: 2,
  image: drChandrakalaHL,
  name: "Dr. Chandrakala H L",
  designation: "Associate Professor",
},
{
  id: 3,
  image: nagarajKalligud,
  name: "Nagaraj .B. Kalligudd",
  designation: "Associate Professor",
},
{
  id: 4,
  image: sanjitha,
  name: "Mrs Sanjitha S",
  designation: "Associate Professor",
},
{
  id: 5,
  image: sowjanyaK,
  name: "Sowjanya K",
  designation: "Assistant Professor",
},
{
  id: 6,
  image: aishwaryaS,
  name: "Aishwarya.S",
  designation: "Assistant Professor",
},
{
  id: 7,
  image: trishaS,
  name: "Trisha S",
  designation: "Assistant Professor",
},
];

export const technicalFacultyMembers: FacultyMember[] = [
  {
    id: 1,
    image: kavya,
    name: "KAVYA R",
    designation: "Programmer",
  },

  {
    id: 2,
    image: chethanKumar,
    name: "Chethan Kumar N K",
    designation: "Computer Operator",
  },
];

export const technicalSupportTeam: FacultyMember[] = [
  {
    id: 1,
    image: kavya,
    name: "KAVYA R",
    designation: "Programmer",
  },
  {
    id: 2,
    image: chethanKumar,
    name: "Chethan Kumar N K",
    designation: "Computer Operator",
  },
];



export const achievementData: AchievementSectionData = {
  title: "Student Success Stories",

  achievements: [
    {
      id: 1,
      title:
        "Nityashree, CSD Department Won 1st Place On-Spot Painting at VTU Youth Festival!",
      image: nityashreeImage,
      alt: "Nityashree won 1st place in on-spot painting at VTU Youth Festival",
    },

    {
      id: 2,
      title:
        "Toppers of the Batch 2023-2027 in the 3rd Semester in VTU Examination",
      image:toppers3SemImage,
      alt: "Toppers of Batch 2023-2027 in 3rd semester VTU examination",
    },

    {
      id: 3,
      title:
        "Toppers of the Batch 2022-2026 in the 5th Semester in VTU Examination",
      image: toppers5SemImage,
      alt: "Toppers of Batch 2022-2026 in 5th semester VTU examination",
    },

    {
      id: 4,
      title:
        "Toppers of the Batch 2022-2026 in the 4th Semester in VTU Examination Held in August-September 2024",
      image: toppers4SemImage,
      alt: "Toppers of Batch 2022-2026 in 4th semester VTU examination",
    },

    {
      id: 5,
      title:
        "Radhika Rani Y P and Likitha J N, Students of 3rd Sem CSD Actively Participated in VTU Volleyball Tournament 2023-2024 Organized by KIT Tiptur on 11/12/2023 and 12/12/2023.",
      image:radhikaLikithaImage,
      alt: "Radhika Rani Y P and Likitha J N participated in VTU volleyball tournament",
    },

    {
      id: 6,
      title:
        "Abhishek, Prateek and Surendra, Students of 3rd Sem CSD Actively Participated in VTU Volleyball Tournament 2023-2024 Organized by HKBK College of Engineering, Bangalore on 09/02/2024.",
      image: volleyballImage,
      alt: "CSD students participated in VTU volleyball tournament organized by HKBK College of Engineering",
    },

    {
      id: 7,
      title:
        "1st Sem CSD Students Who Opted for IoT Under Emerging Technology Course of BGS College of Engineering and Technology, Bengaluru, Participated in Inter College IoT Project Competition-2023 Organized by BIT, Bangalore in Association with BIT IEEE Computer Society SB Chapter & IQAC.",
      image:iotCompetitionImage,
      alt: "CSD students participated in Inter College IoT Project Competition 2023",
    },

    {
      id: 8,
      title:
        "Students of IIIrd Sem CSD Participated and Exhibited Their Projects @JVTM on Feb 19th and 20th 2024.",
      image: csdLabImage,
      alt: "CSD students exhibited their projects at JVTM",
    },
  ],
};


export const csdEventsData: DepartmentEventsData = {
  title: "CSD Events",
  newsletterTitle: "CSD Newsletter",

  events: [
    {
      id: 1,
      title: "VIDYUT HACKATHON",
      image: event1Image,
      alt: "VIDYUT HACKATHON",
    },
    {
      id: 2,
      title: "Linux Unleashed – Practical Session",
      image: event2Image,
      alt: "Linux Unleashed – Practical Session",
    },
    {
      id: 3,
      title:
        "Unleashing the Power of R: A Journey into Data Science and Statistical Computing",
      image: event3Image,
      alt: "Unleashing the Power of R",
    },
    {
      id: 4,
      title: "Accelerate Growth with DevOps Efficiency",
      image: event4Image,
      alt: "Accelerate Growth with DevOps Efficiency",
    },
    {
      id: 5,
      title:
        "Generative AI: Hands-on Learning from Concepts to Applications",
      image: event5Image,
      alt: "Generative AI: Hands-on Learning from Concepts to Applications",
    },
  ],

  newsletters: [
    {
      id: 1,
      title: "CSD Newsletter Vol 1",
    },
    {
      id: 2,
      title: "CSD Newsletter Vol 2",
    },
  ],
};

const csdDepartment: UGDepartmentData = {
  slug: "csd",
  banner: {
    image: csdBannerImage,
    title: "CSD Department",
  },
  tabs: departmentTabs,
  hodMessage,
  aboutDepartment,
  careerOpportunities,
  infrastructureFaculty,
  visionMission,
  facultyMembers,
  technicalFacultyMembers,
  achievementData,
  eventsData: csdEventsData,
};

export default csdDepartment;
