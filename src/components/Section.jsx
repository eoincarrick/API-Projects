import React, { useState } from 'react';
import { Dashboard, Navbar, Content } from './index';
import '../styles/Section.css';

const Section = () => {
  const [currentTab, setCurrentTab] = useState('1');
  return (
    <section className='sectionContainer'>
      <div className='sectionHeader'>
        <Navbar />
      </div>
      <div className='sectionMain'>
        <div className='SectionTab'>
          <Dashboard currentTab={currentTab} setCurrentTab={setCurrentTab} />
        </div>
        <div className='sectionContent'>
          <Content currentTab={currentTab} setCurrentTab={setCurrentTab} />
        </div>
      </div>
    </section>
  );
};

export default Section;
