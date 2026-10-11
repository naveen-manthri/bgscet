import './HomeContentSection.css';

type HomeContentSectionProps = {
  title: string;
  titleId: string;
  description: string;
  image: string;
  imageAlt: string;
  layout: 'text-first' | 'image-first';
  variant: 'about-mutt' | 'vision-mission';
};

function HomeContentSection({
  title,
  titleId,
  description,
  image,
  imageAlt,
  layout,
  variant,
}: HomeContentSectionProps) {
  const content = (
    <div className="home-content-section__content flex flex-direction-column flex-one">
      <h2 className="home-section-title" id={titleId}>
        {title}
      </h2>
      <p>{description}</p>
    </div>
  );

  const imageElement = (
    <div className="image-hover-container home-content-section__image-container">
      <img className="home-content-section__image image-hover-scale" src={image} alt={imageAlt} />
    </div>
  );

  return (
    <section className={`home-content-section home-content-section--${variant} home-content-section--${layout}`}  aria-labelledby={titleId} >
      {layout === 'image-first' ? (
        <>
          {imageElement}
          {content}
        </>
      ) : (
        <>
          {content}
          {imageElement}
        </>
      )}
    </section>
  );
}

export default HomeContentSection;
