import { useState } from "react";

import "./UGDepartment.css";

import Advertisement from "../../components/Advertisement/Advertisement";
import BannerSection from "../../components/BannerSection/BannerSection";
import DepartmentTabs from "../../components/DepartmentTabs/DepartmentTabs";
import VisitCampus from "../../components/VisitCampus/VisitCampus";
import AboutDepartment from "../../components/UGPrograms/AboutDepartment/AboutDepartment";
import Achievements from "../../components/UGPrograms/Achievements/Achievements";
import EventsNewsletter from "../../components/UGPrograms/EventsNewsletter/EventsNewsletter";
import Faculty from "../../components/UGPrograms/Faculty/Faculty";
import VisionMission from "../../components/UGPrograms/VisionMission/VisionMission";

import type { UGDepartmentData } from "../../types/ugprograms";

interface UGDepartmentProps {
  data: UGDepartmentData;
}

const UGDepartment = ({ data }: UGDepartmentProps) => {
  const [activeTab, setActiveTab] = useState(data.tabs[0]?.id ?? "about");

  const renderActiveTab = () => {
    switch (activeTab) {
      case "vision":
        return <VisionMission data={data.visionMission} />;
      case "faculty":
        return <Faculty data={data.facultyMembers} />;
      case "achievements":
        return <Achievements data={data.achievementData} />;
      case "events":
        return <EventsNewsletter data={data.eventsData} />;
      case "about":
      default:
        return (
          <AboutDepartment
            hodMessage={data.hodMessage}
            aboutDepartment={data.aboutDepartment}
            careerOpportunities={data.careerOpportunities}
            infrastructureFaculty={data.infrastructureFaculty}
          />
        );
    }
  };

  return (
    <>
      <BannerSection {...data.banner} />
      <Advertisement />

      <main className="ug-department">
        <DepartmentTabs tabs={data.tabs} activeTab={activeTab} onTabChange={setActiveTab} />
        <div className="ug-department__tab-content">{renderActiveTab()}</div>
      </main>

      <VisitCampus />
    </>
  );
};

export default UGDepartment;
