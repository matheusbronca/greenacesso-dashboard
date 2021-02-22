import React from 'react';
import '../../styles/Components/Common.css';
import Header from '../common/Header';
import VoidContent from '../common/VoidContent';

function Settings() {
  return (
    <section>
      <div style={{height: '100%'}}>
        <Header title="Configurações" />
        <VoidContent />
      </div>
    </section>
  );
}

export default Settings;
