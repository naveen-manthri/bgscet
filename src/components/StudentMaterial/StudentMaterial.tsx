
import LetterSections from "../letterSections/letterSections";
import { studentMaterialData } from "../../data/letters/studentMaterial";
import "./StudentMaterial.css";

function StudentMaterial() {
  return (
    <>
      <LetterSections data={studentMaterialData} />

      <div className="student-material__cta flex flex-justify-center">
        <a className="student-material__button flex flex-center" href="https://vtu.ac.in/en/study-material/">
          VTU Study Materials
        </a>
      </div>
    </>
  );
}

export default StudentMaterial;

