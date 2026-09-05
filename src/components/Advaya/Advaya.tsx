import { advayaFilesData } from '../../data/advayaFilesData';
import DepartmentSectionHeading from "../DepartmentSectionHeading/DepartmentSectionHeading";
import './Advaya.css';

function Advaya() {
  return (
    <section className="advaya" aria-labelledby="advaya-title">
      <div className="advaya__container">
        <div id="advaya-title">
          <DepartmentSectionHeading title="Advaya 2.0-2k26" className='department-section-heading--medium' />
        </div>
        <ol className="advaya__files">
          {advayaFilesData.map((file) => (
            <li key={file.title}>
              <a
                className="advaya__file"
                href={file.pdf}
                target="_blank"
                rel="noopener noreferrer"
              >
                {file.title.replaceAll('_', ' ')}
              </a>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default Advaya;
