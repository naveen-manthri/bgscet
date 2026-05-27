interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
}

function SectionHeading({ eyebrow, title, subtitle, center = false, light = false }: SectionHeadingProps) {
  return (
    <div className={`section-heading ${center ? 'text-center mx-auto' : ''} ${light ? 'light' : ''}`}>
      {eyebrow && <span className="section-eyebrow d-inline-block">{eyebrow}</span>}
      <h2 className="section-title mb-3">{title}</h2>
      {subtitle && <p className="section-subtitle mb-0">{subtitle}</p>}
    </div>
  );
}

export default SectionHeading;
