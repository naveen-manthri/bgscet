import PageBanner from '../components/common/PageBanner';
import SectionHeading from '../components/common/SectionHeading';
import { facilities } from '../data/facilitiesData';

function FacilitiesPage() {
  return (
    <>
      <PageBanner
        title="Facilities"
        subtitle="World-Class Infrastructure for Holistic Learning"
        backgroundImage="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1600&q=80"
      />

      <section className="section-space">
        <div className="container">
          <SectionHeading
            eyebrow="Campus Infrastructure"
            title="Facilities that Empower Student Success"
            subtitle="From smart classrooms to innovation labs, BGSCET provides a comprehensive learning environment."
            center
          />

          <div className="row g-4 mt-1">
            {facilities.map((facility) => (
              <div className="col-md-6 col-lg-4" key={facility.id} id={facility.title.toLowerCase().split(' ')[0]}>
                <article className="facility-card h-100">
                  <img src={facility.image} alt={facility.title} className="img-fluid" loading="lazy" />
                  <div className="p-4">
                    <div className="d-flex align-items-center gap-2 mb-2">
                      <i className={`bi ${facility.icon} fs-4 text-brand`} />
                      <h3 className="h5 mb-0">{facility.title}</h3>
                    </div>
                    <p className="mb-3">{facility.description}</p>
                    <ul className="mb-0">
                      {facility.features.slice(0, 3).map((feature) => (
                        <li key={feature}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default FacilitiesPage;
