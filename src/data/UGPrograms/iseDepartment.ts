import careerImage from "../../assets/images/csedepartment/career-opportunities.jpg";


import iseBannerImage from "../../assets/images/academic/academic-01.jpg";
import sushmitaNS from "../../assets/images/isedepartment/SUSHMITA-N-S.png";
import maheshwariPatil from "../../assets/images/isedepartment/Maheshwari_Patil.jpg";
import poojithaK from "../../assets/images/isedepartment/Poojitha_K.jpg";
import jyothiR from "../../assets/images/isedepartment/jyothi-r.jpg";
import mrsHemalathaKN from "../../assets/images/isedepartment/Mrs.HemalathaKN.jpg";
import anoopNPrasad from "../../assets/images/isedepartment/AnoopNPrasad-.jpg";
import hod from "../../assets/images/isedepartment/chaitra_hod.jpeg";
import event1Image from "../../assets/images/isedepartment/EVENTS/ise-1.jpg";
import event2Image from "../../assets/images/isedepartment/EVENTS/ise-2.jpeg";
import event3Image from "../../assets/images/isedepartment/EVENTS/ise-3.jpeg";
import event4Image from "../../assets/images/isedepartment/EVENTS/ise-4.jpeg";
import event5Image from "../../assets/images/isedepartment/EVENTS/ise-5.jpeg";
import event6Image from "../../assets/images/isedepartment/EVENTS/ise-6.jpeg";
import event7Image from "../../assets/images/isedepartment/EVENTS/ise-7.jpeg";
import topper2024Image from "../../assets/images/isedepartment/ISE-Achievements/Topper-2024-2028.jpeg";
import topper2023Image from "../../assets/images/isedepartment/ISE-Achievements/Toppers-2023-2027.jpeg";
import topper2022_5semImage from "../../assets/images/isedepartment/ISE-Achievements/Toppers-2022-2026 -5sem-VTU.jpeg";
import topper2022_4semImage from "../../assets/images/isedepartment/ISE-Achievements/Toppers-2022-2026-4th-sem-VTU.jpeg";
import goldMedalImage from "../../assets/images/isedepartment/ISE-Achievements/ISE-Gold-medal.png";
import danceImage from "../../assets/images/isedepartment/ISE-Achievements/ISE-dep-2nd-Prize-Dance-1.png";
import volleyballImage from "../../assets/images/isedepartment/ISE-Achievements/ISE-VTU-Volleyball-Tournament-1.png";
import Navya from "../../assets/images/isedepartment/iseTechFaculty/Navya.jpeg";
import Arpitha from "../../assets/images/isedepartment/iseTechFaculty/Arpitha.jpeg";
import Saahithi from "../../assets/images/isedepartment/iseTechFaculty/saahithi-ISE-.jpeg";

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

  description: `The department of ISE is established during the academic year 2022-23 with an intake of 60.
  ISE graduates will be able to design, development and implement the software applications for real-world problems by using latest modern IT tools and technologies to meet the industry requirements. There is not much difference between Computer science & Information Science.`
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
    image: hod,
    name: "Dr Chaitra Naveen",
    designation: "Professor and HOD",
  },

  {
  id: 2,
  image: anoopNPrasad,
  name: "Anoop N Prasad",
  designation: "Assistant Professor",
},
{
  id: 3,
  image: mrsHemalathaKN,
  name: "Hemalatha K N",
  designation: "Assistant Professor",
},
{
  id: 4,
  image: jyothiR,
  name: "Jyothi R",
  designation: "Assistant Professor",
},
{
  id: 5,
  image: poojithaK,
  name: "Poojitha K",
  designation: "Assistant Professor",
},
{
  id: 6,
  image: maheshwariPatil,
  name: "Maheshwari Patil",
  designation: "Assistant Professor",
},
{
  id: 7,
  image: sushmitaNS,
  name: "SUSHMITA N S",
  designation: "Assistant Professor",
},
];


export const technicalFacultyMembers: FacultyMember[] = [
  {
    id: 1,
    image: Saahithi,
    name: "Ms Saahithi",
    designation: "Programmer",
  },

  {
    id: 2,
    image: Navya,
    name: "Ms Navya",
    designation: "Programmer",
  },
  {
    id:3,
    image:Arpitha,
    name: "Arpitha N D",
    designation: "Lab Instructor",
  }
];


export const achievementData: AchievementSectionData = {
  title: "Student Success Stories",

  achievements: [
    {
      id: 1,
      title:
        "1. Toppers of the Batch 2024-2028 in the 1st semester in VTU examination",
      image: topper2024Image,
      alt: "Toppers of the Batch 2024-2028",
    },
    {
      id: 2,
      title:
        "2. Toppers of the Batch 2023-2027 in the 3rd semester in VTU examination",
      image: topper2023Image,
      alt: "Toppers of the Batch 2023-2027",
    },
    {
      id: 3,
      title:
        "3. Toppers of the Batch 2022-2026 in the 5th semester in VTU examination",
      image: topper2022_5semImage,
      alt: "Toppers of the Batch 2022-2026 5th Semester",
    },
    {
      id: 4,
      title:
        "4. Toppers of the Batch 2022-2026 in the 4th semester in VTU examination held in August-September 2024",
      image: topper2022_4semImage,
      alt: "Toppers of the Batch 2022-2026 4th Semester",
    },
    {
      id: 5,
      title:
        "5. Mr. Vaddi Raghunandan, Department of ISE, has been awarded a Gold medal for successfully completing the course “BIG DATA COMPUTING” in NPTEL.",
      image: goldMedalImage,
      alt: "ISE Gold Medal Achievement",
    },
    {
      id: 6,
      title:
        "6. Students of the ISE department participated & won 2nd Prize in Dance @ JVTM Cultural Fest, Feb 2024",
      image: danceImage,
      alt: "ISE Students Dance Achievement",
    },
    {
      id: 7,
      title:
        "7. Our ISE 3rd Sem student Representing BGSCET @ CMRIT – VTU Throwball Tournament -13th Feb 2024 at Kalpatharu Institute of Technology, Tiptur in association with VTU, Volleyball Tournament, 11/01/2024",
      image: volleyballImage,
      alt: "ISE VTU Volleyball Tournament Achievement",
    },
  ],
};


export const iseEventsData: DepartmentEventsData = {
  title: "ISE Events",
  newsletterTitle: "ISE Newsletter",

  events: [
    {
      id: 1,
      title: "ZeroOne init_to_win_IT CHAPTER – 1",
      image: event1Image,
      alt: "ZeroOne init_to_win_IT CHAPTER – 1",
    },
    {
      id: 2,
      title: "Generative AI: Hands-On Learning from Concepts to Applications",
      image: event2Image,
      alt: "Generative AI: Hands-On Learning from Concepts to Applications",
    },
    {
      id: 3,
      title: "Big Data Tools and Technologies",
      image: event3Image,
      alt: "Big Data Tools and Technologies",
    },
    {
      id: 4,
      title: "Infosys Springboard Student Enablement Program",
      image: event4Image,
      alt: "Infosys Springboard Student Enablement Program",
    },
    {
      id: 5,
      title: "Unleashing the Power of R: A Journey into Data Science and Statistical Computing",
      image: event5Image,
      alt: "Unleashing the Power of R: A Journey into Data Science and Statistical Computing",
    },
    {
      id: 6,
      title: "Master Conversational AI: Building Intelligent Chatbot Applications",
      image: event6Image,
      alt: "Master Conversational AI: Building Intelligent Chatbot Applications",
    },
    {
      id: 7,
      title: "Accelerate Growth with DevOps Efficiency",
      image: event7Image,
      alt: "Accelerate Growth with DevOps Efficiency",
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
  eventsData: iseEventsData,
};

export default iseDepartment;
