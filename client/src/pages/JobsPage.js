// import React from 'react';
// // import '../styles/style.css';
// import { Container } from 'react-bootstrap';

import React, { useState, useEffect } from 'react';
import { useMutation } from '@apollo/client';
import {
  Container,
  Col,
  Form,
  Button,
  Card,
  Row
} from 'react-bootstrap';
import searchedJobsData from '../placeholders/searchedJobsData';
// import { saveJobsIds, getSavedJobsIds } from '../utils/localStorage';

import Auth from '../utils/auth';

//
import { QUERY_GET_ALL_JOBS } from '../utils/queries';
import { useQuery } from '@apollo/client';  

const JobsPage = () => {
  // TODO: create state to hold saved JobsId values
//   const [savedJobsIds, setSavedJobsIds] = useState(getSavedJobsIds());
//   const [saveJobs] = useMutation(SAVE_JOBS);

const { loading, data } = useQuery(QUERY_GET_ALL_JOBS);
const jobs = data?.jobs || [];

const handleSaveJobs = async (jobsId) => {
    /***** 
    // find the jobs in `searchedjobss` state by the matching id
    const jobsToSave = searchedJobsData.find((jobs) => jobs.jobsId === jobsId);

    // get token
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
      
    }
    

    try {
      const response = await saveJobs({
        variables: { ...jobsToSave },
      });
      
      if (!response.ok) {
        throw new Error('something went wrong!');
      }

      // ++ if jobs successfully saves to user's account, save jobs id to state
    //   setSavedjobsIds([...savedjobsIds, jobsToSave.jobsId]);

    } catch (err) {
      console.error(err);
    }
    */
  };


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
        {jobs.map((jobs) => {
                return (
                <Col key={jobs.jobsId} md="4" style={{ paddingRight: "40px", paddingBottom: "40px" }}>
                    <Card key={jobs.jobsId} border='dark' >
                
                    <Card.Body>

                        <Card.Title>{jobs.title}</Card.Title>
                        <p className='small'>Recruiter: {jobs.recruiterName}</p>
                        <p className='small'>Agency: {jobs.company}</p>
                        <p className='small'>salary: {jobs.salary}</p>
                        <Card.Text>{jobs.description}</Card.Text>

                        {/* {Auth.loggedIn() && ( */}
                        <Button
                            // disabled={savedjobsIds?.some((savedjobsId) => savedjobsId === jobs.jobsId)}
                            className='btn-block btn-info'
                            onClick={() => handleSaveJobs(jobs.jobsId)}>
                            {searchedJobsData?.some((savedjobsId) => savedjobsId === jobs.jobsId)
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