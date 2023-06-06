import React, { useState } from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import AboutPage from './pages/AboutPage';
import HomePage from './pages/Homepage';
import CandidatePage from './pages/CandidatePage';
import MainPage from './pages/MainPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
//Pages
import Login from './pages/Login';
import Signup from './pages/Signup';
// Styling
import './index.css';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

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
      case 'CandidatePage':
        return <CandidatePage />;
      default:
        return <h1> 404 Page Not Found</h1>;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <>
      <ApolloProvider client={client}>
        <div className="flex flex-col min-h-screen">
          <Navbar
            currentPage={currentPage}
            handlePageChange={handlePageChange}
          />
          <section className="flex flex-col flex-grow">{renderPage()}</section>
          <Footer />
        </div>
      </ApolloProvider>
    </>
  );
};

export default App;
