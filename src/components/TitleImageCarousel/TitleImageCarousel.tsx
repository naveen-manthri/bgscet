import { useState } from "react";
import "./TitleImageCarousel.css";

export interface TitleImageCarouselImage {
  src: string;
  alt: string;
}

export interface TitleImageCarouselProps {
  title: string;
  images: TitleImageCarouselImage[];
  className?: string;
  imageAspectRatio?: string;
}

function TitleImageCarousel({
  title,
  images,
  className = "",
  imageAspectRatio = "16 / 9",
}: TitleImageCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (images.length === 0) return null;

  const showPrevious = () => {
    setActiveIndex((current) => (current - 1 + images.length) % images.length);
  };

  const showNext = () => {
    setActiveIndex((current) => (current + 1) % images.length);
  };

  const activeImage = images[activeIndex];

  return (
    <section className={`title-image-carousel ${className}`.trim()} aria-label={title}>
      <h2 className="title-image-carousel__title">{title}</h2>
      <div
        className="title-image-carousel__image-frame"
        style={{ aspectRatio: imageAspectRatio }}
        aria-live="polite"
      >
        <img
          className="title-image-carousel__image"
          src={activeImage.src}
          alt={activeImage.alt}
          key={activeImage.src}
        />
      </div>
      <div className="title-image-carousel__controls" aria-label={`${title} image controls`}>
        <button
          className="title-image-carousel__arrow"
          type="button"
          aria-label={`Previous ${title.toLowerCase()} image`}
          onClick={showPrevious}
          disabled={images.length < 2}
        >
          <svg viewBox="0 0 60 24" aria-hidden="true" focusable="false">
            <path d="M58 12H4M4 12l10-10M4 12l10 10" />
          </svg>
        </button>
        <button
          className="title-image-carousel__arrow"
          type="button"
          aria-label={`Next ${title.toLowerCase()} image`}
          onClick={showNext}
          disabled={images.length < 2}
        >
          <svg viewBox="0 0 60 24" aria-hidden="true" focusable="false">
            <path d="M2 12h54M56 12 46 2M56 12 46 22" />
          </svg>
        </button>
      </div>
    </section>
  );
}

export default TitleImageCarousel;
