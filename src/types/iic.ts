export interface IICContent {
  type: "paragraph" | "list";
  data: string[];
}

export interface IICSection {
  title: string;
  content: IICContent[];
}

export interface IICData {
  pageTitle: string;
  sections: IICSection[];
}