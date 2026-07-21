import "./AdmissionSection.css";
// import admissionImage from "../../assets/images/admission/admission-image-1.jpg";
import admissionImage from "../../../assets/images/admission/admission-image-1.jpg";
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
    <section className="admission">
      <div className="admission__container">

        <AcademicHeading
          className="admission__title"
          blackTitle={"Admission For Management Quota\nSeats Is Underway "}
          redTitle={"For First Year\nB.E. Courses : 2026-27"}
        />

        {/* Two Column Layout */}
        <div className="admission__body">

          {/* Left Content */}
          <div className="admission__content">

            <p className="admission__heading">
              Four Years Bachelor of Engineering (B.E.) Courses:
            </p>

            <ul className="admission__list">
              {courses.map((course, index) => (
                <li
                  key={course}
                  className="admission__item"
                >
                  <span className="admission__number">
                    {index + 1}
                  </span>

                  <span className="admission__course">
                    {course}
                  </span>
                </li>
              ))}
            </ul>

          </div>

          {/* Right Image */}
          <div className="admission__image-wrapper">
            <img
              src={admissionImage}
              alt="Admission counselling session"
              className="admission__image"
            />
          </div>

        </div>

      </div>
    </section>
  );
};

export default AdmissionSection;
