import { homeVisionMission } from '../../../data/homePageData';
import HomeContentSection from '../HomeContentSection/HomeContentSection';

function HomeVisionMission() {
  return (
    <HomeContentSection title={homeVisionMission.title} titleId="home-vision-mission-title" description={homeVisionMission.description} image={homeVisionMission.image} imageAlt="Sri Adichunchanagiri Mutt event" layout="image-first" variant="vision-mission" />
  );
}

export default HomeVisionMission;
