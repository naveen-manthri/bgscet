import DepartmentSectionHeading from '../components/DepartmentSectionHeading/DepartmentSectionHeading';
import VisitCampus from '../components/VisitCampus/VisitCampus';
import '../components/committeeCards/committeeCards.css';

const YRCClubPage = () => {
  return (
    <>
      <main style={{ padding: '3rem 4rem 0', marginBottom: '2rem' }}>
        <DepartmentSectionHeading title="Youth Red Cross Club" className="department-section-heading--medium" />

        <div className="committee-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', padding: '0' }}>
          <a
            href="/pdfs/committees/YRC-Club.pdf"
            className="committee-btn"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Youth Red Cross Club details"
          >
            YRC Club Details
          </a>
        </div>
      </main>

      <VisitCampus />
    </>
  );
};

export default YRCClubPage;
