import BannerSection from "../../components/BannerSection/BannerSection";
import TitleImageCarousel from "../../components/TitleImageCarousel/TitleImageCarousel";
import Advertisement from '../../components/Advertisement/Advertisement';
import VisitCampus from '../../components/VisitCampus/VisitCampus'
import AnnualSportsDay from '../../components/PhysicalEducationSports/AnnualSportsDay';

import {
  galleryCollegePhotos,
  galleryCulturalEvents,
  galleryRedCrossPhotos,
  gallerySamvit,
  galleryVideoUrl,
} from "./GalleryPageData";
import galleryBanner from "../../assets/images/gallery/galley-page-banner.png";
import "./GalleryPage.css";

function GalleryPage() {
  return (
    <div className="gallery-page">
      <BannerSection image={galleryBanner} title="BGSCET Gallery" fullImage />
      <Advertisement />

      <section className="gallery-page__video" aria-labelledby="gallery-video-title">
        
        <div className="gallery-page__video-frame">
          <iframe src={galleryVideoUrl} title="BGSCET campus video" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />

        </div>
      </section>

      <div className="gallery-page__sections">
        <section className="gallery-page__carousel-section gallery-page__carousel-section--title" aria-label="College photos">
          <TitleImageCarousel title="College Photos" images={galleryCollegePhotos} className="gallery-page__college-carousel" imageAspectRatio="1.5 / 1" />

        </section>

        <section className="gallery-page__collection" aria-labelledby="gallery-cultural-title">
          <h2 className="gallery-page__section-title" id="gallery-cultural-title">Cultural Events</h2>
          <div className="gallery-page__mosaic">
            <figure className="gallery-page__photo gallery-page__mosaic-photo--first image-hover-container">
              <img src={galleryCulturalEvents[0].src} alt={galleryCulturalEvents[0].alt} className="image-hover-scale" loading="lazy" />
            </figure>
            <figure className="gallery-page__photo gallery-page__mosaic-photo--second image-hover-container">
              <img src={galleryCulturalEvents[1].src} alt={galleryCulturalEvents[1].alt} className="image-hover-scale" loading="lazy" />
            </figure>
            <figure className="gallery-page__photo gallery-page__mosaic-photo--third image-hover-container">
              <img src={galleryCulturalEvents[2].src} alt={galleryCulturalEvents[2].alt} className="image-hover-scale" loading="lazy" />
            </figure>
            <div className="gallery-page__mosaic-stack">
              {[galleryCulturalEvents[3], galleryCulturalEvents[4]].map((photo) => (
                <figure className="gallery-page__photo image-hover-container" key={photo.src}>
                  <img src={photo.src} alt={photo.alt} className="image-hover-scale" loading="lazy" />
                </figure>
              ))}
            </div>
            <figure className="gallery-page__photo gallery-page__mosaic-photo--sixth image-hover-container">
              <img src={galleryCulturalEvents[5].src} alt={galleryCulturalEvents[5].alt} className="image-hover-scale" loading="lazy" />
            </figure>
          </div>
        </section>

        <section className="gallery-page__carousel-section" aria-label="Red Cross Day photos">
          <TitleImageCarousel  title="Red Cross Day" images={galleryRedCrossPhotos}  className="gallery-page__red-cross-carousel" imageAspectRatio="1.5 / 1"/>
        </section>

        <section className="gallery-page__samvit" aria-labelledby="gallery-samvit-title">
          <h2 className="gallery-page__section-title" id="gallery-samvit-title">SAMVIT</h2>
          <div className="gallery-page__mosaic">
            <figure className="gallery-page__photo gallery-page__mosaic-photo--first image-hover-container">
              <img src={gallerySamvit[0].src} alt={gallerySamvit[0].alt} className="image-hover-scale" loading="lazy" />
            </figure>
            <figure className="gallery-page__photo gallery-page__mosaic-photo--second image-hover-container">
              <img src={gallerySamvit[1].src} alt={gallerySamvit[1].alt} className="image-hover-scale" loading="lazy" />
            </figure>
            <figure className="gallery-page__photo gallery-page__mosaic-photo--third image-hover-container">
              <img src={gallerySamvit[2].src} alt={gallerySamvit[2].alt} className="image-hover-scale" loading="lazy" />
            </figure>
            <div className="gallery-page__mosaic-stack">
              {[gallerySamvit[3], gallerySamvit[4]].map((photo) => (
                <figure className="gallery-page__photo image-hover-container" key={photo.src}>
                  <img src={photo.src} alt={photo.alt} className="image-hover-scale" loading="lazy" />
                </figure>
              ))}
            </div>
            <figure className="gallery-page__photo gallery-page__mosaic-photo--sixth image-hover-container">
              <img src={gallerySamvit[5].src} alt={gallerySamvit[5].alt} className="image-hover-scale" loading="lazy" />
            </figure>
          </div>
        </section>
      </div>
      
      <AnnualSportsDay />
      <VisitCampus />
    </div>
  );
}

export default GalleryPage;
