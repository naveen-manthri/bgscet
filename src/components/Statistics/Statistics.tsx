import "./Statistics.css";
import { statistics } from "../../data/statistics";
import { useEffect, useRef, useState } from "react";

const counterDuration = 1400;
const indianNumberFormatter = new Intl.NumberFormat("en-IN");

const parseStatisticValue = (value: string) => {
  const match = value.match(/^(?<number>[\d,]+)(?<suffix>.*)$/);

  if (!match?.groups) {
    return { target: 0, suffix: "" };
  }

  return {
    target: Number(match.groups.number.replace(/,/g, "")),
    suffix: match.groups.suffix,
  };
};

const easeOutCubic = (progress: number) => 1 - (1 - progress) ** 3;

const useStatisticCounter = (value: string, shouldStart: boolean) => {
  const { target, suffix } = parseStatisticValue(value);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldStart) {
      return;
    }

    let animationFrameId = 0;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const progress = Math.min((currentTime - startTime) / counterDuration, 1);
      setCount(Math.round(target * easeOutCubic(progress)));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [shouldStart, target]);

  return `${indianNumberFormatter.format(count)}${suffix}`;
};

const StatisticValue = ({ value, shouldStart }: { value: string; shouldStart: boolean }) => {
  const animatedValue = useStatisticCounter(value, shouldStart);

  return <h3 className="statistics-value">{animatedValue}</h3>;
};

const Statistics = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [hasEnteredViewport, setHasEnteredViewport] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section || hasEnteredViewport) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasEnteredViewport(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, [hasEnteredViewport]);

  return (
    <section ref={sectionRef} className="statistics">
      <div className="statistics-container">
        <div className="flex flex-direction-column flex-align-center statistics-header">
          <p className="statistics-unit">UNIT OF</p>

          <h2 className="statistics-title">
            Sri Adichunchanagiri Shikshana Trust (R)
          </h2>

          <span className="statistics-underline" />
        </div>

        <div className="statistics-grid">
          {statistics.map((item) => (
            <article key={item.id} className="statistics-card">
              <StatisticValue value={item.value} shouldStart={hasEnteredViewport} />

              <p className="statistics-label">{item.label}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;