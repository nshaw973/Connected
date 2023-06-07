import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';

const Navbar = ({ currentPage, handlePageChange }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const handleSearch = (event) => {
    event.preventDefault();
    // Perform search logic with the search term
    console.log('Search term:', searchTerm);
    // Reset the search term
    setSearchTerm('');
  };
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0"></div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a
                  href="/"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Home
                </a>

                <a
                  href="/jobs"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Find a Job
                </a>
              </div>
            </div>
          </div>
          <form
            onSubmit={handleSearch}
            className="relative md:ml-4 w-full sm:w-auto"
          >
            <input
              type="text"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              className="bg-gray-900 text-white rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Search..."
            />
            <button
              type="submit"
              className="absolute right-0 top-0 h-full px-4 text-gray-300 hover:bg-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 15l5-5m0 0l-5-5m5 5H4"
                />
              </svg>
            </button>
          </form>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              {Auth.loggedIn() ? (
                <>
                  <Link
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    to="/profile"
                  >
                    Portal
                  </Link>
                  <button className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" onClick={logout}>
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <a
                    href="/signup"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Sign Up
                  </a>
                  <a
                    href="/login"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Login
                  </a>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
