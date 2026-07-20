import "./CareerOpportunities.css";

import DepartmentSectionHeading from "../../DepartmentSectionHeading/DepartmentSectionHeading";

import { careerOpportunities } from "../../../data/cseDepartment";

const CareerOpportunities = () => {
  return (
    <section className="career-opportunities">
      <DepartmentSectionHeading
        title={careerOpportunities.title}
      />

      <div className="career-opportunities__content">
        <p className="career-opportunities__description">
          {careerOpportunities.description}
        </p>

        <div className="career-opportunities__body">
          <ul className="career-opportunities__list">
            {careerOpportunities.opportunities.map((item) => (
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
              src={careerOpportunities.image}
              alt="Career Opportunities"
              className="career-opportunities__image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerOpportunities;