import LetterSections from '../components/letterSections/letterSections';
import VisitCampus from '../components/VisitCampus/VisitCampus';
import { vtuApprovalData } from '../data/letters/vtuApprovalData';

function VtuApprovalLettersPage() {
  return (
    <>
      <LetterSections data={vtuApprovalData} />
      <VisitCampus />
    </>
  );
}

export default VtuApprovalLettersPage;
