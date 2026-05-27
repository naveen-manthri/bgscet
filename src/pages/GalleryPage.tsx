import PageBanner from '../components/common/PageBanner';
import GalleryGrid from '../components/reusable/GalleryGrid';

function GalleryPage() {
  return (
    <>
      <PageBanner
        title="Gallery"
        subtitle="Capturing the Spirit of Campus Life"
        backgroundImage="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1600&q=80"
      />
      <GalleryGrid />
    </>
  );
}

export default GalleryPage;
