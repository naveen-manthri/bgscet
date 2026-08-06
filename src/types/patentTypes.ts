export interface Patent {
  id: number;
  title: string;
  inventor: string;
  applicationNo: string;
  status: string;
}

export interface PatentDesign {
  id: number;
  department: string;
  patentName: string;
  country: string;
  applicationNo: string;
  holder: string;
}