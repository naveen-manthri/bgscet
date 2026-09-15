import BulletSection from "../common/BulletSection/BulletSection";
import Table from "../common/Table/Table";
import TitleDescription from "../careerDevelopment/TitleDescription/TitleDescription";
import DepartmentSectionHeading from "../DepartmentSectionHeading/DepartmentSectionHeading";
import { FiFileText } from "react-icons/fi";
import { jcetData } from "../../data/jcet";
import "./JCET.css";

const JCET = () => {
  return (
    <main className="jcet">
      <div className="jcet__descriptions">
        {jcetData.descriptions.map((description) => <p key={description}>{description}</p>)}
      </div>

      <BulletSection data={jcetData.whatSetsJCETApart} />

      <section className="jcet__information" aria-labelledby="jcet-information-title">
        <DepartmentSectionHeading
          title="Journal Information"
          id="jcet-information-title"
          className="department-section-heading--medium"
        />
        <div className="jcet__information-list">
          {jcetData.journalInformation.map((item) => <p key={item.label}><strong>{item.label}:</strong> {item.value}</p>)}
        </div>
      </section>

      <section className="jcet__section" aria-labelledby="jcet-publisher-details-title">
        <DepartmentSectionHeading
          title="Publisher details"
          id="jcet-publisher-details-title"
          className="department-section-heading--medium"
        />
        <div className="jcet__section-content jcet__publisher-details">
          {jcetData.publisherDetails.map((detail) => <p key={detail}>{detail}</p>)}
        </div>
      </section>

      <section className="jcet__section" aria-labelledby="jcet-aims-and-scope-title">
        <DepartmentSectionHeading
          title="Aims and scope"
          id="jcet-aims-and-scope-title"
          className="department-section-heading--medium"
        />
        <p className="jcet__section-content jcet__aims-and-scope">
          <strong>Scope and Objectives:</strong> {jcetData.aimsAndScope}
        </p>
      </section>

      <BulletSection data={jcetData.subjectCoverage} />

      <section className="jcet__section jcet__article-submission" aria-labelledby="jcet-article-submission-title">
        <DepartmentSectionHeading
          title="Article Submission system"
          id="jcet-article-submission-title"
          className="department-section-heading--medium"
        />

        <div className="jcet__article-submission-content">
          <section aria-labelledby="jcet-author-guidelines-title">
            <DepartmentSectionHeading
              title="Author guidelines and peer review process"
              id="jcet-author-guidelines-title"
              className="department-section-heading--medium"
            />
            <p className="jcet__section-content">{jcetData.articleSubmission.authorGuidelines}</p>
          </section>

          <section aria-labelledby="jcet-contents-title">
            <DepartmentSectionHeading
              title="Contents"
              id="jcet-contents-title"
              className="department-section-heading--medium"
            />
            <p className="jcet__section-content">{jcetData.articleSubmission.contents}</p>
          </section>

          <section aria-labelledby="jcet-subscription-modes-title">
            <DepartmentSectionHeading
              title="Subscription modes"
              id="jcet-subscription-modes-title"
              className="department-section-heading--medium"
            />
            <p className="jcet__section-content">{jcetData.articleSubmission.subscriptionModes}</p>
          </section>
        </div>
      </section>

      <TitleDescription data={jcetData.callForPapers} sectionClassName="jcet__call-for-papers" />


      <section className="jcet__section jcet__editorial-board" aria-labelledby="jcet-editorial-board-title">
        <DepartmentSectionHeading title="Editorial Board" id="jcet-editorial-board-title" className="department-section-heading--medium" />

        <div className="jcet__editorial-board-list">
          {jcetData.editorialBoard.map((member) => (
            <article className="jcet__editorial-board-member" key={member.name}>
              <h3>{member.name}</h3>
              <div className="jcet__editorial-board-details">
                {member.details.map((detail) => <p key={detail}>{detail}</p>)}
              </div>
            </article>
          ))}
        </div>
      </section>

      <div className="jcet__bibliographic-details">
        <Table title={jcetData.bibliographicDetails.title} description={jcetData.bibliographicDetails.description} table={jcetData.bibliographicDetails.table} renderCell={(value, column) => column.key === "paperPdf" ? ( <a className="jcet__paper-pdf-link" href={value} target="_blank" rel="noreferrer" aria-label="View paper PDF" title="View paper PDF"><FiFileText aria-hidden="true" /></a>  ) : value} />
      </div>
    </main>
  );
};

export default JCET;
