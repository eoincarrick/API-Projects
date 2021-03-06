import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApiDataContext } from './context/ApiDataContext';

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(
  <Router>
    <Routes>
      <Route
        path='*'
        element={
          <ApiDataContext>
            <App />
          </ApiDataContext>
        }
      />
    </Routes>
  </Router>
);
