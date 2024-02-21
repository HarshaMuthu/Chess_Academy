// Dashboard.jsx
import React from 'react';
import '../assets/css/dash.css'; // Import your CSS file for styling

function Dashboard() {
  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <div className="stats">
        <div className="stat">
          <h2>Total Users</h2>
          <p>1000</p>
        </div>
        <div className="stat">
          <h2>Total Orders</h2>
          <p>500</p>
        </div>
        <div className="stat">
          <h2>Total Revenue</h2>
          <p>$10,000</p>
        </div>
      </div>
      <div className="charts">
        {/* Add charts or other visualizations here */}
        <p>Charts will go here</p>
      </div>
      <div className="notifications">
        {/* Display notifications or alerts */}
        <p>Notifications will appear here</p>
      </div>
    </div>
  );
}

export default Dashboard;
