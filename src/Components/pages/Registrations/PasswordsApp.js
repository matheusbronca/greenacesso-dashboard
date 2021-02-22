import React from 'react';
import '../../../styles/Components/Common.css';
import Header from '../../common/Header';
import VoidContent from '../../common/VoidContent';

function PasswordsApp() {
  return (
    <section>
      <div style={{height: '100%'}}>
        <Header title="Senhas do App" />
        <VoidContent />
      </div>
    </section>
  );
}

export default PasswordsApp;
