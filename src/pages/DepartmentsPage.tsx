import { Link } from 'react-router-dom';
import PageBanner from '../components/common/PageBanner';
import SectionHeading from '../components/common/SectionHeading';
import { departments } from '../data/departmentsData';

function DepartmentsPage() {
  return (
    <>
      <PageBanner
        title="Departments"
        subtitle="Explore Academic Departments Designed for the Future"
        backgroundImage="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1600&q=80"
      />

      <section className="section-space">
        <div className="container">
          <SectionHeading
            eyebrow="Programs"
            title="Our Engineering Departments"
            subtitle="Each department offers strong academics, modern labs, and career-focused learning pathways."
            center
          />

          <div className="row g-4 mt-1">
            {departments.map((department) => (
              <div className="col-md-6 col-lg-4" key={department.id}>
                <article className="department-detail-card h-100">
                  <img src={department.image} alt={department.name} className="img-fluid" loading="lazy" />
                  <div className="p-4">
                    <h3 className="h5 mb-2">{department.name}</h3>
                    <p className="mb-2">{department.description}</p>
                    <p className="small text-muted mb-3">Intake: {department.intake}</p>
                    <Link className="department-link" to={`/departments/${department.slug}`}>
                      View Full Details <i className="bi bi-arrow-right" />
                    </Link>
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

export default DepartmentsPage;
