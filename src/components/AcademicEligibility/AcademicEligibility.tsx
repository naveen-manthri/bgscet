import "./AcademicEligibility.css";

import topImage from "../../assets/images/academic/artificial-intelligence.jpg";
 import bottomImage from "../../assets/images/academic/civil-engineering.jpg";



function AcademicEligibility() {
  return (
    <section className="academic-eligibility section-space">
      <div className="container">

        <div className="eligibility-header">

          <h2 className="eligibility-title">

            <span className="title-main">
              Academic Eligibility For Admissions To Four Years Under Graduate
            </span>

            <div className="subtitle-wrapper">
              <span className="title-sub">
                Programs Through KEA/COMED-K/Management:
              </span>

              <span className="eligibility-line"></span>
            </div>

          </h2>

        </div>

        <div className="eligibility-wrapper">

          <div className="eligibility-content">

            <ol className="eligibility-list">

              <li>
                
                  FOR GENERAL MERIT CANDIDATES:
                

                A candidate who has Passed in 2nd PUC / 12th Std /
                Equivalent Examination with English as one of the Language
                and obtained a Minimum of 45% of Marks in aggregate in
                Physics and Mathematics as compulsory subjects along with
                Chemistry / Bio Technology / Biology / Computer Science /
                Electronics as optional subjects in the qualifying
                examination is eligible to pursue undergraduate programs
                (B.E.).
              </li>

              <li>
                  FOR SC/ST &amp; OBC (Cat-I, 2A, 2B, 3A &amp; 3B)
                  CATEGORY CANDIDATES:
                

                A candidate who has Passed in 2nd PUC / 12th Std /
                Equivalent Examination with English as one of the Language
                and obtained a Minimum of 40% of Marks in aggregate in
                Physics and Mathematics as compulsory subjects along with
                Chemistry / Bio Technology / Biology / Computer Science /
                Electronics as optional subjects in the qualifying
                examination is eligible to pursue undergraduate programs
                (B.E.).

                <br />

                The marks obtained by the candidate in Biotechnology /
                Biology / Computer Science / Electronics in the qualifying
                examination will be considered in the place of Chemistry if
                the marks obtained in Chemistry are less for the required
                aggregate percentage.
              </li>

            </ol>

            <ul className="exam-list">

              <li>
                Entrance Examination :
                <span> KCET / COMED-K / JEE</span>
              </li>

              <li>
                Management Quota Admissions :
                <span> Students have to take any one Entrance Examination.</span>
              </li>

            </ul>

            <button className="admission-btn">
              For Admission Click Here
            </button>

          </div>

          <div className="eligibility-images">

            <div className="image-card image-small">
              <img
                src={topImage}
                alt="Academic Eligibility"
              />
            </div>

            <div className="image-card image-large">
              <img
                src={bottomImage}
                alt="Students"
              />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default AcademicEligibility;