import { useEffect } from "react";
import { Link } from "react-router-dom";
import ImageCard from "../common/imageCards/imageCard";
import { latestNewsSections } from "../../data/latestNewsData";
import type { LatestNewsItem, LatestNewsProps } from "../../types/latestNews";
import "./LatestNews.css";

const latestNewsImageItems = latestNewsSections
  .flatMap((section) => section.items)
  .filter((item): item is LatestNewsItem & { href: string; image: true } => (
    Boolean(item.image && item.href)
  ));

const latestNewsImages = latestNewsImageItems.map((item, index) => ({
  id: index,
  title: item.text,
  image: item.href,
  alt: item.text,
}));

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
                <li className={item.image ? "latest-news__item--image" : undefined} key={item.text}>
                  {item.image && item.href && (
                    <ImageCard
                      title=""
                      data={latestNewsImages.filter((image) => image.image === item.href)}
                      lightboxData={latestNewsImages}
                      showHeading={false}
                      showDetails={false}
                      className="latest-news__image-trigger"
                      triggerLabel={item.text}
                    />
                  )}
                  {!item.image && item.href && item.internal ? (
                    <Link to={item.href} onClick={onClose}>{item.text}</Link>
                  ) : !item.image && item.href ? (
                    <a href={item.href} target="_blank" rel="noreferrer">{item.text}</a>
                  ) : !item.image ? (
                    <span>{item.text}</span>
                  ) : null}
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
