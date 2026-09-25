import Advertisement from '../components/Advertisement/Advertisement';
import BannerSection from '../components/BannerSection/BannerSection';
import FeaturesBanner from '../assets/images/features/Features-of-bgscet-banner.png';
import FeatureImageOne from '../assets/images/features/unique-features-1.png';
import FeatureImageTwo from '../assets/images/features/unique-fautures-2.png';
import VisitCampus from "../components/VisitCampus/VisitCampus";
import './FeaturesPage.css';

function FeaturesPage() {
  return (
    <div className="features-page">
      <BannerSection image={FeaturesBanner} title="" />
      <Advertisement />
      

      <section className="features-page__gallery" aria-label="BGSCET features gallery">
        <div className="features-page__image-wrap">
          <img src={FeatureImageOne} alt="BGSCET unique features illustration one" />
        </div>
        <div className="features-page__image-wrap">
          <img src={FeatureImageTwo} alt="BGSCET unique features illustration two" />
        </div>
      </section>

      <VisitCampus />
    </div>
  );
}

export default FeaturesPage;
