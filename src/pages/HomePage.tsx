import BannerSection from '../components/BannerSection/BannerSection';
import homeBanner from '../assets/images/home/home-banner.png';
import Advertisement from '../components/Advertisement/Advertisement';
import HomeAboutUniversity from '../components/homecontent/HomeAboutUniversity/HomeAboutUniversity';
import HomeAboutMutt from '../components/homecontent/HomeAboutMutt/HomeAboutMutt';
import HomeVisionMission from '../components/homecontent/HomeVisionMission/HomeVisionMission';
import HomeAcademicPrograms from '../components/homecontent/HomeAcademicPrograms/HomeAcademicPrograms';
import HomeCampusLife from '../components/homecontent/HomeCampusLife/HomeCampusLife';
import CampusPlacements from '../components/CampusPlacements/CampusPlacements';
import StudentTestimonials from '../components/StudentTestimonials/StudentTestimonials';
import VisitCampus from '../components/VisitCampus/VisitCampus';
import Statistics from '../components/Statistics/Statistics';

function HomePage() {
  return (
    <div>
    <BannerSection
        image={homeBanner}
        title=""
        />
        <Advertisement />

        <HomeAboutUniversity />

        <Statistics />

        <HomeAboutMutt />

        <HomeVisionMission />

        <HomeAcademicPrograms />
        
        <CampusPlacements />

        <HomeCampusLife />

        <StudentTestimonials />

        <VisitCampus />
      </div>
  );
}

export default HomePage;
