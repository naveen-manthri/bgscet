import AcademicEligibility from '../components/AcademicEligibility/AcademicEligibility';
import AdmissionSection from '../components/AdmissionSection/AdmissionSection';
import Advertisement from '../components/Advertisement/Advertisement';
import BannerSection from '../components/BannerSection/BannerSection';
import CampusPlacements from '../components/CampusPlacements/CampusPlacements';
import Statistics from '../components/Statistics/Statistics';
import StudentTestimonials from '../components/StudentTestimonials/StudentTestimonials';
import VisitCampus from '../components/VisitCampus/VisitCampus';

function AdmissionsPage() {
  return (
    <>
      <BannerSection
        image="https://res.cloudinary.com/dxjzq6f0g/image/upload/v1697040913/BGSCET-PROJECT/Images/about-banner_1_1_1_1_1_1_1_1_1_1_1_1_1_1_1_1_1_1_1_1_1_1_1_1_1_1_1_kv7b5k.jpg"
        title="Admissions"
        whatsappLink="https://wa.me/919900000000"
        />
      <Advertisement />
      <AdmissionSection />
      <Statistics />
      <AcademicEligibility />
      <CampusPlacements />
      <StudentTestimonials />
      <VisitCampus />
    </>
  );
}

export default AdmissionsPage;
