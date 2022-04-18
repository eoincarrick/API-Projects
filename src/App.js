import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './styles/App.css';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import CreateAccount from './pages/CreateAccount';

const App = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/create-account' element={<CreateAccount />} />
      </Routes>
    </React.Fragment>
  );
};

export default App;
