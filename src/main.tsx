import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'jotai';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NotFound } from './NotFound';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <Router>
      <Provider>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Provider>
    </Router>
  </React.StrictMode>
);
