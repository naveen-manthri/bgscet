import PageBanner from '../components/common/PageBanner';
import SectionHeading from '../components/common/SectionHeading';

function AdmissionsPage() {
  return (
    <>
      <PageBanner
        title="Admissions"
        subtitle="Take the First Step Toward a Successful Engineering Career"
        backgroundImage="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1600&q=80"
      />

      <section className="section-space">
        <div className="container">
          <SectionHeading
            eyebrow="Join BGSCET"
            title="Admissions 2026-27"
            subtitle="Transparent admission process with merit-based opportunities and scholarship support."
            center
          />

          <div className="row g-4 mt-1">
            <div className="col-md-4" id="eligibility">
              <div className="content-card h-100">
                <h3 className="h5 mb-3">Eligibility</h3>
                <ul className="mb-0">
                  <li>Passed 10+2 / PUC with Physics and Mathematics as compulsory subjects.</li>
                  <li>Chemistry / Biotechnology / Biology / Computer Science as optional subject.</li>
                  <li>Minimum 45% aggregate (40% for reserved categories as per norms).</li>
                  <li>Valid KCET / COMEDK / JEE score accepted.</li>
                </ul>
              </div>
            </div>

            <div className="col-md-4" id="fees">
              <div className="content-card h-100">
                <h3 className="h5 mb-3">Fee Structure</h3>
                <ul className="mb-0">
                  <li>Tuition Fee: As per Government / Management quota norms.</li>
                  <li>Hostel Fee: Approx. INR 95,000 per annum.</li>
                  <li>Transport Fee: Based on route and distance.</li>
                  <li>Scholarships and installment options available.</li>
                </ul>
              </div>
            </div>

            <div className="col-md-4" id="scholarships">
              <div className="content-card h-100">
                <h3 className="h5 mb-3">Scholarships</h3>
                <ul className="mb-0">
                  <li>Merit scholarships for top-performing students.</li>
                  <li>Government scholarships for reserved categories.</li>
                  <li>Sports and cultural excellence scholarships.</li>
                  <li>Special support for economically weaker students.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="row mt-4" id="apply">
            <div className="col-12">
              <div className="cta-card primary">
                <span className="cta-badge">Apply Online</span>
                <h3 className="mb-3">Start Your Application Today</h3>
                <p className="mb-4">
                  Complete your application form, upload required documents, and reserve your seat for the
                  upcoming academic year.
                </p>
                <button className="btn btn-light text-dark">Apply Now</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AdmissionsPage;
