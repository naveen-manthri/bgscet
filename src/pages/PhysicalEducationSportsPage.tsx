import Advertisement from '../components/Advertisement/Advertisement';
import BannerSection from '../components/BannerSection/BannerSection';
import PhysicalEducationSports from '../components/PhysicalEducationSports/PhysicalEducationSports';
import VisitCampus from '../components/VisitCampus/VisitCampus';
import { physicalEducationData } from '../data/physicalEducationData';

function PhysicalEducationSportsPage() {
  return (
    <>
      <BannerSection image={physicalEducationData.banner.image} title={physicalEducationData.banner.title} />
      <Advertisement />
      <PhysicalEducationSports />
      <VisitCampus />
    </>
  );
}

export default PhysicalEducationSportsPage;
