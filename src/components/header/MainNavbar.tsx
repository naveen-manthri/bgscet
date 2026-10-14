import { useEffect, useRef, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { navItems } from '../../data/navData';
import headerLogo from '../../assets/images/bgscet-logos/bgscet_logo-1.png';

function MainNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const [openNestedSubmenu, setOpenNestedSubmenu] = useState<string | null>(null);
  const [isQuickLinksSwapped, setIsQuickLinksSwapped] = useState(false);
  const [professionalBodiesWidth, setProfessionalBodiesWidth] = useState<5 | 8 | 12>(12);
  const [rootDropdownMaxWidths, setRootDropdownMaxWidths] = useState(new Map<string, number>());
  const [nestedDropdownMaxWidths, setNestedDropdownMaxWidths] = useState(new Map<string, number>());
  const menuRef = useRef<HTMLUListElement>(null);
  const rootDropdownRefs = useRef(new Map<string, HTMLUListElement>());
  const nestedDropdownRefs = useRef(new Map<string, HTMLUListElement>());

  const updateProfessionalBodiesWidth = () => {
    if (window.matchMedia('(max-width: 58em)').matches) {
      setIsQuickLinksSwapped(false);
      setProfessionalBodiesWidth(12);
      return;
    }

    const menu = menuRef.current;
    if (!menu) {
      setIsQuickLinksSwapped(false);
      setProfessionalBodiesWidth(12);
      return;
    }

    const menuItems = Array.from(menu.querySelectorAll<HTMLLIElement>(':scope > .main-navbar__item'));
    const quickLinks = menuItems.find((item) => item.dataset.navLabel === 'Quick Links');
    const quickLinksBounds = quickLinks?.getBoundingClientRect();

    if (!quickLinks || !quickLinksBounds || quickLinks.getClientRects().length === 0) {
      setIsQuickLinksSwapped(false);
      setProfessionalBodiesWidth(12);
      return;
    }

    const itemsByLabel = new Map(menuItems.map((item) => [item.dataset.navLabel, item]));
    const menuWidth = menu.clientWidth;
    const columnGap = parseFloat(getComputedStyle(menu).columnGap) || 0;
    const originalRows: string[][] = [];
    let currentRow: string[] = [];
    let currentRowWidth = 0;

    navItems.forEach((item) => {
      const element = itemsByLabel.get(item.label);
      if (!element) {
        return;
      }

      const itemWidth = element.getBoundingClientRect().width;
      const nextWidth = currentRowWidth + (currentRow.length ? columnGap : 0) + itemWidth;
      if (currentRow.length && nextWidth > menuWidth) {
        originalRows.push(currentRow);
        currentRow = [];
        currentRowWidth = 0;
      }

      currentRowWidth += (currentRow.length ? columnGap : 0) + itemWidth;
      currentRow.push(item.label);
    });
    if (currentRow.length) {
      originalRows.push(currentRow);
    }

    const originalQuickLinksRow = originalRows.find((row) => row.includes('Quick Links'));
    const originalQuickLinksRank = originalQuickLinksRow
      ? originalQuickLinksRow.length - originalQuickLinksRow.indexOf('Quick Links')
      : 0;
    setIsQuickLinksSwapped(originalQuickLinksRank === 1);

    const itemsOnSameRow = menuItems.filter((item) => {
      if (item.getClientRects().length === 0) {
        return false;
      }
      return Math.abs(item.getBoundingClientRect().top - quickLinksBounds.top) < 1;
    });
    const rankFromRight = itemsOnSameRow.filter(
      (item) => item.getBoundingClientRect().left > quickLinksBounds.left + 1,
    ).length + 1;

    setProfessionalBodiesWidth(rankFromRight === 2 ? 5 : rankFromRight === 3 ? 8 : 12);
  };

  const getDropdownClickState = (current: string | null, label: string) => {
    if (!window.matchMedia('(max-width: 58em)').matches) {
      return label;
    }

    return current === label ? null : label;
  };

  const updateRootDropdownWidth = (key: string) => {
    const dropdown = rootDropdownRefs.current.get(key);
    const parent = dropdown?.parentElement;

    if (!dropdown || !parent) {
      return;
    }

    if (window.matchMedia('(max-width: 58em)').matches) {
      setRootDropdownMaxWidths((current) => {
        if (!current.has(key)) {
          return current;
        }
        const next = new Map(current);
        next.delete(key);
        return next;
      });
      return;
    }

    const availableWidth = Math.max(
      0,
      document.documentElement.clientWidth - parent.getBoundingClientRect().left - 8,
    );
    const dropdownWidth = dropdown.getBoundingClientRect().width;
    const maxWidth = availableWidth < dropdownWidth ? availableWidth : undefined;

    setRootDropdownMaxWidths((current) => {
      if (current.get(key) === maxWidth) {
        return current;
      }
      const next = new Map(current);
      if (maxWidth === undefined) {
        next.delete(key);
      } else {
        next.set(key, maxWidth);
      }
      return next;
    });
  };

  const updateNestedDropdownDirection = (key: string) => {
    const dropdown = nestedDropdownRefs.current.get(key);
    const parent = dropdown?.parentElement;

    if (!dropdown || !parent || window.matchMedia('(max-width: 58em)').matches) {
      return;
    }

    if (dropdown.classList.contains('main-navbar__dropdown--professional-bodies')) {
      setNestedDropdownMaxWidths((current) => {
        if (!current.has(key)) {
          return current;
        }
        const next = new Map(current);
        next.delete(key);
        return next;
      });
      return;
    }

    const parentBounds = parent.getBoundingClientRect();
    const viewportWidth = document.documentElement.clientWidth;
    const viewportPadding = 8;
    const gap = parseFloat(getComputedStyle(dropdown).fontSize) * 0.5;
    const previousMaxWidth = dropdown.style.maxWidth;
    dropdown.style.maxWidth = '';
    const dropdownWidth = dropdown.getBoundingClientRect().width;
    dropdown.style.maxWidth = previousMaxWidth;
    const availableWidth = Math.max(0, viewportWidth - parentBounds.right - gap - viewportPadding);
    const maxWidth = availableWidth < dropdownWidth ? availableWidth : undefined;

    setNestedDropdownMaxWidths((current) => {
      if (current.get(key) === maxWidth) {
        return current;
      }

      const nextPositions = new Map(current);
      if (maxWidth === undefined) {
        nextPositions.delete(key);
      } else {
        nextPositions.set(key, maxWidth);
      }
      return nextPositions;
    });
  };

  useEffect(() => {
    const updateNestedDropdownDirections = () => {
      updateProfessionalBodiesWidth();
      rootDropdownRefs.current.forEach((_, key) => updateRootDropdownWidth(key));
      nestedDropdownRefs.current.forEach((_, key) => updateNestedDropdownDirection(key));
    };

    window.addEventListener('resize', updateNestedDropdownDirections);
    const menu = menuRef.current;
    const resizeObserver = menu ? new ResizeObserver(updateNestedDropdownDirections) : null;
    if (menu && resizeObserver) {
      resizeObserver.observe(menu);
      menu.querySelectorAll('.main-navbar__item').forEach((item) => resizeObserver.observe(item));
    }

    updateNestedDropdownDirections();
    return () => {
      window.removeEventListener('resize', updateNestedDropdownDirections);
      resizeObserver?.disconnect();
    };
  }, []);

  const closeMenu = () => {
    setIsOpen(false);
    setOpenDropdown(null);
    setOpenSubmenu(null);
    setOpenNestedSubmenu(null);
  };

  const displayedNavItems = navItems.slice();
  if (isQuickLinksSwapped) {
    const quickLinksIndex = displayedNavItems.findIndex((item) => item.label === 'Quick Links');
    const conferenceIndex = displayedNavItems.findIndex((item) => item.label === 'Conference-2025');
    const quickLinksItem = displayedNavItems[quickLinksIndex];
    const conferenceItem = displayedNavItems[conferenceIndex];
    if (quickLinksIndex >= 0 && conferenceIndex >= 0 && quickLinksItem && conferenceItem) {
      displayedNavItems[quickLinksIndex] = conferenceItem;
      displayedNavItems[conferenceIndex] = quickLinksItem;
    }
  }

  return (
    <nav className="main-navbar" aria-label="Primary navigation">
      <div className="main-navbar__inner">
        <Link className="main-navbar__brand" to="/" onClick={closeMenu}>
          <img className="main-header__logo" src={headerLogo} alt="" aria-hidden="true" />
          <span className="main-navbar__brand-name">
            <span>BGSCET</span>
            <span>Engineering</span>
          </span>
        </Link>

        <button  className="main-navbar__toggle"  type="button"  aria-controls="main-navbar-menu" aria-expanded={isOpen}  aria-label="Toggle navigation" onClick={() => setIsOpen((current) => !current)} >
          <span />
          <span />
          <span />
        </button>

        <ul ref={menuRef} className={`main-navbar__menu${isOpen ? ' is-open' : ''}`} id="main-navbar-menu">
          <li className="main-navbar__menu-header">
            <Link className="main-navbar__brand" to="/" onClick={closeMenu}>
              <img className="main-header__logo" src={headerLogo} alt="" aria-hidden="true" />
              <span className="main-navbar__brand-name">
                <span>BGSCET</span>
                <span>Engineering</span>
              </span>
            </Link>
            <button className="main-navbar__close" type="button" aria-label="Close navigation" onClick={closeMenu}>
              ×
            </button>
          </li>
          {displayedNavItems.map((item) => {
            const hasChildren = Boolean(item.children?.length);

            return (
              <li className="main-navbar__item" data-nav-label={item.label} key={item.label}
                onMouseEnter={() => {
                  if (!window.matchMedia('(max-width: 58em)').matches) {
                    setOpenDropdown(item.label);
                    updateRootDropdownWidth(item.label);
                  }
                }}
                onMouseLeave={() => {
                  if (!window.matchMedia('(max-width: 58em)').matches) {
                    setOpenDropdown(null);
                  }
                }}
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
                  {hasChildren ? (
                    <span className="main-navbar__link main-navbar__link--parent"
                      role="button"  tabIndex={0}   aria-haspopup="true" aria-expanded={openDropdown === item.label} onClick={(event) => { event.preventDefault();
                        setOpenDropdown((current) => getDropdownClickState(current, item.label));
                      }} onKeyDown={(event) => {
                        if (event.key === 'Enter' || event.key === ' ') {
                          event.preventDefault();
                          setOpenDropdown((current) => getDropdownClickState(current, item.label));
                        }
                      }}  >
                      {item.label}
                    </span>
                  ) : (
                    <NavLink className={({ isActive }) => `main-navbar__link${isActive ? ' is-active' : ''}`} to={item.path} onClick={closeMenu}>
                      {item.label}
                    </NavLink>
                  )}
                </div>


                {hasChildren ? (
                  <ul
                    ref={(element) => {
                      if (element) {
                        rootDropdownRefs.current.set(item.label, element);
                      } else {
                        rootDropdownRefs.current.delete(item.label);
                      }
                    }}
                    className={`main-navbar__dropdown${openDropdown === item.label ? ' is-open' : ''}`}
                    style={rootDropdownMaxWidths.has(item.label) ? { maxWidth: `${rootDropdownMaxWidths.get(item.label)}px` } : undefined}
                  >
                    {item.children?.map((child) => {
                      const isPdf = child.path.toLowerCase().endsWith('.pdf');
                      const isImage = /\.(png|jpe?g|webp|svg)$/i.test(child.path);
                      const isExternal = /^https?:\/\//.test(child.path);
                      const hasSubmenu = Boolean(child.children?.length);
                      const nestedMaxWidth = nestedDropdownMaxWidths.get(child.path);

                      return (
                        <li className={`main-navbar__dropdown-item${hasSubmenu ? ' main-navbar__dropdown-item--has-submenu' : ''}`}
                          key={child.label}
                          onMouseEnter={() => {
                            if (hasSubmenu && !window.matchMedia('(max-width: 58em)').matches) {
                              setOpenSubmenu(child.label);
                              setOpenNestedSubmenu(null);
                              updateNestedDropdownDirection(child.path);
                            }
                          }}
                          onMouseLeave={() => {
                            if (hasSubmenu && !window.matchMedia('(max-width: 58em)').matches) {
                              setOpenSubmenu(null);
                              setOpenNestedSubmenu(null);
                            }
                          }}
                        >
                          {hasSubmenu ? (
                            <span className="main-navbar__dropdown-link main-navbar__dropdown-link--parent" role="button"tabIndex={0} aria-haspopup="true"
                              aria-expanded={openSubmenu === child.label} onClick={() => {
                                updateNestedDropdownDirection(child.path);
                                setOpenSubmenu((current) => getDropdownClickState(current, child.label));
                              }} onKeyDown={(event) => { if (event.key === 'Enter' || event.key === ' ') {
                                  event.preventDefault();
                                  updateNestedDropdownDirection(child.path);
                                  setOpenSubmenu((current) => getDropdownClickState(current, child.label));
                                } }} >
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
                            <ul ref={(element) => {   if (element) {   nestedDropdownRefs.current.set(child.path, element); } else {
                                  nestedDropdownRefs.current.delete(child.path);
                                }  }}
                              className={`main-navbar__dropdown main-navbar__dropdown--nested${child.label === 'Professional Bodies' ? ` main-navbar__dropdown--professional-bodies main-navbar__dropdown--professional-bodies-${professionalBodiesWidth}rem` : ''}${openSubmenu === child.label ? ' is-open' : ''}`}
                              style={child.label !== 'Professional Bodies' && nestedMaxWidth !== undefined ? { maxWidth: `${nestedMaxWidth}px` } : undefined}>
                              {child.children?.map((subChild) => {
                                const isPdf = subChild.path.toLowerCase().endsWith('.pdf');
                                const isImage = /\.(png|jpe?g|webp|svg)$/i.test(subChild.path);
                                const isExternal = /^https?:\/\//.test(subChild.path);
                                const isPlaceholder = subChild.path === '#';
                                const hasNestedSubmenu = Boolean(subChild.children?.length);
                                const nestedMaxWidth = nestedDropdownMaxWidths.get(subChild.path);

                                if (hasNestedSubmenu) {
                                  return (
                                    <li className="main-navbar__dropdown-item main-navbar__dropdown-item--has-submenu" key={subChild.label}
                                      onMouseEnter={() => {
                                        if (!window.matchMedia('(max-width: 58em)').matches) {
                                          setOpenNestedSubmenu(subChild.label);
                                          updateNestedDropdownDirection(subChild.path);
                                        }
                                      }}
                                      onMouseLeave={() => {
                                        if (!window.matchMedia('(max-width: 58em)').matches) {
                                          setOpenNestedSubmenu(null);
                                        }
                                      }}
                                    >
                                      <span  className="main-navbar__dropdown-link main-navbar__dropdown-link--parent"
                                        role="button"  tabIndex={0}  aria-haspopup="true"  aria-expanded={openNestedSubmenu === subChild.label} onClick={() => {
                                          updateNestedDropdownDirection(subChild.path);
                                          setOpenNestedSubmenu((current) => getDropdownClickState(current, subChild.label));
                                        }} onKeyDown={(event) => {
                                          if (event.key === 'Enter' || event.key === ' ') {
                                            event.preventDefault();
                                            updateNestedDropdownDirection(subChild.path);
                                            setOpenNestedSubmenu((current) => getDropdownClickState(current, subChild.label));
                                          } }} > {subChild.label}<span aria-hidden="true">›</span>
                                      </span>
                                      <ul ref={(element) => { if (element) {
                                            nestedDropdownRefs.current.set(subChild.path, element);
                                          } else {
                                            nestedDropdownRefs.current.delete(subChild.path);
                                          }
                                        }}
                                        className={`main-navbar__dropdown main-navbar__dropdown--nested${openNestedSubmenu === subChild.label ? ' is-open' : ''}`}
                                        style={nestedMaxWidth !== undefined ? { maxWidth: `${nestedMaxWidth}px` } : undefined}
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
                                      <a  className="main-navbar__dropdown-link"  href={subChild.path} target="_blank" rel="noopener noreferrer" onClick={closeMenu} >
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
      <div className="main-navbar__mobile-codes">K-CET Code - E-286, COMEDK Code: E-207.</div>
    </nav>
  );
}

export default MainNavbar;
