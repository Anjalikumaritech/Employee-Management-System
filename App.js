import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [employees, setEmployees] = useState([]);
  const [form, setForm] = useState({
    name: '',
    email: '',
    department: '',
    salary: ''
  });

  const fetchEmployees = async () => {
    const res = await axios.get('http://localhost:5000/employees');
    setEmployees(res.data);
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  const addEmployee = async () => {
    await axios.post('http://localhost:5000/employees', form);
    fetchEmployees();
  };

  const deleteEmployee = async (id) => {
    await axios.delete(`http://localhost:5000/employees/${id}`);
    fetchEmployees();
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Employee Management System</h1>

      <input placeholder="Name" onChange={(e) => setForm({...form, name: e.target.value})} />
      <input placeholder="Email" onChange={(e) => setForm({...form, email: e.target.value})} />
      <input placeholder="Department" onChange={(e) => setForm({...form, department: e.target.value})} />
      <input placeholder="Salary" onChange={(e) => setForm({...form, salary: e.target.value})} />

      <button onClick={addEmployee}>Add Employee</button>

      {employees.map((emp) => (
        <div key={emp._id} style={{ border: '1px solid gray', margin: '10px', padding: '10px' }}>
          <h3>{emp.name}</h3>
          <p>{emp.email}</p>
          <p>{emp.department}</p>
          <p>{emp.salary}</p>
          <button onClick={() => deleteEmployee(emp._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default App;
