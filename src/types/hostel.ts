export interface HostelImage {
  id: number;
  src: string;
  alt: string;
}

export interface HostelTableColumn {
  key: string;
  label: string;
}

export interface HostelTableRow {
  [key: string]: string;
}

export interface HostelTable {
  columns: HostelTableColumn[];
  rows: HostelTableRow[];
}

export interface AboutHostelSection {
  title: string;
  images: HostelImage[];
  description: string[];
}

export interface HostelCommitteeSection {
  title: string;
  table: HostelTable;
}



export interface TableData {
  title: string;
  table: HostelTable;
}


export interface BulletSection {
  title: string;
  points: string[];
}

export interface HostelFacilitySection {
  title: string;

  introductoryPoints: string[];

  description: string;

  facilityPoints: string[];
}


export interface HostelData {
  aboutHostel: AboutHostelSection;

  hostelCommittee: HostelCommitteeSection;

  messTimings: TableData;

  hostelCommitteeResponsibilities: BulletSection;

  hostelSOP: BulletSection;

  hostelFacility: HostelFacilitySection;
}
