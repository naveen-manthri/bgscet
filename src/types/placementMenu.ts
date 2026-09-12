import type { DepartmentEvent } from './ugprograms';

export type PlacementMenuPageType =
  | 'internship-employment'
  | 'training'
  | 'corporate-lecture-series'
  | 'global-connect-cell';

export interface PlacementMenuPageProps {
  type: PlacementMenuPageType;
}

export interface PlacementMenuContent {
  title: string;
  data: DepartmentEvent[];
}
