import digitalClassroomImage from '../../assets/images/banner/facilities/digital-classroom.jpg';
import { digitalClassroomData } from '../../data/facilities/digitalClassroom';
import FacilityDetailPage from './FacilityDetailPage';

function DigitalClassroomPage() {
  return <FacilityDetailPage title="Digital Classroom" image={digitalClassroomImage} data={digitalClassroomData} />;
}

export default DigitalClassroomPage;
