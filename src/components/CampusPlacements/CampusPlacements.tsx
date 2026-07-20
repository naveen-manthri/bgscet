import { companyLogos } from "../../data/landingData";
import "./CampusPlacements.css";

function CampusPlacements() {
  const firstRow = [...companyLogos, ...companyLogos];
  const secondRow = [...companyLogos, ...companyLogos];

  return (
    <section className="campus-placements" aria-labelledby="campus-placements-title" >
      <div className="campus-placements__inner">

        <div className="campus-placements__heading">
          <h2 className="campus-placements__title"  id="campus-placements-title" >
            Where Our Graduates Go.
          </h2>

          <p className="campus-placements__description">
            A Track Record Of Top-Tier Hiring Across Product,<br/> Services And
            Research Organisations Globally.
          </p>
        </div>

        <div
          className="campus-placements__carousel"
          aria-label="Placement company logos"
        >
          <div className="campus-placements__track campus-placements__track--left">
            {firstRow.map((company, index) => (
              <article
                className="campus-placements__card"
                key={`left-${company.id}-${index}`}
              >
                <img
                  className="campus-placements__logo"
                  src={company.image}
                  alt="Company logo"
                />
              </article>
            ))}
          </div>
        </div>

        <div className="campus-placements__carousel campus-placements__carousel--bottom">
          <div className="campus-placements__track campus-placements__track--right">
            {secondRow.map((company, index) => (
              <article
                className="campus-placements__card"
                key={`right-${company.id}-${index}`}
              >
                <img
                  className="campus-placements__logo"
                  src={company.image}
                  alt="Company logo"
                />
              </article>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default CampusPlacements;