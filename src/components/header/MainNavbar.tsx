import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { navItems } from '../../data/navData';

function MainNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  const closeMenu = () => {
    setIsOpen(false);
    setOpenDropdown(null);
    setOpenSubmenu(null);
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
              <li  className="main-navbar__item" key={item.label}  onMouseEnter={() => setOpenDropdown(item.label)} onMouseLeave={() => setOpenDropdown(null)} >
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
                  {hasChildren ? (
                    <span
                      className="main-navbar__link main-navbar__link--parent"
                      role="button"
                      tabIndex={0}
                      aria-haspopup="true"
                      aria-expanded={openDropdown === item.label}
                      onClick={(event) => {
                        event.preventDefault();
                        setOpenDropdown((current) => (current === item.label ? null : item.label));
                      }}
                      onKeyDown={(event) => {
                        if (event.key === 'Enter' || event.key === ' ') {
                          event.preventDefault();
                          setOpenDropdown((current) => (current === item.label ? null : item.label));
                        }
                      }}
                    >
                      {item.label}
                    </span>
                  ) : (
                    <NavLink
                      className={({ isActive }) => `main-navbar__link${isActive ? ' is-active' : ''}`}
                      to={item.path}
                      onClick={closeMenu}
                    >
                      {item.label}
                    </NavLink>
                  )}
                </div>


                {hasChildren ? (
                  <ul className={`main-navbar__dropdown${openDropdown === item.label ? ' is-open' : ''}`}>
                    {item.children?.map((child) => {
                      const isPdf = child.path.toLowerCase().endsWith('.pdf');
                      const hasSubmenu = Boolean(child.children?.length);

                      return (
                        <li
                          className={`main-navbar__dropdown-item${hasSubmenu ? ' main-navbar__dropdown-item--has-submenu' : ''}`}
                          key={child.label}
                          onMouseEnter={() => hasSubmenu && setOpenSubmenu(child.label)}
                          onMouseLeave={() => hasSubmenu && setOpenSubmenu(null)}
                        >
                          {hasSubmenu ? (
                            <span
                              className="main-navbar__dropdown-link main-navbar__dropdown-link--parent"
                              role="button"
                              tabIndex={0}
                              aria-haspopup="true"
                              aria-expanded={openSubmenu === child.label}
                              onClick={() => setOpenSubmenu((current) => (current === child.label ? null : child.label))}
                              onKeyDown={(event) => {
                                if (event.key === 'Enter' || event.key === ' ') {
                                  event.preventDefault();
                                  setOpenSubmenu((current) => (current === child.label ? null : child.label));
                                }
                              }}
                            >
                              {child.label}<span aria-hidden="true">›</span>
                            </span>
                          ) : isPdf ? (
                            <a className="main-navbar__dropdown-link" href={child.path} target="_blank" rel="noopener noreferrer" onClick={closeMenu}>
                              {child.label}
                            </a>
                          ) : (
                            <Link className="main-navbar__dropdown-link" to={child.path} onClick={closeMenu}>
                              {child.label}
                            </Link>
                          )}
                          {hasSubmenu ? (
                            <ul className={`main-navbar__dropdown main-navbar__dropdown--nested${openSubmenu === child.label ? ' is-open' : ''}`}>
                              {child.children?.map((subChild) => (
                                <li key={subChild.label}>
                                  <Link className="main-navbar__dropdown-link" to={subChild.path} onClick={closeMenu}>
                                    {subChild.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          ) : null}
                        </li>
                      );
                    })}
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
