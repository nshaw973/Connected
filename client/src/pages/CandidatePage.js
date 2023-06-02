import React, { useState } from 'react';
import Candidate from '../components/Candidate';
import candidateData from '../placeholders/candidateData';
import { Container, Row, Col } from 'react-bootstrap'

// import '../styles/style.css';

// import './App.css';

function CandidatePage() {
      return (
        <div className="Candidatebackground">
        <h1>Featured Candidates</h1>
        <div className="Candidate-list"> 
          {candidateData.map((Candidates, index) => (
          <Container fluid className="Candidate-section">
            <Container>
              <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                <div className="textbackground row"> 
 
                  <Col md={4} className="Candidate-card">
                  <Candidate
                    key={index}
                    title={Candidates.title}
                    image={Candidates.image}
                    deployedLink={Candidates.deployedLink}
                    githubLink={Candidates.githubLink}
                  />
                  </Col>
                </div>
              </Row>
            </Container>
          </Container>
          ))}
        </div>
      </div>
      );
  }


  export default CandidatePage;

  










