import PageBanner from '../components/common/PageBanner';
import PlacementMarquee from '../components/reusable/PlacementMarquee';

function PlacementsPage() {
  return (
    <>
      <PageBanner
        title="Placements"
        subtitle="Transforming Talent into Successful Careers"
        backgroundImage="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1600&q=80"
      />

      <PlacementMarquee />

      <section className="section-space">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-6" id="training">
              <div className="content-card h-100">
                <h3 className="mb-3">Training Programs</h3>
                <ul className="mb-0">
                  <li>Aptitude and reasoning modules from 2nd year onwards.</li>
                  <li>Technical coding bootcamps and mock interviews.</li>
                  <li>Group discussion and communication skills training.</li>
                  <li>Industry mentorship and resume building sessions.</li>
                </ul>
              </div>
            </div>
            <div className="col-md-6" id="internships">
              <div className="content-card h-100">
                <h3 className="mb-3">Internship Support</h3>
                <ul className="mb-0">
                  <li>Paid internships with startup and MNC partners.</li>
                  <li>Research internships for core branch students.</li>
                  <li>Summer internship collaborations with industry.</li>
                  <li>Project-to-placement conversion opportunities.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="row g-4 mt-1">
            <div className="col-12">
              <div className="content-card" id="recruiters">
                <h3 className="mb-3">Placement Gallery</h3>
                <p className="mb-0">
                  Explore highlights from placement drives, recruiter interactions, student achievements, and
                  offer celebrations through our placement gallery updates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PlacementsPage;
