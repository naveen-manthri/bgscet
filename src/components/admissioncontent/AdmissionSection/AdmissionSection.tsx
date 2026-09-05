import "./AdmissionSection.css";
import admissionImage from "../../../assets/images/admission/admission-image-1.png";
import AcademicHeading from "../../common/AcademicEligibilityHeading/AcademicEligibilityHeading";

const courses: string[] = [
  "COMPUTER SCIENCE AND ENGINEERING",
  "INFORMATION SCIENCE AND ENGINEERING",
  "COMPUTER SCIENCE AND DESIGN",
  "ARTIFICIAL INTELLIGENCE AND MACHINE LEARNING",
  "ARTIFICIAL INTELLIGENCE AND DATA SCIENCE",
];

const AdmissionSection = () => {
  return (
    <section className="flex flex-justify-between admission">
      <div>
          <AcademicHeading className="admission__title" blackTitle={"Admission For Management Quota\nSeats Is Underway "} redTitle={"For First Year\nB.E. Courses : 2026-27"} underlineLastLine />
          <div>
              <p className="admission__heading">
                Four Years Bachelor of Engineering (B.E.) Courses:
              </p>

              <ul className="flex flex-direction-column admission__list">
                {courses.map((course, index) => (
                  <li
                    key={course}
                    className="flex flex-align-start admission__item"
                  >
                    <span className="admission__number flex flex-center">
                      {index + 1}
                    </span>

                    <span className="admission__course">
                      {course}
                    </span>
                  </li>
                ))}
              </ul>
          </div>
      </div>
      <img
        src={admissionImage}
        alt="Admission counselling session"
        className="admission__image"
      />
    </section>
  );
};

export default AdmissionSection;
