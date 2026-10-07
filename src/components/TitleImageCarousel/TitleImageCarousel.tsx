import { useRef, useState } from "react";
import type { PointerEvent } from "react";
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
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartX = useRef<number | null>(null);
  const dragPointerId = useRef<number | null>(null);

  if (images.length === 0) return null;

  const showPrevious = () => {
    setActiveIndex((current) => (current - 1 + images.length) % images.length);
  };

  const showNext = () => {
    setActiveIndex((current) => (current + 1) % images.length);
  };

  const activeImage = images[activeIndex];

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    const supportsTouchCarousel = window.matchMedia(
      "(max-width: 64rem), (pointer: coarse)",
    ).matches;

    if (images.length < 2 || !supportsTouchCarousel || event.pointerType === "mouse") {
      return;
    }

    dragStartX.current = event.clientX;
    dragPointerId.current = event.pointerId;
    event.currentTarget.setPointerCapture(event.pointerId);
    setIsDragging(true);
  };

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (dragPointerId.current !== event.pointerId || dragStartX.current === null) {
      return;
    }

    setDragOffset(event.clientX - dragStartX.current);
  };

  const finishPointerDrag = (event: PointerEvent<HTMLDivElement>) => {
    if (dragPointerId.current !== event.pointerId || dragStartX.current === null) {
      return;
    }

    const distance = event.clientX - dragStartX.current;
    const swipeThreshold = event.currentTarget.clientWidth * 0.2;

    if (distance < -swipeThreshold && activeIndex < images.length - 1) {
      setActiveIndex((current) => current + 1);
    } else if (distance > swipeThreshold && activeIndex > 0) {
      setActiveIndex((current) => current - 1);
    }

    dragStartX.current = null;
    dragPointerId.current = null;
    setDragOffset(0);
    setIsDragging(false);
  };

  const cancelPointerDrag = (event: PointerEvent<HTMLDivElement>) => {
    if (dragPointerId.current !== event.pointerId) {
      return;
    }

    dragStartX.current = null;
    dragPointerId.current = null;
    setDragOffset(0);
    setIsDragging(false);
  };

  return (
    <section className={`title-image-carousel ${className}`.trim()} aria-label={title}>
      <h2 className="title-image-carousel__title">{title}</h2>
      <div
        className="title-image-carousel__image-frame"
        style={{ aspectRatio: imageAspectRatio }}
        aria-live="polite"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={finishPointerDrag}
        onPointerCancel={cancelPointerDrag}
      >
        <img
          className="title-image-carousel__image"
          src={activeImage.src}
          alt={activeImage.alt}
          key={activeImage.src}
        />
        <div
          className={`title-image-carousel__swipe-track${isDragging ? " title-image-carousel__swipe-track--dragging" : ""}`}
          style={{
            transform: `translateX(calc(${-activeIndex * 100}% + ${dragOffset}px))`,
          }}
        >
          {images.map((image, index) => (
            <div className="title-image-carousel__slide" key={image.src} aria-hidden={index !== activeIndex}>
              <img
                className="title-image-carousel__slide-image"
                src={image.src}
                alt={image.alt}
                draggable="false"
              />
            </div>
          ))}
        </div>
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
