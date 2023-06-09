import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
// import Candidate from '../components/Candidate';
// import candidateData from '../placeholders/candidateData';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useQuery } from '@apollo/client';
import { QUERY_USER, QUERY_ME } from '../utils/queries';

import Auth from '../utils/auth';
import CandidatePage from './CandidatePage';

function RecruiterDashPage() {
  const { username: userParam } = useParams();

  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  });

  const user = data?.me || data?.user || {};
  if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    return <Navigate to="/myportal" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user?.username) {
    return (
      <h4>
        You need to be logged in to see this. Use the navigation links above to
        sign up or log in!
      </h4>
    );
  }
  return (
    <>
      <h1>Recruiter Dashboard</h1>
      <br />

      <h3>My Job Postings</h3>
      <br />

      <h3>Candidates Applied</h3>
      {/* <CandidatePage /> */}
      <br />

      <h3>Candidates Submitted to Partners</h3>
      <br />
    </>
  );
}

export default RecruiterDashPage;
