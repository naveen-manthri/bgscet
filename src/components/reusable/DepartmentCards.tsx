import { Link } from 'react-router-dom';
import { departments } from '../../data/departmentsData';
import SectionHeading from '../common/SectionHeading';

function DepartmentCards() {
  return (
    <section className="department-cards section-space">
      <div className="container">
        <SectionHeading
          eyebrow="Academic Programs"
          title="Featured Engineering Departments"
          subtitle="Industry-focused curriculum, experienced faculty, and advanced laboratories across all programs."
          center
        />

        <div className="row g-4 mt-1">
          {departments.map((department) => (
            <div className="col-md-6 col-lg-4" key={department.id}>
              <div className="department-card h-100">
                <div className="department-card-header d-flex align-items-center justify-content-between mb-3">
                  <div className="department-icon" style={{ backgroundColor: `${department.color}20` }}>
                    <i className={`bi ${department.icon}`} style={{ color: department.color }} />
                  </div>
                  <span className="department-intake">Intake: {department.intake}</span>
                </div>
                <h3 className="department-title">{department.shortName}</h3>
                <p className="department-full-name">{department.name}</p>
                <p className="department-text mb-3">{department.description}</p>
                <Link to={`/departments/${department.slug}`} className="department-link">
                  View Department <i className="bi bi-arrow-right" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default DepartmentCards;
