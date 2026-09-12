import corporateLectureSeriesData from './corporateLectureSeries';
import globalConnectCellData from './globalConnectCell';
import internshipEmploymentData from './internshipEmployment';
import trainingData from './training';
import type { PlacementMenuContent, PlacementMenuPageType } from '../../types/placementMenu';

export const placementMenuContent: Record<PlacementMenuPageType, PlacementMenuContent> = {
  'internship-employment': {
    title: 'Internship & Employment',
    data: internshipEmploymentData,
  },
  training: {
    title: 'Progressive Training Program (Competency Enhancement Program)',
    data: trainingData,
  },
  'corporate-lecture-series': {
    title: 'Industry Interaction Session / Tech Talks / Campus To Corporate',
    data: corporateLectureSeriesData,
  },
  'global-connect-cell': {
    title: 'Global Connect Cell',
    data: globalConnectCellData,
  },
};
