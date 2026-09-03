import "./AcademicEligibilityHeading.css";

type AcademicHeadingProps = {
  blackTitle: string;
  redTitle?: string;
  className?: string;
  underlineLastLine?: boolean;
};

export default function AcademicHeading({
  blackTitle,
  redTitle,
  className = "",
  underlineLastLine = false,
}: AcademicHeadingProps) {
  return (
    <div className={`academic-section-heading ${className}`.trim()}>
      <h2>
        <span className="academic-section-heading__black">{blackTitle}</span>
        {redTitle && underlineLastLine ? (
          <span className="academic-section-heading__red">
            {redTitle.split("\n").map((line, index, lines) => (
              <span className="academic-section-heading__red-line" key={`${line}-${index}`}>
                {line}
                {index < lines.length - 1 && <br />}
              </span>
            ))}
          </span>
        ) : redTitle ? (
          <span className="academic-section-heading__red">{redTitle}</span>
        ) : null}
      </h2>
    </div>
  );
}