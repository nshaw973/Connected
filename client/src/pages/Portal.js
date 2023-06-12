import React from 'react';
import { Navigate } from 'react-router-dom';
import Auth from '../utils/auth';
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';

function Portal() {
  const { loading, data } = useQuery(QUERY_ME);
  const user = data?.me || {};
 console.log(user)
  if (loading) {
    return <div>Loading...</div>;
  }
  if (!Auth.getProfile().data) {
    return <Navigate to="/"></Navigate>;
  }

  if (user.recruiter) {
    return <Navigate to="/myportal/recruiter"></Navigate>;
  }

  if (!user.recruiter) {
    return <Navigate to="/myportal/developer"></Navigate>;
  }
  return (
    <>
      <h1>Something went wrong</h1>
    </>
  );
}

export default Portal;
