import React from 'react';
import Candidate from './Candidate';
import candidateData from '../placeholders/candidateData';
import { Container, Row, Col, Card } from 'react-bootstrap';

function CandidatesSubmitted() {
  // Filter the candidateData array to only include candidates who have submitted
  const submittedCandidates = candidateData.filter(candidate => candidate.isSubmitted);

  return (
    <div className="Candidatebackground">
    <div className="Candidate-list row">
      {submittedCandidates.map((candidate, index) => (
        <Col key={candidate.jobsId}  className="Candidate-card">
              <div md={3} >
                      <Candidate
                        key={index}
                        name={candidate.name}
                        title={candidate.title}
                        image={candidate.image}
                        deployedLink={candidate.deployedLink}
                        githubLink={candidate.githubLink}
                      />
               </div>
        </Col>
      ))}
    </div>
  </div>
  );
}

export default CandidatesSubmitted;
