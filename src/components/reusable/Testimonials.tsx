import { testimonials } from '../../data/homeData';
import SectionHeading from '../common/SectionHeading';

function Testimonials() {
  return (
    <section className="testimonials section-space bg-soft">
      <div className="container">
        <SectionHeading
          eyebrow="Student Voices"
          title="What Our Alumni Say"
          subtitle="Success stories from graduates who are now excelling in top organizations across the globe."
          center
        />

        <div className="row g-4 mt-1">
          {testimonials.map((item) => (
            <div className="col-md-6 col-lg-4" key={item.id}>
              <div className="testimonial-card h-100">
                <div className="d-flex align-items-center gap-3 mb-3">
                  <img src={item.image} alt={item.name} className="testimonial-avatar" loading="lazy" />
                  <div>
                    <h4 className="mb-1">{item.name}</h4>
                    <p className="mb-0 text-muted small">{item.role}</p>
                  </div>
                </div>
                <p className="mb-0">“{item.quote}”</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
