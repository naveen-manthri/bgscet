import StaffDetails from '../components/PlacementMenu/StaffDetails/StaffDetails';
import VisitCampus from '../components/VisitCampus/VisitCampus';
import { staffDetailsData } from '../data/placementMenu/staffDetails';
import './PlacementMenuPage.css';

function StaffDetailsPage() {
  return (
    <>
      <main className="placement-menu-page">
        <StaffDetails data={staffDetailsData} />
      </main>
      <VisitCampus />
    </>
  );
}

export default StaffDetailsPage;
