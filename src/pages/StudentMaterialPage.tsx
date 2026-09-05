import LetterSections from '../components/letterSections/letterSections';
import VisitCampus from '../components/VisitCampus/VisitCampus';
import { studentMaterialData } from '../data/letters/studentMaterial';
import './StudentMaterialPage.css';

function StudentMaterialPage() {
  return (
    <>
      <LetterSections data={studentMaterialData} />
      <div className="student-material__cta flex flex-justify-center">
        <a className="student-material__button flex flex-center" href="https://vtu.ac.in/en/study-material/">
          VTU Study Materials
        </a>
      </div>
      <VisitCampus />
    </>
  );
}

export default StudentMaterialPage;
