import AboutMutt from '../components/AboutMutt/AboutMutt';
import AboutUniversity from '../components/AboutUniversity/AboutUniversity';
import Statistics from '../components/Statistics/Statistics';
import VisionMission from '../components/VisionMission/VisionMission';

function AboutPage() {
  return (
    <div className="about-page">
      <AboutUniversity />
      <Statistics />
      <AboutMutt />
      <VisionMission />
    </div>
  );
}

export default AboutPage;
