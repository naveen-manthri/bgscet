import { placementStats, recruiters } from '../../data/placementsData';
import SectionHeading from '../common/SectionHeading';

function PlacementMarquee() {
  const logoStrip = [...recruiters, ...recruiters];

  return (
    <section className="placement-marquee section-space bg-soft">
      <div className="container">
        <SectionHeading
          eyebrow="Campus Placements"
          title="Top Recruiters Trust BGSCET Talent"
          subtitle="Our placement ecosystem empowers students with the skills and confidence to excel in leading organizations."
          center
        />

        <div className="row g-4 mb-4 mt-1">
          {placementStats.map((item) => (
            <div className="col-6 col-md-4 col-lg-2" key={item.label}>
              <div className="placement-stat-card h-100 text-center">
                <i className={`bi ${item.icon} mb-3`} />
                <h4>{item.value}</h4>
                <p className="mb-0">{item.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="logo-marquee-wrap mt-4">
        <div className="logo-marquee-track">
          {logoStrip.map((company, index) => (
            <div className="logo-item" key={`${company.id}-${index}`}>
              <img src={company.logo} alt={company.name} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PlacementMarquee;
