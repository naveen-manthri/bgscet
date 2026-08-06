import "./career.css";

import type { CareerHeroData } from "../../types/career";

interface CareerHeroProps {
  data: CareerHeroData;
}

const CareerHero = ({ data }: CareerHeroProps) => {
  return (
    <section className="career-hero">
      <div className="career-hero__image">
        <img src={data.image} alt={data.imageAlt} />
      </div>

      <div className="career-hero__content">
       

        {data.description.map((text, index) => (
          <p key={index}>{text}</p>
        ))}

        <a href={data.button.link} className="career-hero__button">
          {data.button.text}
        </a>
      </div>
    </section>
  );
};

export default CareerHero;
