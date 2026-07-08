// src/data/academicProgramsData.ts

import mechanicalEngineering from '../assets/images/academic/mechanical-engineering.jpg';
import electronicsEngineering from '../assets/images/academic/electronics-engineering.jpg';
import computerScienceEngineering from '../assets/images/academic/computer-science.jpg';
import civilEngineering from '../assets/images/academic/civil-engineering.jpg';
import artificialIntelligence from '../assets/images/academic/artificial-intelligence.jpg';
import mba from '../assets/images/academic/mba.jpg';

export interface AcademicProgram {
  id: number;
  title: string;
  image: string;
  slug: string;
}

export const academicPrograms: AcademicProgram[] = [
  {
    id: 1,
    title: 'Mechanical Engineering',
    image: mechanicalEngineering,
    slug: 'mechanical-engineering',
  },
  {
    id: 2,
    title: 'Electronics & Communication',
    image: electronicsEngineering,
    slug: 'electronics-communication',
  },
  {
    id: 3,
    title: 'Computer Science Engineering',
    image: computerScienceEngineering,
    slug: 'computer-science-engineering',
  },
  {
    id: 4,
    title: 'Civil Engineering',
    image: civilEngineering,
    slug: 'civil-engineering',
  },
  {
    id: 5,
    title: 'Artificial Intelligence & Machine Learning',
    image: artificialIntelligence,
    slug: 'artificial-intelligence-machine-learning',
  },
  {
    id: 6,
    title: 'Master of Business Administration',
    image: mba,
    slug: 'master-of-business-administration',
  },
];
