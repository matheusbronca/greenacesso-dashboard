import React from 'react';
import '../../styles/Components/Common/Card.css';

const Card = ({ children, flex = false }) => {
  return (
    <div
      className="card"
      style={!!flex ? { display: 'flex' } : { display: 'block' }}
    >
      {children}
    </div>
  );
};

export default Card;
