import boardRoomImage from '../../assets/images/banner/facilities/board-room.jpg';
import { boardRoomData } from '../../data/facilities/boardRoom';
import FacilityDetailPage from './FacilityDetailPage';

function BoardRoomPage() {
  return <FacilityDetailPage title="Board Room" image={boardRoomImage} data={boardRoomData} />;
}

export default BoardRoomPage;
