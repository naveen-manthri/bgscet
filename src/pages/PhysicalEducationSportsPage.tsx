import Advertisement from '../components/Advertisement/Advertisement';
import BannerSection from '../components/BannerSection/BannerSection';
import PhysicalEducationSports from '../components/PhysicalEducationSports/PhysicalEducationSports';
import VisitCampus from '../components/VisitCampus/VisitCampus';
import { physicalEducationData } from '../data/physicalEducationData';
import sportsWinners from '../assets/images/physicalEdu/winner-group.png';

function PhysicalEducationSportsPage() {
  return (
    <>
      <BannerSection  image={physicalEducationData.banner.image}
        title={physicalEducationData.banner.title} carouselSlides={[
          { image: physicalEducationData.banner.image, alt: physicalEducationData.banner.title },
          { image: sportsWinners, alt: 'BGSCET sports achievers with trophies and medals' },
        ]}
      />
      <Advertisement />
      <PhysicalEducationSports />
      <VisitCampus />
    </>
  );
}

export default PhysicalEducationSportsPage;
