import './SectionHeading.css';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
  underline?: boolean;
}

function SectionHeading({
  eyebrow,
  title,
  subtitle,
  center = true,
  light = false,
  underline = true,
}: SectionHeadingProps) {
  return (
    <div
      className={[
        'shared-section-heading',
        center ? 'shared-section-heading--center' : 'shared-section-heading--left',
        light ? 'shared-section-heading--light' : '',
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {eyebrow && (
        <span className="section-eyebrow">
          {eyebrow}
        </span>
      )}

      <div className="section-title-wrapper">
        <h2 className="section-title">{title}</h2>

        {underline && (
          <span className="section-heading-line"></span>
        )}
      </div>

      {subtitle && (
        <p className="section-subtitle">
          {subtitle}
        </p>
      )}
    </div>
  );
}

export default SectionHeading;
