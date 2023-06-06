// import React from 'react';
// // import '../styles/style.css';
// import { Container } from 'react-bootstrap';

import React, { useState, useEffect } from 'react';
import {
  Container,
  Col,
  Form,
  Button,
  Card,
  Row
} from 'react-bootstrap';
import searchedJobsData from '../placeholders/searchedJobsData';
// import Auth from '../utils/auth';


function JobsPage() {
    return (
        <>
        <Container>
            <h1> Jobs Page</h1> 

        </Container>

        <Container>
        <h2 className='pt-5'>
        {/* {searchedjobss.length
            ? `Viewing ${searchedjobss.length} results:`
            : 'Search for a jobs to begin'} */}
        Current Jobs
        </h2>
        <Row>
        {searchedJobsData.map((jobs) => {
            return (
            <Col key={jobs.jobsId} md="4">
                <Card key={jobs.jobsId} border='dark'>
            
                <Card.Body>

                    <Card.Title>{jobs.title}</Card.Title>
                    <p className='small'>Recruiter: {jobs.recruiterName}</p>
                    <p className='small'>Agency: {jobs.agency}</p>
                    <Card.Text>{jobs.description}</Card.Text>

                    {/* {Auth.loggedIn() && (
                    <Button
                        disabled={savedjobsIds?.some((savedjobsId) => savedjobsId === jobs.jobsId)}
                        className='btn-block btn-info'
                        onClick={() => handleSavejobs(jobs.jobsId)}>
                        {savedjobsIds?.some((savedjobsId) => savedjobsId === jobs.jobsId)
                        ? 'This jobs has already been saved!'
                        : 'Save this jobs!'}
                    </Button>

                    )} */}
                </Card.Body>
                </Card>
            </Col>
            );
        })}
        </Row>
        </Container>
        </>
        
    );
}

export default JobsPage;