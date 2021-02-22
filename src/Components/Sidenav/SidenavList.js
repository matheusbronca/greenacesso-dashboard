import React from 'react';
import { IconContext } from 'react-icons';
import { NavLink } from 'react-router-dom';

export const SidenavList = ({
  selectedMenuItem,
  toggleActive,
  listItems,
  grow = false,
}) => {
  return (
    <ul style={grow ? { flex: '1' } : { flex: 'initial' }}>
      <IconContext.Provider value={{ size: '1.75rem', className: 'icon' }}>
        {listItems.map((data, key) => {
          const hasSubnav = !!data.subNav.length > 0;
          const isItemSelected = selectedMenuItem === data.title;
          return (
            <div key={key}>
              <li
                className={
                  isItemSelected ? 'sidenav__item active' : 'sidenav__item'
                }
                key={`${data.title}${key}`}
              >
                {hasSubnav && (
                  <button key={key + 'btn'} onClick={() => toggleActive(data)}>
                    {data.icon}
                    <span>{data.title}</span>
                  </button>
                )}
                {!hasSubnav && (
                  <NavLink
                    key={key + 'navLink'}
                    onClick={() => toggleActive(data)}
                    to={data.href}
                  >
                    {data.icon}
                    <span>{data.title}</span>
                  </NavLink>
                )}
              </li>
              {hasSubnav && (
                <ul
                  key={`${key}+ul`}
                  className={
                    isItemSelected ? 'sidenav__sub open' : 'sidenav__sub'
                  }
                >
                  {data.subNav.map((subItem, key) => {
                    return (
                      <li key={`${key}-${subItem.title}`}>
                        <NavLink key={key + 'NavLink2'} to={subItem.href}>
                          <span>- {subItem.title}</span>
                        </NavLink>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          );
        })}
      </IconContext.Provider>
    </ul>
  );
};

export default SidenavList;
