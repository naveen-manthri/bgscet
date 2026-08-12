import { useMemo, useState } from "react";
import './imageCard.css';

import Lightbox from "yet-another-react-lightbox";
import Counter from "yet-another-react-lightbox/plugins/counter";
import Download from "yet-another-react-lightbox/plugins/download";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/counter.css";

import DepartmentSectionHeading from "../../DepartmentSectionHeading/DepartmentSectionHeading";
import type { DepartmentEvent } from "../../../types/ugprograms";

interface ImageCardProps {
  title: string;
  data: DepartmentEvent[];
}

const ImageCard = ({ title, data }: ImageCardProps) => {
  const [index, setIndex] = useState(-1);
  const slides = useMemo(
    () => data.map((event) => ({ src: event.image, alt: event.alt, title: event.title })),
    [data]
  );

  return (
    <>
      <DepartmentSectionHeading title={title} />

      <div className="cse-events-grid">
        {data.map((event, i) => (
          <div className="cse-event-card" key={event.id}>
            <button type="button" className="cse-event-image-wrapper" onClick={() => setIndex(i)} aria-label={`Open image: ${event.title}`}>
              <img src={event.image} alt={event.alt} className="cse-event-image" />
            </button>

            <div className="cse-event-content">
              <p className="cse-event-description">&quot;{event.title}&quot;</p>
              <button type="button" className="read-more-btn" onClick={() => setIndex(i)}>Read More</button>
            </div>
          </div>
        ))}
      </div>

      <Lightbox open={index >= 0} close={() => setIndex(-1)} index={index} slides={slides} plugins={[Counter, Download, Zoom, Fullscreen]} counter={{ container: { style: { top: "0.75rem", left: "0.75rem" } } }} carousel={{ finite: data.length <= 1 }} />
    </>
  );
};

export default ImageCard;