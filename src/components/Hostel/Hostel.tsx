import Table from "../common/Table/Table";
import BulletSection from "../common/BulletSection/BulletSection";
import { hostelData } from "../../data/hostelData";
import AboutHostel from "./AboutHostel/AboutHostel";
import HostelFacility from "./HostelFacility/HostelFacility";
import "./Hostel.css";

const Hostel = () => {
  return (
    <main className="hostel flex flex-direction-column">
      <AboutHostel data={hostelData.aboutHostel} />

      <Table
        title={hostelData.hostelCommittee.title}
        table={hostelData.hostelCommittee.table}
        className="hostel__table--spaced"
      />

      <Table title={hostelData.messTimings.title}
        table={hostelData.messTimings.table}
        className="hostel__table--spaced" />

      <BulletSection data={hostelData.hostelCommitteeResponsibilities} />

      <BulletSection data={hostelData.hostelSOP} />

      <HostelFacility data={hostelData.hostelFacility} className="hostel__table--spaced" />
    </main>
  );
};

export default Hostel;