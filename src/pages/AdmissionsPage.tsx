// import AcademicEligibility from '../components/AcademicEligibility/AcademicEligibility';
import AdmissionSection from '../components/AdmissionSection/AdmissionSection';
import Advertisement from '../components/Advertisement/Advertisement';
import BannerSection from '../components/BannerSection/BannerSection';
import CampusPlacements from '../components/CampusPlacements/CampusPlacements';
import Statistics from '../components/Statistics/Statistics';
import StudentTestimonials from '../components/StudentTestimonials/StudentTestimonials';
import VisitCampus from '../components/VisitCampus/VisitCampus';
import AcademicEligibilitySection from '../components/AcademicEligibilitySection/AcademicEligibilitySection';
import AdmissionBanner from '../assets/images/banner/bgscet-clg.jpg';


function AdmissionsPage() {
  return (
    <>
      <BannerSection
        image={AdmissionBanner}
        title="Admissions"
        whatsappLink="https://wa.me/919900000000"
        />
      <Advertisement />
      <AdmissionSection />
      <Statistics />
      {/* <AcademicEligibility /> */}
      <AcademicEligibilitySection />
      <CampusPlacements />
      <StudentTestimonials />
      <VisitCampus />
    </>
  );
}

export default AdmissionsPage;
