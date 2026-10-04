import './HomePastEvents.css';
import { pastEvents } from '../../../data/pastEventsData';

function HomePastEvents() {
  return (
    <section className="home-past-events section-space">
      <div className="container">

        <div className="section-heading-events">
          <h2>Past Events</h2>
        </div>

        <div className="past-events-grid">

          {pastEvents.map((event, index) => (
            <article
              key={event.id}
              className={`past-event-card ${
                index === 0 ? 'past-event-large' : 'past-event-small'
              }`}
            >
              <div className="image-hover-container">
              <img
                src={event.image}
                alt={event.alt}
                className="image-hover-scale"
                loading="lazy"
              />
              </div>
            </article>
          ))}

        </div>

      </div>
    </section>
  );
}

export default HomePastEvents;
