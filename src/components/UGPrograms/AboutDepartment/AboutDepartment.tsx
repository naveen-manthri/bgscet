import "./AboutDepartment.css";

import HodMessage from "./HodMessage/HodMessage";
import Statistics from "../../Statistics/Statistics";
import AboutDepartmentTitle from "./AboutDepartmentTitle/AboutDepartmentTitle";
import CareerOpportunities from "./CareerOpportunities/CareerOpportunities";
import InfrastructureFaculty from "./InfrastructureFaculty/InfrastructureFaculty";

import type {
  HodMessage as HodMessageType,
  AboutDepartment as AboutDepartmentType,
  CareerOpportunities as CareerOpportunitiesType,
  InfrastructureFaculty as InfrastructureFacultyType,
} from "../../../types/ugprograms";


interface AboutDepartmentProps {
  hodMessage: HodMessageType;
  aboutDepartment: AboutDepartmentType;
  careerOpportunities: CareerOpportunitiesType;
  infrastructureFaculty: InfrastructureFacultyType;
}


const AboutDepartment = ({
  hodMessage,
  aboutDepartment,
  careerOpportunities,
  infrastructureFaculty,
}: AboutDepartmentProps) => {
  return (
    <section className="about-department">

      <HodMessage
        data={hodMessage}
      />

      <Statistics />

      <AboutDepartmentTitle
        data={aboutDepartment}
      />

      <CareerOpportunities
        data={careerOpportunities}
      />

      <InfrastructureFaculty
        data={infrastructureFaculty}
      />

    </section>
  );
};


export default AboutDepartment;