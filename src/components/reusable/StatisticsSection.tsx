import { stats } from '../../data/statsData';
import SectionHeading from '../common/SectionHeading';

function StatisticsSection() {
  return (
    <section className="stats-section section-space">
      <div className="container">
        <SectionHeading
          eyebrow="Our Achievements"
          title="Excellence Backed by Numbers"
          subtitle="Building successful careers through quality education, innovation, and industry partnerships."
          center
        />

        <div className="row g-4 mt-1">
          {stats.map((stat) => (
            <div className="col-6 col-md-4 col-lg-2" key={stat.id}>
              <div className="stat-card h-100 text-center">
                <div className="stat-icon mb-3">
                  <i className={`bi ${stat.icon}`} />
                </div>
                <h3 className="stat-value mb-2">
                  {stat.value}
                  {stat.suffix ?? ''}
                </h3>
                <p className="stat-label mb-0">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StatisticsSection;
