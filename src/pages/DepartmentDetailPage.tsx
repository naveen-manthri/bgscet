import { Navigate, useParams } from 'react-router-dom';
import PageBanner from '../components/common/PageBanner';
import { departments } from '../data/departmentsData';
import UGDepartment from './UGDepartment/UGDepartment';
import type { UGDepartmentData } from '../types/ugprograms';

const ugDepartmentModules = import.meta.glob('../data/UGPrograms/*Department.ts', {
  eager: true,
}) as Record<string, { default: UGDepartmentData }>;

const ugDepartments = Object.values(ugDepartmentModules).map(({ default: department }) => department);

function DepartmentDetailPage() {
  const { slug } = useParams();
  const ugDepartment = ugDepartments.find((item) => item.slug === slug);
  const department = departments.find((item) => item.slug === slug);

  if (ugDepartment) {
    return <UGDepartment data={ugDepartment} />;
  }

  if (!department) {
    return <Navigate to="/departments" replace />;
  }

  return (
    <>
      <PageBanner
        title={department.name}
        subtitle={department.description}
        backgroundImage={department.image}
      />

      <section className="section-space">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-8">
              <div className="content-card h-100">
                <h3 className="mb-3">Overview</h3>
                <p className="mb-0">{department.overview}</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="content-card h-100">
                <h3 className="mb-3">Intake Details</h3>
                <p className="mb-0">
                  Annual intake for <strong>{department.shortName}</strong> is <strong>{department.intake}</strong>{' '}
                  students.
                </p>
              </div>
            </div>
          </div>

          <div className="row g-4 mt-1">
            <div className="col-md-6">
              <div className="content-card h-100">
                <h3 className="mb-3">Laboratories</h3>
                <ul className="mb-0">
                  {department.labs.map((lab) => (
                    <li key={lab}>{lab}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-md-6">
              <div className="content-card h-100">
                <h3 className="mb-3">Facilities</h3>
                <ul className="mb-0">
                  {department.facilities.map((facility) => (
                    <li key={facility}>{facility}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="row g-4 mt-1">
            <div className="col-12">
              <div className="content-card">
                <h3 className="mb-3">Career Opportunities</h3>
                <div className="d-flex flex-wrap gap-2">
                  {department.careers.map((career) => (
                    <span className="highlight-pill" key={career}>
                      {career}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default DepartmentDetailPage;
