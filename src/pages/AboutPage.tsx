import PageBanner from '../components/common/PageBanner';
import SectionHeading from '../components/common/SectionHeading';

function AboutPage() {
  return (
    <>
      <PageBanner
        title="About BGSCET"
        subtitle="Building Excellence in Engineering, Innovation, and Character"
        backgroundImage="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1600&q=80"
      />

      <section className="section-space">
        <div className="container">
          <div className="row g-4 g-lg-5 align-items-center">
            <div className="col-lg-6">
              <SectionHeading
                eyebrow="Institution Overview"
                title="A Legacy of Academic Distinction"
                subtitle="BGSCET is dedicated to shaping engineering professionals who are innovative, ethical, and industry-ready."
              />
              <p className="mt-3 mb-0">
                Established with a vision to deliver quality technical education, BGS College of Engineering &
                Technology has become a center of excellence known for academic rigor, research orientation,
                and placement success. The institution offers a vibrant ecosystem where students are encouraged
                to innovate, collaborate, and lead.
              </p>
            </div>
            <div className="col-lg-6">
              <img
                src="https://images.unsplash.com/photo-1562774053-701939374585?w=1000&q=80"
                alt="Campus View"
                className="img-fluid rounded-4 shadow-sm"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="vision" className="section-space bg-soft">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-6">
              <div className="vision-card h-100">
                <h3 className="mb-3">Vision</h3>
                <p className="mb-0">
                  To emerge as a globally recognized engineering institution fostering innovation, excellence,
                  and social commitment.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="mission-card h-100">
                <h3 className="mb-3">Mission</h3>
                <ul className="mb-0">
                  <li>Provide quality education aligned with global standards.</li>
                  <li>Encourage research and entrepreneurial mindset.</li>
                  <li>Promote ethical and responsible engineering practices.</li>
                  <li>Strengthen industry and societal engagement.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="chairman" className="section-space">
        <div className="container">
          <div className="message-card">
            <h3 className="mb-3">Chairman Message</h3>
            <p className="mb-0">
              At BGSCET, we believe in holistic education that combines technical expertise with values and
              leadership. Our commitment is to nurture competent engineers who contribute meaningfully to
              society and nation-building.
            </p>
          </div>
        </div>
      </section>

      <section id="principal" className="section-space bg-soft">
        <div className="container">
          <div className="message-card">
            <h3 className="mb-3">Principal Message</h3>
            <p className="mb-0">
              BGSCET emphasizes experiential learning, innovation, and research-driven education. We strive to
              create an environment where students transform into skilled professionals and confident leaders.
            </p>
          </div>
        </div>
      </section>

      <section id="governing" className="section-space">
        <div className="container">
          <SectionHeading
            eyebrow="Leadership"
            title="Governing Body"
            subtitle="Experienced academicians and industry experts guide the strategic direction of the institution."
            center
          />
          <div className="row g-4 mt-1">
            {['Dr. S. Narayan', 'Prof. M. Raghavan', 'Dr. P. Venkatesh', 'Ms. A. Meera'].map((member) => (
              <div className="col-sm-6 col-lg-3" key={member}>
                <div className="leader-card text-center h-100">
                  <div className="leader-avatar mb-3">
                    <i className="bi bi-person-fill" />
                  </div>
                  <h5 className="mb-1">{member}</h5>
                  <p className="mb-0 text-muted">Governing Body Member</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutPage;
