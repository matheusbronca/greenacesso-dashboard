import React from 'react';
import '../../styles/Components/Common.css';
import Header from '../common/Header';
import VoidContent from '../common/VoidContent';

function Home() {
  return (
    <section>
      <div style={{height: '100%'}}>
        <Header title="Home" />
        <VoidContent />
      </div>
    </section>
  );
}

export default Home;
