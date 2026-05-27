export interface Department {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  icon: string;
  intake: number;
  description: string;
  overview: string;
  labs: string[];
  facilities: string[];
  careers: string[];
  color: string;
  image: string;
}

export const departments: Department[] = [
  {
    id: 'cse',
    slug: 'cse',
    name: 'Computer Science & Engineering',
    shortName: 'CSE',
    icon: 'bi-cpu-fill',
    intake: 180,
    color: '#0d6efd',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80',
    description: 'Pioneering innovation in computing, software development, and emerging technologies.',
    overview:
      'The Department of Computer Science & Engineering offers a comprehensive curriculum designed to equip students with strong theoretical foundations and practical skills. The department focuses on software engineering, algorithms, data structures, databases, networking, and emerging technologies like cloud computing and cybersecurity.',
    labs: [
      'Advanced Programming Lab',
      'Data Science & Analytics Lab',
      'Networking & Security Lab',
      'Cloud Computing Lab',
      'Project Development Lab',
    ],
    facilities: [
      'High-performance computing systems',
      'Industry-standard IDEs and tools',
      'Cisco networking equipment',
      '24/7 internet connectivity',
      'Smart classrooms',
    ],
    careers: [
      'Software Engineer',
      'Full Stack Developer',
      'Data Analyst',
      'Cloud Architect',
      'Cybersecurity Specialist',
      'System Analyst',
    ],
  },
  {
    id: 'aiml',
    slug: 'aiml',
    name: 'Artificial Intelligence & Machine Learning',
    shortName: 'AI & ML',
    icon: 'bi-robot',
    intake: 60,
    color: '#6610f2',
    image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80',
    description: 'Shaping the future through intelligent systems, neural networks, and deep learning.',
    overview:
      'The AI & ML department trains students in cutting-edge artificial intelligence techniques including machine learning, deep learning, natural language processing, and computer vision. Students work on real-world AI projects and research initiatives.',
    labs: [
      'Deep Learning Lab',
      'NLP Research Lab',
      'Computer Vision Lab',
      'Robotics & Automation Lab',
      'GPU Computing Lab',
    ],
    facilities: [
      'NVIDIA GPU Workstations',
      'TensorFlow & PyTorch frameworks',
      'Robotics kits and drones',
      'AR/VR development kits',
      'AI research servers',
    ],
    careers: [
      'ML Engineer',
      'AI Researcher',
      'NLP Specialist',
      'Computer Vision Engineer',
      'Data Scientist',
      'AI Product Manager',
    ],
  },
  {
    id: 'aids',
    slug: 'aids',
    name: 'Artificial Intelligence & Data Science',
    shortName: 'AI & DS',
    icon: 'bi-graph-up-arrow',
    intake: 60,
    color: '#20c997',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    description: 'Transforming data into actionable insights with AI-powered analytics.',
    overview:
      'AI & Data Science combines statistical analysis, machine learning, and business intelligence to extract valuable insights from massive datasets. Students learn data engineering, visualization, predictive modeling, and big data technologies.',
    labs: [
      'Big Data Analytics Lab',
      'Business Intelligence Lab',
      'Data Visualization Lab',
      'Statistical Computing Lab',
      'Industry Project Lab',
    ],
    facilities: [
      'Hadoop & Spark clusters',
      'Tableau & Power BI licenses',
      'R and Python computing',
      'Cloud analytics platforms',
      'Data warehousing systems',
    ],
    careers: [
      'Data Scientist',
      'Business Analyst',
      'Data Engineer',
      'Analytics Manager',
      'BI Developer',
      'Research Analyst',
    ],
  },
  {
    id: 'ece',
    slug: 'ece',
    name: 'Electronics & Communication Engineering',
    shortName: 'ECE',
    icon: 'bi-motherboard-fill',
    intake: 120,
    color: '#fd7e14',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80',
    description: 'Connecting the world through advanced electronics and communication systems.',
    overview:
      'The ECE department covers analog and digital electronics, VLSI design, signal processing, wireless communications, and embedded systems. Students gain hands-on experience with state-of-the-art equipment and industry-standard design tools.',
    labs: [
      'VLSI Design Lab',
      'Embedded Systems Lab',
      'Signal Processing Lab',
      'RF & Microwave Lab',
      'IoT & Sensor Lab',
    ],
    facilities: [
      'Advanced oscilloscopes and analyzers',
      'FPGA development boards',
      'Cadence EDA tools',
      'Wireless communication testbed',
      'PCB fabrication facility',
    ],
    careers: [
      'VLSI Design Engineer',
      'Embedded Systems Engineer',
      'RF Engineer',
      'IoT Developer',
      'Telecom Engineer',
      'Hardware Designer',
    ],
  },
  {
    id: 'mech',
    slug: 'mech',
    name: 'Mechanical Engineering',
    shortName: 'Mechanical',
    icon: 'bi-gear-wide-connected',
    intake: 120,
    color: '#dc3545',
    image: 'https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?w=800&q=80',
    description: 'Engineering excellence through design, manufacturing, and thermal sciences.',
    overview:
      'Mechanical Engineering at BGSCET provides a strong foundation in thermodynamics, fluid mechanics, machine design, manufacturing processes, and CAD/CAM. The department emphasizes hands-on learning through industry-connected projects and advanced workshops.',
    labs: [
      'CAD/CAM Lab',
      'Fluid Mechanics Lab',
      'Thermodynamics Lab',
      'Material Testing Lab',
      'CNC Machining Lab',
    ],
    facilities: [
      'CNC machines and 3D printers',
      'ANSYS and SolidWorks software',
      'Hydraulics test rig',
      'Universal testing machine',
      'Workshop with precision tools',
    ],
    careers: [
      'Design Engineer',
      'Manufacturing Engineer',
      'Thermal Engineer',
      'Automotive Engineer',
      'Product Development Engineer',
      'Project Manager',
    ],
  },
  {
    id: 'civil',
    slug: 'civil',
    name: 'Civil Engineering',
    shortName: 'Civil',
    icon: 'bi-building',
    intake: 60,
    color: '#198754',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80',
    description: 'Building the future with sustainable infrastructure and smart construction.',
    overview:
      'The Civil Engineering department trains students in structural engineering, geotechnical engineering, environmental engineering, transportation engineering, and construction management. Strong industry linkages ensure practical exposure and internship opportunities.',
    labs: [
      'Structural Engineering Lab',
      'Geotechnical Lab',
      'Environmental Engineering Lab',
      'Surveying Lab',
      'Concrete Technology Lab',
    ],
    facilities: [
      'AutoCAD and STAAD Pro',
      'Total station and GPS',
      'Concrete testing equipment',
      'Soil testing apparatus',
      'Scale models and drawing studio',
    ],
    careers: [
      'Structural Engineer',
      'Site Engineer',
      'Urban Planner',
      'Environmental Engineer',
      'Project Manager',
      'Government Services (PWD, BBMP)',
    ],
  },
];
