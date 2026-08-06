import { useState } from "react";
import './imageCard.css';
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";

import "yet-another-react-lightbox/styles.css";

import DepartmentSectionHeading from "../../DepartmentSectionHeading/DepartmentSectionHeading";
import type { DepartmentEvent } from "../../../types/ugprograms";

interface ImageCardProps {
  title: string;
  data: DepartmentEvent[];
}

const ImageCard = ({ title, data }: ImageCardProps) => {
  const [index, setIndex] = useState(-1);

  return (
    <>
      <DepartmentSectionHeading title={title} />

      <div className="cse-events-grid">
        {data.map((event, i) => (
          <div className="cse-event-card" key={event.id}>
            <div className="cse-event-image-wrapper">
              <img src={event.image} alt={event.alt} className="cse-event-image" />
            </div>

            <div className="cse-event-content">
              <p className="cse-event-description">&quot;{event.title}&quot;</p>
              <button type="button" className="read-more-btn" onClick={() => setIndex(i)}>Read More</button>
            </div>
          </div>
        ))}
      </div>

      <Lightbox open={index >= 0} close={() => setIndex(-1)} index={index} slides={data.map((event) => ({ src: event.image, alt: event.alt }))} plugins={[Zoom, Fullscreen]} />
    </>
  );
};

export default ImageCard;