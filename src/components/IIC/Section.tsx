import type { IICSection } from "../../types/iic";
import DepartmentSectionHeading from "../DepartmentSectionHeading/DepartmentSectionHeading";

interface Props {
  section: IICSection;
}

const Section = ({ section }: Props) => {
  return (
    <section className="iic-section">
      <DepartmentSectionHeading title={section.title} className="department-section-heading--medium" />

      {section.content.map((content, index) => {
        if (content.type === "paragraph") {
          return (
            <div key={index}>
              {content.data.map((text, i) => (
                <p key={i}>{text}</p>
              ))}
            </div>
          );
        }

        return (
          <ol key={index}>
            {content.data.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ol>
        );
      })}
    </section>
  );
};

export default Section;
