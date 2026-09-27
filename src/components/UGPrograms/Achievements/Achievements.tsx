import "./Achievements.css";

import AchievementCards from "./AchievementCards/AchievementCards";

import type { AchievementSectionData } from "../../../types/ugprograms";

interface AchievementsProps {
  data: AchievementSectionData;
}

const Achievements = ({ data }: AchievementsProps) => (
  <section className="department-achievements mobile-margin-top mobile-padding">
    <AchievementCards data={data} />
  </section>
);

export default Achievements;
