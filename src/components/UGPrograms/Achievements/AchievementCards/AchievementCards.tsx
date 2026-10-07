import DepartmentSectionHeading from "../../../DepartmentSectionHeading/DepartmentSectionHeading";
import ImageCard from "../../../common/imageCards/imageCard";

import type { AchievementSectionData } from "../../../../types/ugprograms";

interface AchievementCardsProps {
  data: AchievementSectionData;
}

const AchievementCards = ({ data }: AchievementCardsProps) => (
  <>
    <DepartmentSectionHeading title={data.title} className="department-section-heading--medium" />
    <ImageCard
      title=""
      data={data.achievements}
      showHeading={false}
      showDetails={false}
      renderContent={(openImage) => (
        <div className="achievement-list flex flex-direction-column">
          {data.achievements.map((achievement, index) => (
            <div className="achievement-card" key={achievement.id}>
              <h3 className="achievement-title">{index + 1}. {achievement.title}</h3>
              <div className="flex flex-start flex-align-start achievement-image-wrapper">
                <button
                  type="button"
                  className="achievement-image-trigger"
                  onClick={() => openImage(achievement)}
                  aria-label={`Open image: ${achievement.title}`}
                >
                  <img src={achievement.image} alt={achievement.alt} className="achievement-image" />
                </button>
              </div>
              {index !== data.achievements.length - 1 && <hr className="achievement-divider" />}
            </div>
          ))}
        </div>
      )}
    />
  </>
);

export default AchievementCards;
