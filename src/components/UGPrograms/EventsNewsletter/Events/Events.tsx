import DepartmentSectionHeading from "../../../DepartmentSectionHeading/DepartmentSectionHeading";

import type { DepartmentEvent } from "../../../../types/ugprograms";

interface EventsProps {
  title: string;
  data: DepartmentEvent[];
}

const Events = ({ title, data }: EventsProps) => (
  <>
    <DepartmentSectionHeading title={title} />
    <div className="cse-events-grid">
      {data.map((event) => (
        <div className="cse-event-card" key={event.id}>
          <div className="cse-event-image-wrapper">
            <img src={event.image} alt={event.alt} className="cse-event-image" />
          </div>
          <div className="cse-event-content">
            <p className="cse-event-description">&quot;{event.title}&quot;</p>
            <button type="button" className="read-more-btn">Read More</button>
          </div>
        </div>
      ))}
    </div>
  </>
);

export default Events;
