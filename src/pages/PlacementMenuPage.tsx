import ImageCard from '../components/common/imageCards/imageCard';
import VisitCampus from '../components/VisitCampus/VisitCampus';
import corporateLectureSeriesData from '../data/placementMenu/corporateLectureSeries';
import globalConnectCellData from '../data/placementMenu/globalConnectCell';
import internshipEmploymentData from '../data/placementMenu/internshipEmployment';
import trainingData from '../data/placementMenu/training';
import type { DepartmentEvent } from '../types/ugprograms';
import './PlacementMenuPage.css';

type PlacementMenuPageType =
  | 'internship-employment'
  | 'training'
  | 'corporate-lecture-series'
  | 'global-connect-cell';

interface PlacementMenuPageProps {
  type: PlacementMenuPageType;
}

interface PlacementMenuContent {
  title: string;
  data: DepartmentEvent[];
}

const placementMenuContent: Record<PlacementMenuPageType, PlacementMenuContent> = {
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

function PlacementMenuPage({ type }: PlacementMenuPageProps) {
  const { title, data } = placementMenuContent[type];

  return (
    <>
      <main className="placement-menu-page">
        <section className="department-cse-events">
          <ImageCard title={title} data={data} />
        </section>
      </main>
      <VisitCampus />
    </>
  );
}

export default PlacementMenuPage;
