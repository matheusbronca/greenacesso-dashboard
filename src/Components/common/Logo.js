import React from 'react';

function Logo() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: '2rem',
        color: 'white'
      }}
    >
      <img
        src="/images/logo.png"
        alt="Green acesso"
        style={{ maxWidth: '75px' }}
      />
      <div style={{ fontSize: '1rem', fontWeight: '600' }}>Green Acesso</div>
    </div>
  );
}

export default Logo;
