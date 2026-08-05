import CareerHero from '../components/career/career';
import VisitCampus from '../components/VisitCampus/VisitCampus';
import { careerHeroData } from '../data/career';

function CareerPage() {
  return (
    <>
      <CareerHero data={careerHeroData} />
      <VisitCampus />
    </>
  );
}

export default CareerPage;
