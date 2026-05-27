import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <section className="section-space text-center">
      <div className="container">
        <h1 className="display-4 fw-bold mb-3">404</h1>
        <p className="lead mb-4">The page you are looking for was not found.</p>
        <Link to="/" className="btn btn-brand-primary">
          Back to Home
        </Link>
      </div>
    </section>
  );
}

export default NotFoundPage;
