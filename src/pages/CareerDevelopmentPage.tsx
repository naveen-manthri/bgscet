import CareerDevelopment from "../components/careerDevelopment/CareerDevelopment";
import BannerSection from "../components/BannerSection/BannerSection";
import PlacementPosterGallery from "../components/reusable/PlacementPosterGallery";
import Advertisement from '../components/Advertisement/Advertisement';
import VisitCampus from '../components/VisitCampus/VisitCampus';
import toppersBanner from '../assets/images/home/toppers.png';


const CareerDevelopmentPage = () => {
  return (
    <>
      <BannerSection image={toppersBanner} title="" fullImage />
      
      <Advertisement />
      <PlacementPosterGallery />
      <CareerDevelopment />

      <VisitCampus />
    </>
  );
};

export default CareerDevelopmentPage;