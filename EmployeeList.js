import React, { useEffect, useState } from 'react';
import axios from 'axios';

const EmployeeList = () => {

  const [employees, setEmployees] = useState([]);
  const [search, setSearch] = useState('');

  const fetchEmployees = async () => {

    try {

      const res = await axios.get(
        'http://localhost:5000/api/employees'
      );

      setEmployees(res.data);

    } catch (error) {

      console.log(error);
    }
  };

  const deleteEmployee = async (id) => {

    try {

      await axios.delete(
        `http://localhost:5000/api/employees/${id}`
      );

      fetchEmployees();

    } catch (error) {

      console.log(error);
    }
  };

  useEffect(() => {

    fetchEmployees();

  }, []);

  return (

    <div>

      <input
        type="text"
        placeholder="🔍 Search Employee"
        className="search"
        onChange={(e) => setSearch(e.target.value)}
      />

      <h2>Employee List</h2>

      {

        employees

          .filter((emp) =>

            emp.name
              .toLowerCase()
              .includes(search.toLowerCase())

          )

          .map((emp) => (

            <div
              key={emp._id}
              className="employee-card"
            >

              <h3>{emp.name}</h3>

              <p>📧 {emp.email}</p>

              <p>🏢 {emp.department}</p>

              <p>💰 ₹ {emp.salary}</p>

              <div className="actions">

                <button className="edit-btn">
                  Edit
                </button>

                <button
                  className="delete-btn"
                  onClick={() => deleteEmployee(emp._id)}
                >
                  Delete
                </button>

              </div>

            </div>
          ))
      }

    </div>
  );
};

export default EmployeeList;