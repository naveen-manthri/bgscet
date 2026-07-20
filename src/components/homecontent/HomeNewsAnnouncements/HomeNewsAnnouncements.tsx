import './HomeNewsAnnouncements.css';
import { newsAnnouncements } from '../../data/newsAnnouncementsData';

function HomeNewsAnnouncements() {
  return (
    <section className="home-news-announcements section-space">
      <div className="container">

        <div className="section-heading-news">
          <h2>News & Events / Announcements</h2>
        </div>

        <div className="news-grid">

          {newsAnnouncements.map((news, index) => (
            <article
              key={news.id}
              className={`news-card ${
                index === newsAnnouncements.length - 1
                  ? 'news-card-large'
                  : 'news-card-small'
              }`}
            >
              <img
                src={news.image}
                alt={news.alt}
                loading="lazy"
              />
            </article>
          ))}

        </div>

      </div>
    </section>
  );
}

export default HomeNewsAnnouncements;