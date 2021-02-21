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
            <>
              <li
                className={
                  isItemSelected ? 'sidenav__item active' : 'sidenav__item'
                }
                key={key}
              >
                <button onClick={() => toggleActive(data)}>
                  {data.icon}
                  <span>{data.title}</span>
                </button>
              </li>
              {hasSubnav && (
                <ul
                  className={
                    isItemSelected ? 'sidenav__sub open' : 'sidenav__sub'
                  }
                >
                  {data.subNav.map((subItem, key) => {
                    return (
                      <li key={key}>
                        <NavLink to={subItem.href}>
                          <span>- {subItem.title}</span>
                        </NavLink>
                      </li>
                    );
                  })}
                </ul>
              )}
            </>
          );
        })}
      </IconContext.Provider>
    </ul>
  );
};

export default SidenavList;
