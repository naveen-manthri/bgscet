import "./CareerOpportunities.css";

import DepartmentSectionHeading from "../../../DepartmentSectionHeading/DepartmentSectionHeading";

import type { CareerOpportunities as CareerOpportunitiesType } from "../../../../types/ugprograms";


interface CareerOpportunitiesProps {
  data: CareerOpportunitiesType;
}


const CareerOpportunities = ({
  data,
}: CareerOpportunitiesProps) => {
  return (
    <section className="career-opportunities">

      <DepartmentSectionHeading
        title={data.title}
      />


      <div className="career-opportunities__content">

        <p className="career-opportunities__description">
          {data.description}
        </p>


        <div className="career-opportunities__body">

          <ul className="career-opportunities__list">
            {data.opportunities.map((item) => (
              <li
                key={item}
                className="career-opportunities__item"
              >
                {item}
              </li>
            ))}
          </ul>


          <div className="career-opportunities__image-wrapper">
            <img
              src={data.image}
              alt={data.title}
              className="career-opportunities__image"
            />
          </div>

        </div>

      </div>

    </section>
  );
};


export default CareerOpportunities;