export interface Recruiter {
  id: number;
  name: string;
  logo: string;
}

export interface PlacementStat {
  label: string;
  value: string;
  icon: string;
}

export const placementStats: PlacementStat[] = [
  { label: 'Placement Rate', value: '95%', icon: 'bi-graph-up-arrow' },
  { label: 'Highest Package', value: '42 LPA', icon: 'bi-currency-rupee' },
  { label: 'Average Package', value: '8.5 LPA', icon: 'bi-bar-chart-fill' },
  { label: 'Companies Visited', value: '150+', icon: 'bi-building-fill' },
  { label: 'Students Placed', value: '1200+', icon: 'bi-people-fill' },
  { label: 'Offers in Dream Companies', value: '300+', icon: 'bi-star-fill' },
];

export const recruiters: Recruiter[] = [
  { id: 1, name: 'TCS', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Tata_Consultancy_Services_Logo.svg' },
  { id: 2, name: 'Infosys', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg' },
  { id: 3, name: 'Wipro', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Wipro_Primary_Logo_Color_RGB.svg' },
  { id: 4, name: 'Accenture', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg' },
  { id: 5, name: 'IBM', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg' },
  { id: 6, name: 'Amazon', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
  { id: 7, name: 'Microsoft', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg' },
  { id: 8, name: 'Google', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg' },
  { id: 9, name: 'Capgemini', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Cap_gemini_logo.svg' },
  { id: 10, name: 'Cognizant', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/36/Cognizant_logo_2022.svg' },
  { id: 11, name: 'HCL', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b6/HCL_Technologies_official_logo.svg' },
  { id: 12, name: 'Tech Mahindra', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f2/Tech_Mahindra_New_Logo.svg' },
];
