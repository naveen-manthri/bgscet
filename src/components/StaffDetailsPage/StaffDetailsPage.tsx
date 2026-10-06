import BannerSection from "../BannerSection/BannerSection";
import Advertisement from "../Advertisement/Advertisement";
import DepartmentSectionHeading from "../DepartmentSectionHeading/DepartmentSectionHeading";
import Table from "../common/Table/Table";
import PlacementPosterGallery from "../reusable/PlacementPosterGallery";
import { staffDetailsPageData, toppersBanner } from "./data";
import "./StaffDetailsPage.css";

function StaffDetailsPage() {
  const { staff, contactTitle, contactLines } = staffDetailsPageData;

  return (
    <>
      <BannerSection image={toppersBanner} title="" fullImage />
      <Advertisement />
      <PlacementPosterGallery />

      <main className="staff-details-page__content">
        <Table
          title={staff.title}
          table={staff.table}
          className="staff-details-page__table"
        />

        <section className="staff-details-page__contact">
          <DepartmentSectionHeading
            title={contactTitle}
            className="department-section-heading--medium"
          />
          <div className="staff-details-page__contact-lines">
            {contactLines.map((line) => (
              <p className="staff-details-page__contact-line" key={line.id}>
                {line.text ? (
                  line.emphasized ? <strong>{line.text}</strong> : line.text
                ) : (
                  <>
                    <strong>{line.label}</strong> :{" "}
                    {line.href ? (
                      <a
                        href={line.href}
                        className="staff-details-page__contact-link"
                        target={line.external ? "_blank" : undefined}
                        rel={line.external ? "noreferrer" : undefined}
                      >
                        {line.linkText}
                      </a>
                    ) : (
                      line.value
                    )}
                  </>
                )}
              </p>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

export default StaffDetailsPage;
