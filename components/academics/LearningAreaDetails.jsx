// components/academics/LearningAreaDetails.js

import React from 'react';

const LearningAreaDetails = ({ learningArea }) => {
  if (!learningArea) return <div>Select a learning area to see details.</div>;

  return (
    <div>
      <h3>{learningArea.name}</h3>
      <p>Course Book: {learningArea.courseBook}</p>
      <p>Teachers:</p>
      <ul>
        {learningArea.teachers.map((teacher) => (
            <li key={teacher.id}>{teacher.name}</li>
        ))}
        </ul>
    </div>
  );
};

export default LearningAreaDetails;
