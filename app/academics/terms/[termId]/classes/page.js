'use client';
// pages/academics/terms/[termId]/classes/index.js

import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import ClassList from '@/components/academics/ClassList';
// import { fetchClassesForTerm } from '../../../../api';

const ClassesPage = () => {
    const [classes, setClasses] = useState([]);
    const params = useParams();
    const router = useRouter();
    const {termId} = params;
    // const { termId } = router.query;
  
    useEffect(() => {
      // Ensure that the termId is defined before fetching data
      if (termId) {
        // fetchClassesForTerm(termId).then(data => setClasses(data));
        // Mock data
        setClasses([
          { id: 1, name: 'Class 1A' },
          // ... other classes
        ]);
      }
    }, [termId]); // termId is now part of the dependency array

    const handleSelectClass = (classId) => {
        router.push(`/academics/terms/${termId}/classes/${classId}/learning-areas`);
      };
  
    return (
      <div>
        <h1>Classes</h1>
        <ClassList classes={classes} onSelectClass={handleSelectClass}/>
      </div>
    );
  };
  
  export default ClassesPage;
