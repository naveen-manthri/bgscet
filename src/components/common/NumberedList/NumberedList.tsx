import type { NumberedListData } from "../../../types/numberedList";
import "./NumberedList.css";

interface NumberedListProps {
  data: NumberedListData;
  className?: string;
}

const NumberedList = ({ data, className = "" }: NumberedListProps) => {
  const containerClassName = ["numbered-list", className].filter(Boolean).join(" ");

  return (
    <div className={containerClassName}>
      {data.title && <h3 className="numbered-list__title">{data.title}</h3>}

      <ol className="numbered-list__list">
        {data.items.map((item, index) => {
          const key = typeof item === "string" ? `${item}-${index}` : `${item.label}-${index}`;

          return (
            <li key={key} className="numbered-list__item">
              {typeof item === "string" ? (
                item
              ) : item.href ? (
                <a href={item.href} className="numbered-list__link">
                  {item.label}
                </a>
              ) : (
                item.label
              )}
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default NumberedList;
