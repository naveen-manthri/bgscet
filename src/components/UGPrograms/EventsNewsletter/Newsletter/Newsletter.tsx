import DepartmentSectionHeading from "../../../DepartmentSectionHeading/DepartmentSectionHeading";

import type { DepartmentNewsletter } from "../../../../types/ugprograms";

interface NewsletterProps {
  title: string;
  data: DepartmentNewsletter[];
}

const Newsletter = ({ title, data }: NewsletterProps) => (
  <div className="newsletter-section">
    <DepartmentSectionHeading title={title} className="department-section-heading--medium" />
    <div className="newsletter-grid">
      {data.map((newsletter) =>
        newsletter.link ? (
          <a key={newsletter.id}
            href={newsletter.link}
            target="_blank"
            rel="noopener noreferrer"
            className="newsletter-btn"
          >
            {newsletter.title}
          </a>
        ) : (
          <button key={newsletter.id} type="button" className="newsletter-btn">
            {newsletter.title}
          </button>
        ),
      )}
    </div>
  </div>
);

export default Newsletter;
