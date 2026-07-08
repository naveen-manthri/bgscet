import { footerColumns, footerInfo } from '../../data/landingData';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__main">
        <section className="footer__brand" aria-label="College information">
          <img className="footer__logo" src={footerInfo.logo} alt="BGS College of Engineering and Technology logo" />
          <p className="footer__description">{footerInfo.description}</p>
        </section>

        <nav className="footer__nav" aria-label="Footer navigation">
          {footerColumns.map((column) => (
            <section className="footer__column" key={column.id} aria-labelledby={`footer-column-${column.id}`}>
              <h2 className="footer__heading" id={`footer-column-${column.id}`}>
                {column.title}
              </h2>
              <ul className="footer__list">
                {column.links.map((link) => (
                  <li className="footer__item" key={link}>
                    <a className="footer__link" href="/">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </nav>
      </div>

      <div className="footer__bottom">
        <p className="footer__copyright">© www.bgscet.ac.in All rights reserved</p>
        <p className="footer__credit">Designed By Curator Design</p>
      </div>
    </footer>
  );
}

export default Footer;
