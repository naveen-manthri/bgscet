import hodImage from "../../assets/images/csedepartment/hod.png";
import careerImage from "../../assets/images/csedepartment/career-opportunities.jpg";
import techIumImage from "../../assets/images/achievement/tech-ium.jpg";
import internshipImage from "../../assets/images/achievement/internship.jpg";
import event1Image from "../../assets/images/cseevents/event-1.jpg";
import event2Image from "../../assets/images/cseevents/event-2.jpg";
import aimlBannerImage from "../../assets/images/academic/artificial-intelligence.jpg";

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

  name: "Dr. Jalaja G",

  designation: [
    "Professor and HOD",
    "AIML Department",
    "Watch on YouTube",
  ],

  description: `Greetings from the department of Artificial intelligence and Machine learning(AI&ML), BGSCET 
  The dept. is established during the academic year 2022-23 with an intake of 60 with a vision of blending and shaping our students with academics excellence, societal concern, innovation towards research and more importantly family values. Over the past year, we have collectively worked tirelessly and committed to maintain our position as a leading hub of engineering education and innovation. Our commitment to excellence and innovation has been unwavering. Our faculty members are continued to excel in both teaching and research, and dedicated to nurturing the next generation of engineers. Students utilizing Wi-Fi enabled campus have demonstrated exceptional skills, creativity, and adaptability. Students are committed to learning, and their pursuit of knowledge are truly commendable. The department is having well equipped laboratory with high end machines adapting novel industry relevant technologies and digital class rooms. Looking ahead, we face new challenges and opportunities. As a department, we must remain agile and forward-thinking, adapting to the changing landscape of engineering and technology. Let’s continue to work together to empower our students with knowledge, skills, and values that will equip them to excel in their careers and make a positive impact on society.`
};


export const aboutDepartment: AboutDepartment = {
  title: "About AIML",

  description: `The department of Artificial intelligence and Machine learning(AI&ML) is established during the academic year 2022-23 with an intake of 60.

Artificial intelligence and Machine learning(AI&ML) areas are the branches of Computer Science and rapidly growing technologies, used to create intelligent systems that can simulate human thinking capability and behavior across service and non-service sectors. In other words, AI&ML enables the Computer to mimic the human brain in terms of making decisions accurately without manual intervention. AI&ML is an exciting field of study that brings together theories, standards, methods, and innovative ideas from various domains like mathematics, cognitive science, electronics, and embedded systems. Its purpose is to create remarkable advancements by leveraging the power of these diverse disciplines, intelligent systems that mimic human behaviour.`
};


export const careerOpportunities: CareerOpportunities = {
  title: "Career Opportunities",

  description:
    `AI & ML focuses on collecting, categorizing, strategizing, analyzing and interpreting data. AI & ML is an exceptional field that focuses on the growth and implementation of embedded systems, such as robotics and IoT applications. It goes beyond by encompassing the principles of machine learning and deep learning to construct models that address diverse computational and real-world business challenges. Considered a highly coveted course, AI & ML equips individuals with specialized skills and cutting-edge technology in Computer Science & Engineering, opening up a world of opportunities across various industry sectors, including banking, finance, and securities & Insurances, Retail, Healthcare, Defense, Entertainment, Agriculture and many more. The Course covers key concepts like AI-based technologies, including Machine Learning, Deep Learning, Computer Vision, Natural Language Processing, Speech Recognition, Text speech, and Reinforcement Learning etc.,

The 4-year B.E. in AI & ML program presents exposure to hands-on technologies to create applications and solutions in Python, R, NoSQL, Data Warehousing & Data Mining, Big Data Analytics and algorithms etc., There are many applications of AI&ML in our day-to-day life.`,
  image: careerImage,

  opportunities: [
    "Manufacturing Robots",
  "Self-driving Cars",
  "Smart Assistants",
  "Proactive Healthcare Management",
  "Disease Mapping",
  "Automated Financial Investing",
  "Virtual Tourism/Transportation Booking Agent",
  "Social Media Monitoring",
  ],
};


export const infrastructureFaculty: InfrastructureFaculty = {
  title: "Infrastructure & Faculty",

  description:
    `Is an exciting field of study that brings together theories, standards, methods, and innovative ideas from various domains like mathematics, cognitive science, electronics, and embedded systems. Its purpose is to create remarkable advancements by leveraging the power of these diverse discipline.

This course helps to explore concepts such as AI, Machine Learning, Deep Learning, Image Processing, Virtual Reality and IoT and its applications. Fabulous employment opportunities are available for AI&ML engineers & significantly increased worldwide in the past three years.

AI &ML Department provides opportunities for the students to participate in Project showcase, Hackathons, Ideathons, Competitions, Startup & Entrepreneurial activities, Social activities etc.,

The department will have the best infrastructure with the latest high-end computing facilities to cater the academic needs of the VTU prescribed syllabus and provide a real-time experience to the students. The department will have renowned faculty members with long academic experience and experts from industries in India and abroad.`
};


export const visionMission: DepartmentVisionMission = {
  vision: {
    title: "Vision",

    description:
      "To transform students into innovative professionals by cracking real world problems using artificial intelligence and machine learning approaches.",
  },

  mission: {
    title: "Mission",

    points: [
      "1: Enriching students with core knowledge which will avail themselves to resolve real world problems.",
      "2: Empowering students by collaborating with industries and Government organization, motivating them to take up internships and innovative projects and assignments.",
        "3: Equipping students with the skills making them industry ready, self-employable, researchers and Entrepreneur.",
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
      title: "1. Internship: Students of 3rd semester AI&ML department have successfully Completed Internship on “Computer Vision Using Cloud” From 14th-16th December 2023",
      image: techIumImage,
      alt: "Tech IUM Winners",
    },

    {
      id: 2,
      title: "2. JVTM: Students from department of AI&ML exhibited their extraordinary talent & participated in JVTM Cultural Fest, Feb 2024",
      image: internshipImage,
      alt: "Internship Achievement",
    },
    {
      id: 3,
      title: "3. Educational Trip: An Educational Trip was Oraginzed on 24th feb2024 for 3rd semester students. It was aimed to empower students to become informed, engaged, and compassionate global citizens.",
      image: techIumImage,
      alt: "Tech IUM Winners",
    },

    {
      id: 4,
      title: "4. Sports: Students participated in VTU State Level Taekwondo championship in 2022 and won 2nd prize in 2023",
      image: internshipImage,
      alt: "Internship Achievement",
    },
    {
      id: 5,
      title: "5. Logo Competition: Students actively came forward to design logo for department of Artificial Intelligence and machine learning",
      image: internshipImage,
      alt: "Internship Achievement",
    },
  ],
};


export const aimlEventsData: DepartmentEventsData = {
  title: "AIML Events",
  newsletterTitle: "AIML Newsletter",

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
      title: "AIML Newsletter Vol 1",
    },

    {
      id: 2,
      title: "AIML Newsletter Vol 2",
    },
  ],
};

const aimlDepartment: UGDepartmentData = {
  slug: "aiml",
  banner: {
    image: aimlBannerImage,
    title: "AIML Department",
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
  eventsData: aimlEventsData,
};

export default aimlDepartment;
