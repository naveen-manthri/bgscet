import { FORMSUBMIT_ENDPOINT } from '../../config/formSubmit';
import FormSubmitFields from '../FormSubmitFields/FormSubmitFields';

function ContactForm() {
  return (
    <div className="contact-form-card">
      <h3 className="mb-3">Send Us a Message</h3>
      <p className="text-muted mb-4">
        Our admissions and support team will get back to you within 24 hours.
      </p>

      <form action={FORMSUBMIT_ENDPOINT} method="POST">
        <FormSubmitFields formName="Contact Form" />
        <div className="row g-3">
          <div className="col-md-6">
            <input type="text" name="Name" className="form-control" placeholder="Your Name" required />
          </div>
          <div className="col-md-6">
            <input type="email" name="email" className="form-control" placeholder="Your Email" required />
          </div>
          <div className="col-md-6">
            <input type="tel" name="Phone" className="form-control" placeholder="Phone Number" required />
          </div>
          <div className="col-md-6">
            <input type="text" name="Subject" className="form-control" placeholder="Subject" required />
          </div>
          <div className="col-12">
            <textarea name="Message" className="form-control" rows={5} placeholder="Type your message..." required />
          </div>
          <div className="col-12 d-grid d-md-inline-block">
            <button className="btn btn-brand-primary" type="submit">
              Submit Inquiry
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
