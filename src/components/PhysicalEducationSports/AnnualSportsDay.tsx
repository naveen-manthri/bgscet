import { physicalEducationData } from '../../data/physicalEducationData';
import './PhysicalEducationSports.css';

function AnnualSportsDay() {
  const { annualSportsImages } = physicalEducationData;

  return (
    <section className="physical-education__annual" aria-labelledby="annual-sports-day-title">
      <h2 id="annual-sports-day-title"><span>Annual</span><em>Sports Day</em></h2>
      <div className="physical-education__sports-gallery">
        {annualSportsImages.map((image, index) => (
          <img key={image} className={`physical-education__sports-image physical-education__sports-image--${index + 1}`} src={image} alt={`Annual Sports Day event ${index + 1}`} />
        ))}
      </div>
    </section>
  );
}

export default AnnualSportsDay;
