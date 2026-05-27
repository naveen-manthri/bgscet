export interface Stat {
  id: number;
  icon: string;
  value: string;
  label: string;
  suffix?: string;
}

export const stats: Stat[] = [
  { id: 1, icon: 'bi-award-fill', value: '95', suffix: '%', label: 'Placement Rate' },
  { id: 2, icon: 'bi-trophy-fill', value: '12', suffix: '+', label: 'University Ranks' },
  { id: 3, icon: 'bi-people-fill', value: '4500', suffix: '+', label: 'Students Enrolled' },
  { id: 4, icon: 'bi-building-fill', value: '150', suffix: '+', label: 'Top Recruiters' },
  { id: 5, icon: 'bi-mortarboard-fill', value: '200', suffix: '+', label: 'Faculty Strength' },
  { id: 6, icon: 'bi-journal-richtext', value: '80', suffix: '+', label: 'Research Projects' },
];
