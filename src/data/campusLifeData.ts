// src/data/campusLifeData.ts

import campusLifeOne from '../assets/images/campus-life/campus-life-01.jpg';
import campusLifeTwo from '../assets/images/campus-life/campus-life-02.jpg';
import campusLifeThree from '../assets/images/campus-life/campus-life-03.jpg';
import campusLifeFour from '../assets/images/campus-life/campus-life-04.jpg';
import campusLifeFive from '../assets/images/campus-life/campus-life-05.jpg';
import campusLifeSix from '../assets/images/campus-life/campus-life-06.jpg';

export interface CampusLife {
  id: number;
  image: string;
  alt: string;
}

export const campusLife: CampusLife[] = [
  {
    id: 1,
    image: campusLifeOne,
    alt: 'Students enjoying campus activities',
  },
  {
    id: 2,
    image: campusLifeTwo,
    alt: 'Students participating in technical events',
  },
  {
    id: 3,
    image: campusLifeThree,
    alt: 'College annual cultural celebrations',
  },
  {
    id: 4,
    image: campusLifeFour,
    alt: 'Students in classroom',
  },
  {
    id: 5,
    image: campusLifeFive,
    alt: 'Sports activities on campus',
  },
  {
    id: 6,
    image: campusLifeSix,
    alt: 'Campus infrastructure',
  },
];