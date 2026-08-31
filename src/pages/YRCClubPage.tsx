import YRCClub from '../components/YRCClub/YRCClub';
import VisitCampus from '../components/VisitCampus/VisitCampus';
import { yrcClubEvents } from '../data/yrcClubData';

function YRCClubPage() {
  return (
    <>
      <YRCClub data={yrcClubEvents} />
      <VisitCampus />
    </>
  );
}

export default YRCClubPage;
