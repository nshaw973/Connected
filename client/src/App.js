import React, { useState } from 'react';

import MainPage from './pages/MainPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
//Pages
import Login from './pages/Login';
import Signup from './pages/Signup';
// Styling
import './index.css';


// Once apollo is up and running, unComment this
/* 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'; */

/* 
const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),

}); 
*/

/* const App = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-center align-center min-100-vh bg-primary">
          <Routes>
            <Route 
              path="/" 
              element={<MainPage />}
            />
          </Routes>
        </div>
      </Router>
    </ApolloProvider>
  );
}; */

// Delete this once Apollo is running

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
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      <Footer />
    </>
  );
};

export default App;
