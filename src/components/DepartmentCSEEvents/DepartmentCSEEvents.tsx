import React from "react";
import "./DepartmentCSEEvents.css";

import DepartmentSectionHeading from "../DepartmentSectionHeading/DepartmentSectionHeading";
import { cseEventsData } from "../../data/cseDepartment";

import event1 from "../../assets/images/cseevents/event-1.jpg";
import event2 from "../../assets/images/cseevents/event-2.jpg";
import event3 from "../../assets/images/cseevents/event-3.jpg";
import event4 from "../../assets/images/cseevents/event-4.jpg";
import event5 from "../../assets/images/cseevents/event-5.jpg";
import event6 from "../../assets/images/cseevents/event-6.jpg";
import event7 from "../../assets/images/cseevents/event-7.jpg";
import event8 from "../../assets/images/cseevents/event-8.jpg";
import event9 from "../../assets/images/cseevents/event-9.jpg";
import event10 from "../../assets/images/cseevents/event-10.jpg";
import event11 from "../../assets/images/cseevents/event-11.jpg";
import event12 from "../../assets/images/cseevents/event-12.jpg";

const eventImages: Record<string, string> = {
  "event-1.jpg": event1,
  "event-2.jpg": event2,
  "event-3.jpg": event3,
  "event-4.jpg": event4,
  "event-5.jpg": event5,
  "event-6.jpg": event6,
  "event-7.jpg": event7,
  "event-8.jpg": event8,
  "event-9.jpg": event9,
  "event-10.jpg": event10,
  "event-11.jpg": event11,
  "event-12.jpg": event12,
};

const DepartmentCSEEvents: React.FC = () => {
  const handleReadMore = (eventId: number) => {
    console.log(`Read More clicked for Event ${eventId}`);
  };

  const handleNewsletterClick = (newsletterId: number) => {
    console.log(`Newsletter ${newsletterId} clicked`);
  };

  return (
    <section className="department-cse-events">
      <DepartmentSectionHeading title={cseEventsData.title} />

      <div className="cse-events-grid">
        {cseEventsData.events.map((event) => (
          <div className="cse-event-card" key={event.id}>
            <div className="cse-event-image-wrapper">
              <img
                src={eventImages[event.image]}
                alt={event.alt}
                className="cse-event-image"
              />
            </div>

            <div className="cse-event-content">
              <p className="cse-event-description">
                "{event.title}"
              </p>

              <button
                type="button"
                className="read-more-btn"
                onClick={() => handleReadMore(event.id)}
              >
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="newsletter-section">
        <DepartmentSectionHeading title="CSE Newsletter" />

        <div className="newsletter-grid">
          {cseEventsData.newsletters.map((newsletter) => (
            <button
              key={newsletter.id}
              type="button"
              className="newsletter-btn"
              onClick={() => handleNewsletterClick(newsletter.id)}
            >
              {newsletter.title}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DepartmentCSEEvents;