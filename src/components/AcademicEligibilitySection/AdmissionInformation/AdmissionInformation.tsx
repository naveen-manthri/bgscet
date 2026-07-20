import AcademicHeading from "../../common/AcademicEligibilityHeading/AcademicEligibilityHeading";
import "./AdmissionInformation.css";


// import featureLeft from  "../../../assets/images/feature-left.png";
// import featureRight from "../../../assets/images/feature-right.png";

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

      {/* <div className="admission-information__features">
        <figure>
          <img src={featureLeft} alt="" />
        </figure>

        <figure>
          <img src={featureRight} alt="" />
        </figure>
      </div> */}
    </section>
  );
}