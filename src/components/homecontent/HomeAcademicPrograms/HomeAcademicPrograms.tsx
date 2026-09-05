import "./HomeAcademicPrograms.css";
import { academicPrograms } from "../../../data/academicProgramsData";
import AdmissionButton from "../../../components/AdmissionButton/AdmissionButton";
import SectionHeading from "../../common/SectionHeading";

function HomeAcademicPrograms() {
  return (
    <section className="flex flex-direction-column home-academic section-space">
      <div className="flex flex-direction-column container academic-programs-container">
        <SectionHeading subtitle="Academics" title="Programs Designed" titleSecondLine="Like Products." underlineFitContent center />

        <div className="flex flex-justify-between programs-grid">
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

                <a  href={`/${program.slug}`} className="program-read-more"> {program.readMore} </a>
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