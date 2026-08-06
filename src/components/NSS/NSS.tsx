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
    <section className="nss">
      <DepartmentSectionHeading title={introduction.title} />

      <div className="nss__intro">
        <div className="nss__intro-image">
          <img src={introduction.image} alt={introduction.alt} />
        </div>

        <div className="nss__intro-content">
          <p>{introduction.description}</p>
        </div>
      </div>

      <div className="nss__section">
        <DepartmentSectionHeading title={vision.title} />
        <p>{vision.description}</p>
      </div>

      <div className="nss__section">
        <DepartmentSectionHeading title={mission.title} />
        <p>{mission.description}</p>
      </div>

      <div className="nss__section">
        <DepartmentSectionHeading title={objectives.title} />
        <ul className="nss__list">
          {objectives.points.map((point) => (
            <li key={point}>
              <p>{point}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="nss__section">
        <DepartmentSectionHeading title={advisoryCommittee.title} />
        <p>{advisoryCommittee.description}</p>
      </div>

      <div className="nss__section">
        <DepartmentSectionHeading title={frequencyOfMeeting.title} />
        <p>{frequencyOfMeeting.description}</p>
      </div>

      <div className="nss__section">
        <DepartmentSectionHeading title={limitations.title} />
        <p>{limitations.description}</p>
      </div>

      <div className="nss__section">
        <DepartmentSectionHeading title={motto.title} />
        <p>{motto.description}</p>
      </div>

      <div className="nss__section">
        <DepartmentSectionHeading title={symbol.title} />
        <p>{symbol.description}</p>
      </div>

      <div className="nss__section">
        <DepartmentSectionHeading title={nssDay.title} />
        <p>{nssDay.description}</p>
      </div>

      <div className="nss__section">
        <DepartmentSectionHeading title={nssSong.title} />
        <p>{nssSong.description}</p>
      </div>
    </section>
  );
};

export default NSS;