import React from 'react';
import '../../styles/Components/Common.css';
import Header from '../common/Header';
import VoidContent from '../common/VoidContent';

function Help() {
  return (
    <section>
      <div style={{height: '100%'}}>
        <Header title="Ajuda" />
        <VoidContent />
      </div>
    </section>
  );
}

export default Help;
