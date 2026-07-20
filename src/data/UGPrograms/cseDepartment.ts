import hodImage from "../../assets/images/csedepartment/hod.png";
import careerImage from "../../assets/images/csedepartment/career-opportunities.jpg";
import techIumImage from "../../assets/images/achievement/tech-ium.jpg";
import internshipImage from "../../assets/images/achievement/internship.jpg";
import event1Image from "../../assets/images/cseevents/event-1.jpg";
import event2Image from "../../assets/images/cseevents/event-2.jpg";
import cseBannerImage from "../../assets/images/academic/computer-science.jpg";

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

  description: `Greetings from the Department of Computer Science and Engineering, BGSCET. It has been universally accredited that the flagship branch of engineering, computer science discipline, is dedicated to ensuring great careers for its students. The Department is committed to working towards developing Engineers with a rich blend of competent, technical, managerial, and social skills and contributing to societal needs and nation-building. This tends to forge deeper industry associations than ever before, creating a research culture from day one and ensuring unified education using the best technology available anywhere. We are focused not only on delivering technical education to our students but also on the leadership proficiencies through which they can lead to economic development for others. The intellectual ambiance in the Department of CSE is conducive to the holistic development of the students. The excellent infrastructure, experienced and scholarly team of faculty members are dedicated to strengthening effective teaching-learning processes, thereby ensuring quality education. The department places emphasis on reinforcing the laboratory infrastructure by adopting novel industry-relevant technologies to empower students to learn and stimulate integrated learning to take up industry-relevant projects. Innovative teaching and learning methods are used to achieve learning abilities through practice, exposure, and motivation. Our goal is to foster critical thinking and analytical skills to ensure that graduates are employable, entrepreneurs, and ethical members of Society.`
};


export const aboutDepartment: AboutDepartment = {
  title: "About CSE",

  description: `The CSE department, established in 2022-23 with an intake of 60, now has an intake of 120 students for the current year, CSE is a branch of Engineering that deals with computing theories, programming languages, program design, algorithms, computer hardware and software, and integrates several fields of computer science. Computer science engineers are involved in many aspects of computing, from the design of individual microprocessors, personal computers, and supercomputers to circuit designing and writing software. CSE offers abundant opportunities for graduates to be at the forefront of technological innovation. From robotics and nanotechnology to space structures and weaponry, the systems of computer frameworks are at the center of the new-age world.
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
    "TThe department will have the best infrastructure with the latest high-end computing facilities to cater to the academic needs of the VTU-prescribed syllabus and provide a real-time experience to the students. The department will have renowned faculty members with long academic experience and experts from industries in India and abroad.",
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
      title: "Tech IUM Winners",
      image: techIumImage,
      alt: "Tech IUM Winners",
    },

    {
      id: 2,
      title: "3rd Sem CSE Student, Manushree V & Rohini M, Gained Internship Opportunity At Vinjey's Software Systems With Stipend Of 20K",
      image: internshipImage,
      alt: "Internship Achievement",
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
  eventsData: cseEventsData,
};

export default cseDepartment;
