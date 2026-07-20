import "./VisitCampus.css";
import AdmissionButton from "../../components/AdmissionButton/AdmissionButton";
import { visitCampusData } from "../../data/visitCampusData";

function VisitCampus() {
  const { label, title, description } = visitCampusData;

  return (
    <section
      className="visit-campus"
      aria-labelledby="visit-campus-title"
    >
      <div className="visit-campus__container">
        <p className="visit-campus__label">
          {label}
        </p>

        <h2
          className="visit-campus__title"
          id="visit-campus-title"
        >
          {title.split("\n").map((line, index) => (
            <span key={index}>
              {line}
              {index < title.split("\n").length - 1 && <br />}
            </span>
          ))}
        </h2>

        <p className="visit-campus__description">
          {description.split("\n").map((line, index) => (
            <span key={index}>
              {line}
              {index < description.split("\n").length - 1 && <br />}
            </span>
          ))}
        </p>

        <div
          className="visit-campus__actions"
          aria-label="Admission actions"
        >
          <AdmissionButton variant="secondary" />
          <AdmissionButton variant="outline" />
        </div>
      </div>
    </section>
  );
}

export default VisitCampus;