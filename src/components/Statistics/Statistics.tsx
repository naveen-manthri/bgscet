import { statistics } from '../../data/aboutData';
import './Statistics.css';

function Statistics() {
  return (
    <section className="about-statistics" aria-label="BGSCET statistics">
      <div className="about-statistics-grid">
        {statistics.map((stat) => (
          <article className="about-stat-item" key={stat.id}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Statistics;
