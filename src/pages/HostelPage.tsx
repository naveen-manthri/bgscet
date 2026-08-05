import Hostel from '../components/Hostel/Hostel';
import Advertisement from '../components/Advertisement/Advertisement';
import VisitCampus from '../components/VisitCampus/VisitCampus';
import BannerSection from '../components/BannerSection/BannerSection';
import hostelBanner from '../assets/images/hostel/HostelBanner.jpeg';

function HostelPage() {
  return (
    <>
    <BannerSection image={hostelBanner}  title="Hostel" />
    <Advertisement />
      <Hostel />
      <VisitCampus />
    </>
  );
}

export default HostelPage;
