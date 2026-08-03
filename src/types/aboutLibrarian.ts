export interface LibrarianMember {
  id: number;
  text: string;
}

export interface LibrarianStaff {
  id: number;
  image: string;
  name: string;
  designation: string;
  qualification: string;
}

export interface AboutLibrarianData {
  title: string;
  paragraphs: string[];
  membersTitle: string;
  members: LibrarianMember[];
  staff: LibrarianStaff[];
}