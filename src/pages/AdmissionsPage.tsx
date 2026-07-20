// import AcademicEligibility from '../components/AcademicEligibility/AcademicEligibility';
import AdmissionSection from '../components/AdmissionSection/AdmissionSection';
import Advertisement from '../components/Advertisement/Advertisement';
import BannerSection from '../components/BannerSection/BannerSection';
import Statistics from '../components/Statistics/Statistics';
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
      
      <VisitCampus />
    </>
  );
}

export default AdmissionsPage;
