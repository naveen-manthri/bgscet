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
    <article
      className={`guru-card ${
        reverse ? "guru-card--reverse" : ""
      }`}
    >
      <h2 className="guru-card__title">
        {guru.name}
      </h2>

      <div
        className={`guru-card__body ${
          reverse ? "guru-card__body--reverse" : ""
        }`}
      >
        <div className="guru-card__content">
          {guru.description.map((paragraph, index) => (
            <p
              key={`${guru.id}-${index}`}
              className="guru-card__paragraph"
            >
              {paragraph}
            </p>
          ))}
        </div>

        <figure className="guru-card__figure">
          <img
            className="guru-card__image"
            src={guru.image}
            alt={guru.alt}
            loading="lazy"
          />

          <figcaption className="guru-card__caption">
            {guru.name}
          </figcaption>
        </figure>
      </div>
    </article>
  );
};

export default GuruCard;