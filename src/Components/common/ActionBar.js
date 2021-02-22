import React from 'react';
import '../../styles/Components/Common/ActionBar.css';
import { IconContext } from 'react-icons';

const ActionBar = ({ actions }) => {
  return (
    <div className="ActionBar">
      <IconContext.Provider value={{ size: '2rem' }}>
        {actions.map((action, key) => {
          return (
            <button key={`ActionBar=${key}`} className="actionItem">
              {action.icon}
              <span className="actionItem__label">{action.label}</span>
            </button>
          );
        })}
      </IconContext.Provider>
    </div>
  );
};

export default ActionBar;
