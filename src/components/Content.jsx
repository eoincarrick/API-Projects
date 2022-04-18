import React from 'react';
import { TabContent } from '../data';
import { QuotesCard } from './index';

const Content = ({ currentTab }) => {
  return (
    <div className='contentContainer'>
      <TabContent identifier='1' currentTab={currentTab}>
        <div className='content'>
          <QuotesCard />
        </div>
      </TabContent>
      <TabContent identifier='2' currentTab={currentTab}>
        <div className='content'>
          <h1>Eoin Carrick</h1>
        </div>
      </TabContent>
    </div>
  );
};

export default Content;
