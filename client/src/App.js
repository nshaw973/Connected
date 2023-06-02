import React from "react";
import MainPage from "./components/MainPage";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/Homepage";  
import CandidatePage from "./pages/CandidatePage";

import './index.css'


const App = () => {

  const [currentPage, setCurrentPage] = useState('MainPage');
  const renderPage = () => {
    switch (currentPage) {
      case 'MainPage':
        return <MainPage />;
      case 'Login':
        return <Login />;
      case 'Signup':
        return <Signup />
      default:
        return <h1> 404 Page Not Found</h1>
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <>
      {/* <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      <Footer /> */}
      {/* <AboutPage /> */}
      {/* <HomePage /> */}
      <CandidatePage />
    </>
  );
};

export default App;
