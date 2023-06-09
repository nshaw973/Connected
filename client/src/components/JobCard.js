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
        
        <div className="stat">
          <div className="stat-title">{jobs.agency}</div>
          <div className="stat-value">{jobs.title}</div>
          <div className="stat-actions">
          <button className="btn btn-sm btn-success">Close Job Applications</button>
          <button className="btn btn-sm">Edit Job Posting</button> 
            <button className="btn btn-sm">Delete</button>
          </div>
        </div>
        
        <div className="stat">
          <div className="stat-title">Current # of Applications</div>
          <div className="stat-value">27</div>
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

