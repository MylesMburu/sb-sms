'use client'

// pages/admin/schools.js
import Link from 'next/link';

const schools = [
  { id: 'school-1', name: 'Greenwood International' },
  { id: 'school-2', name: 'Riverside Academy' },
  { id: 'school-3', name: 'Hilltop Public School' },
];

export default function ChooseSchool() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-8">Select a School</h1>
      <div className="space-y-4">
        {schools.map((school) => (
          <Link key={school.id} href={`/admin/${school.id}`} className="block p-4 bg-white rounded shadow-md w-64 text-center hover:bg-blue-100">
             
              {school.name}
           
          </Link>
        ))}
      </div>
    </div>
  );
}
