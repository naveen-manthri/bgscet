import BulletSection from '../common/BulletSection/BulletSection';
import TitleDescription from '../careerDevelopment/TitleDescription/TitleDescription';
import { scopeOfCollegeBullets, scopeOfCollegeDetails } from '../../data/scopeOfCollegeData';
import './ScopeOfCollege.css';

const scopeOfCollegeData = {
  title: '',
  points: scopeOfCollegeBullets,
};

function ScopeOfCollege() {
  return (
    <div className="scope-of-college">
      <BulletSection data={scopeOfCollegeData} />

      <p className="scope-of-college__text">
        Moreover, Computer Science’s anticipated growth and jobs related to it are expected to increase in the coming years. It is obvious that the digital world will expand and will need off-stage people. Thus, the <strong>scope of Computer Science in India</strong> will be exponential. Metropolitan people groups like Bengaluru, Delhi, Noida, Gurgaon, Hyderabad, Chennai, Bombay, and Cochin are a part of the spots which have shaped into potential IT habitats of the country.
      </p>

      <p className="scope-of-college__text scope-of-college__text--heading">
        Trends hitting the Computer and IT Industries:
      </p>

      <div className="scope-of-college__details">
        {scopeOfCollegeDetails.map((item) => (
          <TitleDescription key={item.title} data={item} className="department-section-heading--medium" />
        ))}
      </div>

      <p className="scope-of-college__text">
        Karnataka is known for its well-structured educational system. Karnataka stands as the first State to privatize higher education in the country creating an opportunity of a kind to have skill-based form of learning as privatization injects new methodologies training students more than the government institutions. Approximately 1.2 lakh Engineering graduates are passing out from all the Engineering colleges in Karnataka and projected manpower requirement in state by 2025 is around 4 million plus only in IT sectors. Other core Engineering sectors are also developing in a rapid pace which is generating demand of Technical manpower requirement. There are more than 5500 IT companies in Karnataka, the majority of which operate from Bengaluru. As the demand is increasing at a phenomenon rate during the last five years and multinationals have already started coming to the state, it is therefore can be assumed that there is a bigger scope for the pass outs of the proposed institution.
      </p>
    </div>
  );
}

export default ScopeOfCollege;
