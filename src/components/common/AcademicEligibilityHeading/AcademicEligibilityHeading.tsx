import "./AcademicEligibilityHeading.css";

type AcademicHeadingProps = {
  blackTitle: string;
  redTitle?: string;
  className?: string;
};

export default function AcademicHeading({
  blackTitle,
  redTitle,
  className = "",
}: AcademicHeadingProps) {
  return (
    <div className={`academic-section-heading ${className}`.trim()}>
      <h2>
        <span className="academic-section-heading__black">{blackTitle}</span>
        {redTitle && (
          <span className="academic-section-heading__red">{redTitle}</span>
        )}
      </h2>
    </div>
  );
}