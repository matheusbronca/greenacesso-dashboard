import React from 'react';

function Logo() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '2rem',
        marginBottom: '2rem',
        color: 'white',
      }}
    >
      <img
        src="/images/logo.png"
        alt="Green acesso"
        style={{
          maxWidth: '75px',
          filter: 'drop-shadow(0px 2px 3px rgba(0,0,0, .65))',
        }}
      />
      <div style={{ fontSize: '1rem', fontWeight: '600' }}>Green Acesso</div>
    </div>
  );
}

export default Logo;
