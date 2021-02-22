import React from 'react';
import '../../styles/Components/Common.css';
import Header from '../common/Header';
import VoidContent from '../common/VoidContent';

function Notices() {
  return (
    <section>
      <div style={{height: '100%'}}>
        <Header title="Avisos" />
        <VoidContent />
      </div>
    </section>
  );
}

export default Notices;
