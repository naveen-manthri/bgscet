import PlacementMenu from '../components/PlacementMenu/PlacementMenu';
import type { PlacementMenuPageProps } from '../types/placementMenu';
import './PlacementMenuPage.css';

function PlacementMenuPage({ type }: PlacementMenuPageProps) {
  return <PlacementMenu type={type} />;
}

export default PlacementMenuPage;
