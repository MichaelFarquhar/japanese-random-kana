import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RecoilRoot } from 'recoil';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NotFound } from './NotFound';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <React.StrictMode>
        <Router>
            <RecoilRoot>
                <Routes>
                    <Route path="/" element={<App />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </RecoilRoot>
        </Router>
    </React.StrictMode>
);
