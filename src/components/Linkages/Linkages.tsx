import './Linkages.css';
import NumberedList from '../common/NumberedList/NumberedList';
import Table from '../common/Table/Table';
import DepartmentSectionHeading from '../DepartmentSectionHeading/DepartmentSectionHeading';
import TitleDescription from '../careerDevelopment/TitleDescription/TitleDescription';
import { linkagesData } from '../../data/linkagesData';

const institutionDetailsTable = {
  columns: [
    { key: 'field', label: 'Field' },
    { key: 'value', label: 'Details' },
  ],
  rows: [
    { field: 'Category of Institution', value: 'ENGINEERING & TECHNOLOGY' },
    { field: 'Name of the Proposed Programme', value: 'Under Graduate (UG) Programme in ENGINEERING & TECHNOLOGY' },
    { field: 'Name of the Proposed Institution', value: 'BGS College of Engineering and Technology' },
    { field: 'Address of the Institution', value: 'CA Site no. 6 & 7, 3rd Main, Pipeline Road, Mahalakshmipuram, West of Chord Road,\nBengaluru - 560 086\nKarnataka, India' },
    { field: 'Nearest City/ Town/ Airport/ Railway Station', value: 'Bengaluru, Kempegowda International Airport, Yeshvantpur Junction Railway Station and Malleswaram Railway Station, Bengaluru.' },
    { field: 'Type of the Institution', value: 'Private Self-Financing' },
    { field: 'Name of the affiliating University', value: 'Visvesvaraya Technological University, Belagavi, Karnataka' },
  ],
};

function Linkages() {
  return (
    <section className="linkages" aria-label="Linkages section">
      <div className="linkages__content">
        {/* <DepartmentSectionHeading title={linkagesData.title} className="department-section-heading--medium" /> */}

        {linkagesData.paragraphs.map((paragraph, index) => (
          <p key={`${paragraph.slice(0, 20)}-${index}`} className="linkages__text">
            {paragraph}
          </p>
        ))}

        <div className="linkages__industry">
          <DepartmentSectionHeading title={linkagesData.industryLinkagesTitle} className="department-section-heading--medium" />
          <p className="linkages__intro">
            BGSCET will have strong linkages with industry to bridge the gap between theory and practice. Following are the key elements of institute industry partnership.
          </p>
          <NumberedList data={{ items: linkagesData.industryLinkagesItems }} />
        </div>

        <TitleDescription data={linkagesData.communityLinkages} className="department-section-heading--medium" sectionClassName="linkages__title-description" />
        <TitleDescription data={linkagesData.technicalInstitutionLinkages} className="department-section-heading--medium" sectionClassName="linkages__title-description" />
        <TitleDescription data={linkagesData.institutionalExcellenceLinkages} className="department-section-heading--medium" sectionClassName="linkages__title-description" />

        <div className="linkages__numbered-block">
          <DepartmentSectionHeading title={linkagesData.linkagesAbroad.title} className="department-section-heading--medium linkages__title" />
          <p className="linkages__intro">{linkagesData.linkagesAbroad.description}</p>
          <NumberedList data={{ items: linkagesData.linkagesAbroad.points }} />
        </div>

        <div className="linkages__numbered-block">
          <DepartmentSectionHeading title={linkagesData.researchLabLinkages.title} className="department-section-heading--medium linkages__title" />
          <p className="linkages__intro">{linkagesData.researchLabLinkages.description}</p>
          <NumberedList data={{ items: linkagesData.researchLabLinkages.points }} />
        </div>

        <Table title="Institution Details" table={institutionDetailsTable} className="linkages__institution-table" />

        <p className="linkages__text">{linkagesData.closingText}</p>
      </div>
    </section>
  );
}

export default Linkages;
