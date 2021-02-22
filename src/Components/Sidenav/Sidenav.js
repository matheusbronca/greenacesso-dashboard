import React from 'react';
import '../../styles/Components/Sidenav.css';
import Logo from '../common/Logo';
import SidenavList from './SidenavList';
import { sidenavData, sidenavSettings } from './SidenavData';
import { NavLink } from 'react-router-dom';

function Sidenav() {
  const [selectedMenuItem, setSelectedMenuItem] = React.useState('Cadastros');

  // React.useEffect(() => {
  //   setSelectedMenuItem('Cadastros');
  //   console.log('React effect trigger', selectedMenuItem);
  // }, []);

  const toggleActive = (item) => {
    setSelectedMenuItem(item.title);
  };

  return (
    <div className="sidenav">
      <NavLink to="/" exact>
        <Logo />
      </NavLink>
      <div
        style={{
          minHeight: '80%',
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <SidenavList
          toggleActive={toggleActive}
          selectedMenuItem={selectedMenuItem}
          listItems={sidenavData}
          grow={true}
        />
        <SidenavList
          toggleActive={toggleActive}
          selectedMenuItem={selectedMenuItem}
          listItems={sidenavSettings}
        />
      </div>
    </div>
  );
}

export default Sidenav;
