export interface NavItem {
  label: string;
  path: string;
  children?: { label: string; path: string }[];
}

export const navItems: NavItem[] = [
  { label: 'Home', path: '/' },
  {
    label: 'About',
    path: '/about',
    // children: [
    //   { label: 'Vision & Mission', path: '/about#vision' },
    //   { label: 'Chairman Message', path: '/about#chairman' },
    //   { label: 'Principal Message', path: '/about#principal' },
    //   { label: 'Governing Body', path: '/about#governing' },
    // ],
  },
  {
    label: 'Admissions',
    path: '/admissions',
    // children: [
    //   { label: 'Eligibility', path: '/admissions#eligibility' },
    //   { label: 'Fee Structure', path: '/admissions#fees' },
    //   { label: 'Scholarships', path: '/admissions#scholarships' },
    //   { label: 'Apply Now', path: '/admissions#apply' },
    // ],
  },
  {
    label: 'UG Programs',
    path: '/departments',
    children: [
      { label: 'CSE', path: '/departments/cse' },
      { label: 'AIML', path: '/departments/aiml' },
      { label: 'AI & DS', path: '/departments/aids' },
      { label: 'ECE', path: '/departments/ece' },
      { label: 'Mechanical', path: '/departments/mech' },
      { label: 'Civil', path: '/departments/civil' },
    ],
  },
  {
    label: 'MBA',
    path: '/about',
    children: [
      { label: 'Program Overview', path: '/about#vision' },
      { label: 'Faculty', path: '/about#principal' },
      { label: 'Research', path: '/about#governing' },
    ],
  },
  {
    label: 'Facilities',
    path: '/facilities',
    children: [
      { label: 'Library', path: '/facilities#library' },
      { label: 'Laboratories', path: '/facilities#labs' },
      { label: 'Hostel', path: '/facilities#hostel' },
      { label: 'Transportation', path: '/facilities#transportation' },
    ],
  },
  { label: 'Contact us', path: '/contact' },
  {
    label: 'Quick Links',
    path: '/gallery',
    children: [
      { label: 'Gallery', path: '/gallery' },
      { label: 'Events', path: '/gallery#events' },
      { label: 'News', path: '/gallery#news' },
      { label: 'Downloads', path: '/about#governing' },
    ],
  },
  {
    label: 'Conference-2025',
    path: '/gallery',
    children: [
      { label: 'Highlights', path: '/gallery' },
      { label: 'Speakers', path: '/about#governing' },
    ],
  },
  {
    label: 'Student Corner',
    path: '/placements',
    children: [
      { label: 'Placements', path: '/placements' },
      { label: 'Gallery', path: '/gallery' },
      { label: 'Contact', path: '/contact' },
    ],
  },
  {
    label: 'Placement',
    path: '/placements',
    children: [
      { label: 'Statistics', path: '/placements#stats' },
      { label: 'Recruiters', path: '/placements#recruiters' },
      { label: 'Training', path: '/placements#training' },
    ],
  },
  {
    label: 'Research',
    path: '/about',
    children: [
      { label: 'Projects', path: '/about#governing' },
      { label: 'Publications', path: '/about#chairman' },
    ],
  },
  { label: 'Advaya-2k25', path: '/gallery' },
];

export const announcementItems: string[] = [
  'Admissions Open for 2026-27 - Apply Now!',
  'NAAC Accredited Institution - Grade A',
  'Campus Placements 2025: 95% Placement Rate Achieved',
  'New AI & Data Science Lab Inaugurated',
  'BGSCET Ranked among Top 50 Engineering Colleges in Karnataka',
  'Annual Cultural Fest "SPECTRUM 2026" - Register Now',
  'VTU Examinations Schedule Released - Check Portal',
  'Research Paper Published in IEEE - Congratulations to Faculty',
  'Students Won National Hackathon 2025 - Proud Moment!',
];
