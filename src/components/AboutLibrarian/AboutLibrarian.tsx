import "./AboutLibrarian.css";

import DepartmentSectionHeading from "../DepartmentSectionHeading/DepartmentSectionHeading";

import { aboutLibrarianData } from "../../data/aboutLibrarianData";

const AboutLibrarian = () => {
  const data = aboutLibrarianData;

  return (
    <section className="about-librarian">
      <div className="about-librarian__container">

        <DepartmentSectionHeading title={data.title} className="department-section-heading--default"/>

        <div className="about-librarian__content">

          {data.paragraphs.map((paragraph, index) => (
            <p key={index} className="about-librarian__paragraph">
              {paragraph}
            </p>
          ))}

          <h3 className="about-librarian__member-title">
            {data.membersTitle}
          </h3>

          <ul className="about-librarian__member-list">
            {data.members.map((member) => (
              <li key={member.id} className="about-librarian__member-item">
                {member.text}
              </li>
            ))}
          </ul>

        </div>

        <div className="about-librarian__staff">

          {data.staff.map((staff) => (
            <article key={staff.id} className="about-librarian__card">
              <img  src={staff.image} alt={staff.name} className="about-librarian__image"/>

              <div className="about-librarian__card-content">
                <h3 className="about-librarian__name">
                  {staff.name}
                </h3>

                <p className="about-librarian__designation">
                  {staff.designation}
                </p>

                <p className="about-librarian__qualification">
                  {staff.qualification}
                </p>
              </div>
            </article>
          ))}

        </div>

      </div>
    </section>
  );
};

export default AboutLibrarian;