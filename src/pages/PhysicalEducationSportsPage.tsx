import Advertisement from '../components/Advertisement/Advertisement';
import BannerSection from '../components/BannerSection/BannerSection';
import VisitCampus from '../components/VisitCampus/VisitCampus';
import DepartmentSectionHeading from '../components/DepartmentSectionHeading/DepartmentSectionHeading';
import './PhysicalEducationSportsPage.css';
import banner from '../assets/images/physicalEdu/physicalEdu-banner.png';
import hod from '../assets/images/physicalEdu/pe-hod.png';
import instructor from '../assets/images/physicalEdu/Mr-Tharun-Kumar.png';
import winners from '../assets/images/physicalEdu/winner-group.png';
import tugOfWar from '../assets/images/physicalEdu/Tug-of-War1.png';
import chessAward from '../assets/images/physicalEdu/leelajai-chess.png';
import goldMedal from '../assets/images/physicalEdu/jnanasagar-gold-medal.png';
import medalAwards from '../assets/images/physicalEdu/leelajai-rishank-medals.png';
import sports1 from '../assets/images/physicalEdu/sports-1.png';
import sports2 from '../assets/images/physicalEdu/sports-2.png';
import sports3 from '../assets/images/physicalEdu/sports-3.png';
import sports4 from '../assets/images/physicalEdu/sports-4.png';
import sports5 from '../assets/images/physicalEdu/sports-5.png';
import sports6 from '../assets/images/physicalEdu/sports-6.png';
import sports7 from '../assets/images/physicalEdu/sports-7.png';
import sports8 from '../assets/images/physicalEdu/sports-8.png';
import sports9 from '../assets/images/physicalEdu/sports-9.png';
import sports10 from '../assets/images/physicalEdu/sports-10.png';
import sports11 from '../assets/images/physicalEdu/sports-11.png';
import sports12 from '../assets/images/physicalEdu/sports-12.png';

const recognitions = [
  {
    image: chessAward,
    text: 'With the divine blessings of our Poojya Swamiji Sri Sri Sri Paramahamsa Nithyananda Swamiji, we congratulate the winning team from our college at the Leelajai K.C. Chess Championship 2025.',
  },
  {
    image: medalAwards,
    text: 'With the divine blessings of our Poojya Swamiji, we are happy to share that Leelajai Krishna of 1st Year AI & DS secured gold and Rishank Raj of 2nd year AI&ML secured bronze in BGS Kreedotsava organised by SriMata at Srikshetra on 7th March 2025.',
  },
  {
    image: goldMedal,
    text: 'With the divine blessings of our Poojya Swamiji, we are happy to share that Jnanasagar M of 6th ISE secured a gold medal in Triple Jump event in BGS Kreedotsava organised by SriMata at Srikshetra on 8th March 2025.',
  },
];

const annualSportsImages = [
  sports1, sports2, sports3, sports4, sports5, sports6,
  sports7, sports8, sports9, sports10, sports11, sports12,
];

function PhysicalEducationSportsPage() {
  return (
    <>
      <BannerSection image={banner} title="Department Of Physical Education & Sports" />
      <Advertisement />

      <main className="physical-education">
        <section className="physical-education__message" aria-labelledby="physical-education-message-title">
          <DepartmentSectionHeading id="physical-education-message-title" title="HOD's Message" className="department-section-heading--medium" />
          <div className="physical-education__message-grid">
            <aside className="physical-education__people" aria-label="Department staff">
              <figure>
                <img src={hod} alt="Ms. Shruthi K.S., Physical Education Director" />
                <figcaption><strong>Ms. Shruthi K.S.</strong><span>Physical Education Director</span></figcaption>
              </figure>
              <figure>
                <img className="physical-education__instructor" src={instructor} alt="Mr. Tharun Kumar Yadav C., PT Instructor" />
                <figcaption><strong>Mr. Tharun Kumar Yadav C.</strong><span>PT Instructor</span></figcaption>
              </figure>
            </aside>
            <div className="physical-education__message-content">
              <p>I am very glad to lead the Department of Physical Education and Sports at BGSCET. Our department aims at providing the overall development of students by identifying their talents, facilitating sports infrastructure, and providing professional training and guidance to excel in their respective events and competitions. Student participation in sports activities improves mental health, leadership qualities, team management, self-confidence, and discipline. We encourage students to take part in national and international level tournaments. The management of BGSCET provides playground facilities, kit allowances, and special incentives for players.</p>
              
              <img className="physical-education__tug-of-war" src={tugOfWar} alt="Students competing in a tug of war" />
            </div>
          </div>
        </section>

        <section className="physical-education__achievement" aria-label="Sports achievers">
          <img src={winners} alt="BGSCET sports achievers with trophies and medals" />
          <div className="physical-education__recognitions">
            {recognitions.map(({ image, text }) => (
              <article key={image}>
                <img src={image} alt="Sports award presentation" />
                <h2>Jai Sri Gurudev</h2>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="physical-education__annual" aria-labelledby="annual-sports-day-title">
          <h2 id="annual-sports-day-title"><span>Annual</span><em>Sports Day</em></h2>
          <div className="physical-education__sports-gallery">
            {annualSportsImages.map((image, index) => (
              <img key={image} className={`physical-education__sports-image physical-education__sports-image--${index + 1}`} src={image} alt={`Annual Sports Day event ${index + 1}`} />
            ))}
          </div>
        </section>
      </main>
      <VisitCampus />
    </>
  );
}

export default PhysicalEducationSportsPage;
