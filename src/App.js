import React from 'react';
import { Main } from './components';
import { Routes, Route } from 'react-router-dom';
import './styles/App.css';
import About from './pages/About';
import Contact from './pages/Contact';
import CreateAccount from './pages/CreateAccount';

const App = () => {
  return (
    <React.Fragment>
      <Main />
      <Routes>
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/create-account' element={<CreateAccount />} />
      </Routes>
    </React.Fragment>
  );
};

export default App;
