import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top py-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-4">
              <div className="d-flex align-items-start gap-3 mb-3">
                <div className="college-logo-placeholder small">
                  <i className="bi bi-mortarboard-fill" />
                </div>
                <div>
                  <h4 className="footer-title mb-1">BGS College of Engineering & Technology</h4>
                  <p className="footer-text mb-0">
                    Nurturing future-ready engineers with academic excellence, innovation, and values.
                  </p>
                </div>
              </div>
              <ul className="footer-contact list-unstyled mb-0">
                <li>
                  <i className="bi bi-geo-alt-fill" /> Kengeri, Bengaluru, Karnataka - 560060
                </li>
                <li>
                  <i className="bi bi-telephone-fill" /> +91 80 1234 5678
                </li>
                <li>
                  <i className="bi bi-envelope-fill" /> admissions@bgscet.edu.in
                </li>
              </ul>
            </div>

            <div className="col-6 col-md-3 col-lg-2">
              <h5 className="footer-heading">Schools</h5>
              <ul className="footer-links list-unstyled mb-0">
                <li><Link to="/departments/cse">School of Computing</Link></li>
                <li><Link to="/departments/ece">School of Electronics</Link></li>
                <li><Link to="/departments/mech">School of Mechanical</Link></li>
                <li><Link to="/departments/civil">School of Civil</Link></li>
              </ul>
            </div>

            <div className="col-6 col-md-3 col-lg-2">
              <h5 className="footer-heading">Colleges</h5>
              <ul className="footer-links list-unstyled mb-0">
                <li><Link to="/about">About BGSCET</Link></li>
                <li><Link to="/facilities">Campus Life</Link></li>
                <li><Link to="/placements">Placements</Link></li>
                <li><Link to="/gallery">Gallery</Link></li>
              </ul>
            </div>

            <div className="col-6 col-md-3 col-lg-2">
              <h5 className="footer-heading">Quick Links</h5>
              <ul className="footer-links list-unstyled mb-0">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">Vision & Mission</Link></li>
                <li><Link to="/departments">Departments</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
              </ul>
            </div>

            <div className="col-6 col-md-3 col-lg-2">
              <h5 className="footer-heading">Admissions</h5>
              <ul className="footer-links list-unstyled mb-0">
                <li><Link to="/admissions#eligibility">Eligibility</Link></li>
                <li><Link to="/admissions#fees">Fee Structure</Link></li>
                <li><Link to="/admissions#scholarships">Scholarships</Link></li>
                <li><Link to="/admissions#apply">Apply Now</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom py-3">
        <div className="container">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-2">
            <p className="mb-0">© 2026 Engineering College. All Rights Reserved.</p>
            <p className="mb-0">Designed & Developed By BGSCET Web Team</p>
            <div className="social-links d-flex gap-2">
              <a href="#" aria-label="Facebook"><i className="bi bi-facebook" /></a>
              <a href="#" aria-label="Instagram"><i className="bi bi-instagram" /></a>
              <a href="#" aria-label="LinkedIn"><i className="bi bi-linkedin" /></a>
              <a href="#" aria-label="YouTube"><i className="bi bi-youtube" /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
