import seminarHallImage from '../../assets/images/banner/facilities/seminar-hall.webp';
import { seminarHallData } from '../../data/facilities/seminarHall';
import FacilityDetailPage from './FacilityDetailPage';

function SeminarHallPage() {
  return <FacilityDetailPage title="Seminar Hall" image={seminarHallImage} data={seminarHallData} />;
}

export default SeminarHallPage;
