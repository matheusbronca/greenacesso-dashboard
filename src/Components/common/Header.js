import React from 'react';
import '../../styles/Components/Common/Header.css';

export const Header = ({ title }) => {
  return (
    <div className="flex">
      <div className="flex header__text">
        <h1>{title}</h1>
        <span>Seja bem vindo, <b>Soom Sam</b></span>
      </div>
    </div>
  );
};

export default Header;
