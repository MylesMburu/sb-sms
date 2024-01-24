// components/AddStudentForm.js

import React, { useState } from 'react';

const AddStudentForm = ({ onAdd }) => {
  const [student, setStudent] = useState({
    name: '',
    class: '',
    // ... other fields
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    onAdd(student);
  };

  const handleChange = (event) => {
    setStudent({ ...student, [event.target.name]: event.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Name:</label>
      <input type="text" name="name" value={student.name} onChange={handleChange} />
      
      <label>Class:</label>
      <input type="text" name="class" value={student.class} onChange={handleChange} />
      
      // ... other fields
      
      <button type="submit">Add Student</button>
    </form>
  );
};

export default AddStudentForm;
