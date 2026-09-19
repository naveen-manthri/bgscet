export interface NumberedListItem {
  label: string;
  href?: string;
}

export type NumberedListItemValue = string | NumberedListItem;

export interface NumberedListData {
  title?: string;
  items: NumberedListItemValue[];
}
