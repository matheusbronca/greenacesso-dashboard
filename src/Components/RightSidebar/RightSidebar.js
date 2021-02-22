import React from 'react';
import '../../styles/Components/RightSidebar.css';
import AccessFlowCard from './AccessFlowCard';
import ProfileCard from './ProfileCard';
import { flowData, residentsFlowData } from './AcessFlowData';

const RightSidebar = () => {
  return (
    <>
      <div>
        <ProfileCard />
        <AccessFlowCard data={[flowData]} />
        <AccessFlowCard data={[residentsFlowData]} title="Últimos Acessos" />
      </div>
    </>
  );
};

export default RightSidebar;
