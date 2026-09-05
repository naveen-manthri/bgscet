import DepartmentSectionHeading from "../DepartmentSectionHeading/DepartmentSectionHeading";
import {
  introduction,
  advisoryCommittee,
  frequencyOfMeeting,
  limitations,
  mission,
  motto,
  nssDay,
  nssSong,
  objectives,
  symbol,
  vision,
} from "../../data/nssData";
import "./NSS.css";

const NSS = () => {
  return (
    <section className="flex flex-direction-column nss">
      <DepartmentSectionHeading title={introduction.title} className="department-section-heading--medium" />

      <div className="flex flex-align-center nss__intro">
        <div className="nss__intro-image">
          <img src={introduction.image} alt={introduction.alt} />
        </div>

        <div className="nss__intro-content">
          <p>{introduction.description}</p>
        </div>
      </div>

      <div className="flex flex-direction-column nss__section">
        <DepartmentSectionHeading title={vision.title} className="department-section-heading--medium" />
        <p>{vision.description}</p>
      </div>

      <div className="flex flex-direction-column nss__section">
        <DepartmentSectionHeading title={mission.title} className="department-section-heading--medium" />
        <p>{mission.description}</p>
      </div>

      <div className="flex flex-direction-column nss__section">
        <DepartmentSectionHeading title={objectives.title} className="department-section-heading--medium" />
        <ul className="flex flex-direction-column nss__list">
          {objectives.points.map((point) => (
            <li key={point}>
              <p>{point}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-direction-column nss__section">
        <DepartmentSectionHeading title={advisoryCommittee.title} className="department-section-heading--medium" />
        <p>{advisoryCommittee.description}</p>
      </div>

      <div className="flex flex-direction-column nss__section">
        <DepartmentSectionHeading title={frequencyOfMeeting.title} className="department-section-heading--medium" />
        <p>{frequencyOfMeeting.description}</p>
      </div>

      <div className="flex flex-direction-column nss__section">
        <DepartmentSectionHeading title={limitations.title} className="department-section-heading--medium" />
        <p>{limitations.description}</p>
      </div>

      <div className="flex flex-direction-column nss__section">
        <DepartmentSectionHeading title={motto.title} className="department-section-heading--medium" />
        <p>{motto.description}</p>
      </div>

      <div className="flex flex-direction-column nss__section">
        <DepartmentSectionHeading title={symbol.title} className="department-section-heading--medium" />
        <p>{symbol.description}</p>
      </div>

      <div className="flex flex-direction-column nss__section">
        <DepartmentSectionHeading title={nssDay.title} className="department-section-heading--medium" />
        <p>{nssDay.description}</p>
      </div>

      <div className="flex flex-direction-column nss__section">
        <DepartmentSectionHeading title={nssSong.title} className="department-section-heading--medium" />
        <p>{nssSong.description}</p>
      </div>
    </section>
  );
};

export default NSS;