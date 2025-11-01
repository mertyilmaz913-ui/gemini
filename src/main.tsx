import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './style.css';

import LandingPage from './pages/LandingPage';
import MarketplacePage from './pages/MarketplacePage';
import VideoCallPage from './pages/VideoCallPage';
import UserProfilePage from './pages/UserProfilePage';
import ExpertProfilePage from './pages/ExpertProfilePage';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
  },
  {
    path: '/marketplace',
    element: <MarketplacePage />,
  },
  {
    path: '/call',
    element: <VideoCallPage />,
  },
  {
    path: '/profile',
    element: <UserProfilePage />,
  },
  {
    path: '/expert-profile',
    element: <ExpertProfilePage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/dashboard',
    element: <DashboardPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
