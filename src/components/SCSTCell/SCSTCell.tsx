import BannerSection from "../BannerSection/BannerSection";
import DepartmentSectionHeading from "../DepartmentSectionHeading/DepartmentSectionHeading";
import Advertisement from "../Advertisement/Advertisement";
import banner from "../../assets/images/banner/sc-st-cell-banner.png";
import { scStCellData } from "../../data/SCSTCell";
import "./SCSTCell.css";

function SCSTCell() {
  return (
    <>
      <BannerSection image={banner} title="SC ST Cell" />
      <Advertisement />

      <main className="scstcell-page">
        <DepartmentSectionHeading
          title="SC ST Cell"
          className="department-section-heading--medium"
        />

        <div
          className="scstcell-page__list flex flex-direction-column"
          aria-label="SC ST Cell actions"
        >
          {scStCellData.map((item) => (
            <div className="scstcell-page__row" key={item.label}>
              <span className="scstcell-page__label">{item.label}</span>
              <a href={item.href} className="committee-btn scstcell-page__button flex flex-center" target="_blank" rel="noopener noreferrer">
                Click Here
              </a>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}

export default SCSTCell;
