import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-800 via-violet-900 to-purple-800 ">
      <div className="max-w-7xl mx-auto py-12 px-2 sm:px-6 lg:px-8">
        <div className="flex justify-center space-x-6">
          <Link
            to="/"
            className="text-white font-semibold"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-white font-semibold"
          >
            About
          </Link>
          <Link
            to="/jobs"
            className="text-white font-semibold"
          >
            Jobs
          </Link>
          <Link
            to="/candidates"
            className="text-white font-semibold"
          >
            Featured Candidates
          </Link>
          <Link
            to="/contact"
            className="text-white font-semibold"
          >
            Contact
          </Link>
          <Link
            to="/policy"
            className="text-white font-semibold"
          >
            Privacy Policy
          </Link>
          <Link
            to="/donate"
            className="text-white font-semibold"
          >
            Donate
          </Link>
        </div>
        <div className="mt-8 flex justify-center space-x-6">
          <Link
            to="www.facebook.com"
            className="text-white font-semibold"
          >
            Facebook
          </Link>
          <Link
            to="www.twitter.com"
            className="text-white font-semibold"
          >
            Twitter
          </Link>
          <Link
            to="www.instragram.com"
            className="text-white font-semibold"
          >
            Instagram
          </Link>
        </div>
        <div className="mt-8 text-center text-white text-sm">
          &copy; {new Date().getFullYear()} Connected. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
