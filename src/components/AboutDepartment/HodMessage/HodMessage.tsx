import "./HodMessage.css";

import DepartmentSectionHeading from "../../DepartmentSectionHeading/DepartmentSectionHeading";

import { hodMessage } from "../../../data/cseDepartment";

const HodMessage = () => {
  return (
    <section className="hod-message">
      <DepartmentSectionHeading title={hodMessage.title} />

      <div className="hod-message__content">
        <aside className="hod-message__profile">
          <img
            src={hodMessage.image}
            alt={hodMessage.name}
            className="hod-message__image"
          />

          <div className="hod-message__details">
            <h3 className="hod-message__name">
              {hodMessage.name}
            </h3>

            {hodMessage.designation.map((item) => (
              <p
                key={item}
                className="hod-message__designation"
              >
                {item}
              </p>
            ))}
          </div>
        </aside>

        <div className="hod-message__description">
          <p>{hodMessage.description}</p>
        </div>
      </div>
    </section>
  );
};

export default HodMessage;