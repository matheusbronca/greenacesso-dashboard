import React from 'react';
import '../../../styles/Components/Common.css';
import Header from '../../common/Header';
import VoidContent from '../../common/VoidContent';

function LotsBook() {
  return (
    <section>
      <div style={{height: '100%'}}>
        <Header title="Livro de Lotes" />
        <VoidContent />
      </div>
    </section>
  );
}

export default LotsBook;
