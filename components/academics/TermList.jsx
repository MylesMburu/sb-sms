// components/academics/TermList.js

import React from 'react';

const TermList = ({ terms, onSelectTerm }) => {
  return (
    <div className="bg-white rounded shadow p-4">
      <h2 className="text-2xl font-semibold mb-4">Academic Terms</h2>
      <ul className="space-y-2">
        {terms.map(term => (
          <li
            key={term.id}
            onClick={() => onSelectTerm(term.id)}
            className="cursor-pointer hover:bg-gray-100 rounded-md p-2 transition duration-300 ease-in-out"
          >
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-lg font-medium">{term.name}</h3>
                <p className="text-sm text-gray-500">
                  {term.startDate} - {term.endDate}
                </p>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400 hover:text-blue-500 transition duration-300 ease-in-out"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 11.293a1 1 0 011.414 0L10 14.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TermList;
