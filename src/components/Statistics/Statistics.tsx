import { statistics } from '../../data/statsData';
import './Statistics.css';

function Statistics() {
  return (
    <section className="home-statistics" aria-label="College statistics">
      <div className="home-statistics__inner">
        {statistics.map((statistic) => (
          <article className="home-statistics__card" key={statistic.id}>
            <strong>{statistic.value}</strong>
            <span>{statistic.label}</span>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Statistics;
