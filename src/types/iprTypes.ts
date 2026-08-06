export interface IPRImage {
  id: number;
  image: string;
  alt: string;
}

export interface IPRSection {
  title: string;
  description: string;
  images: IPRImage[];
}