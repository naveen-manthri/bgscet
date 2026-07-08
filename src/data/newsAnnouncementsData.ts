// src/data/newsAnnouncementsData.ts

import newsOne from '../assets/images/news-events-announcements/news-01.jpg';
import newsTwo from '../assets/images/news-events-announcements/news-02.jpg';
import newsThree from '../assets/images/news-events-announcements/news-03.jpg';

export interface NewsAnnouncement {
  id: number;
  title: string;
  image: string;
  alt: string;
}

export const newsAnnouncements: NewsAnnouncement[] = [
  {
    id: 1,
    title: 'International Conference',
    image: newsOne,
    alt: 'International conference at BGSCET',
  },
  {
    id: 2,
    title: 'Placement Drive',
    image: newsTwo,
    alt: 'Campus placement drive',
  },
  {
    id: 3,
    title: 'Student Achievement',
    image: newsThree,
    alt: 'Students receiving awards',
  },
];