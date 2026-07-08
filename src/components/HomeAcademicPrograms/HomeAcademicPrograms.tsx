 
import './HomeAcademicPrograms.css';
import { academicPrograms } from '../../data/academicProgramsData';

function HomeAcademicPrograms() {
  return (
    <section className="home-academic section-space">
      <div className="container academic-programs-container">

        <div className="section-heading-academic">
          <h2>Academic Programs / Departments</h2>
        </div>

        <div className="programs-slider">

          <div className="programs-track">

            {[...academicPrograms, ...academicPrograms].map((program, index) => (
              <article className="program-card" key={`${program.id}-${index}`}>

                <img
                  src={program.image}
                  // alt={program.title}
                  className="program-image"
                  loading="lazy"
                />

                <div className="program-overlay">

                  <h3>{program.title}</h3>

                </div>

              </article>
            ))}

          </div>

        </div>

        <div className="admission-btn-wrapper">

          <button
            className="admission-btn"
            type="button"
          >
            For Admission Click Here
          </button>

        </div>

      </div>
    </section>
  );
}

export default HomeAcademicPrograms;
    
 