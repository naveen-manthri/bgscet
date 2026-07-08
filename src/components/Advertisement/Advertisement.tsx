import "./Advertisement.css";
import { advertisementData } from "../../data/advertisementData";

const Advertisement: React.FC = () => {
  return (
    <p className="advertisement">
      {advertisementData.text}
    </p>
  );
};

export default Advertisement;