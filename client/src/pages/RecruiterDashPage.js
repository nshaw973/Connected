import React from 'react';
// import Candidate from '../components/Candidate';
// import candidateData from '../placeholders/candidateData';
import { Container, Row, Col, Card } from 'react-bootstrap'

// import '../styles/style.css';

// import './App.css';
import CandidatesCommitted from '../components/CandidatesCommitted';
import CandidatesSubmitted from '../components/CandidatesSubmitted';
import CandidatesPlaced from '../components/CandidatesPlaced';

function RecruiterDashPage() {
    return (
      <>
      
      <h1>Recruiter Dashboard</h1>
      <br/>

      <h3>My Job Postings</h3>
      <br/>

      <h3>Candidates Applied</h3>
      <CandidatesCommitted />
      <br/>

      <h3>Candidates Submitted to Partners</h3>
      <CandidatesSubmitted  />
      <br/>

      <h3>Candidates Placed</h3>
      <CandidatesPlaced  />
      <br/>


      </>
    );
  }


  export default RecruiterDashPage;

  










