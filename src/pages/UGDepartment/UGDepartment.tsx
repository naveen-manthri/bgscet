import { useState } from "react";

import "./UGDepartment.css";

import Advertisement from "../../components/Advertisement/Advertisement";
import BannerSection from "../../components/BannerSection/BannerSection";
import DepartmentTabs from "../../components/DepartmentTabs/DepartmentTabs";
import VisitCampus from "../../components/VisitCampus/VisitCampus";
import AboutDepartment from "../../components/UGPrograms/AboutDepartment/AboutDepartment";
import HodMessage from "../../components/UGPrograms/AboutDepartment/HodMessage/HodMessage";
import Achievements from "../../components/UGPrograms/Achievements/Achievements";
import EventsNewsletter from "../../components/UGPrograms/EventsNewsletter/EventsNewsletter";
import Faculty from "../../components/UGPrograms/Faculty/Faculty";
import TechnicalFaculty from "../../components/UGPrograms/Faculty/TechnicalFaculty";
import VisionMission from "../../components/UGPrograms/VisionMission/VisionMission";
import Statistics from "../../components/Statistics/Statistics";
import LabSection from "../../components/UGPrograms/LabSection/LabSection";

import type { UGDepartmentData } from "../../types/ugprograms";

interface UGDepartmentProps {
  data: UGDepartmentData;
}

const UGDepartment = ({ data }: UGDepartmentProps) => {
  const [activeTab, setActiveTab] = useState(data.tabs[0]?.id ?? "about");

  const scrollToSection = (id: string) => {
    setActiveTab(id);
    document.getElementById(`department-${id}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const renderActiveTab = () => {
    switch (activeTab) {
      case "vision":
        return <VisionMission data={data.visionMission} />;
      case "faculty":
        return (
          <>
            <Faculty data={data.facultyMembers} />
            <TechnicalFaculty data={data.technicalFacultyMembers} />
          </>
        );
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
        <DepartmentTabs
          tabs={data.tabs}
          activeTab={activeTab}
          onTabChange={data.singlePage ? scrollToSection : setActiveTab}
        />
        {data.singlePage ? (
          <div className="ug-department__tab-content ug-department__single-page">
            <div id="department-hod"><HodMessage data={data.hodMessage} /></div>
            {data.labSection && data.labPlacement !== "afterVision" ? <div id="department-about"><LabSection data={data.labSection} /></div> : null}
            <Statistics />
            <div id="department-vision"><VisionMission data={data.visionMission} columns /></div>
            {data.labSection && data.labPlacement === "afterVision" ? <div id="department-about"><LabSection data={data.labSection} /></div> : null}
            <div id="department-faculty"><Faculty data={data.facultyMembers} />{data.instructorMembers?.length ? <TechnicalFaculty data={data.instructorMembers} title="Instructor" /> : null}</div>
          </div>
        ) : (
          <div className="ug-department__tab-content">{renderActiveTab()}</div>
        )}
      </main>

      <VisitCampus />
    </>
  );
};

export default UGDepartment;
