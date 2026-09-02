import ImageCard from '../common/imageCards/imageCard';
import type { DepartmentEvent } from '../../types/ugprograms';

interface YRCClubProps {
  data: DepartmentEvent[];
}

const YRCClub = ({ data }: YRCClubProps) => {
  return (
    <main className="department-cse-events" style={{ padding: '3rem 4rem 0', marginBottom: '2rem' }}>
      <ImageCard title="YRC CLUB Events" data={data} />
    </main>
  );
};

export default YRCClub;
