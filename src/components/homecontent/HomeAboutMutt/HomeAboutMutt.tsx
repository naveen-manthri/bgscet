import { homeAboutMutt } from '../../../data/homePageData';
import HomeContentSection from '../HomeContentSection/HomeContentSection';

function HomeAboutMutt() {
  return (
    <HomeContentSection title={homeAboutMutt.title} titleId="home-about-mutt-title" description={homeAboutMutt.description} image={homeAboutMutt.image} imageAlt="Sri Adichunchanagiri Mutt event" layout="text-first" variant="about-mutt" />
  );
}

export default HomeAboutMutt;
