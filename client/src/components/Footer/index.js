import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-2 sm:px-6 lg:px-8">
        <div className="flex justify-center space-x-6">
          <Link
            to="/"
            className="text-gray-300 hover:text-white transition-colors duration-300"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-gray-300 hover:text-white transition-colors duration-300"
          >
            About
          </Link>
          <Link
            to="/jobs"
            className="text-gray-300 hover:text-white transition-colors duration-300"
          >
            Jobs
          </Link>
          <Link
            to="/featured-candidates"
            className="text-gray-300 hover:text-white transition-colors duration-300"
          >
            Featured Candidates
          </Link>
          <Link
            to="/contact"
            className="text-gray-300 hover:text-white transition-colors duration-300"
          >
            Contact
          </Link>
          <Link
            to="/policy"
            className="text-gray-300 hover:text-white transition-colors duration-300"
          >
            Privacy Policy
          </Link>
          <Link
            to="/donate"
            className="text-gray-300 hover:text-white transition-colors duration-300"
          >
            Donate
          </Link>
        </div>
        <div className="mt-8 flex justify-center space-x-6">
          <Link
            href="www.facebook.com"
            className="text-gray-300 hover:text-white transition-colors duration-300"
          >
            Facebook
          </Link>
          <Link
            href="www.twitter.com"
            className="text-gray-300 hover:text-white transition-colors duration-300"
          >
            Twitter
          </Link>
          <Link
            href="www.instragram.com"
            className="text-gray-300 hover:text-white transition-colors duration-300"
          >
            Instagram
          </Link>
        </div>
        <div className="mt-8 text-center text-gray-300 text-sm">
          &copy; {new Date().getFullYear()} Connected. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
