import bannerImage from "../../assets/images/Physicsdepartment/phy-banner.png";
import labImage from "../../assets/images/Physicsdepartment/phy-lab.png";
import hodImage from "../../assets/images/Physicsdepartment/Dr-Ambika.png";
import neetaImage from "../../assets/images/Physicsdepartment/Dr-Neeta-Shukla.png";
import type { UGDepartmentData } from "../../types/ugprograms";

const physicsDepartment: UGDepartmentData = {
  slug: "physics",
  singlePage: true,
  banner: { image: bannerImage, title: "Physics Department" },
  tabs: [
    { id: "hod", label: "HOD Message" },
    { id: "about", label: "About The Department" },
    { id: "vision", label: "Vision & Mission" },
    { id: "faculty", label: "Faculty" },
  ],
  hodMessage: {
    title: "HOD’s Message",
    image: hodImage,
    name: "Dr. Ambika A. V",
    designation: ["Professor and Head of the Department"],
    description: "Dr. Ambika A. V. is heading the department. She completed her Bachelor of Science, Master of Science from Kuvempu University & Ph.D. from Visvesvaraya Technological University (VTU) in Physics. Specialization in the field of Nanomaterials, Liquid Crystal, Nanocomposites. She has 12 years of teaching experience in Engineering Colleges. She has published 10+ papers in the journal and 20+ in the conference. She got the First Rank in the B.Sc in the year 2009.",
  },
  labSection: {
    image: labImage,
    description: "Department of Physics was established in 2022 and is one among the basic sciences. The Department of Applied Physics is equipped with a well-furnished, spacious laboratory. It has a well-qualified faculty with good research background to fulfil the needs of students in academics as well as research. The faculty is dynamically involved in the research areas of material science such as nanomaterials and thin films. The Physics department is constantly publishing its novel research in reputed international journals and at several international conferences.",
  },
  aboutDepartment: { title: "About The Department", description: "The Department of Physics supports foundational engineering education through practical laboratory learning and applied research." },
  careerOpportunities: { title: "", description: "", image: "", opportunities: [] },
  infrastructureFaculty: { title: "", description: "" },
  visionMission: {
    vision: { title: "Vision", description: "Blending Applied Physics concepts with applications in Information Technology." },
    mission: { title: "Mission", points: ["Training students with the concepts of lasers, quantum mechanics, quantum computing and electrical conductivity to apply in Information Technology.", "Encouraging students to take up innovative ideas in applied Physics with practical knowledge.", "Inculcating students with a systematic and research approach on interactive simulations."] },
  },
  facultyMembers: [
    { id: 1, image: hodImage, name: "Dr. Ambika A V", designation: "Assistant Professor & HOD" },
    { id: 2, image: neetaImage, name: "Dr Neeta Shukla", designation: "Assistant Professor" },
  ],
  technicalFacultyMembers: [],
  achievementData: { title: "Achievements", achievements: [] },
  eventsData: { title: "Events", newsletterTitle: "Newsletter", events: [], newsletters: [] },
};

export default physicsDepartment;
