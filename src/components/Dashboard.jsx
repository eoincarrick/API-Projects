import React from 'react';
import '../styles/Dashboard.css';
import { FaBookReader, FaSlackHash } from 'react-icons/fa';
import { Tab } from '../data';

const Dashboard = ({ currentTab, setCurrentTab }) => {
  return (
    <div className='dashboard'>
      <div className='dashboardHeader'>
        <h2>Explore</h2>
      </div>
      <div className='tabContainer'>
        <div className='dashboardTab'>
          <Tab
            identifier='1'
            currentTab={currentTab}
            setCurrentTab={setCurrentTab}
          >
            <FaBookReader className='dashboardIcon' />
            <span>Quotes</span>
          </Tab>
        </div>
        <div className='dashboardTab'>
          <Tab
            identifier='2'
            currentTab={currentTab}
            setCurrentTab={setCurrentTab}
          >
            <FaSlackHash className='dashboardIcon' />
            <span>Hashtags</span>
          </Tab>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
