import { useMemo, useState } from 'react';
import { galleryCategories, galleryItems } from '../../data/galleryData';
import SectionHeading from '../common/SectionHeading';

interface GalleryGridProps {
  preview?: boolean;
}

function GalleryGrid({ preview = false }: GalleryGridProps) {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems = useMemo(() => {
    const base =
      activeCategory === 'All'
        ? galleryItems
        : galleryItems.filter((item) => item.category === activeCategory);

    return preview ? base.slice(0, 8) : base;
  }, [activeCategory, preview]);

  return (
    <section className="gallery-grid section-space">
      <div className="container">
        <SectionHeading
          eyebrow="Campus Moments"
          title={preview ? 'Gallery Preview' : 'Campus Gallery'}
          subtitle="A glimpse into academics, events, innovation, sports, and student life at BGSCET."
          center
        />

        <div className="gallery-filters d-flex flex-wrap justify-content-center gap-2 mt-4 mb-4">
          {galleryCategories.map((category) => (
            <button
              key={category}
              className={`btn btn-sm ${activeCategory === category ? 'btn-brand-primary' : 'btn-outline-secondary'}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="row g-3 g-md-4">
          {filteredItems.map((item) => (
            <div className="col-6 col-md-4 col-lg-3" key={item.id}>
              <div className="gallery-card">
                <img src={item.image} alt={item.title} className="img-fluid" loading="lazy" />
                <div className="gallery-overlay">
                  <h6 className="mb-1">{item.title}</h6>
                  <span>{item.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default GalleryGrid;
