import "./LibraryRules.css";

import BulletSection from "../common/BulletSection/BulletSection";
import { libraryRulesData } from "../../data/libraryRulesData";

const LibraryRules = () => {
  const data = libraryRulesData;

  return (
    <section className="library-rules">
      <div className="library-rules__container">
        <BulletSection
          data={{
            title: data.title,
            points: data.rules,
          }}
        />
      </div>
    </section>
  );
};

export default LibraryRules;