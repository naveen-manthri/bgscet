import ImageCard from '../common/imageCards/imageCard';
import BannerSection from '../BannerSection/BannerSection';
import Advertisement from '../Advertisement/Advertisement';
import VisitCampus from '../VisitCampus/VisitCampus';
import { placementMenuContent } from '../../data/placementMenu/placementMenu';
import type { PlacementMenuPageProps } from '../../types/placementMenu';
import toppersBanner from '../../assets/images/home/toppers.png';
import './PlacementMenu.css';

function PlacementMenu({ type }: PlacementMenuPageProps) {
  const { title, data } = placementMenuContent[type];

  return (
    <>
      <BannerSection image={toppersBanner} title={title} fullImage />
      <Advertisement />
      <main className="placement-menu-page mobile-margin-top mobile-padding">
        <section className="department-cse-events">
          <ImageCard title={title} data={data} />
        </section>
      </main>
      <VisitCampus />
    </>
  );
}

export default PlacementMenu;
