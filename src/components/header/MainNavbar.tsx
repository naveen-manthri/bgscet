import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { navItems } from '../../data/navData';

function MainNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const closeMenu = () => {
    setIsOpen(false);
    setOpenDropdown(null);
  };

  return (
    <nav className="main-navbar" aria-label="Primary navigation">
      <div className="main-navbar__inner">
        <Link className="main-navbar__brand" to="/" onClick={closeMenu}>
          BGSCET
        </Link>

        <button
          className="main-navbar__toggle"
          type="button"
          aria-controls="main-navbar-menu"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
          onClick={() => setIsOpen((current) => !current)}
        >
          <span />
          <span />
          <span />
        </button>

        <ul className={`main-navbar__menu${isOpen ? ' is-open' : ''}`} id="main-navbar-menu">
          {navItems.map((item) => {
            const hasChildren = Boolean(item.children?.length);

            return (
              <li
                className="main-navbar__item"
                key={item.label}
                onMouseEnter={() => setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                {/* <div className="main-navbar__link-row">
                  <NavLink
                    className={({ isActive }) => `main-navbar__link${isActive ? ' is-active' : ''}`}
                    to={item.path}
                    onClick={closeMenu}
                  >
                    {item.label}
                  </NavLink>

                  {hasChildren ? (
                    <button
                      className="main-navbar__dropdown-button"
                      type="button"
                      aria-label={`Toggle ${item.label} menu`}
                      aria-expanded={openDropdown === item.label}
                      onClick={() => setOpenDropdown((current) => (current === item.label ? null : item.label))}
                    >
                      v
                    </button>
                  ) : null}
                </div> */}

                <div className="main-navbar__link-row">
                  <NavLink className={({ isActive }) => `main-navbar__link${isActive ? ' is-active' : ''}`
                    } to={item.path} onClick={closeMenu}> {item.label}
                  </NavLink>
                </div>

                {hasChildren ? (
                  <ul className={`main-navbar__dropdown${openDropdown === item.label ? ' is-open' : ''}`}>
                    {item.children?.map((child) => (
                      <li key={child.label}>
                        <Link className="main-navbar__dropdown-link" to={child.path} onClick={closeMenu}>
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

export default MainNavbar;
