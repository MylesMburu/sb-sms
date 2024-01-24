'use client';
// pages/students/index.js

import React, { useEffect, useState } from 'react';
import StudentList from '@/components/students/StudentList';
// import { fetchStudents } from '../../api';

const StudentsPage = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    // fetchStudents().then(data => setStudents(data));
    // Mock data for now
    setStudents([
        { id: 1, name: 'John Doe', class: '10A' },
        { id: 2, name: 'Jane Smith', class: '10A' },
        { id: 3, name: 'Emily Jones', class: '10A' },
        { id: 4, name: 'Michael Brown', class: '10A' },
        { id: 5, name: 'Jessica Davis', class: '10A' },
        { id: 6, name: 'David Wilson', class: '10A' },
        { id: 7, name: 'Sarah Miller', class: '10A' },
        { id: 8, name: 'James Taylor', class: '10A' },
        { id: 9, name: 'Laura Anderson', class: '10A' },
        { id: 10, name: 'Robert Martinez', class: '10A' }
      ]);
  }, []);

  return (
    <div>
      <h1>Grade 2</h1>
      <StudentList students={students} />
    </div>
  );
};

export default StudentsPage;
