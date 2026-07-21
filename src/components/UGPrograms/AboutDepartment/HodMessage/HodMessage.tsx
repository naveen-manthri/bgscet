import "./HodMessage.css";

import DepartmentSectionHeading from "../../../DepartmentSectionHeading/DepartmentSectionHeading";

import type { HodMessage as HodMessageType } from "../../../../types/ugprograms";


interface HodMessageProps {
  data: HodMessageType;
}


const HodMessage = ({
  data,
}: HodMessageProps) => {
  return (
    <section className="hod-message">

      <DepartmentSectionHeading
        title={data.title}
      />


      <div className="hod-message__content">

        <aside className="hod-message__profile">

          <img
            src={data.image}
            alt={data.name}
            className="hod-message__image"
          />


          <div className="hod-message__details">

            <h3 className="hod-message__name">
              {data.name}
            </h3>


            {data.designation.map((item) => (
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
          <p>
            {data.description}
          </p>
        </div>

      </div>

    </section>
  );
};


export default HodMessage;