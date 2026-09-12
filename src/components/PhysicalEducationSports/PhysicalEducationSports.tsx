import DepartmentSectionHeading from '../DepartmentSectionHeading/DepartmentSectionHeading';
import { physicalEducationData } from '../../data/physicalEducationData';
import './PhysicalEducationSports.css';

function PhysicalEducationSports() {
  const {
    people,
    message,
    tugOfWarImage,
    achievementImage,
    achievementAlt,
    recognitions,
    annualSportsImages,
  } = physicalEducationData;

  return (
    <main className="physical-education">
      <section className="physical-education__message" aria-labelledby="physical-education-message-title">
        <DepartmentSectionHeading id="physical-education-message-title" title="HOD's Message" className="department-section-heading--medium" />
        <div className="physical-education__message-grid">
          <aside className="physical-education__people" aria-label="Department staff">
            {people.map((person) => (
              <figure key={person.name}>
                <img className={person.className} src={person.image} alt={person.alt} />
                <figcaption>
                  <strong>{person.name}</strong>
                  <span>{person.role}</span>
                </figcaption>
              </figure>
            ))}
          </aside>
          <div className="physical-education__message-content">
            <p>{message}</p>
            <img className="physical-education__tug-of-war" src={tugOfWarImage} alt="Students competing in a tug of war" />
          </div>
        </div>
      </section>

      <section className="physical-education__achievement" aria-label="Sports achievers">
        <img src={achievementImage} alt={achievementAlt} />
        <div className="physical-education__recognitions">
          {recognitions.map((recognition) => (
            <article key={recognition.image}>
              <img src={recognition.image} alt={recognition.alt} />
              <h2>Jai Sri Gurudev</h2>
              <p>{recognition.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="physical-education__annual" aria-labelledby="annual-sports-day-title">
        <h2 id="annual-sports-day-title"><span>Annual</span><em>Sports Day</em></h2>
        <div className="physical-education__sports-gallery">
          {annualSportsImages.map((image, index) => (
            <img
              key={image}
              className={`physical-education__sports-image physical-education__sports-image--${index + 1}`}
              src={image}
              alt={`Annual Sports Day event ${index + 1}`}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default PhysicalEducationSports;
