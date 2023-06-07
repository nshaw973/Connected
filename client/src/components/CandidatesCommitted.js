import React from 'react';
import Candidate from './Candidate';
import candidateData from '../placeholders/candidateData';
import { Container, Row, Col, Card } from 'react-bootstrap'

function CandidatesCommitted() {
  // Filter the candidateData array to only include committed candidates
  const committedCandidates = candidateData.filter(candidate => candidate.isCommitted);

  return (
    <div className="Candidatebackground">
      <div className="Candidate-list">
        {committedCandidates.map((candidate, index) => (
          <Col key={candidate.jobsId} style={{ paddingLeft: "40px", paddingRight: "40px", paddingBottom: "40px" }}>
            <Card key={candidate.jobsId} border='dark'>
              <Container fluid className="Candidate-section">
                <Container>
                  <Row style={{ justifyContent: "center", paddingBottom: "40px" }}>
                    <div className="textbackground row">

                      <Col md={4} className="Candidate-card">
                        <Candidate
                          key={index}
                          name={candidate.name}
                          title={candidate.title}
                          image={candidate.image}
                          deployedLink={candidate.deployedLink}
                          githubLink={candidate.githubLink}
                        />
                      </Col>
                    </div>
                    <br />
                    <br />
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

export default CandidatesCommitted;
