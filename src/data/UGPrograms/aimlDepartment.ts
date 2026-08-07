import careerImage from "../../assets/images/csedepartment/career-opportunities.jpg";
import aimlBannerImage from "../../assets/images/academic/artificial-intelligence.jpg";
import laxmi from "../../assets/images/aimldepartment/Laxmi.jpg";
import nishitaNMurthy from "../../assets/images/aimldepartment/Nishita N Murthy.png";
import pratyakshaS from "../../assets/images/aimldepartment/Pratyaksha S.jpeg";
import drMadhuraGangaiah from "../../assets/images/aimldepartment/Dr.-Madhura-Gangaiah.jpg";
import drManjulaL from "../../assets/images/aimldepartment/Dr. Manjula L.jpeg";
import msVandanaSSardar from "../../assets/images/aimldepartment/Ms.-Vandana-S-Sardar.jpg";
import hod from "../../assets/images/aimldepartment/Dr.JalajaG.jpg";
import event1Image from "../../assets/images/aimldepartment/AIML-EVENTS/AIML-EVENT-1.jpeg";
import event2Image from "../../assets/images/aimldepartment/AIML-EVENTS/AIML-EVENT-2.jpg";
import event3Image from "../../assets/images/aimldepartment/AIML-EVENTS/AIML-EVENT-3.jpg";
import event4Image from "../../assets/images/aimldepartment/AIML-EVENTS/AIML-EVENT-4.jpg";
import event5Image from "../../assets/images/aimldepartment/AIML-EVENTS/AIML-EVENT-5.jpg";
import event6Image from "../../assets/images/aimldepartment/AIML-EVENTS/AIML-EVENT-6.jpg";
import event7Image from "../../assets/images/aimldepartment/AIML-EVENTS/AIML-EVENT-7.jpg";
import event8Image from "../../assets/images/aimldepartment/AIML-EVENTS/AIML-EVENT-8.jpg";
import event9Image from "../../assets/images/aimldepartment/AIML-EVENTS/AIML-EVENT-9.jpeg";
import event10Image from "../../assets/images/aimldepartment/AIML-EVENTS/AIML-EVENT-10.jpeg";
import event11Image from "../../assets/images/aimldepartment/AIML-EVENTS/AIML-EVENT-11.jpeg";
import event12Image from "../../assets/images/aimldepartment/AIML-EVENTS/AIML-EVENT-12.jpeg";
import event13Image from "../../assets/images/aimldepartment/AIML-EVENTS/AIML-EVENT-13.jpeg";
import internshipImage from "../../assets/images/aimldepartment/AI-ML-ACHIEVEMENTS/Internship-1.png";
import jvtmImage from "../../assets/images/aimldepartment/AI-ML-ACHIEVEMENTS/JVTM-1.png";
import educationalTripImage from "../../assets/images/aimldepartment/AI-ML-ACHIEVEMENTS/Educational-Trip-1.png";
import sportsImage from "../../assets/images/aimldepartment/AI-ML-ACHIEVEMENTS/Sports-1.png";
import logoCompetitionImage from "../../assets/images/aimldepartment/AI-ML-ACHIEVEMENTS/Logo-Competition-1.png";


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
    image: hod,
    name: "Dr. Jalaja G",
    designation: "Professor and HOD",
  },

  {
  id: 2,
  image: msVandanaSSardar,
  name: "Vandana S Sardar",
  designation: "Assistant Professor",
},
{
  id: 3,
  image: drManjulaL,
  name: "Dr. Manjula L",
  designation: "Associate Professor",
},
{
  id: 4,
  image: drMadhuraGangaiah,
  name: "Dr. Madhura Gangaiah",
  designation: "Professor",
},
{
  id: 5,
  image: pratyakshaS,
  name: "Pratyaksha S",
  designation: "Assistant Professor",
},
{
  id: 6,
  image: nishitaNMurthy,
  name: "Nishita N Murthy",
  designation: "Assistant Professor",
},
{
  id: 7,
  image: laxmi,
  name: "Laxmi",
  designation: "Assistant Professor",
},
];


export const technicalFacultyMembers: FacultyMember[] = [
  {
    id: 1,
    image: hod,
    name: "Dr. Jalaja G",
    designation: "Professor and HOD",
  },

  {
    id: 2,
    image: msVandanaSSardar,
    name: "Vandana S Sardar",
    designation: "Assistant Professor",
  },
];


export const achievementData: AchievementSectionData = {
  title: "Student Success Stories",

  achievements: [
    {
      id: 1,
      title:
        "1. Internship: Students of 3rd semester AI&ML department have successfully Completed Internship on “Computer Vision Using Cloud” From 14th-16th December 2023",
      image: internshipImage,
      alt: "AI&ML Students Internship",
    },
    {
      id: 2,
      title:
        "2. JVTM: Students from department of AI&ML exhibited their extraordinary talent & participated in JVTM Cultural Fest, Feb 2024",
      image: jvtmImage,
      alt: "AI&ML Students at JVTM Cultural Fest",
    },
    {
      id: 3,
      title:
        "3. Educational Trip: An Educational Trip was Oraginzed on 24th feb2024 for 3rd semester students. It was aimed to empower students to become informed, engaged, and compassionate global citizens.",
      image: educationalTripImage,
      alt: "AI&ML Educational Trip",
    },
    {
      id: 4,
      title:
        "4. Sports: Students participated in VTU State Level Taekwondo championship in 2022 and won 2nd prize in 2023",
      image: sportsImage,
      alt: "AI&ML Sports Achievement",
    },
    {
      id: 5,
      title:
        "5. Logo Competition: Students actively came forward to design logo for department of Artificial Intelligence and machine learning",
      image: logoCompetitionImage,
      alt: "AI&ML Logo Competition",
    },
  ],
};


export const aimlEventsData: DepartmentEventsData = {
  title: "AIML Events",
  newsletterTitle: "AIML Newsletter",

  events: [
    {
      id: 1,
      title: "Future Forge: Generative AI",
      image: event1Image,
      alt: "Future Forge: Generative AI",
    },
    {
      id: 2,
      title: "IPR",
      image: event2Image,
      alt: "IPR",
    },
    {
      id: 3,
      title: "NAL",
      image: event3Image,
      alt: "NAL",
    },
    {
      id: 4,
      title: "Pep Talk",
      image: event4Image,
      alt: "Pep Talk",
    },
    {
      id: 5,
      title: "Chakaranova",
      image: event5Image,
      alt: "Chakaranova",
    },
    {
      id: 6,
      title: "Deep Learning",
      image: event6Image,
      alt: "Deep Learning",
    },
    {
      id: 7,
      title: "Hackathon",
      image: event7Image,
      alt: "Hackathon",
    },
    {
      id: 8,
      title: "Higher Studies",
      image: event8Image,
      alt: "Higher Studies",
    },
    {
      id: 9,
      title: "Present & Future Programs of CSIR-NAL",
      image: event9Image,
      alt: "Present & Future Programs of CSIR-NAL",
    },
    {
      id: 10,
      title: "Fine-Tuning LLaMA3 using evol-instruct",
      image: event10Image,
      alt: "Fine-Tuning LLaMA3 using evol-instruct",
    },
    {
      id: 11,
      title: "Activity Under Coding Club ‘Project Kick Start'",
      image: event11Image,
      alt: "Activity Under Coding Club Project Kick Start",
    },
    {
      id: 12,
      title:
        "Generative AI: Hands on Learning from Concepts to Applications",
      image: event12Image,
      alt: "Generative AI: Hands on Learning from Concepts to Applications",
    },
    {
      id: 13,
      title:
        "Generative AI: Hands on Learning from Concepts to Applications",
      image: event13Image,
      alt: "Generative AI: Hands on Learning from Concepts to Applications",
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
  eventsData: aimlEventsData,
};

export default aimlDepartment;
