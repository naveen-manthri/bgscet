import type { DepartmentEvent } from '../types/ugprograms';
import youthRedCrossCommittee from '../assets/images/yrclub/Youth-Red-Cross-Committe.jpeg';
import worldRedCrossDay from '../assets/images/yrclub/World-Red.jpeg';
import fireCamp from '../assets/images/yrclub/World-Red.jpeg';
import rotaryBloodCamp from '../assets/images/yrclub/Rotary-Blood.jpeg';
import healthCheckupCamp from '../assets/images/yrclub/HEALTH-CHECKUP.jpg';
import studentIndicationProgram from '../assets/images/yrclub/Student-Indication.jpeg';

export const yrcClubEvents: DepartmentEvent[] = [
  {
    id: 1,
    title: 'Youth Red Cross Committee',
    image: youthRedCrossCommittee,
    alt: 'Youth Red Cross Committee',
  },
  {
    id: 2,
    title: 'World Red Cross Day 2025',
    image: worldRedCrossDay,
    alt: 'World Red Cross Day 2025',
  },
  {
    id: 3,
    title: 'FIRE CAMP 2025',
    image: fireCamp,
    alt: 'FIRE CAMP 2025',
  },
  {
    id: 4,
    title: 'Rotary Blood camp 2024',
    image: rotaryBloodCamp,
    alt: 'Rotary Blood camp 2024',
  },
  {
    id: 5,
    title: 'HEALTH CHECKUP CAMP',
    image: healthCheckupCamp,
    alt: 'HEALTH CHECKUP CAMP',
  },
  {
    id: 6,
    title: 'Student Indication Program - Health Checkup Drive',
    image: studentIndicationProgram,
    alt: 'Student Indication Program - Health Checkup Drive',
  },
];

export default yrcClubEvents;
