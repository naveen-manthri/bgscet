import DepartmentSectionHeading from "../../../DepartmentSectionHeading/DepartmentSectionHeading";

import type { AchievementSectionData } from "../../../../types/ugprograms";

interface AchievementCardsProps {
  data: AchievementSectionData;
}

const AchievementCards = ({ data }: AchievementCardsProps) => (
  <>
    <DepartmentSectionHeading title={data.title} className="department-section-heading--medium" />
    <div className="achievement-list flex flex-direction-column">
      {data.achievements.map((achievement, index) => (
        <div className="achievement-card" key={achievement.id}>
          <h3 className="achievement-title">{index + 1}. {achievement.title}</h3>
          <div className="flex flex-start flex-align-start achievement-image-wrapper">
            <img src={achievement.image} alt={achievement.alt} className="achievement-image" />
          </div>
          {index !== data.achievements.length - 1 && <hr className="achievement-divider" />}
        </div>
      ))}
    </div>
  </>
);

export default AchievementCards;
