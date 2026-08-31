export interface NavItem {
  label: string;
  path: string;
  children?: NavItem[];
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
    path: '/ug-programs',
    children: [
      { label: 'CSE', path: '/ug-programs/cse' },
      { label: 'ISE', path: '/ug-programs/ise' },
      { label: 'AIML', path: '/ug-programs/aiml' },
      { label: 'AI & DS', path: '/ug-programs/aids' },
      { label: 'CSD', path: '/ug-programs/csd' },
      {
        label: 'Applied Sciences',
        path: '/departments/applied-sciences',
        children: [
          { label: 'Mechanical Engineering', path: '/ug-programs/mech' },
          { label: 'Department of Physics', path: '/ug-programs/physics' },
          { label: 'Department of Chemistry', path: '/ug-programs/chemistry' },
          { label: 'Department of Mathematics', path: '/ug-programs/mathematics' },
        ],
      },
      // { label: 'Civil', path: '/departments/civil' },
    ],
  },
  {
    label: 'MBA',
    path: 'https://mba.bgscet.ac.in/',
    children: [
      // { label: 'Program Overview', path: '/about#vision' },
      // { label: 'Faculty', path: '/about#principal' },
      // { label: 'Research', path: '/about#governing' },
    ],
  },
  {
    label: 'Facilities',
    path: '/facilities',
    children: [
      { label: 'Library', path: '/facilities/library' },
      { label: 'Auditorium', path: '/facilities/auditorium' },
      { label: 'Board Room', path: '/facilities/board-room' },
      { label: 'Digital Classroom', path: '/facilities/digital-classroom' },
      { label: 'Seminar Hall', path: '/facilities/seminar-hall' },
      { label: 'Hostel', path: '/facilities/hostel' },
      { label: 'Physical Education & Sports', path: '/facilities/physical-education-sports' },
    ],
  },
  { label: 'Contact us', path: '/contact' },
  {
    label: 'Quick Links',
    path: '/quicklinks',
    children: [
      { label: 'AICTE Approval Letters', path: '/quick-links/aicte-approval-letters' },
      { label: 'VTU Approval Letters', path: '/quick-links/vtu-approval-letters' },
      { label: 'Committees', path: '/quick-links/committees' },
      { label: 'Careers', path: '/careers' },
      {label: 'Industry Institute Cell', path:'/pdfs/quicklinks/Industry-Inst-IT-Cell.pdf'},
      {label:'Institution Innovation Cell', path:'/pdfs/quicklinks/IIC-BGSCET.pdf'},
    ],
  },
  {
    label: 'Conference-2025',
    path: '/icwite-2025',
    children: [
      { label: 'ICWITE 2025', path: '/icwite-2025' },
      { label: 'ERCICA-2024', path: '/conference-2024' },
      // {label: 'Careers', path:'/careers'},
    ],
  },
  {
    label: 'Student Corner',
    path: '/placements',
    children: [
      // { label: 'DHI Login', path: 'https://auth.dhi-edu.com/auth/realms/bgsgroup/protocol/openid-connect/auth?client_id=bgsgroup_bgscet&redirect_uri=https%3A%2F%2Fbgsgroup.dhi-edu.com%2Fbgsgroup_bgscet%2F%23%2Ffaculty%2Fdashboard&state=0f22a022-5514-4a14-85f5-47968b05fbd4&response_mode=fragment&response_type=code&scope=openid&nonce=4924ddf6-a781-47e2-86ad-5bb91085cbef&code_challenge=r1i5lo-KB5-i10e1h2UUqPkjPtWpiO_H6uYL75GQIrk&code_challenge_method=S256' },
      { label: 'Student Material', path: '/student-material' },
      { label: 'NSS', path: '/student-life/nss' },
      {
        label: 'Student Club/Cell',
        path: '/student-club-cell',
        children: [
          { label: 'SC-ST Cell', path: '/student-club-cell/sc-st-cell' },
          { label: 'Grievance Redressal Cell', path: '/student-club-cell/grievance-redressal-cell' },
          { label: 'Internal Complaint Committee', path: '/pdfs/studentclubs/CICC_BGSCET.pdf' },
          { label: 'Anti Ragging Committee', path: '/student-club-cell/anti-ragging-committee' },
          { label: 'Mentor & Counselling', path: '/pdfs/studentclubs/mentour.pdf' },
        ],
      },
      {
        label: 'DHI Login',
        path: 'https://auth.dhi-edu.com/auth/realms/bgsgroup/protocol/openid-connect/auth?client_id=bgsgroup_bgscet&redirect_uri=https%3A%2F%2Fbgsgroup.dhi-edu.com%2Fbgsgroup_bgscet%2F%23%2Ffaculty%2Fdashboard&state=0f22a022-5514-4a14-85f5-47968b05fbd4&response_mode=fragment&response_type=code&scope=openid&nonce=4924ddf6-a781-47e2-86ad-5bb91085cbef&code_challenge=r1i5lo-KB5-i10e1h2UUqPkjPtWpiO_H6uYL75GQIrk&code_challenge_method=S256',
      },
      {
        label: 'Syllabus',
        path: 'https://vtu.ac.in/b-e-scheme-syllabus/',
      },
    ],
  },
  {
    label: 'Placement',
    path: '/career-development',
    children: [
      {label: 'Career Development and Corporate Affairs’ Center', path: '/career-development'},
      {label: 'Internship & Employment', path: '/internship-employment'},
      {label: 'Training', path: '/training'},
      { label: 'Staff Details', path: '/staff-details' },
      { label: 'Corporate Lecture Series', path: '/corporate-lecture-series' },
      { label: 'Global connect cell', path: '/global-connect-cell' },
    ],
  },
  {
    label: 'Research',
    path: '/about',
    children: [
      { label: 'IP Cell', path: '/research/ipr-cell' },
      { label: 'IIC', path: '/research/iic' },
      {label: 'Patents', path: 'research/patents'},
    ],
  },
  { label: 'Advaya 2.0-2k26', path: '/advaya-2-0-2k26' },
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
