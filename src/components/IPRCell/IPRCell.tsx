import { useMemo, useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Counter from "yet-another-react-lightbox/plugins/counter";
import Download from "yet-another-react-lightbox/plugins/download";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/counter.css";
import "./IPRCell.css";
import DepartmentSectionHeading from "../DepartmentSectionHeading/DepartmentSectionHeading";
import { iprData } from "../../data/iprData";

const IPRCell = () => {
  const [index, setIndex] = useState(-1);
  const slides = useMemo(
    () => iprData.images.map((item) => ({ src: item.image, alt: item.alt })),
    []
  );

  return (
    <section className="ipr-section ipr">
      <DepartmentSectionHeading title={iprData.title} className="department-section-heading--medium" />

      <p>{iprData.description}</p>

      <div className="ipr-gallery">
        {iprData.images.map((item, imageIndex) => (
          <div className="ipr-card" key={item.id}>
            <button type="button"  className="ipr-image-button" onClick={() => setIndex(imageIndex)} aria-label={`Open image: ${item.alt}`}>

              <img src={item.image} alt={item.alt} />
            </button>
          </div>
        ))}
      </div>

      <Lightbox
        open={index >= 0}
        close={() => setIndex(-1)}
        index={index}
        slides={slides}
        plugins={[Counter, Download, Zoom, Fullscreen]}
        carousel={{ finite: iprData.images.length <= 1 }}
      />
    </section>
  );
};

export default IPRCell;