

import ImageCard from "../../../common/imageCards/imageCard";
import type { DepartmentEvent } from "../../../../types/ugprograms";

interface EventsProps {
  title: string;
  data: DepartmentEvent[];
}

const Events = ({ title, data }: EventsProps) => <ImageCard title={title} data={data} />;

export default Events;