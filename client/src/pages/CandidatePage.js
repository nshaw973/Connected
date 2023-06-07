import React from 'react';
import Candidate from '../components/Candidate';
import candidateData from '../placeholders/candidateData';
import { Container, Row, Col, Card } from 'react-bootstrap'

// import '../styles/style.css';

// import './App.css';

function CandidatePage() {
      return (
        <div className="Candidatebackground">
        <h1>Featured Candidates</h1>
        <div className="Candidate-list"> 
          {candidateData.map((Candidates, index) => (
          <Col key={Candidates.jobsId} style={{ paddingLeft: "40px",paddingRight: "40px", paddingBottom: "40px" }}>
             <Card key={Candidate.jobsId} border='dark' >
              <Container fluid className="Candidate-section">
                <Container>
                  <Row style={{ justifyContent: "center", paddingBottom: "40px" }}>
                    <div className="textbackground row"> 
    
                      <Col md={4} className="Candidate-card">
                      <Candidate
                        key={index}
                        name={Candidates.name}
                        title={Candidates.title}
                        image={Candidates.image}
                        deployedLink={Candidates.deployedLink}
                        githubLink={Candidates.githubLink}
                      />
                      </Col>
                    </div>
                    <br/>
                    <br/>
                  </Row>
                </Container>
              </Container>
            </Card>
          </Col>  

          ))}
        </div>
      </div>
      );
  }


  export default CandidatePage;

  










