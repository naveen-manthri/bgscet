import LetterSections from '../components/letterSections/letterSections';
import DepartmentSectionHeading from '../components/DepartmentSectionHeading/DepartmentSectionHeading';
import VisitCampus from '../components/VisitCampus/VisitCampus';
import { studentMaterialData } from '../data/letters/studentMaterial';
import './StudentMaterialPage.css';

function StudentMaterialPage() {
  return (
    <>
      <DepartmentSectionHeading title={studentMaterialData.title} className="department-section-heading--default" />
      <LetterSections data={studentMaterialData} />
      <div className="student-material__cta">
        <a className="student-material__button" href="https://vtu.ac.in/en/study-material/">
          VTU Study Materials
        </a>
      </div>
      <VisitCampus />
    </>
  );
}

export default StudentMaterialPage;
