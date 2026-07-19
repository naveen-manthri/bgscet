import { useRef, useState } from 'react';
import type { PointerEvent } from 'react';

import { testimonials } from '../../data/landingData';

import SectionHeading from '../common/SectionHeading';

import './StudentTestimonials.css';

function StudentTestimonials() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const dragStartX = useRef(0);
  const scrollStartX = useRef(0);
  const [isDragging, setIsDragging] = useState(false);

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (!scrollerRef.current) {
      return;
    }

    setIsDragging(true);
    dragStartX.current = event.clientX;
    scrollStartX.current = scrollerRef.current.scrollLeft;
    scrollerRef.current.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (!isDragging || !scrollerRef.current) {
      return;
    }

    const distance = event.clientX - dragStartX.current;
    scrollerRef.current.scrollLeft = scrollStartX.current - distance;
  };

  const handlePointerEnd = (event: PointerEvent<HTMLDivElement>) => {
    setIsDragging(false);
    scrollerRef.current?.releasePointerCapture(event.pointerId);
  };

  return (
    <section
      className="student-testimonials"
      aria-labelledby="student-testimonials-title"
    >
      <div className="student-testimonials__inner">

        <SectionHeading
          subtitle="Student Voices"
          title="Four Years"
          titleSecondLine="That Changed Everything."
          underlineFitContent
          center
        />

        <div
          className={`student-testimonials__scroller${
            isDragging ? ' is-dragging' : ''
          }`}
          ref={scrollerRef}
          role="list"
          tabIndex={0}
          aria-label="Student testimonials"
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerEnd}
          onPointerCancel={handlePointerEnd}
          onPointerLeave={() => setIsDragging(false)}
        >
          {testimonials.map((testimonial) => (
            <article
              className="student-testimonials__card"
              key={testimonial.id}
              role="listitem"
            >
              <img
                className="student-testimonials__image"
                src={testimonial.image}
                alt={`${testimonial.name}, ${testimonial.department}`}
                draggable="false"
              />

              <h3 className="student-testimonials__name">
                {testimonial.name}
              </h3>

              <p className="student-testimonials__department">
                {testimonial.department}
              </p>

              <p className="student-testimonials__quote">
                {testimonial.quote}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StudentTestimonials;