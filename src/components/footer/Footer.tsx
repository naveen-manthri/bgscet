import { footerColumns, footerInfo } from '../../data/landingData';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import './Footer.css';

const socialLinks = [
  { name: 'Instagram', icon: FaInstagram, href: 'https://www.instagram.com/bgscet_engg_coll/' },
  { name: 'Facebook', icon: FaFacebookF, href: 'https://www.facebook.com/profile.php?id=100093242520553' },
  { name: 'X', icon: FaXTwitter, href: 'https://x.com/BGSCET_ENGG_COL' },
  { name: 'LinkedIn', icon: FaLinkedinIn, href: 'https://www.linkedin.com/school/bgs-college-of-engineering-and-technology/' },
  { name: 'Email', icon: MdEmail, href: 'mailto:info@bgscet.ac.in' },
];

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
              <ul className="flex flex-direction-column footer__list">
                {column.links.map((link) => (
                  <li className="footer__item" key={link}>
                    <a className="inline-flex-center footer__link" href="/">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </nav>
      </div>

      <div className="footer__social" aria-label="Social media links">
        {socialLinks.map((socialLink) => (
          <a
            className={`footer__social-link footer__social-link--${socialLink.name.toLowerCase()}`}
            href={socialLink.href}
            key={socialLink.name}
            target={socialLink.href.startsWith('mailto:') ? undefined : '_blank'}
            rel={socialLink.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
            aria-label={`Visit our ${socialLink.name} page`}
          >
            <socialLink.icon
              className="footer__social-icon"
              aria-hidden="true"
            />
          </a>
        ))}
      </div>

      <div className="flex flex-align-center flex-justify-between footer__bottom">
        <p className="footer__copyright">© www.bgscet.ac.in All rights reserved</p>
        <p className="footer__credit">Designed By Curator Design</p>
      </div>
    </footer>
  );
}

export default Footer;
