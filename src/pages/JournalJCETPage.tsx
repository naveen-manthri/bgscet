import Advertisement from "../components/Advertisement/Advertisement";
import BannerSection from "../components/BannerSection/BannerSection";
import VisitCampus from "../components/VisitCampus/VisitCampus";
import JCET from "../components/JCET/JCET";
import JCETBanner from "../assets/images/banner/JCET.png";

function JournalJCETPage() {
  return (
    <>
      <BannerSection image={JCETBanner} title="" />
      <Advertisement />
      <JCET />
      <VisitCampus />
    </>
  );
}

export default JournalJCETPage;
