import "./AboutDepartment.css";

import HodMessage from "./HodMessage/HodMessage";
import Statistics from "../Statistics/Statistics";
import AboutCSE from "./AboutCSE/AboutCSE";
import CareerOpportunities from "./CareerOpportunities/CareerOpportunities";
import InfrastructureFaculty from "./InfrastructureFaculty/InfrastructureFaculty";

const AboutDepartment = () => {
  return (
    <section className="about-department">
      <HodMessage />

      <Statistics />

      <AboutCSE />

      <CareerOpportunities />

      <InfrastructureFaculty />
    </section>
  );
};

export default AboutDepartment;
