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
      {/* Table structure */}
      <div className='overflow-x-auto'>
        <table className='min-w-full bg-white rounded-lg border border-gray-200'>
          <thead className='bg-gray-100 border-b'>
            <tr>
              <th className='text-left py-3 px-4 uppercase font-semibold text-sm'>Admin No.</th>
              <th className='text-left py-3 px-4 uppercase font-semibold text-sm'>Name</th>
              <th className='text-left py-3 px-4 uppercase font-semibold text-sm'>Class</th>
            </tr>
          </thead>
          <tbody className='text-gray-700'>
            {students.map(student => (
              <tr key={student.id} 
                  onClick={() => handleStudentClick(student)} 
                  className='hover:bg-gray-100 cursor-pointer'>
                <td className='text-left py-2 px-4 border-b border-gray-200'>{student.id}</td>
                <td className='text-left py-2 px-4 border-b border-gray-200'>{student.name}</td>
                <td className='text-left py-2 px-4 border-b border-gray-200'>{student.class}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showModal && (
        <StudentModal 
          student={selectedStudent} 
          onClose={handleCloseModal} 
          // onEdit={/* edit logic here */}
          // onDelete={/* delete logic here */}
        />
      )}
    </div>
  );
};

export default StudentList;
