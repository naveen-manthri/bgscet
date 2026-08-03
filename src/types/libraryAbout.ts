export interface LibraryPoint {
  id: number;
  title: string;
  description: string;
}

export interface LibraryAboutData {
  title: string;
  heading: string;
  introduction: string;
  points: LibraryPoint[];
  conclusion: string;
  image: string;
}