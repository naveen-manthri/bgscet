export interface Facility {
  id: number;
  icon: string;
  title: string;
  description: string;
  image: string;
  features: string[];
}

export const facilities: Facility[] = [
  {
    id: 1,
    icon: 'bi-book-fill',
    title: 'Central Library',
    description: 'A fully digitized library with over 50,000 books, journals, e-resources, and research publications.',
    image: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800&q=80',
    features: ['50,000+ Books & Journals', 'Digital E-Library Access', 'IEEE & Springer Journals', '24/7 Study Zone', 'RFID Book Management'],
  },
  {
    id: 2,
    icon: 'bi-pc-display-horizontal',
    title: 'Advanced Laboratories',
    description: 'State-of-the-art laboratories equipped with the latest hardware, software, and research tools.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80',
    features: ['50+ Specialized Labs', 'Industry-grade Equipment', 'GPU Workstations', 'IoT & Robotics Labs', 'Open 7 Days a Week'],
  },
  {
    id: 3,
    icon: 'bi-house-door-fill',
    title: 'Student Hostel',
    description: 'Comfortable, secure, and well-maintained separate hostels for boys and girls with modern amenities.',
    image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800&q=80',
    features: ['Separate Boys & Girls Hostels', 'Wi-Fi Enabled Rooms', '24/7 Security', 'Nutritious Mess Facility', 'Indoor Recreation Area'],
  },
  {
    id: 4,
    icon: 'bi-trophy-fill',
    title: 'Sports Complex',
    description: 'World-class sports infrastructure to nurture athletic talent and promote physical wellbeing.',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80',
    features: ['Cricket Ground', 'Football & Basketball Courts', 'Indoor Badminton Courts', 'Gymnasium & Fitness Center', 'Swimming Pool'],
  },
  {
    id: 5,
    icon: 'bi-bus-front-fill',
    title: 'Transportation',
    description: 'Safe and reliable transportation services covering major routes across Bangalore and surrounding areas.',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&q=80',
    features: ['30+ Bus Routes', 'GPS Tracked Vehicles', 'AC & Non-AC Buses', 'Doorstep Pickup/Drop', 'Female Safety Measures'],
  },
  {
    id: 6,
    icon: 'bi-cup-hot-fill',
    title: 'Cafeteria',
    description: 'Hygienic and spacious cafeteria offering a wide variety of nutritious meals and snacks at affordable rates.',
    image: 'https://images.unsplash.com/photo-1567521464027-f127ff144326?w=800&q=80',
    features: ['Hygienic Food Preparation', 'Multi-cuisine Menu', 'Affordable Pricing', 'Vegetarian & Non-Veg Options', 'Large Seating Capacity'],
  },
  {
    id: 7,
    icon: 'bi-mic-fill',
    title: 'Auditorium',
    description: 'A grand auditorium with 1500+ seating capacity for seminars, cultural events, and convocations.',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
    features: ['1500+ Seating Capacity', 'State-of-the-art AV System', 'AC Infrastructure', 'Professional Stage Lighting', 'Conference Hall'],
  },
  {
    id: 8,
    icon: 'bi-display-fill',
    title: 'Smart Classrooms',
    description: 'Technology-enabled smart classrooms with interactive panels, projectors, and e-learning platforms.',
    image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80',
    features: ['Interactive Smart Boards', 'Video Conferencing', 'Online Learning Integration', 'Ergonomic Furniture', 'Climate Controlled'],
  },
];
