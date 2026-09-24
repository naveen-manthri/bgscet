import Advertisement from '../components/Advertisement/Advertisement';
import BannerSection from '../components/BannerSection/BannerSection';
import Linkages from '../components/Linkages/Linkages';
import LinkagesBanner from '../assets/images/features/Features-of-bgscet-banner.png';
import VisitCampus from "../components/VisitCampus/VisitCampus";

function LinkagesPage() {
  return (
    <>
      <BannerSection image={LinkagesBanner} title="Linkages" />
      <Advertisement />
      <Linkages />
        <VisitCampus />
    </>
  );
}

export default LinkagesPage;
