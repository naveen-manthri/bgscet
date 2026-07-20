import hodImage from "../assets/images/csedepartment/hod.png";
import careerImage from "../assets/images/csedepartment/career-opportunities.jpg";

export const departmentTabs = [
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

export const hodMessage = {
  title: "HOD's Message",

  image: hodImage,

  name: "Dr. Manjula G",

  designation: [
    "Professor and HOD, Computer",
    "Science and Engineering",
    "Watch on YouTube",
  ],

  description: `Greetings from the Department of Computer Science and Engineering, BGSCET. It has been universally accredited that the flagship branch of engineering, computer science discipline, is dedicated to ensuring great careers for its students. The Department is committed to working towards developing Engineers with a rich blend of competent, technical, managerial, and social skills and contributing to societal needs and nation-building. This tends to forge deeper industry associations than ever before, creating a research culture from day one and ensuring unified education using the best technology available anywhere. We are focused not only on delivering technical education to our students but also on the leadership proficiencies through which they can lead to economic development for others. The intellectual ambiance in the Department of CSE is conducive to the holistic development of the students. The excellent infrastructure, experienced and scholarly team of faculty members are dedicated to strengthening effective teaching-learning processes, thereby ensuring quality education. The department places emphasis on reinforcing the laboratory infrastructure by adopting novel industry-relevant technologies to empower students to learn and stimulate integrated learning to take up industry-relevant projects. Innovative teaching and learning methods are used to achieve learning abilities through practice, exposure, and motivation. Our goal is to foster critical thinking and analytical skills to ensure that graduates are employable, entrepreneurs, and ethical members of Society.`,
};

export const aboutCSE = {
  title: "About CSE",

  description: `The CSE department, established in 2022-23 with an intake of 60, now has an intake of 120 students for the current year, CSE is a branch of Engineering that deals with computing theories, programming languages, program design, algorithms, computer hardware and software, and integrates several fields of computer science. Computer science engineers are involved in many aspects of computing, from the design of individual microprocessors, personal computers, and supercomputers to circuit designing and writing software. CSE offers abundant opportunities for graduates to be at the forefront of technological innovation. From robotics and nanotechnology to space structures and weaponry, the systems of computer frameworks are at the center of the new-age world.
`
};

export const careerOpportunities = {
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
    "IT Analyst, etc.",
  ],
};

export const infrastructureFaculty = {
  title: "Infrastructure & Faculty",

  description: `The department will have the best infrastructure with the latest high-end computing facilities to cater to the academic needs of the VTU-prescribed syllabus and provide a real-time experience to the students. The department will have renowned faculty members with long academic experience and experts from industries in India and abroad.
`
};

export const DepartementvisionMission = {
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
      "M5: Inculcate problem solving and team building skills and promote lifelong learning with a sense of societal and value based ethical responsibilitie",
    ],
  },
};


export const facultyMembers = [
  {
    id: 1,
    image: hodImage,
    name: "Dr. Manjula G",
    designation: "Professor and HOD,",
  },
  {
    id: 2,
    image: hodImage,
    name: "Dr. Manjula G",
    designation: "Professor and HOD,",
  },
  {
    id: 3,
    image: hodImage,
    name: "Dr. Manjula G",
    designation: "Professor and HOD,",
  },
  {
    id: 4,
    image: hodImage,
    name: "Dr. Manjula G",
    designation: "Professor and HOD,",
  },
  {
    id: 5,
    image: hodImage,
    name: "Dr. Manjula G",
    designation: "Professor and HOD,",
  },
  {
    id: 6,
    image: hodImage,
    name: "Dr. Manjula G",
    designation: "Professor and HOD,",
  },
];



export interface AchievementItem {
  id: number;
  title: string;
  image: string;
  alt: string;
}

export interface AchievementSectionData {
  title: string;
  achievements: AchievementItem[];
}

export const achievementData: AchievementSectionData = {
  title: "Student Success Stories",

  achievements: [
    {
      id: 1,
      title: "Tech IUM Winners",
      image: "tech-ium.webp",
      alt: "Tech IUM Winners",
    },
    {
      id: 2,
      title:
        "3rd Sem CSE Student, Manushree V & Rohini M, Gained Internship Opportunity At Vinjey's Software Systems With Stipend Of 20K",
      image: "internship.webp",
      alt: "Internship Achievement",
    },
  ],
};


export interface CSEEvent {
  id: number;
  title: string;
  image: string;
  alt: string;
}

export interface CSENewsletter {
  id: number;
  title: string;
}

export interface CSEEventsSection {
  title: string;
  events: CSEEvent[];
  newsletters: CSENewsletter[];
}

export const cseEventsData: CSEEventsSection = {
  title: "CSE Events",

  events: [
    {
      id: 1,
      title: "BGS Invited Lecture Series Talk On Intellectual Property Rights (IPR)",
      image: "event-1.jpg",
      alt: "BGS Invited Lecture Series Talk",
    },
    {
      id: 2,
      title:
        "Three Days Skill Development Program On Generative AI Hands-On Learning From Concepts To Applications",
      image: "event-2.jpg",
      alt: "Generative AI Skill Development Programme",
    },
    {
      id: 3,
      title:
        "Three Days Skill Development Program On Generative AI Hands-On Learning From Concepts To Applications",
      image: "event-3.jpg",
      alt: "Generative AI Technical Talk",
    },
    {
      id: 4,
      title: "BGS Invited Lecture Series Talk On Intellectual Property Rights (IPR)",
      image: "event-4.jpg",
      alt: "IPR Lecture Series",
    },
    {
      id: 5,
      title:
        "Three Days Skill Development Program On Generative AI Hands-On Learning From Concepts To Applications",
      image: "event-5.jpg",
      alt: "Generative AI Workshop",
    },
    {
      id: 6,
      title:
        "Three Days Skill Development Program On Generative AI Hands-On Learning From Concepts To Applications",
      image: "event-6.jpg",
      alt: "Technical Talk",
    },
    {
      id: 7,
      title: "BGS Invited Lecture Series Talk On Intellectual Property Rights (IPR)",
      image: "event-7.jpg",
      alt: "Lecture Series",
    },
    {
      id: 8,
      title:
        "Three Days Skill Development Program On Generative AI Hands-On Learning From Concepts To Applications",
      image: "event-8.jpg",
      alt: "AI Programme",
    },
    {
      id: 9,
      title:
        "Three Days Skill Development Program On Generative AI Hands-On Learning From Concepts To Applications",
      image: "event-9.jpg",
      alt: "Generative AI Event",
    },
    {
      id: 10,
      title: "BGS Invited Lecture Series Talk On Intellectual Property Rights (IPR)",
      image: "event-10.jpg",
      alt: "IPR Event",
    },
    {
      id: 11,
      title:
        "Three Days Skill Development Program On Generative AI Hands-On Learning From Concepts To Applications",
      image: "event-11.jpg",
      alt: "Skill Development Programme",
    },
    {
      id: 12,
      title:
        "Three Days Skill Development Program On Generative AI Hands-On Learning From Concepts To Applications",
      image: "event-12.jpg",
      alt: "Technical Programme",
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