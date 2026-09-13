import "./NDLIClub.css";
import DepartmentSectionHeading from "../DepartmentSectionHeading/DepartmentSectionHeading";

const ndliItems = [
  { label: "NDLI Report", href: "/pdfs/ndliclub/NDLI-Report.pdf" },
  { label: "NDLI Certficat 2024-25", href: "/pdfs/ndliclub/NDLI-Certficat-2024-25.pdf" },
  { label: "NDLI letter", href: "/pdfs/ndliclub/ndli-letter-pdf.pdf" },
];

function NDLIClub() {
  return (
    <main className="ndli-club">
      <DepartmentSectionHeading title="NDLI Club" className="department-section-heading--medium" />

      <div className="ndli-club__grid">
        {ndliItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="ndli-club__button"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.label}
          >
            {item.label}
          </a>
        ))}
      </div>
    </main>
  );
}

export default NDLIClub;
