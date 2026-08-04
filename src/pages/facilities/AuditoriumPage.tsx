import auditoriumImage from '../../assets/images/banner/facilities/auditorium.jpg';
import { auditoriumData } from '../../data/facilities/auditorium';
import FacilityDetailPage from './FacilityDetailPage';

function AuditoriumPage() {
  return <FacilityDetailPage title="Auditorium" image={auditoriumImage} data={auditoriumData} />;
}

export default AuditoriumPage;
