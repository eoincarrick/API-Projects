import React, { useState } from 'react';
import { Dashboard, Navbar, Content } from './index';
import '../styles/Section.css';

const Section = () => {
  const [currentTab, setCurrentTab] = useState('1');
  return (
    <section className='sectionContainer'>
        div.
      <Dashboard currentTab={currentTab} setCurrentTab={setCurrentTab} />
      <Content currentTab={currentTab} setCurrentTab={setCurrentTab} />
    </section>
  );
};

export default Section;
