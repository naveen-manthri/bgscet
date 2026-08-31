import BannerSection from "../components/BannerSection/BannerSection";
import GrievanceRedressalCell from "../components/GrievanceRedressalCell/GrievanceRedressalCell";
import VisitCampus from "../components/VisitCampus/VisitCampus";
import banner from "../assets/images/banner/sc-st-cell-banner.png";

const GrievanceRedressalCellPage = () => {
  return (
    <>
      <BannerSection image={banner} title="Grievance Redressal Cell" />
      <GrievanceRedressalCell />
      <VisitCampus />
    </>
  );
};

export default GrievanceRedressalCellPage;
