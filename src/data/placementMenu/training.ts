import type { DepartmentEvent } from "../../types/ugprograms";

import event1Image from "../../assets/images/cseevents/event-1.jpg";
import event2Image from "../../assets/images/cseevents/event-2.jpg";


export const trainingData: DepartmentEvent[] = [
  {
    id: 1,
    title: "Workshop on AI",
    image: event1Image,
    alt: "Workshop on AI",
  },
  {
    id: 2,
    title: "Technical Symposium",
    image: event2Image,
    alt: "Technical Symposium",
  },
];

export default trainingData;