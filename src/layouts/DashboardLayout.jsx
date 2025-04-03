import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/common/Sidebar';
import FooterComponent from '../components/common/Footer';
import './DashboardLayout.css'; // Optional: custom styling for layout

const DashboardLayout = () => {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="dashboard-content">
        <Outlet />
      </div>
      
    </div>
  );
};

export default DashboardLayout;
