import React from "react";
import "./DepartmentAchievements.css";

import DepartmentSectionHeading from "../DepartmentSectionHeading/DepartmentSectionHeading";
import { achievementData } from "../../data/cseDepartment";

import techIum from "../../assets/images/achievement/tech-ium.jpg";
import internship from "../../assets/images/achievement/internship.jpg";

const achievementImages: Record<string, string> = {
  "tech-ium.webp": techIum,
  "internship.webp": internship,
};

const DepartmentAchievements: React.FC = () => {
  return (
    <section className="department-achievements">
      <DepartmentSectionHeading title={achievementData.title} />

      <div className="achievement-list">
        {achievementData.achievements.map((achievement, index) => (
          <div className="achievement-card" key={achievement.id}>
            <h3 className="achievement-title">
              {index + 1}. {achievement.title}
            </h3>

            <div className="achievement-image-wrapper">
              <img
                src={achievementImages[achievement.image]}
                alt={achievement.alt}
                className="achievement-image"
              />
            </div>

            {index !== achievementData.achievements.length - 1 && (
              <hr className="achievement-divider" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default DepartmentAchievements;