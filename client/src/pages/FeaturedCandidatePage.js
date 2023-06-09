import React from 'react';
import Candidate from '../components/Candidate';
import candidateData from '../placeholders/candidateData';
import { Container, Row, Col, Card } from 'react-bootstrap'

import '../styles/styles.css';

// import './App.css';

function FeaturedCandidatePage() {
      return (
        <div className="Candidatebackground">
        <h1>Featured Candidates</h1>
        <br/>
        <br/>
        <br/>
        <div className="Candidate-list row"> 
          {candidateData.map((Candidates, index) => (
          <Col key={Candidates.jobsId} class={`col-md-3`}>
             <Card key={Candidate.jobsId}  >
             <Candidate
                key={index}
                name={Candidates.name}
                title={Candidates.title}
                image={Candidates.image}
                deployedLink={Candidates.deployedLink}
                githubLink={Candidates.githubLink}
              />
            </Card>
          </Col>  

          ))}
        </div>
      </div>
      );
  }


  export default FeaturedCandidatePage;








