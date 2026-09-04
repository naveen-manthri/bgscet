import { useEffect, useRef, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { navItems } from '../../data/navData';

function MainNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const [openNestedSubmenu, setOpenNestedSubmenu] = useState<string | null>(null);
  const [leftDropdownItems, setLeftDropdownItems] = useState<Set<string>>(new Set());
  const [leftNestedDropdowns, setLeftNestedDropdowns] = useState<Set<string>>(new Set());
  const menuRef = useRef<HTMLUListElement>(null);
  const nestedDropdownRefs = useRef(new Map<string, HTMLUListElement>());

  const updateNestedDropdownDirection = (key: string) => {
    const dropdown = nestedDropdownRefs.current.get(key);
    const parent = dropdown?.parentElement;

    if (!dropdown || !parent || window.matchMedia('(max-width: 58em)').matches) {
      return;
    }

    const parentBounds = parent.getBoundingClientRect();
    const dropdownWidth = dropdown.getBoundingClientRect().width;
    const rightSpace = window.innerWidth - parentBounds.right;
    const leftSpace = parentBounds.left;
    const shouldOpenLeft = rightSpace < dropdownWidth && leftSpace > rightSpace;

    setLeftNestedDropdowns((current) => {
      if (current.has(key) === shouldOpenLeft) {
        return current;
      }

      const next = new Set(current);
      if (shouldOpenLeft) {
        next.add(key);
      } else {
        next.delete(key);
      }
      return next;
    });
  };

  useEffect(() => {
    const menu = menuRef.current;

    if (!menu) {
      return;
    }

    const updateDropdownDirection = () => {
      const items = Array.from(menu.children) as HTMLLIElement[];
      const rows: HTMLLIElement[][] = [];

      items.forEach((item) => {
        const row = rows.find((currentRow) => currentRow[0].offsetTop === item.offsetTop);

        if (row) {
          row.push(item);
        } else {
          rows.push([item]);
        }
      });

      setLeftDropdownItems(
        new Set(rows.flatMap((row) => row.slice(-2).map((item) => item.dataset.navLabel ?? ''))),
      );
    };

    updateDropdownDirection();
    const observer = new ResizeObserver(updateDropdownDirection);
    observer.observe(menu);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const updateNestedDropdownDirections = () => {
      nestedDropdownRefs.current.forEach((_, key) => updateNestedDropdownDirection(key));
    };

    window.addEventListener('resize', updateNestedDropdownDirections);
    return () => window.removeEventListener('resize', updateNestedDropdownDirections);
  }, []);

  const closeMenu = () => {
    setIsOpen(false);
    setOpenDropdown(null);
    setOpenSubmenu(null);
    setOpenNestedSubmenu(null);
  };

  return (
    <nav className="main-navbar" aria-label="Primary navigation">
      <div className="main-navbar__inner">
        <Link className="main-navbar__brand" to="/" onClick={closeMenu}>
          BGSCET
        </Link>

        <button  className="main-navbar__toggle"  type="button"  aria-controls="main-navbar-menu" aria-expanded={isOpen}  aria-label="Toggle navigation" onClick={() => setIsOpen((current) => !current)} >
          <span />
          <span />
          <span />
        </button>

        <ul ref={menuRef} className={`main-navbar__menu${isOpen ? ' is-open' : ''}`} id="main-navbar-menu">
          {navItems.map((item) => {
            const hasChildren = Boolean(item.children?.length);

            return (
              <li  className={`main-navbar__item${leftDropdownItems.has(item.label) ? ' main-navbar__item--left-dropdown' : ''}`} data-nav-label={item.label}   key={item.label}  onMouseEnter={() => setOpenDropdown(item.label)} onMouseLeave={() => setOpenDropdown(null)} >
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
                    <span  className="main-navbar__link main-navbar__link--parent" role="button"  tabIndex={0} aria-haspopup="true"  aria-expanded={openDropdown === item.label} onClick={(event) => { event.preventDefault(); setOpenDropdown((current) => (current === item.label ? null : item.label)); }}  onKeyDown={(event) => {
                        if (event.key === 'Enter' || event.key === ' ') {
                          event.preventDefault();  setOpenDropdown((current) => (current === item.label ? null : item.label)); }  }}  >
                      {item.label}
                    </span>  ) : (  <NavLink  className={({ isActive }) => `main-navbar__link${isActive ? ' is-active' : ''}`} to={item.path}  onClick={closeMenu}> {item.label}</NavLink>
                  )}
                </div>


                {hasChildren ? (
                  <ul className={`main-navbar__dropdown${openDropdown === item.label ? ' is-open' : ''}`}>
                    {item.children?.map((child) => {
                      const isPdf = child.path.toLowerCase().endsWith('.pdf');
                      const isImage = /\.(png|jpe?g|webp|svg)$/i.test(child.path);
                      const isExternal = /^https?:\/\//.test(child.path);
                      const hasSubmenu = Boolean(child.children?.length);

                      return (
                        <li
                          className={`main-navbar__dropdown-item${hasSubmenu ? ' main-navbar__dropdown-item--has-submenu' : ''}`}
                          key={child.label}
                          onMouseEnter={() => {
                            if (hasSubmenu) {
                              setOpenSubmenu(child.label);
                              setOpenNestedSubmenu(null);
                              updateNestedDropdownDirection(child.path);
                            }
                          }}
                          onMouseLeave={() => {
                            if (hasSubmenu) {
                              setOpenSubmenu(null);
                              setOpenNestedSubmenu(null);
                            }
                          }}
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
                          ) : isPdf || isImage || isExternal ? (
                            <a className="main-navbar__dropdown-link" href={child.path} target="_blank" rel="noopener noreferrer" onClick={closeMenu}>
                              {child.label}
                            </a>
                          ) : (
                            <Link className="main-navbar__dropdown-link" to={child.path} onClick={closeMenu}>
                              {child.label}
                            </Link>
                          )}
                          {hasSubmenu ? (
                            <ul
                              ref={(element) => {
                                if (element) {
                                  nestedDropdownRefs.current.set(child.path, element);
                                } else {
                                  nestedDropdownRefs.current.delete(child.path);
                                }
                              }}
                              className={`main-navbar__dropdown main-navbar__dropdown--nested${leftNestedDropdowns.has(child.path) ? ' main-navbar__dropdown--left' : ''}${openSubmenu === child.label ? ' is-open' : ''}`}
                            >
                              {child.children?.map((subChild) => {
                                const isPdf = subChild.path.toLowerCase().endsWith('.pdf');
                                const isImage = /\.(png|jpe?g|webp|svg)$/i.test(subChild.path);
                                const isExternal = /^https?:\/\//.test(subChild.path);
                                const isPlaceholder = subChild.path === '#';
                                const hasNestedSubmenu = Boolean(subChild.children?.length);

                                if (hasNestedSubmenu) {
                                  return (
                                    <li
                                      className="main-navbar__dropdown-item main-navbar__dropdown-item--has-submenu"
                                      key={subChild.label}
                                      onMouseEnter={() => {
                                        setOpenNestedSubmenu(subChild.label);
                                        updateNestedDropdownDirection(subChild.path);
                                      }}
                                      onMouseLeave={() => setOpenNestedSubmenu(null)}
                                    >
                                      <span  className="main-navbar__dropdown-link main-navbar__dropdown-link--parent"
                                        role="button"  tabIndex={0}  aria-haspopup="true"  aria-expanded={openNestedSubmenu === subChild.label} onClick={() => setOpenNestedSubmenu((current) => (current === subChild.label ? null : subChild.label))} onKeyDown={(event) => {
                                          if (event.key === 'Enter' || event.key === ' ') {
                                            event.preventDefault();
                                            setOpenNestedSubmenu((current) => (current === subChild.label ? null : subChild.label));
                                          } }} > {subChild.label}<span aria-hidden="true">›</span>
                                      </span>
                                      <ul ref={(element) => { if (element) {
                                            nestedDropdownRefs.current.set(subChild.path, element);
                                          } else {
                                            nestedDropdownRefs.current.delete(subChild.path);
                                          }
                                        }}
                                        className={`main-navbar__dropdown main-navbar__dropdown--nested${leftNestedDropdowns.has(subChild.path) ? ' main-navbar__dropdown--left' : ''}${openNestedSubmenu === subChild.label ? ' is-open' : ''}`}
                                      >
                                        {subChild.children?.map((nestedChild) => {
                                          const nestedIsPdf = nestedChild.path.toLowerCase().endsWith('.pdf');
                                          const nestedIsImage = /\.(png|jpe?g|webp|svg)$/i.test(nestedChild.path);
                                          const nestedIsExternal = /^https?:\/\//.test(nestedChild.path);

                                          return (
                                            <li key={nestedChild.label}>
                                              {nestedIsPdf || nestedIsImage || nestedIsExternal ? (
                                                <a className="main-navbar__dropdown-link" href={nestedChild.path} target="_blank" rel="noopener noreferrer" onClick={closeMenu}>
                                                  {nestedChild.label}
                                                </a>
                                              ) : (
                                                <Link className="main-navbar__dropdown-link" to={nestedChild.path} onClick={closeMenu}>
                                                  {nestedChild.label}
                                                </Link>
                                              )}
                                            </li>
                                          );
                                        })}
                                      </ul>
                                    </li>
                                  );
                                }

                                if (isPlaceholder) {
                                  return (
                                    <li key={subChild.label}>
                                      <span className="main-navbar__dropdown-link main-navbar__dropdown-link--disabled" aria-disabled="true">
                                        {subChild.label}
                                      </span>
                                    </li>
                                  );
                                }

                                if (isPdf || isImage || isExternal) {
                                  return (
                                    <li key={subChild.label}>
                                      <a
                                        className="main-navbar__dropdown-link"
                                        href={subChild.path}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={closeMenu}
                                      >
                                        {subChild.label}
                                      </a>
                                    </li>
                                  );
                                }

                                return (
                                  <li key={subChild.label}>
                                    <Link className="main-navbar__dropdown-link" to={subChild.path} onClick={closeMenu}>
                                      {subChild.label}
                                    </Link>
                                  </li>
                                );
                              })}
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
