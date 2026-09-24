import Advertisement from '../components/Advertisement/Advertisement';
import BannerSection from '../components/BannerSection/BannerSection';
import '../components/GoverningCouncil/GoverningCouncil.css';
import GoverningCouncilBanner from '../assets/images/governingCouncil/governing-council-banner.jpeg';
import GoverningCouncilImage from '../assets/images/governingCouncil/GoverningCouncil_2024.jpeg';
import VisitCampus from "../components/VisitCampus/VisitCampus";


function GoverningCouncilPage() {
  return (
    <>
      <BannerSection image={GoverningCouncilBanner} title="Governing Council" />
      <Advertisement />

      <section className="governing-council-page" aria-label="Governing council section">
        <div className="governing-council-page__image-wrap">
          <img src={GoverningCouncilImage} alt="Governing Council" />
        </div>
      </section>
        <VisitCampus />
    </>
  );
}

export default GoverningCouncilPage;
