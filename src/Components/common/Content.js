import React from 'react';

const Content = ({ children }) => {
  return (
    <div
      style={{
        padding: '2rem',
      }}
    >
      {children}
    </div>
  );
};

export default Content;
