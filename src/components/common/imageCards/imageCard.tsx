import { useMemo, useState, type ReactNode } from "react";
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
  lightboxData?: DepartmentEvent[];
  showHeading?: boolean;
  showDetails?: boolean;
  className?: string;
  triggerLabel?: string;
  renderContent?: (openImage: (image: DepartmentEvent) => void) => ReactNode;
}

const ImageCard = ({
  title,
  data,
  lightboxData = data,
  showHeading = true,
  showDetails = true,
  className = "",
  triggerLabel,
  renderContent,
}: ImageCardProps) => {
  const [index, setIndex] = useState(-1);
  const slides = useMemo(
    () => lightboxData.map((event) => ({
      src: event.image,
      alt: event.alt,
      ...(showDetails ? { title: event.title } : {}),
    })),
    [lightboxData, showDetails]
  );
  const openImage = (image: DepartmentEvent) => {
    const imageIndex = lightboxData.findIndex((slide) => slide.id === image.id);
    setIndex(imageIndex >= 0 ? imageIndex : 0);
  };

  return (
    <>
      {triggerLabel ? (
        <button
          type="button"
          className={className}
          onClick={() => {
            const imageIndex = lightboxData.findIndex((image) => image.image === data[0]?.image);
            setIndex(imageIndex >= 0 ? imageIndex : 0);
          }}
        >
          {triggerLabel}
        </button>
      ) : (
        <>
          {showHeading && <DepartmentSectionHeading title={title} className="department-section-heading--medium" />}

          {renderContent ? renderContent(openImage) : (
            <div className={`cse-events-grid ${className}`.trim()}>
              {data.map((event, i) => (
                <div className="cse-event-card flex flex-column" key={event.id}>
                  <button type="button" className="cse-event-image-wrapper flex flex-center" onClick={() => {
                    const imageIndex = lightboxData.findIndex((image) => image.id === event.id);
                    setIndex(imageIndex >= 0 ? imageIndex : i);
                  }} aria-label={`Open image: ${event.title}`}>
                    <span className="image-hover-container"><img src={event.image} alt={event.alt} className="cse-event-image image-hover-scale" /></span>
                  </button>

                  {showDetails && (
                    <div className="cse-event-content flex flex-column flex-align-center flex-justify-between flex-one">
                      <p className="cse-event-description">&quot;{event.title}&quot;</p>
                      <button type="button" className="read-more-btn" onClick={() => setIndex(i)}>Read More</button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </>
      )}

      <Lightbox open={index >= 0} close={() => setIndex(-1)} index={index} slides={slides} plugins={[Counter, Download, Zoom, Fullscreen]} counter={{ container: { style: { top: "0.75rem", left: "0.75rem" } } }} carousel={{ finite: lightboxData.length <= 1 }} />
    </>
  );
};

export default ImageCard;
