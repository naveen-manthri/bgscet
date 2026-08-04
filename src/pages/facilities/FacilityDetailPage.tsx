import Advertisement from '../../components/Advertisement/Advertisement';
import BannerSection from '../../components/BannerSection/BannerSection';
import FacilitiesSub from '../../components/facilitiesSub/FacilitiesSub';
import VisitCampus from '../../components/VisitCampus/VisitCampus';
import type { TitleDescription } from '../../types/facilitiesSub';

interface FacilityDetailPageProps {
  data: TitleDescription;
  image: string;
  title: string;
}

function FacilityDetailPage({ data, image, title }: FacilityDetailPageProps) {
  return (
    <>
      <BannerSection image={image} title={title} />
      <Advertisement />
      <FacilitiesSub data={data} />
      <VisitCampus />
    </>
  );
}

export default FacilityDetailPage;
