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
  return (
    <section className="placement-poster-gallery" aria-label="Placement highlights">
      <div className="placement-poster-gallery__grid">
        {posters.map((poster) => (
          <img  className="placement-poster-gallery__image" key={poster.src}  src={poster.src} alt={poster.alt} loading="lazy"  />
        ))}
      </div>
    </section>
  );
}

export default PlacementPosterGallery;
