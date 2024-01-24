import React, { useState } from 'react';
import StudentModal from '@/components/students/StudentModal';

const StudentList = ({ students }) => {
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleStudentClick = student => {
    setSelectedStudent(student);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedStudent(null);
  };

  return (
    <div className='container mx-auto p-4'>
      <h2 className='text-2xl font-semibold text-gray-800 mb-4'>Students List</h2>
      <ul className='bg-white rounded-lg border border-gray-200 text-gray-900'>
        {students.map(student => (
          <li key={student.id} 
              onClick={() => handleStudentClick(student)} 
              className='px-6 py-2 border-b border-gray-200 cursor-pointer hover:bg-gray-100'>
            {student.name} - {student.class}
          </li>
        ))}
      </ul>

      {showModal && (
        <StudentModal 
          student={selectedStudent} 
          onClose={handleCloseModal} 
        //   onEdit={/* edit logic here */} 
        //   onDelete={/* delete logic here */}
        />
      )}
    </div>
  );
};

export default StudentList;
