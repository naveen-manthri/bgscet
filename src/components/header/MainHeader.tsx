import { Link } from 'react-router-dom';
import leftLogo from '../../assets/images/bgscet_logo-1.png';
import rightLogo from '../../assets/images/bgscet_logo-2.png';

function MainHeader() {
  return (
    <header className="main-header">
      <div className="main-header__inner">
        <Link to="/" className="main-header__logo-link" aria-label="Go to BGSCET home">
          <img className="main-header__logo" src={leftLogo} alt="BGSCET logo" loading="eager" />
        </Link>

        <div className="main-header__copy">
          <p className="main-header__pretitle">|| Jai Sri Gurudev ||</p>
          <p className="main-header__subtitle">
            BGSKH Education Trust (R.) - A unit of Sri Adichunchanagiri Shikshana Trust(R.)
          </p>
          <h1 className="main-header__title">BGS College of Engineering and Technology (BGSCET)</h1>
          <p className="main-header__meta">(Approved by AICTE, New Delhi and Affiliated to VTU, Belagavi)</p>
        </div>

        <img className="main-header__emblem" src={rightLogo} alt="BGSCET emblem" loading="eager" />
      </div>
    </header>
  );
}

export default MainHeader;
