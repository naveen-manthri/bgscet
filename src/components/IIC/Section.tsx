import type { IICSection } from "../../types/iic";
import DepartmentSectionHeading from "../DepartmentSectionHeading/DepartmentSectionHeading";
import NumberedList from "../common/NumberedList/NumberedList";

interface Props {
  section: IICSection;
}

const Section = ({ section }: Props) => {
  return (
    <section className="iic-section flex flex-direction-column">
      <DepartmentSectionHeading title={section.title} className="department-section-heading--medium"/>

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

        return <NumberedList key={index} data={{ items: content.data }} />;
      })}
    </section>
  );
};

export default Section;
