import "./career.css";

import type { CareerHeroData } from "../../types/career";

interface CareerHeroProps {
  data: CareerHeroData;
}

const CareerHero = ({ data }: CareerHeroProps) => {
  return (
    <section className="career-hero flex flex-direction-column">
      <div className="career-hero__image">
        <img src={data.image} alt={data.imageAlt} />
      </div>

      <div className="career-hero__content flex flex-direction-column">
       

        {data.description.map((text, index) => (
          <p key={index}>{text}</p>
        ))}

        <a href={data.button.link} className="career-hero__button flex inline-flex-center">
          {data.button.text}
        </a>
      </div>
    </section>
  );
};

export default CareerHero;
