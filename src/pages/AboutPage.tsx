import BannerSection from '../components/BannerSection/BannerSection';
import AboutMutt from '../components/aboutcontent/AboutMutt/AboutMutt';
import GuruSection from '../components/aboutcontent/GuruSection/GuruSection';
import VisitCampus from '../components/VisitCampus/VisitCampus';
import Advertisement from '../components/Advertisement/Advertisement';
import Statistics from '../components/Statistics/Statistics';
import AboutBanner from '../assets/images/banner/about-mutt-banner.png';

function AboutPage() {
  return (
    <div className="about-page">
      <BannerSection
        image={AboutBanner}
        title="About Mutt"
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
