import BannerSection from '../components/BannerSection/BannerSection';
import homeBanner from '../assets/images/home/home-page-banner.png';
import toppersBanner from '../assets/images/home/toppers.jpeg';
import highestPackageBanner from '../assets/images/home/highest-package.jpg';
import Advertisement from '../components/Advertisement/Advertisement';
import HomeAboutUniversity from '../components/homecontent/HomeAboutUniversity/HomeAboutUniversity';
import HomeAboutMutt from '../components/homecontent/HomeAboutMutt/HomeAboutMutt';
import HomeVisionMission from '../components/homecontent/HomeVisionMission/HomeVisionMission';
import HomeAcademicPrograms from '../components/homecontent/HomeAcademicPrograms/HomeAcademicPrograms';
import HomeCampusLife from '../components/homecontent/HomeCampusLife/HomeCampusLife';
import CampusPlacements from '../components/homecontent/CampusPlacements/CampusPlacements';
import StudentTestimonials from '../components/homecontent/StudentTestimonials/StudentTestimonials';
import VisitCampus from '../components/VisitCampus/VisitCampus';
import Statistics from '../components/Statistics/Statistics';
import PlacementOffers from '../components/reusable/PlacementOffers';
import { placementOffersData } from '../data/placementOffersData';

function HomePage() {
  return (
    <div>
    <BannerSection
      image={homeBanner}
      title=""
      homeHero
      homeHeroSlides={[
        { image: homeBanner, alt: 'Building Engineers. Shaping the Future.' },
        { image: toppersBanner, alt: 'Congratulations to the toppers' },
        { image: highestPackageBanner, alt: 'Highest package offered to a student' },
      ]}
    />
        <Advertisement />

        <HomeAboutUniversity />

        <Statistics />

        <HomeAboutMutt />

        <HomeVisionMission />

        <HomeAcademicPrograms />

        <PlacementOffers data={placementOffersData} />
        
        <CampusPlacements />

        <HomeCampusLife />

        <StudentTestimonials />

        <VisitCampus />
      </div>
  );
}

export default HomePage;
