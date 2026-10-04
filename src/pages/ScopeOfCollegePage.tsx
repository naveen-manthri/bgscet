import Advertisement from '../components/Advertisement/Advertisement';
import BannerSection from '../components/BannerSection/BannerSection';
import ScopeOfCollege from '../components/ScopeOfCollege/ScopeOfCollege';
import ScopeBanner from '../assets/images/scopeOfCollege/scopeOfCollege-banner.png';
import VisitCampus from "../components/VisitCampus/VisitCampus";

function ScopeOfCollegePage() {
  return (
    <>
      <BannerSection image={ScopeBanner} title="Scope of The College" />
      <Advertisement />
      <ScopeOfCollege />
        <VisitCampus />
    </>
  );
}

export default ScopeOfCollegePage;
