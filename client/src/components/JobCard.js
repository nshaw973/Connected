import React from 'react';

import searchedJobsData from '../placeholders/searchedJobsData';
import { Button, Col } from 'react-bootstrap';

function JobCard({ title }) {

  const myJobs = searchedJobsData.filter(jobs => jobs.agency === 'Robert Half');

  return (
    <>
    <div className="JobBackground">
      <div className="Job-list row">
    {myJobs.map((jobs, index) => (
      <Col>
        <div className="stats bg-primary text-primary-content">
        
        <div className="stat" >
          <div className="stat-title" style={{color: "white"}}>{jobs.agency}</div>
          <div className="stat-value" style={{color: "white"}}>{jobs.title}</div>
          <div className="stat-actions">
          <button className="btn btn-sm btn-success" style={{color: "white"}}>Close Job Applications</button>
          <button className="btn btn-sm" style={{color: "white"}}>Edit Job Posting</button> 
            <button className="btn btn-sm" style={{color: "white"}}>Delete</button>
          </div>
        </div>
        
        <div className="stat" >
          <div className="stat-title" style={{color: "white"}}>Current # of Applications</div>
          <div className="stat-value" style={{color: "white"}}>27</div>
          <div className="stat-actions">
          <button className="btn btn-sm btn-success">View Applications</button>
 
          </div>
        </div>
      </div>
      </Col>
    ))}
      </div>
    </div>
    <br></br>
    <div className="stats bg-primary text-primary-content">
        <div className="stat">
          <Button className="stat-value">Create a new job post</Button>
        </div>
      </div>

    <br></br>
    <br></br>
    </>
  );
}

export default JobCard;

