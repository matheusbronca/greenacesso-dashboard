import React from 'react';
import { FiBell, FiMoreHorizontal } from 'react-icons/fi';
import Card from '../common/Card';

const ProfileCard = () => {
  return (
    <Card>
      <div className="profileCard">
        <img
          className="profileCard__avatar"
          src="../images/profile-picture.jpg"
          alt="Avatar"
        />
        <div className="profileCard__container">
          <span>Sair</span>
          <div style={{ display: 'inline-flex' }}>
            <FiBell size={'1.5rem'} style={{ marginRight: '1.25rem' }} />
            <FiMoreHorizontal size={'1.5rem'} />
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ProfileCard;
