import { companyLogos } from '../../data/landingData';
import './CampusPlacements.css';

function CampusPlacements() {
  const marqueeLogos = [...companyLogos, ...companyLogos];

  return (
    <section className="campus-placements" aria-labelledby="campus-placements-title">
      <div className="campus-placements__inner">
        <h1 className="section-heading campus-placements__title" id="campus-placements-title">
          Campus Placements
        </h1>


        <div className="campus-placements__carousel" aria-label="Placement company logos">
          <div className="campus-placements__track">
            {marqueeLogos.map((company, index) => (
              <article className="campus-placements__card" key={`${company.id}-${index}`}>
                <img className="campus-placements__logo" src={company.image} alt={`${company.image} logo`} />
                
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CampusPlacements;
