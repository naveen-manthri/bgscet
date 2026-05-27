import { Link } from 'react-router-dom';
import SectionHeading from '../common/SectionHeading';

function CampusVisitSection() {
  return (
    <section className="campus-visit section-space">
      <div className="container">
        <div className="row align-items-center g-4 g-lg-5">
          <div className="col-lg-6">
            <div className="campus-image-wrap">
              <img
                src="https://images.unsplash.com/photo-1562774053-701939374585?w=1000&q=80"
                alt="BGSCET Campus"
                className="img-fluid"
                loading="lazy"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <SectionHeading
              eyebrow="Visit BGSCET"
              title="Come Experience Our Vibrant Engineering Campus"
              subtitle="Explore modern infrastructure, innovation labs, collaborative learning spaces, and a vibrant student community."
            />

            <div className="campus-highlights row g-3 mt-1">
              <div className="col-6">
                <div className="campus-highlight-box">40+ Acres Green Campus</div>
              </div>
              <div className="col-6">
                <div className="campus-highlight-box">150+ Recruiters</div>
              </div>
              <div className="col-6">
                <div className="campus-highlight-box">Innovation Centers</div>
              </div>
              <div className="col-6">
                <div className="campus-highlight-box">Active Student Clubs</div>
              </div>
            </div>

            <div className="mt-4">
              <Link to="/contact" className="btn btn-brand-primary btn-lg">
                Schedule a Campus Visit
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CampusVisitSection;
