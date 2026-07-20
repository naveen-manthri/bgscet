import { memo, useMemo, useState } from "react";

import "./CSEDepartment.css";

import DepartmentTabs from "../../components/DepartmentTabs/DepartmentTabs";
import AboutDepartment from "../../components/AboutDepartment/AboutDepartment";
import DepartmentVisionMission from "../../components/DepartementVisionMission/DepartementVisionMission";
import DepartmentFaculty from "../../components/DepartmentFaculty/DepartmentFaculty";
import DepartmentAchievements from "../../components/DepartmentAchievements/DepartmentAchievements";
import DepartmentCSEEvents from "../../components/DepartmentCSEEvents/DepartmentCSEEvents";
import Advertisement from "../../components/Advertisement/Advertisement";
import BannerSection from "../../components/BannerSection/BannerSection";
import VisitCampus from "../../components/VisitCampus/VisitCampus";
import { cseDepartmentPageData } from "./data";
import { cseDepartmentTabs, defaultCseDepartmentTab } from "./constants";
import type { DepartmentTabId } from "./types";

const CSEPageTop = memo(function CSEPageTop() {
  return (
    <>
      <BannerSection {...cseDepartmentPageData.banner} />
      <Advertisement />
    </>
  );
});

const CSEPageBottom = memo(function CSEPageBottom() {
  return <VisitCampus />;
});

const CSEDepartment = () => {
  const [activeTab, setActiveTab] = useState<DepartmentTabId>(defaultCseDepartmentTab);

  const ActiveTabContent = useMemo(() => {
    switch (activeTab) {
      case "about":
        return AboutDepartment;

      case "vision":
        return DepartmentVisionMission;

      case "faculty":
        return DepartmentFaculty;

      case "achievements":
        return DepartmentAchievements;

      case "events":
        return DepartmentCSEEvents;

      default:
        return AboutDepartment;
    }
  }, [activeTab]);

  return (
    <>
      <CSEPageTop />

      <main className="cse-department">
        <DepartmentTabs
          tabs={cseDepartmentTabs}
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />

        <div className="cse-department__tab-content">
          <ActiveTabContent />
        </div>
      </main>

      <CSEPageBottom />
    </>
  );
};

export default CSEDepartment;
