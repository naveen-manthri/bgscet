import { Link } from 'react-router-dom';

function CTASections() {
  return (
    <section className="cta-sections section-space">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-7">
            <div className="cta-card primary h-100">
              <span className="cta-badge">Admissions 2026-27</span>
              <h3 className="mb-3">Ready to Begin Your Engineering Journey?</h3>
              <p className="mb-4">
                Join BGSCET and unlock world-class education, industry exposure, and exceptional career opportunities.
              </p>
              <div className="d-flex flex-wrap gap-2">
                <Link to="/admissions" className="btn btn-light text-dark">
                  Apply Now
                </Link>
                <Link to="/contact" className="btn btn-brand-outline-light">
                  Talk to Counselor
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="cta-card secondary h-100">
              <h4 className="mb-3">Need More Information?</h4>
              <p className="mb-4">
                Download brochure, review eligibility, or schedule a campus tour with our admissions team.
              </p>
              <Link to="/contact" className="btn btn-brand-primary">
                Contact Admissions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTASections;
