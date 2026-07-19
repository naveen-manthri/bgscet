import "./HomeAcademicPrograms.css";
import { academicPrograms } from "../../data/academicProgramsData";
import AdmissionButton from "../../components/AdmissionButton/AdmissionButton";

function HomeAcademicPrograms() {
  return (
    <section className="home-academic section-space">
      <div className="container academic-programs-container">
        <div className="section-heading-academic">
          <p className="academic-subtitle">Academics</p>

          <h2 className="academic-title">
            Programs Designed
            <br />
            Like <em>Products.</em>
          </h2>

          <div className="academic-title-divider" />
        </div>

        <div className="programs-grid">
          {academicPrograms.map((program) => (
            <article className="program-card" key={program.id}>
              <img
                src={program.image}
                alt={program.title}
                className="program-image"
                loading="lazy"
              />

              <div className="program-content">
                <h3 className="program-title">
                  {program.title}
                </h3>

                <span className="program-duration">
                  {program.duration}
                </span>

                <p className="program-description">
                  {program.description}
                </p>

                <a
                  href={`/${program.slug}`}
                  className="program-read-more"
                >
                  {program.readMore}
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="admission-btn-wrapper">
          <AdmissionButton variant="primary" />
        </div>
      </div>
    </section>
  );
}

export default HomeAcademicPrograms;