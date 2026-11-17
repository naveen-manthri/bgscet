import type { PlacementOffersData } from '../../types/placementOffers';
import SectionHeading from '../common/SectionHeading';
import './PlacementOffers.css';

interface PlacementOffersProps {
  data: PlacementOffersData;
}

function PlacementOffers({ data }: PlacementOffersProps) {
  return (
    <section className="placement-offers section-space" aria-label={`${data.subtitle} ${data.title}`}>
      <div className="container">
        <SectionHeading subtitle={data.subtitle} title={data.title} underline center />

        <ul className="placement-offers__departments">
          {data.departments.map((department) => (
            <li className="placement-offers__department" key={department.name}>
              <span className="placement-offers__percentage">{department.percentage}%</span>
              <span className="placement-offers__name">{department.name}</span>
            </li>
          ))}
        </ul>
      </div>
      <p className="placement-offers__total">
        Total Offers – <strong>{data.totalOffers}</strong>
      </p>
      <div className="container">
        <p className="placement-offers__note">{data.note}</p>
      </div>
    </section>
  );
}

export default PlacementOffers;
