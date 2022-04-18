import React from 'react';
import '../styles/Dashboard.css';
import { FaBookReader, FaSlackHash } from 'react-icons/fa';
import { Tab } from '../data';

const Dashboard = ({ currentTab, setCurrentTab }) => {
  return (
    <div className='dashboard'>
      <div className='header'>
        <h2>Explore</h2>
      </div>
      <div className='tabs'>
        <Tab
          className='tab'
          identifier='1'
          currentTab={currentTab}
          setCurrentTab={setCurrentTab}
        >
          <FaBookReader />
          <span>Quotes</span>
        </Tab>
        <Tab
          className='tab'
          identifier='2'
          currentTab={currentTab}
          setCurrentTab={setCurrentTab}
        >
          <FaSlackHash />
          <span>Hashtags</span>
        </Tab>
      </div>
    </div>
  );
};

export default Dashboard;
