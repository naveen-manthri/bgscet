export interface LatestNewsItem { text: string; href?: string; }
export interface LatestNewsSection { title: string; items: LatestNewsItem[]; }
export interface LatestNewsProps { isOpen: boolean; onClose: () => void; }
