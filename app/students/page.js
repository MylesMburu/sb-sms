'use client';
// pages/students/index.js

import React, { useEffect, useState } from 'react';
import StudentList from '@/components/students/StudentList';
import AddStudentModal from '@/components/students/AddStudentModal';

// import { fetchStudents } from '../../api';

const StudentsPage = () => {
  const [students, setStudents] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const handleOpenModal = () => {
    setIsModalOpen(true);
  }

  return (
    <div>
      <div className='flex flex-col justify-center items-center md:flex-row md:justify-around py-3'>
        <h1 className='font-bold px-4 py-3 text-xl'>Grade 2</h1>
        <button onClick={handleOpenModal} className=" px-4 py-3 bg-blue-500 text-white rounded">Add Student</button>
      </div>
      <StudentList students={students} />
      <AddStudentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
    
  );
};

export default StudentsPage;
