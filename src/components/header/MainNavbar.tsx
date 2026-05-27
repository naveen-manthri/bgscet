import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { navItems } from '../../data/navData';

function MainNavbar() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <nav className="navbar navbar-expand-lg main-navbar sticky-top">
      <div className="container">
        <Link className="navbar-brand d-lg-none" to="/">
          BGSCET
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNav"
          aria-controls="mainNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="mainNav">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 nav-screenshot-wrap">
            {navItems.map((item) => {
              const hasChildren = Boolean(item.children?.length);

              if (hasChildren) {
                return (
                  <li
                    className="nav-item dropdown"
                    key={item.label}
                    onMouseEnter={() => setOpenDropdown(item.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <NavLink
                      className={({ isActive }) =>
                        `nav-link dropdown-toggle ${isActive ? 'active' : ''}`
                      }
                      to={item.path}
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded={openDropdown === item.label}
                    >
                      {item.label}
                    </NavLink>
                    <ul className={`dropdown-menu dropdown-menu-end ${openDropdown === item.label ? 'show' : ''}`}>
                      {item.children?.map((child) => (
                        <li key={child.label}>
                          <Link className="dropdown-item" to={child.path}>
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                );
              }

              return (
                <li className="nav-item" key={item.label}>
                  <NavLink
                    className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                    to={item.path}
                  >
                    {item.label}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default MainNavbar;
