'use client'

import React, { useState } from 'react';
import Link from 'next/link';

export const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true); // This should be replaced with your auth state
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  // Placeholder function for logging out
  const handleLogout = () => {
    // Integrate with your auth logic to log out
    setIsLoggedIn(false);
  };

  return (
    <div className="flex justify-between items-center py-4 px-8 bg-blue-500 text-white">
      <div className="text-xl font-bold">SB-SMS</div>
      {isLoggedIn ? (
        <div className="flex items-center">
          {/* Modules Dropdown */}
          <div className="relative mr-4">
            <button onClick={toggleDropdown} className="font-semibold py-2 px-4 rounded inline-flex items-center">
              Modules
              <svg className="fill-current h-4 w-4 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M5.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.576 0 0.436 0.445 0.408 1.197 0 1.643l-4.695 4.502c-0.533 0.481-1.408 0.481-1.942 0l-4.695-4.502c-0.408-0.446-0.436-1.198 0-1.643z"/>
              </svg>
            </button>
            {dropdownOpen && (
              <ul className="absolute right-0 w-48 bg-white text-blue-900 rounded shadow-md mt-2">
                <li className="px-4 py-2 hover:bg-blue-100">
                  <Link href="/academics/terms">Dashboard</Link>
                </li>
                <li className="px-4 py-2 hover:bg-blue-100">
                  <Link href="/academics/terms">Academics</Link>
                </li>
                <li className="px-4 py-2 hover:bg-blue-100">
                  <Link href="/students">Students</Link>
                </li>
                <li className="px-4 py-2 hover:bg-blue-100">
                  <Link href="/finance">Finance</Link>
                </li>
                <li className="px-4 py-2 hover:bg-blue-100">
                  <Link href="/hr">HR</Link>
                </li>
              </ul>
            )}
          </div>

          {/* Sign Out Button */}
          <button
            onClick={handleLogout}
            className="bg-red-400 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg"
          >
            Sign Out
          </button>
        </div>
      ) : (
        <div>
          <Link href="/login">
            <button className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-l">
              Login
            </button>
          </Link>
          <Link href="/signup">
            <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-r">
              Sign Up
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};
