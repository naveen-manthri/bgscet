export interface LetterItem {
  title: string;
  pdf: string;
}

export interface LetterGroup {
  title: string;
  items: LetterItem[];
}

export interface LetterSection {
  heading: string;
  items?: LetterItem[];
  groups?: LetterGroup[];
}

export interface LetterPageData {
  title: string;
  sections: LetterSection[];
}
