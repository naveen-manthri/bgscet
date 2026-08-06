import CommitteeCards from "../components/committeeCards/committeeCards";
import VisitCampus from "../components/VisitCampus/VisitCampus";
import { committeeData } from "../data/committees/committeeData";

const Committees = () => {
  return (
    <>
      <CommitteeCards data={committeeData} />
      <VisitCampus />
    </>
  );
};

export default Committees;
