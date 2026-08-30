import bannerImage from "../../assets/images/Mathematicsdepartment/math-banner.png";
import labImage from "../../assets/images/Mathematicsdepartment/math-lab.png";
import hodImage from "../../assets/images/Mathematicsdepartment/Dr-Deepthy.png";
import manjulaImage from "../../assets/images/Mathematicsdepartment/Manjula.png";
import kiranImage from "../../assets/images/Mathematicsdepartment/Kiran-Gowda.png";
import chaitraImage from "../../assets/images/Mathematicsdepartment/Chaitra.png";
import naveenImage from "../../assets/images/Mathematicsdepartment/naveen.png";
import bhavyaImage from "../../assets/images/Mathematicsdepartment/Bhavya.png";
import type { UGDepartmentData } from "../../types/ugprograms";

const mathematicsDepartment: UGDepartmentData = {
  slug: "mathematics",
  singlePage: true,
  labPlacement: "afterVision",
  banner: { image: bannerImage, title: "Mathematics Department" },
  tabs: [
    { id: "hod", label: "HOD Message" },
    { id: "vision", label: "Vision & Mission" },
    { id: "faculty", label: "Faculty" },
  ],
  hodMessage: {
    title: "HOD’s Message",
    image: hodImage,
    name: "Dr. Deepthy D",
    designation: ["Head of the Department"],
    description: "Dr. Deepthy D obtained her Bachelor’s and Master’s degrees from Mahatma Gandhi University, Kerala. She received her PhD in Mathematics from Bharathiar University, Coimbatore for the doctoral work on ‘ A Study on Induced nK2 Decomposition of Graphs’, in Graph Theory in the year 2019. She has worked in various institutions in Bangalore and presently working as Associate Professor and Head of the Department of Mathematics. She has published papers in Web of Science as well as Scopus Indexed Journals.",
  },
  labSection: { image: labImage, description: "" },
  aboutDepartment: { title: "", description: "" },
  careerOpportunities: { title: "", description: "", image: "", opportunities: [] },
  infrastructureFaculty: { title: "", description: "" },
  visionMission: {
    vision: { title: "Vision", description: "To enable the students to develop their comprehension skills in Mathematics and make them industry-ready so as to provide feasible solution to the real-world problems." },
    mission: { title: "Mission", points: ["Enhance the knowledge through blended learning approach, making it as seamless as possible, fostering to the IT industry’s learning culture.", "Help students with a strong mathematical foundation through flexible and accessible strategies to master the content.", "Implement classroom activities for building a coherent view of mathematics in computer applications.", "Dive deeper into the world of mathematical procedures and artificial intelligence."] },
  },
  facultyMembers: [
    { id: 1, image: hodImage, name: "Dr. Deepthy D", designation: "Associate Professor & HOD" },
    { id: 2, image: manjulaImage, name: "Manjula M", designation: "Assistant Professor" },
    { id: 3, image: kiranImage, name: "Kiran Gowda S G", designation: "Assistant Professor" },
    { id: 4, image: chaitraImage, name: "Chaitra M", designation: "Assistant Professor" },
    { id: 5, image: naveenImage, name: "Naveen", designation: "Assistant Professor" },
    { id: 6, image: bhavyaImage, name: "Bhavya N P", designation: "Assistant Professor" },
  ],
  technicalFacultyMembers: [],
  achievementData: { title: "Achievements", achievements: [] },
  eventsData: { title: "Events", newsletterTitle: "Newsletter", events: [], newsletters: [] },
};

export default mathematicsDepartment;
