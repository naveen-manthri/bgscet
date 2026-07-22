import hodImage from "../../assets/images/csedepartment/hod.png";
import careerImage from "../../assets/images/csedepartment/career-opportunities.jpg";
import techIumImage from "../../assets/images/achievement/tech-ium.jpg";
import internshipImage from "../../assets/images/achievement/internship.jpg";
import event1Image from "../../assets/images/cseevents/event-1.jpg";
import event2Image from "../../assets/images/cseevents/event-2.jpg";
import aidsBannerImage from "../../assets/images/academic/artificial-intelligence.jpg";

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

  name: "Dr. Parvathi C",

  designation: [
    "Professor and HOD",
    "Department of AI & DS",
    "Watch on YouTube",
  ],

  description: `Welcome to the Department of Artificial Intelligence and Data Science (AI&DS) at BGSCET!!

AI&DS represents an emerging field of study, characterized by its application of scientific methodologies to tackle complex challenges. Over the past decade, AI&DS has burgeoned into a distinct discipline within Computer Engineering, precipitating a transformative shift across industries, academia, and research spheres. Through the empowerment of machine learning, AI&DS is reshaping our world at an unprecedented pace.

Our curriculum is meticulously crafted to furnish students with the requisite skills for data analysis, interpretation, and visualization across diverse formats. By integrating principles of statistics, computing, artificial intelligence, and data science, we equip our students with the latest tools and technologies to enhance efficiency and amplify human capabilities. The profound advancements in AI&DS have left an indelible mark on sectors spanning FinTech, AgriTech, Healthcare, Education, Manufacturing, and Retail

Within our department, we embark on a multitude of significant projects encompassing Internet of Things (IoT), Drones, Cloud Computing, Artificial Intelligence, Networking, and Machine Learning. Our faculty comprises dynamic individuals driven by a passion for education, with a significant proportion holding Ph.D. credentials. Committed to delivering the highest caliber of technical education, many of our faculty members have showcased their research on esteemed platforms worldwide. Additionally, our faculty boasts certifications across various domains within Computer Science & Engineering.

Facilitating robust student engagement lies at the core of our departmental ethos. Through regular interactions, annual educational excursions, and a responsive feedback mechanism, we ensure an enriching educational experience for all. We frequently host distinguished visitors from around the globe for collaborative research endeavors and academic discourse. Moreover, our department organizes workshops and seminars conducted by experts and researchers, offering students invaluable insights into contemporary technologies.

In line with our commitment to excellence, we have recently forged partnerships with AiVolved and CyberDiplomat Pvt. Technologies Co., Ltd., aimed at providing comprehensive training, certification, and placement support to our students. These initiatives, coupled with our unwavering dedication, continue to position our department as the preferred choice for prospective students seeking admission to BGSCET.

As we endeavor to uphold the vision upon which our department was founded, we take pride in nurturing students who are diligent, pragmatic, and adept at navigating diverse work environments. I extend a warm invitation to you to join us on our journey toward establishing a world-class Center of Excellence in education, training, and research. Come, be a part of our endeavor to shape the future of AI&DS. Welcome aboard!` 
};


export const aboutDepartment: AboutDepartment = {
  title: "About AI & DS",

  description: `The department of Artificial intelligence and Machine learning(AI&ML) is established during the academic year 2022-23 with an intake of 60.

Artificial intelligence and Machine learning(AI&ML) areas are the branches of Computer Science and rapidly growing technologies, used to create intelligent systems that can simulate human thinking capability and behavior across service and non-service sectors. In other words, AI&ML enables the Computer to mimic the human brain in terms of making decisions accurately without manual intervention. AI&ML is an exciting field of study that brings together theories, standards, methods, and innovative ideas from various domains like mathematics, cognitive science, electronics, and embedded systems. Its purpose is to create remarkable advancements by leveraging the power of these diverse disciplines, intelligent systems that mimic human behaviour.`
};


export const careerOpportunities: CareerOpportunities = {
  title: "Career Opportunities",

  description:
    `AI&DS are amongst the hottest fields of the 21st century that will impact all segments of daily life by 2025, from transport and logistics to healthcare and customer service. Immense employment opportunities available for AI&DS engineers & have significantly increased worldwide in the past couple of years, with demand easily outstripping supply in the field of`,
  image: careerImage,

  opportunities: [
    "Data Analyst",
  "Product Analyst",
  "Big Data Engineer",
  "BI Analyst",
  "Data Scientist",
  "Data Journalist",
  "Chief Strategy & Analytics Officer",
  "Strategic Data Analytics Analyst",
  "Data Architect",
  "Data Visualizer",
  "DM Architect",
  ],
};


export const infrastructureFaculty: InfrastructureFaculty = {
  title: "Infrastructure & Faculty",

  description:
    `You will learn how to design, create and implement AI&DS based software solutions to solve actual business problems. This course helps to explore concepts such as AI, Data Analytics, Data visualization, Machine Learning, Deep Learning, semantic web and social network analytics, Blockchain Technologies, and Data Security and Privacy.

AI&DS department provides opportunities for the students to participate in Project showcase, Hackathons, Ideathons, Competitions, Startup & Entrepreneurial activities, Social activities etc.,

The AI&DS department will have the best infrastructure with the latest high-end computing facilities to cater the academic needs of the VTU prescribed syllabus and provide a real-time experience to the students. The department will have renowned faculty members with long academic experience and experts from industries in India and abroad.`
};


export const visionMission: DepartmentVisionMission = {
  vision: {
    title: "Vision",

    description:
      "To nurture innovative minds for academic excellence with emphasis on in-depth technical knowledge for creating a value-based sustainable society"
  },

  mission: {
    title: "Mission",

    points: [
      "1: Developing practically trained skilled professionals to meet the demands of the corporate world",
      "2: Creating an ecosystem of academic excellence through the best teaching-learning methods.",
        "3: Grooming professionals with high ethical values and ability to solve real-life problems",
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
      title: "1. Students from department of AI&DS exhibited their extraordinary talent & achieved a perfect score of 100 in the VTU Math examination.",
      image: techIumImage,
      alt: "Tech IUM Winners",
    },

    {
      id: 2,
      title: "2. Miss Khushi C R topped in the class in 2nd semester with a score of 87%. Your dedication, hard work, and outstanding performance has earned you this well-deserved honor.",
      image: internshipImage,
      alt: "Internship Achievement",
    },
    {
      id: 3,
      title: "3. One of our AI&DS student has secured 2nd Place in the Debate Competition conducted by BGSCET on the occasion of Karnataka Rajyostava on Nov 01st 2023.",
      image: techIumImage,
      alt: "Tech IUM Winners",
    },

    {
      id: 4,
      title: "4. One of our AI&DS students secured 2nd place in the Rangoli Competition conducted by BGSCET on the occasion Karnataka Rajyostava on Nov 01st 2023.",
      image: internshipImage,
      alt: "Internship Achievement",
    },
    {
      id: 5,
      title: "5. Students from department of AI&DS, secured 1st Place in the Department level Kabbadi Competition conducted by BGSCET on the occasion of Annual Sports Meet.",
      image: internshipImage,
      alt: "Internship Achievement",
    },
    {
      id: 6,
      title: "6. One of our AI&DS students has secured 1st place in 200m race and 2nd place in the relay Competition conducted by BGSCET on the occasion of Annual Sports Meet.",
      image: internshipImage,
      alt: "Internship Achievement",
    },
    {
      id: 7,
      title: "7. Students from department of AI&DS, have secured 1st Place in the Jana Pada Group Dance Competition at Intercollege level on the occasion of Sambrama-2023 Organized by SJCIT, Chikkaballapura District.",
      image: internshipImage,
      alt: "Internship Achievement",
    },
    {
      id: 8,
      title: "8. Students from department of AI&DS secured 3rd place in the Group Dance Competition conducted by BGSCET on the occasion of Event Mania.",
      image: internshipImage,
      alt: "Internship Achievement",
    },
    {
      id: 9,
      title: "9. Our AI&DS student secured 1st place in the Rangoli Competition conducted by BGSCET on the occasion of Event Mania.",
      image: internshipImage,
      alt: "Internship Achievement",
    },
     {
      id: 10,
      title: "10. Students from department of AI&DS secured 1st Place in the Debate Competition conducted by BGSCET on the occasion of Event Mania.",
      image: internshipImage,
      alt: "Internship Achievement",
    },
     {
      id: 11,
      title: "11. Our students secured 1st and 2nd place in Solo Western Dance Competition conducted by BGSCET on the occasion of Event Mania.",
      image: internshipImage,
      alt: "Internship Achievement",
    },
  ],
};


export const aidsEventsData: DepartmentEventsData = {
  title: "AI & DS Events",
  newsletterTitle: "AI & DS Newsletter",

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
      title: "AI & DS Newsletter Vol 1",
    },

    {
      id: 2,
      title: "AI & DS Newsletter Vol 2",
    },
  ],
};

const aidsDepartment: UGDepartmentData = {
  slug: "aids",
  banner: {
    image: aidsBannerImage,
    title: "AI & DS Department",
  },
  tabs: departmentTabs,
  hodMessage,
  aboutDepartment,
  careerOpportunities,
  infrastructureFaculty,
  visionMission,
  facultyMembers,
  achievementData,
  eventsData: aidsEventsData,
};

export default aidsDepartment;
