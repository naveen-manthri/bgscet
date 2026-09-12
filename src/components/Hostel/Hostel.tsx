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

      <Table title={hostelData.hostelCommittee.title} table={hostelData.hostelCommittee.table} />

      <Table title={hostelData.messTimings.title} table={hostelData.messTimings.table} />

      <BulletSection data={hostelData.hostelCommitteeResponsibilities} />

      <BulletSection data={hostelData.hostelSOP} />

      <HostelFacility data={hostelData.hostelFacility} />
    </main>
  );
};

export default Hostel;