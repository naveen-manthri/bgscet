import { principalData } from "./data";
import LeadershipMessage from "../reusable/LeadershipMessage";

const Principal = () => {
  return (
    <LeadershipMessage title="About Principal" variant="principal" data={principalData} />
  );
};

export default Principal;
