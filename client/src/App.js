import React from "react";

import MainPage from "./pages/MainPage";
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import './index.css'



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
  return (
    <>
    <Navbar />
    <MainPage />
    <Footer />
    </>
  )
}

export default App;