import './HomeNewsAnnouncements.css';
import { newsAnnouncements } from '../../../data/newsAnnouncementsData';

function HomeNewsAnnouncements() {
  return (
    <section className="home-news-announcements section-space">
      <div className="flex flex-direction-column container">

        <div className="flex flex-direction-column flex-align-center section-heading-news">
          <h2>News & Events / Announcements</h2>
        </div>

        <div className="news-grid">

          {newsAnnouncements.map((news, index) => (
            <article  key={news.id}  className={`news-card ${  index === newsAnnouncements.length - 1  ? 'news-card-large' : 'news-card-small' }`} >
              <div className="image-hover-container"><img src={news.image} alt={news.alt} className="image-hover-scale" loading="lazy" /></div>
            </article>
          ))}

        </div>

      </div>
    </section>
  );
}

export default HomeNewsAnnouncements;
