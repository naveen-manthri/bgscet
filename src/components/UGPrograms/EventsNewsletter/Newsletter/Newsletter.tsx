import DepartmentSectionHeading from "../../../DepartmentSectionHeading/DepartmentSectionHeading";

import type { DepartmentNewsletter } from "../../../../types/ugprograms";

interface NewsletterProps {
  title: string;
  data: DepartmentNewsletter[];
}

const Newsletter = ({ title, data }: NewsletterProps) => (
  <div className="newsletter-section">
    <DepartmentSectionHeading title={title} />
    <div className="newsletter-grid">
      {data.map((newsletter) => (
        <button key={newsletter.id} type="button" className="newsletter-btn">
          {newsletter.title}
        </button>
      ))}
    </div>
  </div>
);

export default Newsletter;
