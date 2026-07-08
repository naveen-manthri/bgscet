// src/data/pastEventsData.ts

import eventOne from '../assets/images/past-events/event-01.jpg';
import eventTwo from '../assets/images/past-events/event-02.jpg';
import eventThree from '../assets/images/past-events/event-03.jpg';

export interface PastEvent {
  id: number;
  title: string;
  image: string;
  alt: string;
}

export const pastEvents: PastEvent[] = [
  {
    id: 1,
    title: 'Annual Cultural Fest',
    image: eventOne,
    alt: 'Students participating in Annual Cultural Fest',
  },
  {
    id: 2,
    title: 'Technical Symposium',
    image: eventTwo,
    alt: 'Students presenting technical projects',
  },
  {
    id: 3,
    title: 'College Celebration',
    image: eventThree,
    alt: 'Students enjoying college celebration',
  },
];