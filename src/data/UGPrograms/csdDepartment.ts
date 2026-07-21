import hodImage from "../../assets/images/csedepartment/hod.png";
import careerImage from "../../assets/images/csedepartment/career-opportunities.jpg";
import techIumImage from "../../assets/images/achievement/tech-ium.jpg";
// import internshipImage from "../../assets/images/achievement/internship.jpg";
import event1Image from "../../assets/images/cseevents/event-1.jpg";
import event2Image from "../../assets/images/cseevents/event-2.jpg";
import csdBannerImage from "../../assets/images/academic/academic-01.jpg";

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
    image: hodImage,
    name: "Dr. Manjula G",
    designation: "Professor and HOD",
  },

  {
    id: 2,
    image: hodImage,
    name: "Faculty Name",
    designation: "Assistant Professor",
  },
];


export const achievementData: AchievementSectionData = {
  title: "Student Success Stories",

  achievements: [
    {
      id: 1,
      title:
        "Nityashree, CSD Department Won 1st Place On-Spot Painting at VTU Youth Festival!",
      image: techIumImage,
      alt: "Nityashree won 1st place on-spot painting at VTU Youth Festival",
    },

    {
      id: 2,
      title:
        "Toppers of the Batch 2023-2027 in the 3rd Semester in VTU Examination",
      image: techIumImage,
      alt: "Toppers of Batch 2023-2027 in 3rd semester VTU examination",
    },

    {
      id: 3,
      title:
        "Toppers of the Batch 2022-2026 in the 5th Semester in VTU Examination",
      image: techIumImage,
      alt: "Toppers of Batch 2022-2026 in 5th semester VTU examination",
    },

    {
      id: 4,
      title:
        "Toppers of the Batch 2022-2026 in the 4th Semester in VTU Examination Held in August-September 2024",
      image: techIumImage,
      alt: "Toppers of Batch 2022-2026 in 4th semester VTU examination",
    },

    {
      id: 5,
      title:
        "Radhika Rani Y P and Likitha J N, Students of 3rd Sem CSD Actively Participated in VTU Volleyball Tournament 2023-2024 Organized by KIT Tiptur",
      image: techIumImage,
      alt: "Students participated in VTU volleyball tournament organized by KIT Tiptur",
    },

    {
      id: 6,
      title:
        "Abhishek, Prateek and Surendra, Students of 3rd Sem CSD Actively Participated in VTU Volleyball Tournament 2023-2024 Organized by HKBK College of Engineering, Bangalore",
      image: techIumImage,
      alt: "Students participated in VTU volleyball tournament organized by HKBK College",
    },

    {
      id: 7,
      title:
        "Likitha J N, Student of 3rd Sem CSD Actively Participated in VTU Throwball Tournament 2023-2024 Organized by ATRIA Institute of Technology, Bengaluru",
      image: techIumImage,
      alt: "Likitha J N participated in VTU throwball tournament organized by ATRIA Institute",
    },

    {
      id: 8,
      title:
        "Likitha J N, Student of 3rd Sem CSD Actively Participated and Secured 3rd Place in VTU Throwball Tournament 2023-2024 Organized by CMRIT, Bengaluru",
      image: techIumImage,
      alt: "Likitha J N secured 3rd place in VTU throwball tournament",
    },

    {
      id: 9,
      title:
        "1st Sem CSD Students Participated in Inter College IoT Project Competition-2023 Organized by BIT Bangalore in Association with BIT IEEE Computer Society SB Chapter & IQAC",
      image: techIumImage,
      alt: "CSD students participated in Inter College IoT Project Competition",
    },

    {
      id: 10,
      title:
        "Dhanyashree G and Yeshaswini R Presented Paper Titled Construction & Demolition Waste – Overview, Insights, Management, Reviews and its Future in International Conference SAIT for SD 2023",
      image: techIumImage,
      alt: "Students presented research paper in international conference",
    },

    {
      id: 11,
      title:
        "Roshini and Shwetha Nayak of III Sem CSD Published Research Article 'Packet Sniffing' in Vandana Publications",
      image: techIumImage,
      alt: "Students published research article Packet Sniffing",
    },

    {
      id: 12,
      title:
        "III Sem CSD Students Participated and Exhibited Their Projects at JVTM on February 19th and 20th 2024",
      image: techIumImage,
      alt: "CSD students exhibited their projects at JVTM",
    },

    {
      id: 13,
      title:
        "Dhanyashree and Yeshaswini R Submitted Research Article Titled 'Proposal of ML Algorithm for the C&D Waste Prediction Rate' to International Conference at IIT Ropar",
      image: techIumImage,
      alt: "Students submitted research article on ML algorithm",
    },

    {
      id: 14,
      title:
        "Dhanyashree and Yeshaswini R Published Research Article Titled 'Unmasking the Evolution of Social Engineering in Cyber Security: Techniques, Vulnerabilities, and Countermeasures' in Vandana Publications",
      image: techIumImage,
      alt: "Students published research article on cyber security",
    },
  ],
};


export const csdEventsData: DepartmentEventsData = {
  title: "CSD Events",
  newsletterTitle: "CSD Newsletter",

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
    whatsappLink: "https://wa.me/919964897207",
  },
  tabs: departmentTabs,
  hodMessage,
  aboutDepartment,
  careerOpportunities,
  infrastructureFaculty,
  visionMission,
  facultyMembers,
  achievementData,
  eventsData: csdEventsData,
};

export default csdDepartment;
