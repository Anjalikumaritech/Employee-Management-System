import React, { useState } from 'react';
import axios from 'axios';

const EmployeeForm = () => {

  const [employee, setEmployee] = useState({
    name: '',
    email: '',
    department: '',
    salary: '',
  });

  const handleChange = (e) => {

    setEmployee({
      ...employee,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await axios.post(
        'http://localhost:5000/api/employees',
        employee
      );

      alert('Employee Added Successfully');

      window.location.reload();

    } catch (error) {

      console.log(error);
    }
  };

  return (

    <form onSubmit={handleSubmit}>

      <input
        type="text"
        name="name"
        placeholder="Enter Employee Name"
        onChange={handleChange}
        required
      />

      <input
        type="email"
        name="email"
        placeholder="Enter Employee Email"
        onChange={handleChange}
        required
      />

      <input
        type="text"
        name="department"
        placeholder="Enter Department"
        onChange={handleChange}
        required
      />

      <input
        type="number"
        name="salary"
        placeholder="Enter Salary"
        onChange={handleChange}
        required
      />

      <button type="submit">
        Add Employee
      </button>

    </form>
  );
};

export default EmployeeForm;