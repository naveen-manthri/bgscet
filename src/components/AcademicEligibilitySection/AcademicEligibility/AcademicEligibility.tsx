import "./AcademicEligibility.css";

import AcademicHeading from "../../common/AcademicEligibilityHeading/AcademicEligibilityHeading";


import academicTop from "../../../assets/images/admission/admission-image-2.jpg";
 import studentsGroup from "../../../assets/images/admission/admission-image-3.jpg";

import { academicData } from "../../../data/academic";

export default function AcademicEligibility() {
  return (
    <section className="academic-eligibility">
      <AcademicHeading
        blackTitle={academicData.title.black}
        redTitle={academicData.title.red}
      />

      <div className="academic-eligibility__body">
        <div className="academic-eligibility__wrapper">
          <article className="academic-eligibility__content">
          <p>
            <strong>{academicData.eligibility.generalMerit.heading}</strong>{" "}
            {academicData.eligibility.generalMerit.description}
          </p>

          <p>
            <strong>{academicData.eligibility.reservedCategory.heading}</strong>{" "}
            {academicData.eligibility.reservedCategory.description}
          </p>

          <p>{academicData.eligibility.note}</p>

          <ul className="academic-eligibility__list">
            {academicData.entranceExaminations.map((exam) => (
              <li key={exam}>{exam}</li>
            ))}
          </ul>

          </article>

          <aside className="academic-eligibility__images">
            <figure>
              <img src={academicTop} alt="" />
            </figure>

            <figure>
              <img src={studentsGroup} alt="" />
            </figure>
          </aside>
        </div>

        <article className="academic-eligibility__content academic-eligibility__examinations">
          <section className="academic-eligibility__block">
            <h3>{academicData.examinations.kcet.title}</h3>

            <p>
              {academicData.examinations.kcet.content.map((item, index) =>
                item.type === "link" ? (
                  <a key={item.href} href={item.href} target="_blank" rel="noreferrer">
                    {item.label}
                  </a>
                ) : (
                  <span key={index}>{item.value}</span>
                ),
              )}
            </p>
          </section>

          <section className="academic-eligibility__block academic-eligibility__block--comedk">
            <h3>{academicData.examinations.comedk.title}</h3>

            <p>
              {academicData.examinations.comedk.content.map((item, index) =>
                item.type === "link" ? (
                  <a key={item.href} href={item.href} target="_blank" rel="noreferrer">
                    {item.label}
                  </a>
                ) : (
                  <span key={index}>{item.value}</span>
                ),
              )}
              <span className="academic-eligibility__documents-label"> DOCUMENTS NEEDED</span>
            </p>
          </section>

          <section className="academic-eligibility__documents">
            {/* <h3>Documents Required</h3> */}

            <ol>
              {academicData.documents.map((document) => (
                <li key={typeof document === "string" ? document : document.label}>
                  {typeof document === "string" ? (
                    document
                  ) : document.href ? (
                    <a href={document.href}>{document.label}</a>
                  ) : (
                    document.label
                  )}
                </li>
              ))}
            </ol>
          </section>
        </article>
      </div>
    </section>
  );
}
