import DepartmentSectionHeading from '../components/DepartmentSectionHeading/DepartmentSectionHeading';
import StaffDetails from '../components/PlacementMenu/StaffDetails/StaffDetails';
import VisitCampus from '../components/VisitCampus/VisitCampus';
import { staffDetailsData } from '../data/placementMenu/staffDetails';
import './PlacementMenuPage.css';

function StaffDetailsPage() {
  return (
    <>
      <main className="placement-menu-page">
        <StaffDetails data={staffDetailsData} />
      </main>
      

      <section className="placement-menu-page__contact">
        <DepartmentSectionHeading title="CONTACT US FOR PLACEMENT :" className="department-section-heading--medium" />

        <p className="placement-menu-page__contact-line" ><strong>Mrs. Shilpa Rajesh</strong></p>
        <p className="placement-menu-page__contact-line">Manager – Training &amp; Placement</p>
        <p className="placement-menu-page__contact-line">Career Development &amp; Corporate Affairs Centre</p>
        <p className="placement-menu-page__contact-line">BGS Collegeof Engineering &amp; Technology</p>
        <p className="placement-menu-page__contact-line">Mahalakshmipuram, Bengaluru,</p>
        <p className="placement-menu-page__contact-line">Karnataka 560086. INDIA</p>
        <p className="placement-menu-page__contact-line">
          <strong>Mobile No</strong> : 9945773984
        </p>
        <p className="placement-menu-page__contact-line">
          <strong>Email id</strong> :{' '}
          <a href="mailto:hrd@bgscet.ac.in" className="placement-menu-page__contact-link" > hrd@bgscet.ac.in
          </a>
        </p>
        <p className="placement-menu-page__contact-line">
          <strong>Website</strong> :{' '}
          <a href="https://bgscet.ac.in/" className="placement-menu-page__contact-link" target="_blank" rel="noreferrer" > https://bgscet.ac.in
          </a>
        </p>
      </section>
      <VisitCampus />
    </>
  );
}

export default StaffDetailsPage;
