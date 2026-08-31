// import BannerSection from '../components/BannerSection/BannerSection';
import DepartmentSectionHeading from '../components/DepartmentSectionHeading/DepartmentSectionHeading';
import VisitCampus from '../components/VisitCampus/VisitCampus';
import '../components/committeeCards/committeeCards.css';

const ndliItems = [
  { label: 'NDLI Report', href: '/pdfs/ndliclub/NDLI-Report.pdf' },
  { label: 'NDLI Certficat 2024-25', href: '/pdfs/ndliclub/NDLI-Certficat-2024-25.pdf' },
  { label: 'NDLI letter', href: '/pdfs/ndliclub/ndli-letter-pdf.pdf' },
];

function NDLIClubPage() {
  return (
    <>
      {/* <BannerSection image="" title="NDLI Club" /> */}

      <main style={{ padding: '3rem 4rem 0', marginBottom: '2rem' }}>
        <DepartmentSectionHeading title="NDLI Club" className="department-section-heading--medium" />

        <div className="committee-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', padding: '0' }}>
          {ndliItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="committee-btn"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.label}
            >
              {item.label}
            </a>
          ))}
        </div>
      </main>

      <VisitCampus />
    </>
  );
}

export default NDLIClubPage;
