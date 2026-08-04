import DepartmentSectionHeading from "../components/DepartmentSectionHeading/DepartmentSectionHeading";
import CommitteeCards from "../components/committeeCards/committeeCards";
import VisitCampus from "../components/VisitCampus/VisitCampus";
import { committeeData } from "../data/committees/committeeData";

const Committees = () => {
  return (
    <>
      <DepartmentSectionHeading title="Committees" />

      <CommitteeCards data={committeeData} />
      <VisitCampus />
    </>
  );
};

export default Committees;
