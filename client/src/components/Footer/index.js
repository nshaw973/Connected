import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center space-x-6">
          <a
            href="/"
            className="text-gray-300 hover:text-white transition-colors duration-300"
          >
            Home
          </a>
          <a
            href="/about"
            className="text-gray-300 hover:text-white transition-colors duration-300"
          >
            About
          </a>
          <a
            href="/contact"
            className="text-gray-300 hover:text-white transition-colors duration-300"
          >
            Contact
          </a>
          <a
            href="/policy"
            className="text-gray-300 hover:text-white transition-colors duration-300"
          >
            Privacy Policy
          </a>
        </div>
        <div className="mt-8 flex justify-center space-x-6">
          <a
            href="www.facebook.com"
            className="text-gray-300 hover:text-white transition-colors duration-300"
          >
            Facebook
          </a>
          <a
            href="www.twitter.com"
            className="text-gray-300 hover:text-white transition-colors duration-300"
          >
            Twitter
          </a>
          <a
            href="www.instragram.com"
            className="text-gray-300 hover:text-white transition-colors duration-300"
          >
            Instagram
          </a>
        </div>
        <div className="mt-8 text-center text-gray-300 text-sm">
          &copy; {new Date().getFullYear()} Connected. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
