import DepartmentSectionHeading from '../components/DepartmentSectionHeading/DepartmentSectionHeading';
import VisitCampus from '../components/VisitCampus/VisitCampus';
import './Icwite2025Page.css';

function Icwite2025Page() {
  return (
    <>
      <section className="icwite-2025" aria-labelledby="icwite-2025-title">
        <DepartmentSectionHeading title="Welcome to ICWITE 2025" />
        <a
          id="icwite-2025-title"
          className="icwite-2025__link"
          href="https://bgscet.ac.in/wp-content/uploads/2025/11/ICWITE-25-.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          ICWITE 2025
        </a>
      </section>
      <VisitCampus />
    </>
  );
}

export default Icwite2025Page;
