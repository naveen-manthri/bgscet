import { Link } from 'react-router-dom';

function ThankYouPage() {
  return (
    <section className="section-space text-center">
      <div className="container">
        <h1 className="display-5 fw-bold mb-3">Thank You!</h1>
        <p className="lead mb-4">Your form has been submitted successfully. Our team will get back to you shortly.</p>
        <Link to="/" className="btn btn-brand-primary">
          Back to Home
        </Link>
      </div>
    </section>
  );
}

export default ThankYouPage;
