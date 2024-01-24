'use client';
// academics/terms/page.js

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import TermList from '@/components/academics/TermList';
// import { fetchTerms } from '../../../api';

const TermsPage = () => {
  const [terms, setTerms] = useState([]);
  const router = useRouter();

  useEffect(() => {
    // fetchTerms().then(data => setTerms(data));
    // Mock data
    setTerms([
      { id: 1, name: 'Term 1', startDate: '2024-01-01', endDate: '2024-04-30' },
      // ... other terms
    ]);
  }, []);

  const handleSelectTerm = (termId) => {
    router.push(`/academics/terms/${termId}/classes`);
  };

  return (
    <div>
      <h1>Academic Terms</h1>
      <TermList terms={terms} onSelectTerm={handleSelectTerm} />
    </div>
  );
};

export default TermsPage;
