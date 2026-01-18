import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createRouter } from '@tanstack/react-router';
import './index.css';
import { routeTree } from './routeTree.gen';

// Create the router instance
const router = createRouter({
  routeTree,
  defaultNotFoundComponent: () => {
    // Redirect unmatched routes to home
    window.location.href = '/';
    return null;
  },
});

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
