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
        {data.items.map((item, index) => (
          <li key={`${item}-${index}`} className="numbered-list__item">
            {item}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default NumberedList;
