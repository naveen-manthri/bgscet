export interface GalleryItem {
  id: number;
  title: string;
  category: string;
  image: string;
}

export const galleryCategories = ['All', 'Campus', 'Events', 'Workshops', 'Sports', 'Cultural', 'Convocation'];

export const galleryItems: GalleryItem[] = [
  { id: 1, title: 'Main Campus Building', category: 'Campus', image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80' },
  { id: 2, title: 'Annual Tech Fest 2025', category: 'Events', image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80' },
  { id: 3, title: 'Workshop on IoT', category: 'Workshops', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80' },
  { id: 4, title: 'Inter-College Cricket', category: 'Sports', image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=800&q=80' },
  { id: 5, title: 'Cultural Night Performance', category: 'Cultural', image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80' },
  { id: 6, title: 'Graduation Ceremony 2025', category: 'Convocation', image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80' },
  { id: 7, title: 'Library Reading Hall', category: 'Campus', image: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800&q=80' },
  { id: 8, title: 'Hackathon 2025', category: 'Events', image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80' },
  { id: 9, title: 'AI/ML Workshop', category: 'Workshops', image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80' },
  { id: 10, title: 'Cricket Tournament', category: 'Sports', image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80' },
  { id: 11, title: 'Dance Performance', category: 'Cultural', image: 'https://images.unsplash.com/photo-1547153760-18fc86324498?w=800&q=80' },
  { id: 12, title: 'Convocation Ceremony', category: 'Convocation', image: 'https://images.unsplash.com/photo-1627556704302-624286467c65?w=800&q=80' },
  { id: 13, title: 'Campus Green Zone', category: 'Campus', image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80' },
  { id: 14, title: 'Industry Expert Seminar', category: 'Events', image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&q=80' },
  { id: 15, title: 'Robotics Workshop', category: 'Workshops', image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80' },
  { id: 16, title: 'Basketball Court', category: 'Sports', image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&q=80' },
];
