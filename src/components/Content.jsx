import React from 'react';
import { TabContent } from '../data';
import { QuotesCard, Hashtags } from './index';

const Content = ({ currentTab }) => {
  return (
    <div className='content'>
      <TabContent identifier='1' currentTab={currentTab}>
        <QuotesCard />
        <QuotesCard />
        <QuotesCard />
        <QuotesCard />
      </TabContent>
      <TabContent identifier='2' currentTab={currentTab}>
        <Hashtags />
      </TabContent>
    </div>
  );
};

export default Content;
