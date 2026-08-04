import "./LetterSections.css";
import DepartmentSectionHeading from "../DepartmentSectionHeading/DepartmentSectionHeading";
import type { LetterPageData } from "../../types/letterSection";

interface LetterSectionsProps {
  data: LetterPageData;
}

const LetterSections = ({ data }: LetterSectionsProps) => {
  return (
    <section className="letter-sections">
      <DepartmentSectionHeading title={data.title} />

      {data.sections.map((section) => (
        <div key={section.heading} className="letter-section">
          <h2 className="letter-section__heading">
            {section.heading}
          </h2>

          <ol className="letter-section__list">
            {section.items.map((item) => (
              <li key={item.title}>
                <a href={item.pdf} target="_blank"  rel="noopener noreferrer"  className="letter-section__link" >
                  {item.title}
                </a>
              </li>
            ))}
          </ol>
        </div>
      ))}
    </section>
  );
};

export default LetterSections;