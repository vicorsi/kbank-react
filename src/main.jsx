import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Home from './routes/Home.jsx';
import Login from './routes/Login.jsx';
import Dashboard from './routes/Dashboard.jsx';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/', 
    element: <Home />
  },
  {
    path: '/login',
    element: <Login />
  },
  
  {
    path: '/app', 
    element: <Dashboard />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
