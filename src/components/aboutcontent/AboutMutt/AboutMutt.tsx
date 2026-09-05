import { aboutMutt } from "../../../data/aboutMutt";
import DepartmentSectionHeading from "../../DepartmentSectionHeading/DepartmentSectionHeading";

import "./AboutMutt.css";

const AboutMutt = () => {
  return (
    <section
      className="about-mutt"
      aria-labelledby="about-mutt-title"
    >
      <div className="about-mutt__container">
        <DepartmentSectionHeading
          id="about-mutt-title"
          title={aboutMutt.title} className="department-section-heading--large flex flex-center"
        />

        <div className="flex flex-direction-column about-mutt__content">
          {aboutMutt.description.map((paragraph, index) => (
            <p
              key={index}
              className="about-mutt__paragraph"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutMutt;