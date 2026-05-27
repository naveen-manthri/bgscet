import PageBanner from '../components/common/PageBanner';
import ContactForm from '../components/reusable/ContactForm';

function ContactPage() {
  return (
    <>
      <PageBanner
        title="Contact Us"
        subtitle="We are Here to Help You with Admissions and Academic Queries"
        backgroundImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=80"
      />

      <section className="section-space">
        <div className="container">
          <div className="row g-4 g-lg-5">
            <div className="col-lg-7">
              <ContactForm />
            </div>
            <div className="col-lg-5">
              <div className="content-card h-100">
                <h3 className="mb-3">Reach Us</h3>
                <ul className="footer-contact list-unstyled mb-4">
                  <li>
                    <i className="bi bi-geo-alt-fill" /> BGS College of Engineering & Technology,
                    Kengeri, Bengaluru, Karnataka - 560060
                  </li>
                  <li>
                    <i className="bi bi-telephone-fill" /> +91 80 1234 5678
                  </li>
                  <li>
                    <i className="bi bi-envelope-fill" /> info@bgscet.edu.in
                  </li>
                </ul>

                <div className="map-placeholder mb-4">
                  <i className="bi bi-geo-alt-fill" />
                  <p className="mb-0">Google Map Placeholder</p>
                </div>

                <h4 className="h6 mb-3">Follow Us</h4>
                <div className="social-links d-flex gap-2">
                  <a href="#" aria-label="Facebook"><i className="bi bi-facebook" /></a>
                  <a href="#" aria-label="Instagram"><i className="bi bi-instagram" /></a>
                  <a href="#" aria-label="LinkedIn"><i className="bi bi-linkedin" /></a>
                  <a href="#" aria-label="YouTube"><i className="bi bi-youtube" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactPage;
