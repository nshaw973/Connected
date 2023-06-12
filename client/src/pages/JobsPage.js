// import React from 'react';
// // import '../styles/style.css';
// import { Container } from 'react-bootstrap';

import React, { useState, useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { Container, Col, Form, Button, Card, Row } from 'react-bootstrap';
import searchedJobsData from '../placeholders/searchedJobsData';
import { ADD_TO_FAVORITES } from '../utils/mutations';

import Auth from '../utils/auth';

import { QUERY_GET_ALL_JOBS } from '../utils/queries';
import { useQuery } from '@apollo/client';

const JobsPage = () => {
  const { loading, data } = useQuery(QUERY_GET_ALL_JOBS);
  const jobs = data?.jobs || [];
  const [addToFavorites] = useMutation(ADD_TO_FAVORITES);
  const handleAddToFavorites = async (jobId) => {
    try {
      const { data } = await addToFavorites({ variables: { jobId } });
      console.log('User updated:', data.addToFavorites);
      // Handle success
    } catch (error) {
      console.error('Failed to update favorites:', error.message);
      // Handle error
    }
  };
  return (
    <>
      <Container>
        <h1> Jobs Page</h1>
      </Container>
      <Container>
        <h2 className="pt-5">Current Jobs:</h2>
        <Row>
          {jobs.map((jobs) => {
            return (
              <Col
                key={jobs._id}
                md="4"
                style={{ paddingRight: '40px', paddingBottom: '40px' }}
              >
                <Card key={jobs._id} border="dark">
                  <Card.Body>
                    <Card.Title>{jobs.title}</Card.Title>
                    <p className="small">Recruiter: {jobs.recruiterName}</p>
                    <p className="small">Agency: {jobs.company}</p>
                    <p className="small">salary: {jobs.salary}</p>
                    <Card.Text>{jobs.description}</Card.Text>

                    {/* {Auth.loggedIn() && ( */}
                    <Button
                      // disabled={savedjobsIds?.some((savedjobsId) => savedjobsId === jobs.jobsId)}
                      className="btn-block btn-info"
                      onClick={() => handleAddToFavorites(jobs._id)}
                    >
                      {searchedJobsData?.some(
                        (savedjobsId) => savedjobsId === jobs._id
                      )
                        ? 'This jobs has already been saved!'
                        : 'Favorite this job'}
                    </Button>

                    {/* )}  */}
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};
export default JobsPage;
