import bannerImage from "../../assets/images/mechanicalEngg/mech-banner.png";
import hodImage from "../../assets/images/mechanicalEngg/hod.png";
import channaImage from "../../assets/images/mechanicalEngg/Dr-Channa-Keshava.png";
import tejasImage from "../../assets/images/mechanicalEngg/Tejas.png";
import type { UGDepartmentData } from "../../types/ugprograms";

const mechanicalDepartment: UGDepartmentData = {
  slug: "mech",
  singlePage: true,
  banner: {
    image: bannerImage,
    title: "Mechanical Engineering",
  },
  tabs: [
    { id: "hod", label: "HOD Message" },
    { id: "vision", label: "Vision & Mission" },
    { id: "faculty", label: "Faculty" },
  ],
  hodMessage: {
    title: "HOD’s Message",
    image: hodImage,
    name: "Dr. NITHIN H S",
    designation: ["Associate Professor & Head"],
    description:
      "The Department seeks to combine excellence in education with service to the industry. Department provides the basic knowledge in the field of mechanical engineering and to apply the same to explore IT solution for complex engineering problems with deep working knowledge to address needs of the Industry and Society.",
  },
  aboutDepartment: {
    title: "About Mechanical Engineering",
    description:
      "The Department of Mechanical Engineering provides students with a strong foundation in design, manufacturing, thermal engineering and industrial practices. Hands-on learning, modern laboratories and industry interaction prepare graduates for successful careers and lifelong learning.",
  },
  careerOpportunities: {
    title: "Career Opportunities",
    description: "Mechanical Engineering graduates can build careers across design, manufacturing, automotive, energy and allied industries.",
    image: bannerImage,
    opportunities: ["Design Engineer", "Manufacturing Engineer", "Automotive Engineer", "Thermal Engineer", "CAD/CAM Engineer"],
  },
  infrastructureFaculty: {
    title: "Infrastructure & Faculty",
    description: "The department is supported by practical laboratories, workshop facilities and experienced faculty members who guide students through applied learning and projects.",
  },
  visionMission: {
    vision: {
      title: "Vision",
      description: "To be an eminent in the fundamentals of Engineering visualization and manufacturing process for the product life cycle and management in IT Industry which enables graduates to meet the societal issues.",
    },
    mission: {
      title: "Mission",
      points: [
        "M1: To create design, analyze, and utilize designing interfaces in “Cutting-Edge Technologies",
        "M2: To read and translate technical illustrations in computer generated drawings.",
      ],
    },
  },
  facultyMembers: [
    { id: 1, image: channaImage, name: "Dr. Channa Keshava Naik N", designation: "Assistant Professor" },
    { id: 2, image: tejasImage, name: "Tejas K S", designation: "Assistant Professor" },
  ],
  technicalFacultyMembers: [],
  achievementData: { title: "Achievements", achievements: [] },
  eventsData: { title: "Events", newsletterTitle: "Newsletter", events: [], newsletters: [] },
};

export default mechanicalDepartment;
