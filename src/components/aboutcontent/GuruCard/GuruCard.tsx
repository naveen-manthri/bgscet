import type { FC } from "react";

import type { Guru } from "../../../types/guru";

import "./GuruCard.css";

interface GuruCardProps {
  guru: Guru;
  reverse?: boolean;
}

const GuruCard: FC<GuruCardProps> = ({
  guru,
  reverse = false,
}) => {
  return (
    <article className={`guru-card flex flex-direction-column mobile-margin-top guru-card ${  reverse ? "guru-card--reverse" : "" }`}>
      <h2 className="guru-card__title">
        {guru.name}
      </h2>

      <div className={`flex flex-justify-between guru-card__body ${  reverse ? "guru-card__body--reverse" : ""  }`} >
        <div className="flex flex-direction-column flex-one guru-card__content">
          {guru.description.map((paragraph, index) => (
            <p key={`${guru.id}-${index}`} className="guru-card__paragraph" >
              {paragraph}
            </p>
          ))}
        </div>

        <figure className="flex flex-direction-column guru-card__figure">
          <div className="guru-card__image-container image-hover-container">
            <img className="guru-card__image display-block image-hover-scale" src={guru.image} alt={guru.alt} loading="lazy" />
          </div>

          <figcaption className="guru-card__caption">
            {guru.name}
          </figcaption>
        </figure>
      </div>
    </article>
  );
};

export default GuruCard;