import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import AboutPage from './pages/AboutPage';
import HomePage from './pages/Homepage';
import FeaturedCandidatePage from './pages/FeaturedCandidatePage';
import CandidateDashPage from './pages/CandidatesDashPage';
import RecruiterPage from './pages/RecruiterPage';
import RecruiterDashPage from './pages/RecruiterDashPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import JobsPage from './pages/JobsPage';
import Success from './pages/Success'
import Donate from './pages/DonationPage'
//Pages
import Login from './pages/Login';
import Signup from './pages/Signup';
// Styling
import './index.css';
import Portal from './pages/Portal';
import DeveloperPage from './pages/DeveloperPage';

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
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <div className="xapp flex flex-col min-h-screen overflow-hidden">
        <Router>
          <Navbar />
          <div className="flex justify-center items-center flex-col flex-grow cmpContainer home-background">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/jobs" element={<JobsPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/myportal" element={<Portal />} />
              <Route path="/myportal/recruiter" element={<RecruiterDashPage />} />
              <Route path="/myportal/developer" element={<CandidateDashPage />} />
              <Route path="/recruiter" element={<RecruiterPage />} />
              <Route path="/recruiter/:username" element={<RecruiterPage />} />
              <Route path="/developers" element={<FeaturedCandidatePage />} />
              <Route path="/developers/:username" element={<DeveloperPage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/donate" element={<Donate />} />
              <Route path="/success" element={<Success />} />
            </Routes>
          </div>
          <Footer />
        </Router>
      </div>
    </ApolloProvider>
  );
};

export default App;
