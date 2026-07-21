import hodImage from "../../assets/images/csedepartment/hod.png";
import careerImage from "../../assets/images/csedepartment/career-opportunities.jpg";
import techIumImage from "../../assets/images/achievement/tech-ium.jpg";
import internshipImage from "../../assets/images/achievement/internship.jpg";
import event1Image from "../../assets/images/cseevents/event-1.jpg";
import event2Image from "../../assets/images/cseevents/event-2.jpg";
import iseBannerImage from "../../assets/images/academic/academic-01.jpg";


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

  name: "Dr. Chaitra Naveen",

  designation: [
    "Professor and HOD",
    "Department of Information Science",
    "Watch on YouTube",
  ],

  description: 
    `Greetings from the Department of Information Science and Engineering at BGS College of Engineering, Bengaluru.

It gives me an immense opportunity to lead the Department of Information Science and Engineering which is striving towards technical education to achieve academic excellence and innovative ideas to make the students industry-ready and ensure great careers of the students.

Our goal is to ensure that our engineering graduates are well prepared to play leadership proficiencies and be an ethical citizen of a global society.

The course ensures quality education with dedicated faculty and encourage the teamwork among students through projects and co-curricular activities to strengthen effective teaching learning process. Each student’s overall progress is closely monitored by a proctor and the same is communicated to their parents.

The excellent infrastructure with reinforcing the laboratory infrastructure and placement cell to ensure a bright future to the students. The faculty members are involved in research and are pursuing their Ph.D., in their related domains.

We are confident that our students will emerge as assets not only to the institution and to the organization they join.`
};


export const aboutDepartment: AboutDepartment = {
  title: "About ISE",

  description: `The department of ISE is established during the academic year 2022-23 with an intake of 60.`
};


export const careerOpportunities: CareerOpportunities = {
  title: "Career Opportunities",

  description:
    "ISE graduates can choose from abundant career paths in different fields will get to work on the evaluation of ethical, social, and legitimate standards of the engineering practices. Here is a list of major career profiles like",

  image: careerImage,

  opportunities: [
    "Software Engineer",
  "Software Tester",
  "Application Developer",
  "Web Designer",
  "Information and Multimedia Designer",
  "Medical Information Scientist",
  "Technology Developer",
  "IT Specialist",
  "Technical Consultant",
  "Quality Analyst",
  "Information Network Manager",
  "Information Content Designer"
  ],
};


export const infrastructureFaculty: InfrastructureFaculty = {
  title: "Infrastructure & Faculty",

  description:
        `ISE department provides opportunities for the students to participate in Project showcase, Hackathons, Ideathons, Competitions, Startup & Entrepreneurial activities, Social activities etc.,
        The department will have the best infrastructure with the latest high-end computing facilities to cater the academic needs of the VTU prescribed syllabus and provide a real-time experience to the students. The department will have renowned faculty members with long academic experience and experts from industries in India and abroad.`
};


export const visionMission: DepartmentVisionMission = {
  vision: {
    title: "Vision",

    description:
      "To excel in teaching and innovative research in the field of information science and engineering to support technologically globalized society.",
  },

  mission: {
    title: "Mission",

    points: [
      "1. To inculcate strong academic foundation in the information technology domain to empower and equip students for successful career through various teaching learning approaches.",
      "2. To identify innovative research-based activities and strengthen entrepreneurial abilities.",
       "3. To emphasize the ethical use of technology instilling in our students, a sense of social responsibility towards the betterment of society."
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
      title: "1. Toppers of the Batch 2024-2028 in the 1st semester in VTU examination",
      image: techIumImage,
      alt: "Tech IUM Winners",
    },

    {
      id: 2,
      title: "2. Toppers of the Batch 2023-2027 in the 3rd semester in VTU examination",
      image: internshipImage,
      alt: "Internship Achievement",
    },
    {
      id: 3,
      title: "3. Toppers of the Batch 2022-2026 in the 5th semester in VTU examination",
      image: internshipImage,
      alt: "Internship Achievement",
    },
    {
      id: 4,
      title: "4. Toppers of the Batch 2022-2026 in the 4th semester in VTU examination held in August-September 2024",
      image: internshipImage,
      alt: "Internship Achievement",
    },
    {
      id: 5,
      title: "5. Mr. Vaddi Raghunandan, Department of ISE, has been awarded a Gold medal for successfully completing the course “BIG DATA COMPUTING” in NPTEL.",
      image: internshipImage,
      alt: "Internship Achievement",
    },
    {
      id: 6,
      title: "6. Students of the ISE department participated & won 2nd Prize in Dance @ JVTM Cultural Fest, Feb 2024",
      image: internshipImage,
      alt: "Internship Achievement",
    },
    {
      id: 7,
      title: "7. Our ISE 3rd Sem student Representing BGSCET @ CMRIT – VTU Throwball Tournament -13th Feb 2024 at Kalpatharu Institute of Technology, Tiptur in association with VTU, Volleyball Tournament, 11/01/2024",
      image: internshipImage,
      alt: "Internship Achievement",
    },
  ],
};


export const iseEventsData: DepartmentEventsData = {
  title: "ISE Events",
  newsletterTitle: "ISE Newsletter",

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
      title: "ISE Newsletter Vol 1",
    },

    {
      id: 2,
      title: "ISE Newsletter Vol 2",
    },
  ],
};

const iseDepartment: UGDepartmentData = {
  slug: "ise",
  banner: {
    image: iseBannerImage,
    title: "ISE Department",
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
  eventsData: iseEventsData,
};

export default iseDepartment;
