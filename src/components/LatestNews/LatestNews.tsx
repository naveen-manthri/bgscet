import { useEffect } from "react";
import { Link } from "react-router-dom";
import { latestNewsSections } from "../../data/latestNewsData";
import type { LatestNewsProps } from "../../types/latestNews";
import "./LatestNews.css";

function LatestNews({ isOpen, onClose }: LatestNewsProps) {
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => { if (event.key === "Escape") onClose(); };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;
  return (
    <div className="latest-news__overlay" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}>
      <section className="latest-news__dialog" role="dialog" aria-modal="true" aria-labelledby="latest-news-title">
        <button className="latest-news__close" type="button" aria-label="Close latest news" onClick={onClose}>×</button>
        <header className="latest-news__header">
          <span className="latest-news__eyebrow">BGSCET Updates</span>
          <h2 id="latest-news-title">Latest News</h2>
        </header>
        <div className="latest-news__content">
          {latestNewsSections.map((section) => (
            <section className="latest-news__section" key={section.title}>
              <h3>{section.title}</h3>
              <ul>{section.items.map((item) => (
                <li key={item.text}>
                  {item.href && item.internal ? (
                    <Link to={item.href} onClick={onClose}>{item.text}</Link>
                  ) : item.href ? (
                    <a href={item.href} target="_blank" rel="noreferrer">{item.text}</a>
                  ) : (
                    <span>{item.text}</span>
                  )}
                </li>
              ))}</ul>
            </section>
          ))}
        </div>
      </section>
    </div>
  );
}

export default LatestNews;
