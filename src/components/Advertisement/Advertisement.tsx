import "./Advertisement.css";
import { advertisementItems } from "../../data/advertisementData";

const Advertisement: React.FC = () => {
  const repeatedItems = [...advertisementItems, ...advertisementItems];

  return (
    <div className="advertisement" aria-label="College advertisement">
      <div className="advertisement__track">
        {repeatedItems.map((item, index) => (
          <span key={`${item.id}-${index}`} className="advertisement__item">
            {item.text}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Advertisement;