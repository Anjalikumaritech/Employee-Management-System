const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/employees');

const EmployeeSchema = new mongoose.Schema({
  name: String,
  email: String,
  department: String,
  salary: Number
});

const Employee = mongoose.model('Employee', EmployeeSchema);

// Create Employee
app.post('/employees', async (req, res) => {
  const employee = await Employee.create(req.body);
  res.json(employee);
});

// Get Employees
app.get('/employees', async (req, res) => {
  const employees = await Employee.find();
  res.json(employees);
});

// Delete Employee
app.delete('/employees/:id', async (req, res) => {
  await Employee.findByIdAndDelete(req.params.id);
  res.json({ message: 'Deleted' });
});

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
