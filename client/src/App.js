import React, { useState } from 'react';

import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/Homepage";  
import CandidatePage from "./pages/CandidatePage";
import MainPage from './pages/MainPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
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
        return <MainPage />;
      case 'Login':
        return <Login />;
      case 'Signup':
        return <Signup />;
      case 'About':
        return <AboutPage />;
      case 'HomePage':
        return <HomePage />;
      case 'CandidatePage'
        return <CandidatePage />;
      default:
        return <h1> 404 Page Not Found</h1>;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <>
      <div className='flex flex-col min-h-screen'>
        <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
        <section className="flex flex-col flex-grow">{renderPage()}</section>
        <Footer />
      </div>
    </>
  );
};

export default App;
