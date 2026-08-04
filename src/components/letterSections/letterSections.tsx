import "./LetterSections.css";
// import DepartmentSectionHeading from "../DepartmentSectionHeading/DepartmentSectionHeading";
import type { LetterPageData } from "../../types/letterSection";

interface LetterSectionsProps {
  data: LetterPageData;
}

const LetterSections = ({ data }: LetterSectionsProps) => {
  return (
    <section className="letter-sections">
      {/* <DepartmentSectionHeading title={data.title} /> */}

      {data.sections.map((section) => (
        <div key={section.heading} className="letter-section">
          <h2 className="letter-section__heading">
            {section.heading}
          </h2>

          {section.items ? (
            <ol className="letter-section__list">
              {section.items.map((item) => (
                <li key={item.title}>
                  <a href={item.pdf} target="_blank" rel="noopener noreferrer" className="letter-section__link">
                    {item.title}
                  </a>
                </li>
              ))}
            </ol>
          ) : null}

          {section.groups?.map((group) => (
            <div key={group.title} className="letter-section__group">
              <h3
                className="letter-section__group-title"
                style={{ color: "var(--btn-primary, #cc2a09)" }}
              >
                {group.title}
              </h3>
              <ol className="letter-section__list">
                {group.items.map((item) => (
                  <li key={item.title}>
                    <a href={item.pdf} target="_blank" rel="noopener noreferrer" className="letter-section__link">
                      {item.title}
                    </a>
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      ))}
    </section>
  );
};

export default LetterSections;
