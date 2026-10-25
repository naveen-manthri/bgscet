import { useRef, useState } from 'react';
import type { PointerEvent } from 'react';

import dhrutiVideo from '../../../assets/videos/dhruti-R.mp4';
import sayeedVideo from '../../../assets/videos/sayeed.mp4';
import usmaVideo from '../../../assets/videos/usma.mp4';

import SectionHeading from '../../common/SectionHeading';

import './StudentTestimonials.css';

const studentVideos = [
  { id: 'dhruti', name: 'Dhruti R', src: dhrutiVideo },
  { id: 'sayeed', name: 'Sayeed', src: sayeedVideo },
  { id: 'usma', name: 'Usma', src: usmaVideo },
];

function StudentTestimonials() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const dragStartX = useRef(0);
  const scrollStartX = useRef(0);
  const videoRefs = useRef<Record<string, HTMLVideoElement | null>>({});
  const [isDragging, setIsDragging] = useState(false);
  const [playingVideoId, setPlayingVideoId] = useState<string | null>(null);
  const [posterFrames, setPosterFrames] = useState<Record<string, string>>({});

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (!scrollerRef.current || (event.target as HTMLElement).closest('button, video')) {
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
    if (scrollerRef.current?.hasPointerCapture(event.pointerId)) {
      scrollerRef.current.releasePointerCapture(event.pointerId);
    }
  };

  return (
    <section className="student-testimonials mobile-margin-top" aria-labelledby="student-testimonials-title">
      <div className="student-testimonials__inner mobile-padding">
        <SectionHeading subtitle="Student Voices" title="Four Years that" titleSecondLine="Changed Everything." underlineFitContent center />

        <div className={`flex student-testimonials__scroller${isDragging ? ' is-dragging' : ''}`} ref={scrollerRef} role="list" tabIndex={0} aria-label="Student testimonial videos" onPointerDown={handlePointerDown} onPointerMove={handlePointerMove} onPointerUp={handlePointerEnd} onPointerCancel={handlePointerEnd} onPointerLeave={() => setIsDragging(false)} >
          {studentVideos.map((student) => {
            const isPlaying = playingVideoId === student.id;

            return (
              <article className="student-testimonials__card" key={student.id} role="listitem">
                <video className="student-testimonials__video" ref={(video) => { videoRefs.current[student.id] = video; }} src={student.src} poster={posterFrames[student.id]} preload="metadata" controls={isPlaying}
                  playsInline aria-label={`${student.name} student testimonial`} onLoadedMetadata={(event) => {
                    const video = event.currentTarget; video.currentTime = video.duration > 1 ? 1 : 0;
                  }}
                  onSeeked={(event) => {
                    const video = event.currentTarget;
                    if (video.videoWidth === 0 || video.videoHeight === 0) {
                      return;
                    }

                    const canvas = document.createElement('canvas');
                    canvas.width = 480;
                    canvas.height = Math.round(480 * video.videoHeight / video.videoWidth);
                    const context = canvas.getContext('2d');
                    context?.drawImage(video, 0, 0, canvas.width, canvas.height);
                    if (context) {
                      setPosterFrames((frames) => ({
                        ...frames,
                        [student.id]: canvas.toDataURL('image/jpeg', 0.82),
                      }));
                    }
                  }}
                  onEnded={(event) => {
                    event.currentTarget.currentTime = event.currentTarget.duration > 1 ? 1 : 0;
                    setPlayingVideoId(null);
                  }}
                />
                {!isPlaying ? (
                  <button className="student-testimonials__play" type="button" onClick={() => {
                      const video = videoRefs.current[student.id];
                      if (video) {
                        void video.play();
                        setPlayingVideoId(student.id);
                      }
                    }}
                    aria-label={`Play ${student.name}'s testimonial`} >
                    <span className="student-testimonials__play-icon" aria-hidden="true">▶</span>
                  </button>
                ) : null}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default StudentTestimonials;
