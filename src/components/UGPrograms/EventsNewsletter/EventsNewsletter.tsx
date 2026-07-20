import "./EventsNewsletter.css";

import Events from "./Events/Events";
import Newsletter from "./Newsletter/Newsletter";

import type { DepartmentEventsData } from "../../../types/ugprograms";

interface EventsNewsletterProps {
  data: DepartmentEventsData;
}

const EventsNewsletter = ({ data }: EventsNewsletterProps) => (
  <section className="department-cse-events">
    <Events title={data.title} data={data.events} />
    <Newsletter title={data.newsletterTitle} data={data.newsletters} />
  </section>
);

export default EventsNewsletter;
