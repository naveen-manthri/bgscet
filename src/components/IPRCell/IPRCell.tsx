import "./IPRCell.css";
import DepartmentSectionHeading from "../DepartmentSectionHeading/DepartmentSectionHeading";
import { iprData } from "../../data/iprData";

const IPRCell = () => {
  return (
    <section className="ipr-section ipr">
      <DepartmentSectionHeading title={iprData.title} />

      <p>{iprData.description}</p>

      <div className="ipr-gallery">
        {iprData.images.map((item) => (
          <div className="ipr-card" key={item.id}>
            <img src={item.image} alt={item.alt} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default IPRCell;