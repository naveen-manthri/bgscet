export type NumberedListItem = string | { label: string; href?: string };

export interface NumberedListData {
  title?: string;
  items: NumberedListItem[];
}
