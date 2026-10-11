import DepartmentSectionHeading from '../DepartmentSectionHeading/DepartmentSectionHeading';
import './LeadershipMessage.css';

export type LeadershipMessageData = {
  name: string;
  topParagraphs: string[];
  remainingParagraphs: string[];
  image: string;
  imageAlt: string;
};

type LeadershipMessageProps = {
  title: string;
  variant: 'director' | 'principal';
  data: LeadershipMessageData;
};

function LeadershipMessage({ title, variant, data }: LeadershipMessageProps) {
  const { name, topParagraphs, remainingParagraphs, image, imageAlt } = data;

  return (
    <section className={`leadership-message leadership-message--${variant}`}>
      <DepartmentSectionHeading title={title} className="department-section-heading--medium" />

      <div className="leadership-message__top">
        <div className="leadership-message__content">
          <figure className="leadership-message__image-wrapper image-hover-container">
            <img className="leadership-message__image image-hover-scale" src={image} alt={imageAlt} />
            <figcaption className="guru-card__caption">{name}</figcaption>
          </figure>
          <div className="leadership-message__description">
            {topParagraphs.map((paragraph, index) => (
              <p className="leadership-message__paragraph" key={index}>
                {paragraph}
              </p>
            ))}
          </div>

          <div className="leadership-message__bottom">
            {remainingParagraphs.map((paragraph, index) => (
              <p className="leadership-message__paragraph" key={index}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default LeadershipMessage;
