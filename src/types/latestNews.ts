export interface LatestNewsItem { text: string; href?: string; internal?: boolean; }
export interface LatestNewsSection { title: string; items: LatestNewsItem[]; }
export interface LatestNewsProps { isOpen: boolean; onClose: () => void; }
