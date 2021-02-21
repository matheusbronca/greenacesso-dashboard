import React from 'react';
import '../../styles/Components/Common/Header.css';
import 

export const Header = ({ title }) => {
  return (
    <div>
      <h1>{title}</h1>
      <span>Seja bem vindo, Soon Sam!</span>
      <div className="profileCard">
        <img className="profileCard__avatar" src="./images/profile-picture.jpg" alt="Avatar" />
        <div className="profileCard__container">
          <span>Sair</span>

        </div>

      </div>
    </div>
  );
};
