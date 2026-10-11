import { directorData } from "./data";
import LeadershipMessage from "../reusable/LeadershipMessage";

const Director = () => {
  return (
    <LeadershipMessage title="About Director" variant="director" data={directorData} />
  );
};

export default Director;
