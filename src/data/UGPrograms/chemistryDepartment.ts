import bannerImage from "../../assets/images/Chemistrydepartment/chem-lab.png";
import labImage from "../../assets/images/Chemistrydepartment/chem-lab.png";
import shivaKumar from "../../assets/images/Chemistrydepartment/Shivakumar.png";
import hodImage from "../../assets/images/Chemistrydepartment/Dr-Vinay-KumarB.png";
import sangeethaImage from "../../assets/images/Chemistrydepartment/Dr-Sangeetha.png";
import type { UGDepartmentData } from "../../types/ugprograms";

const chemistryDepartment: UGDepartmentData = {
  slug: "chemistry",
  singlePage: true,
  banner: { image: bannerImage, title: "Chemistry Department" },
  tabs: [
    { id: "hod", label: "HOD Message" },
    { id: "about", label: "About The Department" },
    { id: "vision", label: "Vision & Mission" },
    { id: "faculty", label: "Faculty" },
  ],
  hodMessage: {
    title: "HOD’s Message",
    image: hodImage,
    name: "Dr. Shivakumar",
    designation: ["Professor and Head of the Department"],
    description: "Dr Vinay Kumar B, HOD, Department of Chemistry having the teaching experience of 13 years. He obtained his Ph.D. degree from Kuvempu University in the year 2012. His main research area includes bioinorganic chemistry, nanomaterials and catalysis in organic transformations. He currently supervising 3 research students and 1 Ph.D. awarded under his guidance. He has published 28 research articles in reputed national and international journals. He presented several research papers in national and international conferences.",
  },
  labSection: {
    image: labImage,
    description: "The Department of Chemistry has well qualified faculty members with two doctorates and with an average experience of 12 years. The department is dedicated to teaching first-year engineering students to meet the curriculum of Applied Chemistry. The department has well-equipped laboratory to facilitate the students to carry out the experiments. The Department is actively engaged in research areas of Pharmaceutics, Nano catalyst, Corrosion, Material Chemistry and Medicinal Chemistry.",
  },
  aboutDepartment: { title: "About The Department", description: "The Department of Chemistry supports first-year engineering education and interdisciplinary research through practical learning." },
  careerOpportunities: { title: "", description: "", image: "", opportunities: [] },
  infrastructureFaculty: { title: "", description: "" },
  visionMission: {
    vision: { title: "Vision", description: "Emphasizing the importance of Applied Chemistry for IT Professionals" },
    mission: { title: "Mission", points: ["Delivering students with an opportunity to gain a deeper understanding of sensors, memory storage devices, and display systems.", "Providing eco-friendly solutions addressing to environmental management of e-waste." ,"Imparting analytical thinking to solve societal problems related to chemical substances in multidisciplinary areas."] },
  },
  facultyMembers: [
    { id: 1, image: hodImage, name: "Dr. Shivakumar", designation: "Professor & HOD" },
    { id: 2, image: sangeethaImage, name: "Dr. Sangeetha", designation: "Assistant Professor" },
  ],
  instructorMembers: [
    { id: 1, image: shivaKumar, name: "Chemistry Laboratory Instructor", designation: "Instructor" },
  ],
  technicalFacultyMembers: [],
  achievementData: { title: "Achievements", achievements: [] },
  eventsData: { title: "Events", newsletterTitle: "Newsletter", events: [], newsletters: [] },
};

export default chemistryDepartment;
