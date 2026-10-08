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
    <section className="hod-message mobile-margin-top mobile-padding">

      <DepartmentSectionHeading title={data.title} className="department-section-heading--medium" />


      <div className="flex flex-align-start flex-justify-between hod-message__content">

        <aside className="flex flex-direction-column flex-align-center hod-message__profile">

          <img src={data.image} alt={data.name} className="hod-message__image" />



          <div className="hod-message__details">

            <h3 className="hod-message__name">
              {data.name}
            </h3>


            {data.designation.map((item, index) => {
              const isLastItem = index === data.designation.length - 1;

              if (isLastItem && item.toLowerCase().includes("watch on")) {
                return (
                  <a  key={item}  href="https://www.youtube.com/" target="_blank" rel="noreferrer" className="hod-message__designation hod-message__designation--link">
                    {item}
                  </a>
                );
              }

              return (
                <p key={item} className="hod-message__designation">{item}</p>
              );
            })}

          </div>

        </aside>


        <div className="hod-message__description flex-one">
          <p>
            {data.description}
          </p>
        </div>

      </div>

    </section>
  );
};


export default HodMessage;