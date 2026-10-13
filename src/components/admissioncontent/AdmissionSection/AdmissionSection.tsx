
import "./AdmissionSection.css";
import admissionImage from "../../../assets/images/admission/admission-image-1.png";

const admissionTitleStart = "Admission For Management Quota\nSeats Is Underway ";
const admissionTitleMiddle = "For First Year";
const admissionTitleEnd = "B.E. Courses : 2026-27";

const courses: string[] = [
  "COMPUTER SCIENCE AND ENGINEERING",
  "INFORMATION SCIENCE AND ENGINEERING",
  "COMPUTER SCIENCE AND DESIGN",
  "ARTIFICIAL INTELLIGENCE AND MACHINE LEARNING",
  "ARTIFICIAL INTELLIGENCE AND DATA SCIENCE",
];

const AdmissionSection = () => {
  const accessibleTitle = `${admissionTitleStart} ${admissionTitleMiddle} ${admissionTitleEnd}`.replace(/\s+/g, " ").trim();

  return (
    <section className="admission mobile-margin-top mobile-padding">
      <div className="admission__title academic-section-heading">
        <h2 aria-label={accessibleTitle}>
          <span className="academic-section-heading__black">{admissionTitleStart}</span>{" "}
          <span className="academic-section-heading__red">{admissionTitleMiddle}</span>
        </h2>
      </div>

      <div className="admission__content">
        <p className="admission__final-title" aria-hidden="true">
          {admissionTitleEnd}
        </p>
        <div className="admission__details">
          <p className="admission__heading">
            Four Years Bachelor of Engineering (B.E.) Courses:
          </p>

          <ul className="flex flex-direction-column admission__list">
            {courses.map((course, index) => (
              <li  key={course} className="flex flex-align-start admission__item"  >
                <span className="admission__number flex flex-center">
                  {index + 1}
                </span>

                <span className="admission__course">{course}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="admission__image-wrapper">
        <img src={admissionImage} alt="Admission counselling session" className="admission__image" />
      </div>
    </section>
  );
};

export default AdmissionSection;
