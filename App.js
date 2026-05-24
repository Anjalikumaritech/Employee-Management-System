import React, { useState } from 'react';
import EmployeeForm from './components/EmployeeForm';
import EmployeeList from './components/EmployeeList';
import './styles.css';

function App() {

  const [darkMode, setDarkMode] = useState(false);

  return (

    <div className={darkMode ? 'dark' : 'light'}>

      <div className="container">

        <button
          className="dark-btn"
          onClick={() => setDarkMode(!darkMode)}
        >
          🌙 Dark Mode
        </button>

        <h1>Employee Management System</h1>

        <div className="dashboard">

          <div className="card">
            <h2>Total Employees</h2>
            <p>Manage Staff Efficiently</p>
          </div>

          <div className="card">
            <h2>Departments</h2>
            <p>HR • IT • Sales</p>
          </div>

          <div className="card">
            <h2>Status</h2>
            <p>System Active ✅</p>
          </div>

        </div>

        <EmployeeForm />

        <EmployeeList />

      </div>

    </div>
  );
}

export default App;