import React from 'react';
import Candidate from '../components/Candidate';
import candidateData from '../placeholders/candidateData';
import { Container, Row, Col, Card } from 'react-bootstrap'


import '../styles/style.css';

// import './App.css';

function FeaturedCandidatePage() {
      return (
        <div className="Candidatebackground">
        <h1>Featured Candidates</h1>
        <div className="Candidate-list row"> 
          {candidateData.map((Candidates, index) => (
          <Col key={Candidates.jobsId} md="3" class={`col col-md-3`}>
             <div key={Candidate.jobsId}  >
             <Candidate
                key={index}
                name={Candidates.name}
                title={Candidates.title}
                image={Candidates.image}
                deployedLink={Candidates.deployedLink}
                githubLink={Candidates.githubLink}
              />
            </div>
          </Col>  

          ))}
        </div>
      </div>
      );
  }


  export default FeaturedCandidatePage;








