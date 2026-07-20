// import './SectionHeading.css';

// interface SectionHeadingProps {
//   eyebrow?: string;
//   title: string;
//   subtitle?: string;
//   center?: boolean;
//   light?: boolean;
//   underline?: boolean;
// }

// function SectionHeading({
//   eyebrow,
//   title,
//   subtitle,
//   center = true,
//   light = false,
//   underline = true,
// }: SectionHeadingProps) {
//   return (
//     <div
//       className={[
//         'shared-section-heading',
//         center ? 'shared-section-heading--center' : 'shared-section-heading--left',
//         light ? 'shared-section-heading--light' : '',
//       ]
//         .filter(Boolean)
//         .join(' ')}
//     >
//       {eyebrow && (
//         <span className="section-eyebrow">
//           {eyebrow}
//         </span>
//       )}

//       <div className="section-title-wrapper">
//         <h2 className="section-title">{title}</h2>

//         {underline && (
//           <span className="section-heading-line"></span>
//         )}
//       </div>

//       {subtitle && (
//         <p className="section-subtitle">
//           {subtitle}
//         </p>
//       )}
//     </div>
//   );
// }

// export default SectionHeading;


import "./SectionHeading.css";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  titleSecondLine?: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
  underline?: boolean;
  underlineFitContent?: boolean;
}

function SectionHeading({
  eyebrow,
  title,
  titleSecondLine,
  subtitle,
  center = true,
  light = false,
  underline = true,
  underlineFitContent = false,
}: SectionHeadingProps) {
  return (
    <div
      className={[
        "shared-section-heading",
        center
          ? "shared-section-heading--center"
          : "shared-section-heading--left",
        light ? "shared-section-heading--light" : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {eyebrow && (
        <span className="section-eyebrow">
          {eyebrow}
        </span>
      )}

      {subtitle && (
        <p className="section-subtitle">
          {subtitle}
        </p>
      )}

      <div
        className={[
          "section-title-wrapper",
          underlineFitContent ? "section-title-wrapper--fit" : "",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        <h2 className="section-title">
          {title}

          {titleSecondLine && (
            <span className="section-title-second-line">
              {titleSecondLine}
            </span>
          )}
        </h2>

        {underline && (
          <span className="section-heading-line"></span>
        )}
      </div>
    </div>
  );
}

export default SectionHeading;