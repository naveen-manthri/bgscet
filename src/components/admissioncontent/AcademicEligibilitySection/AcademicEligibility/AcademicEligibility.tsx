import "./AcademicEligibility.css";

import AcademicHeading from "../../../common/AcademicEligibilityHeading/AcademicEligibilityHeading";
import BulletSection from "../../../common/BulletSection/BulletSection";
import NumberedList from "../../../common/NumberedList/NumberedList";
import academicTop from "../../../../assets/images/admission/admission-image-2.jpg";
import studentsGroup from "../../../../assets/images/admission/admission-image-3.jpg";

import { academicData } from "../../../../data/academic";

export default function AcademicEligibility() {
  return (
    <section className="flex flex-direction-column academic-eligibility">
      <AcademicHeading blackTitle={academicData.title.black}  redTitle={academicData.title.red}/>

      <div className="flex flex-direction-column academic-eligibility__body">
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

          <BulletSection data={{ title: "", points: academicData.entranceExaminations }} />

          </article>

          <aside className="academic-eligibility__images display-block">
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
            <NumberedList data={{ items: academicData.documents }} />
          </section>
        </article>
      </div>
    </section>
  );
}
