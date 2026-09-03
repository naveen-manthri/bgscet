import ImageCard from '../common/imageCards/imageCard';
import type { DepartmentEvent } from '../../types/ugprograms';

import healthCheckupImage from '../../assets/images/yrclub/HEALTH-CHECKUP.jpg';
import rotaryBloodImage from '../../assets/images/yrclub/Rotary-Blood.jpeg';
import studentIndicationImage from '../../assets/images/yrclub/Student-Indication.jpeg';
import worldRedImage from '../../assets/images/yrclub/World-Red.jpeg';
import youthRedCrossImage from '../../assets/images/yrclub/Youth-Red-Cross-Committe.jpeg';

const yrcEvents: DepartmentEvent[] = [
  {
    id: 1,
    title: 'Youth Red Cross Committee',
    image: youthRedCrossImage,
    alt: 'Youth Red Cross Committee',
  },
  {
    id: 2,
    title: 'World Red Cross Day 2025',
    image: worldRedImage,
    alt: 'World Red Cross Day 2025',
  },
  {
    id: 3,
    title: 'Rotary Blood camp 2024',
    image: rotaryBloodImage,
    alt: 'Rotary Blood camp 2024',
  },
  {
    id: 4,
    title: 'HEALTH CHECKUP CAMP',
    image: healthCheckupImage,
    alt: 'Health Checkup Camp',
  },
  {
    id: 5,
    title: 'Student Indication Program - Health Checkup Drive',
    image: studentIndicationImage,
    alt: 'Student Indication Program - Health Checkup Drive',
  },
];

const YRCClub = () => {
  return (
    <main className="department-cse-events" style={{ padding: '3rem 4rem 0', marginBottom: '2rem' }}>
      <ImageCard title="Youth Red Cross Club" data={yrcEvents} />
    </main>
  );
};

export default YRCClub;
