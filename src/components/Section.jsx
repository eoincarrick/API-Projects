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
        <Dashboard currentTab={currentTab} setCurrentTab={setCurrentTab} />
        <Content currentTab={currentTab} setCurrentTab={setCurrentTab} />
      </div>
    </section>
  );
};

export default Section;
