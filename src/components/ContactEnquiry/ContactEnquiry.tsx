import "./ContactEnquiry.css";

import DepartmentSectionHeading from "../DepartmentSectionHeading/DepartmentSectionHeading";

import { contactEnquiryData } from "../../data/contactEnquiryData";

const ContactEnquiry = () => {
  const data = contactEnquiryData;

  return (
    <section className="contact-enquiry">
      <div className="contact-enquiry__container">
        <DepartmentSectionHeading title={data.title} className="department-section-heading--medium"/>

        <p className="contact-enquiry__description">
          {data.description}
        </p>

        <div className="contact-enquiry__contacts">
            {data.contacts.map((contact) => (
                <div className="contact-card" key={contact.id}>
                    <h3 className="contact-card__name">{contact.name}</h3>

                    <p className="contact-card__designation">  {contact.designation}  </p>

                    <p className="contact-card__organization">  {contact.organization}  </p>

                    <a href={`tel:${contact.phone.replace(/\s/g, "")}`} className="contact-card__link" >
                        <span className="material-symbols-outlined">  call  </span>  {contact.phone}
                    </a>

                    {contact.email && (
                        <a href={`mailto:${contact.email}`} className="contact-card__link" >
                        <span className="material-symbols-outlined">  mail </span>  {contact.email}
                        </a>
                    )}
                </div>
            ))}
        </div>

        <div className="contact-enquiry__form">
            <iframe title="Admission Enquiry Form" src={data.googleFormUrl} className="contact-enquiry__form-frame" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        </div>

        <div className="visit-us">
            <div className="visit-us__left">
                <DepartmentSectionHeading title="Visit Us" className="department-section-heading--medium" /> {data.visit.address.map((line, index) => (  <p key={index} className="visit-us__address">  {line}  </p>  ))} <a href={`tel:${data.visit.contact.replace(/\s/g, "")}`} className="visit-us__contact"> <span className="material-symbols-outlined">call</span>  {data.visit.contact}</a>
            </div>

            <div className="visit-us__right">
                <iframe title="BGSCET Location" src={data.googleMapUrl} className="visit-us__map-frame" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
        </div>

      </div>
    </section>
  );
};

export default ContactEnquiry;