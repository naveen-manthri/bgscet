
import Advertisement from '../components/Advertisement/Advertisement';
import BannerSection from '../components/BannerSection/BannerSection';
import Statistics from '../components/Statistics/Statistics';
import VisitCampus from '../components/VisitCampus/VisitCampus';
import LibraryAbout from '../components/LibraryPage/LibraryAbout/LibraryAbout';
import LibraryRules from '../components/LibraryPage/LibraryRules/LibraryRules';
import LibraryBanner from '../assets/images/library/libraryBanner.png';
import LibraryBannerSlide from '../assets/images/library/library-banner1.jpg';
import AboutLibrarian from '../components/LibraryPage/AboutLibrarian/AboutLibrarian';


function LibraryPage() {
  return (
    <>
      <BannerSection image={LibraryBanner}  title="Library"
        carouselSlides={[
          { image: LibraryBanner, alt: 'BGSCET library' },
          { image: LibraryBannerSlide, alt: 'BGSCET library banner' },
        ]}
      />
      <Advertisement />
      <LibraryAbout />
      <Statistics />
      <AboutLibrarian />
      <LibraryRules />
      <VisitCampus />
    </>
  );
}

export default LibraryPage;