import './VisitCampus.css';
import AdmissionButton from "../../components/AdmissionButton/AdmissionButton";

function VisitCampus() {
  return (
    <section className="visit-campus" aria-labelledby="visit-campus-title">
      <div className="visit-campus__inner">
        <h2 className="section-heading visit-campus__title" id="visit-campus-title">
          Come Visit Our Campus
        </h2>

        <div className="visit-campus__actions" aria-label="Campus visit actions">
          <button className="visit-campus__button" type="button">
            <AdmissionButton variant="secondary" />
          </button>
          <button className="visit-campus__button" type="button">
            <AdmissionButton variant="outline" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default VisitCampus;
