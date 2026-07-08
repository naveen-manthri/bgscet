import { homeStatistics } from '../../data/homePageData';
import './HomeStatistics.css';

function HomeStatistics() {
  return (
    <section className="home-statistics" aria-label="College statistics">
      <div className="home-statistics__inner">
        {homeStatistics.map((statistic) => (
          <article className="home-statistics__card" key={statistic.id}>
            <strong>{statistic.value}</strong>
            <span>{statistic.label}</span>
          </article>
        ))}
      </div>
    </section>
  );
}

export default HomeStatistics;
