import "./CareerDevelopment.css";

import { careerDevelopmentData } from "../../data/careerDevelopment";

import TitleDescription from "./TitleDescription/TitleDescription";
import BulletSection from "./BulletSection/BulletSection";
import RichDescription from "./RichDescription/RichDescription";
import ProfileCard from "./ProfileCard/ProfileCard";

const CareerDevelopment = () => {
  return (
    <main className="career-development">
      <TitleDescription data={careerDevelopmentData.about} />

      <BulletSection data={careerDevelopmentData.facilities} />

      <TitleDescription data={careerDevelopmentData.trainingPlacement} />

      <BulletSection data={careerDevelopmentData.aimsObjectives} />

      <RichDescription data={careerDevelopmentData.glimpseTraining} />

      <BulletSection data={careerDevelopmentData.whyRecruit} />

      <ProfileCard data={careerDevelopmentData.coordinator} />
    </main>
  );
};

export default CareerDevelopment;