import React from 'react';
import { Link } from 'react-router-dom';

const Success = () => {
  return (
    <>
      <h1>Thank you for your Donation!</h1>
      <Link to="/">Return to Homepage</Link>
    </>
  );
};

export default Success;
