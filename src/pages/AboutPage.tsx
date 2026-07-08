import BannerSection from '../components/BannerSection/BannerSection';
import AboutMutt from '../components/AboutMutt/AboutMutt';
import Statistics from '../components/Statistics/Statistics';
import GuruSection from '../components/GuruSection/GuruSection';
import CampusPlacements from '../components/CampusPlacements/CampusPlacements';
import StudentTestimonials from '../components/StudentTestimonials/StudentTestimonials';
import VisitCampus from '../components/VisitCampus/VisitCampus';
import Advertisement from '../components/Advertisement/Advertisement';

function AboutPage() {
  return (
    <div className="about-page">
      <BannerSection
        image="https://res.cloudinary.com/dxjzq6f0g/image/upload/v1697040913/BGSCET-PROJECT/Images/about-banner_1_1_1_1_1_1_1_1_1_1_1_1_1_1_1_1_1_1_1_1_1_1_1_1_1_1_1_kv7b5k.jpg"
        title="About BGSCET"
        whatsappLink="https://wa.me/919900000000"
        />
      <Advertisement />
      <AboutMutt />
      <Statistics />
      <GuruSection />
      <CampusPlacements />
      <StudentTestimonials />
      <VisitCampus />
    </div>
  );
}

export default AboutPage;
