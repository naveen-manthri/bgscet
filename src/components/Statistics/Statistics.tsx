import "./Statistics.css";
import { statistics } from "../../data/statistics";

const Statistics = () => {
  return (
    <section className="statistics">
      <div className="statistics-container">
        <div className="statistics-header">
          <p className="statistics-unit">UNIT OF</p>

          <h2 className="statistics-title">
            Sri Adichunchanagiri Shikshana Trust (R)
          </h2>

          <span className="statistics-underline" />
        </div>

        <div className="statistics-grid">
          {statistics.map((item) => (
            <article key={item.id} className="statistics-card">
              <h3 className="statistics-value">{item.value}</h3>

              <p className="statistics-label">{item.label}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;