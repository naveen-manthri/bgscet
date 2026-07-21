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
      <div className="guru-section__container">
        <header className="guru-section__header">
          
        </header>

        <div className="guru-section__list">
          {gurus.map((guru) => (
            <GuruCard
              key={guru.id}
              guru={guru}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GuruSection;