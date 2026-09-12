import ImageCard from '../common/imageCards/imageCard';
import VisitCampus from '../VisitCampus/VisitCampus';
import { placementMenuContent } from '../../data/placementMenu/placementMenu';
import type { PlacementMenuPageProps } from '../../types/placementMenu';
import './PlacementMenu.css';

function PlacementMenu({ type }: PlacementMenuPageProps) {
  const { title, data } = placementMenuContent[type];

  return (
    <>
      <main className="placement-menu-page">
        <section className="department-cse-events">
          <ImageCard title={title} data={data} />
        </section>
      </main>
      <VisitCampus />
    </>
  );
}

export default PlacementMenu;
