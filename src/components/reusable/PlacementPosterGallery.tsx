import { useMemo, useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import Counter from 'yet-another-react-lightbox/plugins/counter';
import Download from 'yet-another-react-lightbox/plugins/download';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/counter.css';

import uniRankersPoster from '../../assets/images/placement/uniRankers.png';
import yashwanthPoster from '../../assets/images/placement/placement-yashwant.png';
import autodeskPoster from '../../assets/images/placement/placement-autodesk.png';
import './PlacementPosterGallery.css';

const posters = [
  { src: uniRankersPoster, alt: 'BGSCET university rank holders' },
  { src: yashwanthPoster, alt: 'BGSCET student placement at Glance' },
  { src: autodeskPoster, alt: 'BGSCET students placed at Autodesk' },
];

function PlacementPosterGallery() {
  const [index, setIndex] = useState(-1);
  const slides = useMemo(
    () => posters.map((poster) => ({ src: poster.src, alt: poster.alt })),
    []
  );

  return (
    <>
      <section className="placement-poster-gallery" aria-label="Placement highlights">
        <div className="placement-poster-gallery__grid">
          {posters.map((poster, i) => (
            <button
              key={poster.src}
              type="button"
              className="placement-poster-gallery__item"
              onClick={() => setIndex(i)}
              aria-label={`Open placement poster ${i + 1}`}
            >
              <span className="image-hover-container placement-poster-gallery__image-wrap">
                <img
                  className="placement-poster-gallery__image image-hover-scale"
                  src={poster.src}
                  alt={poster.alt}
                  loading="lazy"
                />
              </span>
            </button>
          ))}
        </div>
      </section>

      <Lightbox
        open={index >= 0}
        close={() => setIndex(-1)}
        index={index}
        slides={slides}
        plugins={[Counter, Download, Zoom, Fullscreen]}
        counter={{ container: { style: { top: '0.75rem', left: '0.75rem' } } }}
        carousel={{ finite: posters.length <= 1 }}
      />
    </>
  );
}

export default PlacementPosterGallery;
