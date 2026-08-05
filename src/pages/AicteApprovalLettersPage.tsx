import LetterSections from '../components/letterSections/letterSections';
import VisitCampus from '../components/VisitCampus/VisitCampus';
import { aicteApprovalData } from '../data/letters/aicteApprovalData';

function AicteApprovalLettersPage() {
  return (
    <>
      <LetterSections data={aicteApprovalData} />
      <VisitCampus />
    </>
  );
}

export default AicteApprovalLettersPage;
