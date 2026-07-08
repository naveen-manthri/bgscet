import HomeHeroCarousel from '../components/HomeHeroCarousel/HomeHeroCarousel';
import Advertisement from '../components/Advertisement/Advertisement';
import HomeAboutUniversity from '../components/HomeAboutUniversity/HomeAboutUniversity';
import HomeStatistics from '../components/HomeStatistics/HomeStatistics';
import HomeAboutMutt from '../components/HomeAboutMutt/HomeAboutMutt';
import HomeVisionMission from '../components/HomeVisionMission/HomeVisionMission';
import HomeAcademicPrograms from '../components/HomeAcademicPrograms/HomeAcademicPrograms';
import HomePastEvents from '../components/HomePastEvents/HomePastEvents';
import HomeNewsAnnouncements from '../components/HomeNewsAnnouncements/HomeNewsAnnouncements';
import HomeCampusLife from '../components/HomeCampusLife/HomeCampusLife';
import CampusPlacements from '../components/CampusPlacements/CampusPlacements';
import StudentTestimonials from '../components/StudentTestimonials/StudentTestimonials';
import VisitCampus from '../components/VisitCampus/VisitCampus';

// const aboutImages = [
//   'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=900&q=80',
//   'https://images.unsplash.com/photo-1562774053-701939374585?w=900&q=80',
// ];

// const pastEvents = galleryItems.filter((item) => item.category === 'Events' || item.category === 'Workshops').slice(0, 4);
// const newsEvents = galleryItems.filter((item) => item.category === 'Cultural' || item.category === 'Convocation').slice(0, 4);
// const campusLife = galleryItems.filter((item) => item.category === 'Campus' || item.category === 'Sports').slice(0, 6);
// const departmentPreview = departments.slice(0, 6);

function HomePage() {
  return (
    <div>
    <HomeHeroCarousel />
        <Advertisement />

        <HomeAboutUniversity />

        <HomeStatistics />

        <HomeAboutMutt />

        <HomeVisionMission />

        <HomeAcademicPrograms />
        
        <HomePastEvents />

        <HomeNewsAnnouncements />

        <HomeCampusLife />

        <CampusPlacements />

        <StudentTestimonials />

        <VisitCampus />
      </div>
  );
}

export default HomePage;
