import { Link } from 'react-router-dom';
import HeroCarousel from '../components/home/HeroCarousel';
import CampusVisitSection from '../components/reusable/CampusVisitSection';
import Testimonials from '../components/reusable/Testimonials';
import SectionHeading from '../components/common/SectionHeading';
import { departments } from '../data/departmentsData';
import { galleryItems } from '../data/galleryData';
import { recruiters } from '../data/placementsData';
import { stats } from '../data/statsData';

const aboutImages = [
  'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=900&q=80',
  'https://images.unsplash.com/photo-1562774053-701939374585?w=900&q=80',
];

const pastEvents = galleryItems.filter((item) => item.category === 'Events' || item.category === 'Workshops').slice(0, 4);
const newsEvents = galleryItems.filter((item) => item.category === 'Cultural' || item.category === 'Convocation').slice(0, 4);
const campusLife = galleryItems.filter((item) => item.category === 'Campus' || item.category === 'Sports').slice(0, 6);
const departmentPreview = departments.slice(0, 6);

function HomePage() {
  return (
    <>
      <HeroCarousel />

      <section className="home-about section-space">
        <div className="container">
          <div className="row align-items-center g-4 g-lg-5">
            <div className="col-lg-6 order-2 order-lg-1">
              <div className="about-collage">
                <img src={aboutImages[0]} alt="Campus building" className="about-collage-main" loading="lazy" />
                <img
                  src={aboutImages[1]}
                  alt="Campus celebration"
                  className="about-collage-secondary"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="col-lg-6 order-1 order-lg-2">
              <SectionHeading
                eyebrow="About College"
                title="About College"
                subtitle="BGS College of Engineering & Technology delivers academic excellence, strong values, and an industry-ready engineering experience."
              />
              <p className="mt-3 mb-3">
                Our campus blends disciplined academic culture with modern laboratories, expert faculty, and
                practical learning opportunities. Students are guided through projects, placements, and
                professional development in a supportive environment.
              </p>
              <p className="mb-0">
                The result is a vibrant engineering institution focused on careers, innovation, and character.
              </p>
              <Link to="/admissions" className="btn btn-brand-primary mt-4 px-4 py-2">
                For Admission Click Here
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="ratio-strip py-4 py-lg-5">
        <div className="container">
          <div className="row g-3 g-md-4 justify-content-center">
            {stats.slice(0, 5).map((stat) => (
              <div className="col-6 col-lg-2" key={stat.id}>
                <div className="ratio-card h-100 text-center">
                  <div className="ratio-value mb-1">
                    {stat.value}
                    {stat.suffix ?? ''}
                  </div>
                  <div className="ratio-label">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="vision-mission section-space">
        <div className="container">
          <div className="row align-items-center g-4 g-lg-5">
            <div className="col-lg-6">
              <SectionHeading
                eyebrow="About Mutt"
                title="About Mutt"
                subtitle="A values-driven learning environment that combines academic discipline with student mentorship."
              />
              <p className="mt-3 mb-0">
                BGSCET supports student growth through a structured learning culture, regular mentoring,
                technical activities, and opportunities that shape confident graduates.
              </p>
            </div>
            <div className="col-lg-6">
              <div className="vision-photo">
                <img
                  src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=900&q=80"
                  alt="Students on campus"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <div className="row align-items-center g-4 g-lg-5 mt-4 mt-lg-5">
            <div className="col-lg-6 order-2 order-lg-1">
              <div className="vision-photo">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900&q=80"
                  alt="Students discussion"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="col-lg-6 order-1 order-lg-2">
              <SectionHeading
                eyebrow="Vision & Mission"
                title="Vision & Mission"
                subtitle="Our guiding principles emphasize quality education, innovation, ethics, and career readiness."
              />
              <div className="vision-mission-copy mt-3">
                <h3 className="h5">Vision</h3>
                <p>
                  To emerge as a leading engineering institution recognized for academic excellence, research,
                  and meaningful impact.
                </p>
                <h3 className="h5 mt-4">Mission</h3>
                <ul className="mb-0">
                  <li>Provide high-quality technical education with modern pedagogy.</li>
                  <li>Promote innovation, research, and entrepreneurship.</li>
                  <li>Strengthen industry engagement and student employability.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="department-preview section-space bg-soft">
        <div className="container">
          <SectionHeading
            eyebrow="Academic Programs / Departments"
            title="Academic Programs / Departments"
            subtitle="Industry-focused departments with modern labs, strong faculty, and career pathways."
            center
          />

          <div className="row g-3 g-md-4 mt-1">
            {departmentPreview.map((department) => (
              <div className="col-6 col-lg-4 col-xl-2" key={department.id}>
                <article className="department-tile">
                  <img src={department.image} alt={department.name} loading="lazy" />
                  <div className="department-tile-overlay">
                    <span>{department.shortName}</span>
                    <h3>{department.shortName === 'AI & ML' ? 'AIML' : department.shortName}</h3>
                  </div>
                </article>
              </div>
            ))}
          </div>

          <div className="text-center mt-4">
            <Link to="/admissions" className="btn btn-brand-primary px-4 py-2">
              For Admission Click Here
            </Link>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container">
          <SectionHeading title="Past Events" center />
          <div className="row g-3 mt-1 align-items-stretch">
            <div className="col-lg-6">
              <div className="mosaic-grid h-100">
                <img src={pastEvents[0]?.image} alt={pastEvents[0]?.title} className="mosaic-main" loading="lazy" />
                <img
                  src={pastEvents[1]?.image}
                  alt={pastEvents[1]?.title}
                  className="mosaic-sub mosaic-sub-1"
                  loading="lazy"
                />
                <img
                  src={pastEvents[2]?.image}
                  alt={pastEvents[2]?.title}
                  className="mosaic-sub mosaic-sub-2"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row g-3 h-100">
                {pastEvents.slice(0, 4).map((item) => (
                  <div className="col-6" key={item.id}>
                    <div className="image-card h-100">
                      <img src={item.image} alt={item.title} loading="lazy" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space bg-soft">
        <div className="container">
          <SectionHeading title="News & Events / Announcements" center />
          <div className="row g-3 mt-1">
            {newsEvents.slice(0, 4).map((item) => (
              <div className="col-6 col-lg-3" key={item.id}>
                <div className="image-card h-100">
                  <img src={item.image} alt={item.title} loading="lazy" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container">
          <SectionHeading title="Campus Life" center />
          <div className="row g-3 mt-1">
            {campusLife.slice(0, 6).map((item, index) => (
              <div className={`col-6 ${index === 0 || index === 3 ? 'col-lg-6' : 'col-lg-3'}`} key={item.id}>
                <div className="image-card h-100 campus-life-card">
                  <img src={item.image} alt={item.title} loading="lazy" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="placement-band py-4 py-lg-5">
        <div className="container">
          <SectionHeading title="Campus Placements" center light />
          <div className="placement-band-logos mt-4">
            <div className="placement-band-track">
              {[...recruiters, ...recruiters].map((company, index) => (
                <div className="placement-logo-card" key={`${company.id}-${index}`}>
                  <img src={company.logo} alt={company.name} loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Testimonials />

      <CampusVisitSection />
    </>
  );
}

export default HomePage;
