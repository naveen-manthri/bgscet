// import PageBanner from '../components/common/PageBanner';
import BannerSection from '../components/BannerSection/BannerSection';
import VisitCampus from '../components/VisitCampus/VisitCampus';
import Advertisement from '../components/Advertisement/Advertisement';
import ContactEnquiry from '../components/ContactEnquiry/ContactEnquiry';
import ContactBanner from '../assets/images/banner/contact.png';
// import ContactForm from '../components/reusable/ContactForm';

function ContactPage() {
  return (
    <div className='contact-page'>
      <BannerSection image={ContactBanner} title='Contact Us' />
      <Advertisement />
      <ContactEnquiry />
      <VisitCampus />
    </div>
  );
}

export default ContactPage;
