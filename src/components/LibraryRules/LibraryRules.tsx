import "./LibraryRules.css";

import DepartmentSectionHeading from "../DepartmentSectionHeading/DepartmentSectionHeading";

import { libraryRulesData } from "../../data/libraryRulesData";

const LibraryRules = () => {
  const data = libraryRulesData;

  return (
    <section className="library-rules">
      <div className="library-rules__container">

        <DepartmentSectionHeading title={data.title} className="department-section-heading--medium"/>

        <ul className="library-rules__list">
          {data.rules.map((rule, index) => (
            <li key={index} className="library-rules__item">
              {rule}
            </li>
          ))}
        </ul>

      </div>
    </section>
  );
};

export default LibraryRules;