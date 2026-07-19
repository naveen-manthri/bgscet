import BannerSection from '../components/BannerSection/BannerSection';
import AboutMutt from '../components/AboutMutt/AboutMutt';
import GuruSection from '../components/GuruSection/GuruSection';
import VisitCampus from '../components/VisitCampus/VisitCampus';
import Advertisement from '../components/Advertisement/Advertisement';
import Statistics from '../components/Statistics/Statistics';
import AboutBanner from '../assets/images/banner/bgscet-clg.jpg';

function AboutPage() {
  return (
    <div className="about-page">
      <BannerSection
        image={AboutBanner}
        title="About Mutt"
        whatsappLink="https://wa.me/919900000000"
        />
      <Advertisement />
      <AboutMutt />
      <Statistics />
      <GuruSection />
      <VisitCampus />
    </div>
  );
}

export default AboutPage;
