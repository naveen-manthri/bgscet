import { aboutMutt } from "../../data/aboutMutt";

import "./AboutMutt.css";

const AboutMutt = () => {
  return (
    <section
      className="about-mutt"
      aria-labelledby="about-mutt-title"
    >
      <div className="about-mutt__container">
        <header className="about-mutt__header">
          <h2
            id="about-mutt-title"
            className="about-mutt__title"
          >
            {aboutMutt.title}
          </h2>
        </header>

        <div className="about-mutt__content">
          {aboutMutt.description.map((paragraph, index) => (
            <p
              key={index}
              className="about-mutt__paragraph"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutMutt;