import "./AdmissionInformation.css";
import featureLeft from  "../../../assets/images/admission/unique-features-1.png";
import featureRight from "../../../assets/images/admission/unique-features-2.png";

import { admissionInformationData } from "../../../data/academic";


export default function AdmissionInformation() {
  return (
    <section className="admission-information">
      <h2 className="admission-information__title">
        {admissionInformationData.title}
      </h2>

      <div className="admission-information__contacts">
      {admissionInformationData.contacts.map((contact) => (
        <article key={contact.name} className="admission-information__contact">
          <h3>{contact.name}</h3>

          <p>{contact.designation}</p>

          {contact.email && <p>{contact.email}</p>}

          <p>{contact.phone}</p>
        </article>
      ))}
      </div>
      <div className="unique-features">
        <img src={featureLeft}
          alt="Unique Feature Left"
          className="unique-features__left-image"
        />
        <img src={featureRight}
          alt="Unique Feature Right"
          className="unique-features__right-image"
        />
      </div>
    </section>
  );
}