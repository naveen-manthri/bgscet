import type { FC } from "react";

import { gurus } from "../../../data/gurus";
import GuruCard from "../GuruCard/GuruCard";

import "./GuruSection.css";

const GuruSection: FC = () => {
  return (
    <section
      className="guru-section"
      aria-labelledby="guru-section-title"
    >
      <div className="guru-section__list flex flex-direction-column">
        {gurus.map((guru) => (
          <GuruCard
            key={guru.id}
            guru={guru}
          />
        ))}
      </div>
    </section>
  );
};

export default GuruSection;