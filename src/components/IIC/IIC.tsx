import "./IIC.css";
import { iicData } from "../../data/iic";

import Section from "./Section";

const IIC = () => {
  return (
    <main className="iic-container">
      <h1>{iicData.pageTitle}</h1>

      {iicData.sections.map((section: (typeof iicData.sections)[number]) => (
        <Section
          key={section.title}
          section={section}
        />
      ))}
    </main>
  );
};

export default IIC;