import "./committeeCards.css";
import DepartmentSectionHeading from "../DepartmentSectionHeading/DepartmentSectionHeading";
import type { Committee } from "../../types/committee";

interface CommitteeCardsProps {
  data: Committee[];
}

const CommitteeCards = ({ data }: CommitteeCardsProps) => {
  return (
    <>
      <div className="committee-heading">
        <DepartmentSectionHeading title="Committees" />
      </div>
      <div className="committee-grid">
        {data.map((committee) => (
          <a key={committee.title} href={committee.pdf} target="_blank" rel="noopener noreferrer" className="committee-btn">{committee.title}</a>

        ))}
      </div>
    </>
  );
};

export default CommitteeCards;
