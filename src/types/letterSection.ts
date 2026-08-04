export interface LetterItem {
  title: string;
  pdf: string;
}

export interface LetterSection {
  heading: string;
  items: LetterItem[];
}

export interface LetterPageData {
  title: string;
  sections: LetterSection[];
}