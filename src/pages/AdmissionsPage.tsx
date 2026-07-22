// import AcademicEligibility from '../components/AcademicEligibility/AcademicEligibility';
import AdmissionSection from '../components/admissioncontent/AdmissionSection/AdmissionSection';
import Advertisement from '../components/Advertisement/Advertisement';
import BannerSection from '../components/BannerSection/BannerSection';
import Statistics from '../components/Statistics/Statistics';
import VisitCampus from '../components/VisitCampus/VisitCampus';
import AcademicEligibilitySection from '../components/AcademicEligibilitySection/AcademicEligibilitySection';
import AdmissionBanner from '../assets/images/banner/admission-banner.png';


function AdmissionsPage() {
  return (
    <>
      <BannerSection
        image={AdmissionBanner}
        title="Admissions"
        />
      <Advertisement />
      <AdmissionSection />
      <Statistics />
      <AcademicEligibilitySection />
      <VisitCampus />
    </>
  );
}

export default AdmissionsPage;
