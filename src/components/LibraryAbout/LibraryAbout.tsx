import "./LibraryAbout.css";

import DepartmentSectionHeading from "../DepartmentSectionHeading/DepartmentSectionHeading";

import { libraryAboutData } from "../../data/libraryAboutData";

const LibraryAbout = () => {
  const data = libraryAboutData;

  return (
    <section className="library-about">
      <div className="library-about__container">

        <DepartmentSectionHeading title={data.title} />

        <div className="library-about__content">

          <h3 className="library-about__heading">
            {data.heading}
          </h3>

          <p className="library-about__introduction">
            {data.introduction}
          </p>

          <ul className="library-about__list">
                {data.points.map((point) => (
                    <li key={point.id} className="library-about__item">
                    <span className="library-about__item-title">{point.title}:</span>{" "}
                    <span>{point.description}</span>
                    </li>
                ))}
          </ul>

          <p className="library-about__conclusion">
            {data.conclusion}
          </p>

        </div>

        
        <img src={data.image} alt={data.title} className="library-about__image" />

      </div>
    </section>
  );
};

export default LibraryAbout;