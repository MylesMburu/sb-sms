'use client';

// pages/academics/terms/[termId]/classes/[classId]/learning-areas/index.js

import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import LearningAreaList from '@/components/academics/LearningAreaList';
// import { fetchLearningAreasForClass } from '../../../../../api';

const LearningAreasPage = () => {
  const [learningAreas, setLearningAreas] = useState([]);
  const router = useRouter();
  const params = useParams();
  const { termId, classId } = params;

  useEffect(() => {
    if (classId) {
      // fetchLearningAreasForClass(classId).then(data => setLearningAreas(data));
      // Mock data
      setLearningAreas([
        { id: 1, name: 'Mathematics' },
        { id: 2, name: 'English' },
        { id: 3, name: 'Science' },
        { id: 4, name: 'Kiswahili'},
      ]);
    }
  }, [classId]);

  return (
    <div>
      <h1>Learning Areas</h1>
      <LearningAreaList learningAreas={learningAreas} />
    </div>
  );
};

export default LearningAreasPage;
