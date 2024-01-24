// components/StudentProfile.js

import React from 'react';

const StudentProfile = ({ student }) => {
  return (
    <div>
      <h2>{student.name}</h2>
      <p>Class: {student.class}</p>
       {/* other student details */}
    </div>
  );
};

export default StudentProfile;
