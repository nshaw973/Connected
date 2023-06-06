import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/Homepage";  
import CandidatePage from "./pages/CandidatePage";
import MainPage from './pages/MainPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import JobsPage from './pages/JobsPage';
//Pages
import Login from './pages/Login';
import Signup from './pages/Signup';
// Styling
import './index.css';



const App = () => {

  const [currentPage, setCurrentPage] = useState('MainPage');
  const renderPage = () => {
    switch (currentPage) {
      case 'MainPage':
        return <HomePage />;
      case 'Login':
        return <Login />;
      case 'Signup':
        return <Signup />;
      case 'About':
        return <AboutPage />;
      case 'HomePage':
        return <HomePage />;
      case 'CandidatePage':
        return <CandidatePage />;
      case 'JobsPage':
        return <JobsPage />;
      default:
        return <h1> 404 Page Not Found</h1>
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <>
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      <Footer />
    </>
  );
};

export default App;
