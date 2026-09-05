import BannerSection from '../components/BannerSection/BannerSection';
import DepartmentSectionHeading from '../components/DepartmentSectionHeading/DepartmentSectionHeading';
import VisitCampus from '../components/VisitCampus/VisitCampus';
import banner from '../assets/images/banner/sc-st-cell-banner.png';
import './SCSTCellPage.css';

const scStCellItems = [
  {
    label: 'Policy Document',
    href: '/pdfs/sc-st-cell/SC_ST_-OBC-Cell-1.pdf',
  },
  {
    label: 'Link To Complaint Form',
    href: 'https://docs.google.com/forms/d/e/1FAIpQLSfcIWagAKWIhZf9BgsVC_pW2kTx7VQueKmyk9ngVcswO7m_LA/viewform',
  },
];

function SCSTCellPage() {
  return (
    <>
      <BannerSection image={banner} title="SC ST Cell" />

      <main className="scstcell-page">
        <DepartmentSectionHeading title="SC ST Cell" className="department-section-heading--medium" />

        <div className="scstcell-page__list" aria-label="SC ST Cell actions">
          {scStCellItems.map((item) => (
            <div className="scstcell-page__row" key={item.label}>
              <span className="scstcell-page__label">{item.label}</span>
              <a href={item.href} className="committee-btn scstcell-page__button flex flex-center" target="_blank" rel="noopener noreferrer">Click Here</a>
            </div>
          ))}
        </div>
      </main>

      <VisitCampus />
    </>
  );
}

export default SCSTCellPage;
