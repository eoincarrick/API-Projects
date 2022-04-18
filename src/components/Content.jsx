import React from 'react';
import { TabContent } from '../data';

const Content = ({ currentTab }) => {
  return (
    <div>
      <TabContent identifier='1' currentTab={currentTab}>
        <div className='contentContainer'>
          <h1>Sample Text Header</h1>
          <img className='ll' src={Image} alt='sdss' />
        </div>
      </TabContent>
      <TabContent identifier='2' currentTab={currentTab}>
        <div className='contentContainer'>
          <h1>Eoin Carrick</h1>
          <img className='ll' src={Image} alt='sdss' />
        </div>
      </TabContent>
    </div>
  );
};

export default Content;
