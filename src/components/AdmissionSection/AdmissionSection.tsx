import "./AdmissionSection.css";
import admissionImage from "../../assets/images/about-mutt.jpg";

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
        {/* Left Content */}
        <div className="admission__content">
          <h2 className="admission__title">
            Admission For Management Quota Seats Is Underway
          </h2>

          {/* Subtitle + Underline */}
          <div className="admission__subtitle-wrapper">
            <h3 className="admission__subtitle">
              For First Year B.E. Courses :2025-26
            </h3>

            <div className="admission__divider"></div>
          </div>

          <p className="admission__heading">
            Four Years Bachelor of Engineering (B.E) Courses:
          </p>

          <ul className="admission__list">
            {courses.map((course, index) => (
              <li key={course} className="admission__item">
                <span className="admission__number">{index + 1}</span>

                <span className="admission__course">{course}</span>
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
    </section>
  );
};

export default AdmissionSection;