import DepartmentSectionHeading from "../../../DepartmentSectionHeading/DepartmentSectionHeading";

import type { AchievementSectionData } from "../../../../types/ugprograms";

interface AchievementCardsProps {
  data: AchievementSectionData;
}

const AchievementCards = ({ data }: AchievementCardsProps) => (
  <>
    <DepartmentSectionHeading title={data.title} />
    <div className="achievement-list">
      {data.achievements.map((achievement, index) => (
        <div className="achievement-card" key={achievement.id}>
          <h3 className="achievement-title">{index + 1}. {achievement.title}</h3>
          <div className="achievement-image-wrapper">
            <img src={achievement.image} alt={achievement.alt} className="achievement-image" />
          </div>
          {index !== data.achievements.length - 1 && <hr className="achievement-divider" />}
        </div>
      ))}
    </div>
  </>
);

export default AchievementCards;
