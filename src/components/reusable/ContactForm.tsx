import { useState } from 'react';
import type { FormEvent } from 'react';

function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="contact-form-card">
      <h3 className="mb-3">Send Us a Message</h3>
      <p className="text-muted mb-4">
        Our admissions and support team will get back to you within 24 hours.
      </p>

      <form onSubmit={handleSubmit}>
        <div className="row g-3">
          <div className="col-md-6">
            <input type="text" className="form-control" placeholder="Your Name" required />
          </div>
          <div className="col-md-6">
            <input type="email" className="form-control" placeholder="Your Email" required />
          </div>
          <div className="col-md-6">
            <input type="tel" className="form-control" placeholder="Phone Number" required />
          </div>
          <div className="col-md-6">
            <input type="text" className="form-control" placeholder="Subject" required />
          </div>
          <div className="col-12">
            <textarea className="form-control" rows={5} placeholder="Type your message..." required />
          </div>
          <div className="col-12 d-grid d-md-inline-block">
            <button className="btn btn-brand-primary" type="submit">
              Submit Inquiry
            </button>
          </div>
          {submitted && (
            <div className="col-12">
              <div className="alert alert-success mb-0">Thank you! Your message has been submitted.</div>
            </div>
          )}
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
