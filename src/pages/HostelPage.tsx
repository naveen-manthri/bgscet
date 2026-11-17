import Hostel from '../components/Hostel/Hostel';
import Advertisement from '../components/Advertisement/Advertisement';
import VisitCampus from '../components/VisitCampus/VisitCampus';
import BannerSection from '../components/BannerSection/BannerSection';
import hostelBanner from '../assets/images/hostel/HostelBanner.jpeg';
import hostelBannerSlide from '../assets/images/hostel/hostelBanner1.jpg';

function HostelPage() {
  return (
    <>
    <BannerSection
      image={hostelBanner}
      title="Hostel"
      carouselSlides={[
        { image: hostelBanner, alt: 'BGSCET hostel' },
        { image: hostelBannerSlide, alt: 'BGSCET hostel banner' },
      ]}
    />
    <Advertisement />
      <Hostel />
      <VisitCampus />
    </>
  );
}

export default HostelPage;
