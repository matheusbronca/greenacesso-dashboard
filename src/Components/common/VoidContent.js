import React from 'react';
import { FiFrown } from 'react-icons/fi';
const VoidContent = () => {
  return (
    <div
      style={{
        height: '80%',
        display: 'flex',
        flexDirection: 'column',
        margin: 'auto',
        alignItems: 'center',
        justifyContent: 'center',
        justifyItems: 'center',
      }}
    >
      <FiFrown size={'6rem'} />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <p style={{ fontSize: '2.5rem', fontWeight: '600' }}>Oops!</p>
        <p>Parece que ainda não temos nada por aqui! </p>
      </div>
    </div>
  );
};

export default VoidContent;
