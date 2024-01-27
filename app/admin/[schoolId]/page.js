'use client';

// pages/admin/schools/[schoolId].js
import { useParams } from 'next/navigation';
import Link from 'next/link';

const SchoolDetails = () => {
  const params = useParams();
  const { schoolId } = params; 

  // Dummy data for school names, replace with actual data retrieval logic
  const schoolName = {
    'school-1': 'Greenwood International',
    'school-2': 'Riverside Academy',
    'school-3': 'Hilltop Public School'
  }[schoolId];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-8">{schoolName || 'School'} Details</h1>
      <p className="text-xl mb-4">You have selected school with ID: {schoolId}</p>

      {/* Menu for Modules */}
      <div className="w-full max-w-xs text-center">
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h2 className="text-lg font-semibold mb-4">Modules</h2>
          <Link href={`/academics/terms`} className="block py-2 hover:bg-gray-200">Academics</Link>
          <Link href={`/students`} className="block py-2 hover:bg-gray-200">Students</Link>
          <Link href={`/finance`} className="block py-2 hover:bg-gray-200">Finance</Link>
          <Link href={`/hr`} className="block py-2 hover:bg-gray-200">HR</Link>
        </div>
      </div>
    </div>
  );
};

export default SchoolDetails;
