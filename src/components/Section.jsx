import React, { useState, useEffect } from 'react';
import { Dashboard, Navbar, QuotesCard, Hashtags } from './index';
import { useDataContext } from '../context/ApiDataContext';
import { TabContent } from '../data';
import '../styles/Section.css';

const Section = () => {
  const [currentTab, setCurrentTab] = useState('1');
  const { quotes, getQuotes } = useDataContext();

  useEffect(() => {
    getQuotes();
  }, []);

  return (
    <section className='sectionContainer'>
      {/* <div className='sectionHeader'>
        <Navbar />
      </div> */}
      <div className='sectionMain'>
        <div className='SectionTab'>
          <Dashboard currentTab={currentTab} setCurrentTab={setCurrentTab} />
        </div>
        <React.Fragment>
          <TabContent identifier='1' currentTab={currentTab}>
            <Navbar />
            <div className='content'>{<QuotesCard quotes={quotes} />}</div>
          </TabContent>
          <TabContent identifier='2' currentTab={currentTab}>
            <Navbar />
            <div className='content'>
              <Hashtags />
            </div>
          </TabContent>
        </React.Fragment>
      </div>
    </section>
  );
};

export default Section;
