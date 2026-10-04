import "./HomeAcademicPrograms.css";
import { academicPrograms } from "../../../data/academicProgramsData";
import AdmissionButton from "../../../components/AdmissionButton/AdmissionButton";
import SectionHeading from "../../common/SectionHeading";
import { Link } from "react-router-dom";

function HomeAcademicPrograms() {
  return (
    <section className=" home-academic flex flex-direction-column mobile-margin-top mobile-padding section-space">
      <div className="flex flex-direction-column container academic-programs-container">
        <SectionHeading subtitle="Academics" title="Programs Designed" titleSecondLine="Like Products." underlineFitContent center />

        <div className="programs-grid flex flex-justify-between ">
          {academicPrograms.map((program) => (
            <article className="flex flex-direction-column program-card" key={program.id}>
              <img src={program.image} alt={program.title} className="program-image" loading="lazy"  />

              <div className="flex flex-direction-column flex-align-start flex-justify-between program-content">
                <h3 className="program-title">
                  {program.title}
                </h3>

                <span className="program-duration flex inline-flex-center">
                  {program.duration}
                </span>

                <p className="program-description">
                  {program.description}
                </p>

                <Link to={program.route} className="program-read-more"> {program.readMore} </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="admission-btn-wrapper flex flex-center">
          <AdmissionButton variant="primary" />
        </div>
      </div>
    </section>
  );
}

export default HomeAcademicPrograms;