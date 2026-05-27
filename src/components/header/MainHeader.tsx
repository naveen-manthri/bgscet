import { Link } from 'react-router-dom';
import leftLogo from '../../assets/images/bgscet_logo-1.png';
import rightLogo from '../../assets/images/bgscet_logo-2.png';

function MainHeader() {
  return (
    <header className="main-header">
      <div className="container-fluid px-3 px-lg-4 py-3 py-lg-2">
        <div className="row align-items-center g-2 g-lg-3 flex-nowrap header-masthead">
          <div className="col-auto">
            <Link to="/" className="d-inline-flex align-items-center text-decoration-none">
              <img
                className="header-logo-image"
                src={leftLogo}
                alt="BGSCET logo"
                loading="eager"
              />
            </Link>
          </div>

          <div className="col text-center header-copy-col">
            <p className="header-pretitle mb-1">|| Jai Sri Gurudev ||</p>
            <p className="header-subtitle mb-1">
              BGSKH Education Trust (R.) - A unit of Sri Adichunchanagiri Shikshana Trust(R.)
            </p>
            <h1 className="college-name mb-1">BGS College of Engineering and Technology (BGSCET)</h1>
            <p className="header-meta mb-0">
              (Approved by AICTE, New Delhi and Affiliated to VTU, Belagavi)
            </p>
          </div>

          <div className="col-auto d-none d-md-flex align-items-center gap-2 gap-lg-3">
            <img
              className="header-emblem-image"
              src={rightLogo}
              alt="BGSCET emblem"
              loading="eager"
            />
          </div>
        </div>
      </div>
      <div className="header-divider" />
    </header>
  );
}

export default MainHeader;
