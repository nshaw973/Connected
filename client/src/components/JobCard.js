// import React from 'react';

// import searchedJobsData from '../placeholders/searchedJobsData';
// import { Button, Col } from 'react-bootstrap';
// //
// import { QUERY_GET_ALL_JOBS } from '../utils/queries';
// import { useQuery } from '@apollo/client';  
// // import { getCurrentUser } from '../utils/auth';
// // import { getProfile } from '../utils/auth';
// import Auth from '../utils/auth';


// function JobCard({ title }) {
//   const { loading, data } = useQuery(QUERY_GET_ALL_JOBS);
//   const jobs = data?.jobs || [];

//   const currentUser = Auth.getProfile().data.username

//   // const myJobs = searchedJobsData.filter(jobs => jobs.agency === 'Robert Haf');
//   const myJobs = jobs.filter(jobs => jobs.jobAuthor === currentUser);
  
//   console.log(currentUser)
//   console.log(jobs.jobAuthor)

//   if (!myJobs.length) {
//     return <h4>No Job Post Yet</h4>;
//   }


//   return (
//     <>
//     <div className="JobBackground">
//       <div className="Job-list row">
//     {myJobs.map((jobs, index) => (
//       <Col>
//         <div className="stats bg-primary text-primary-content">
        
//         <div className="stat" >
//           <div className="stat-title" style={{color: "white"}}>{jobs.company}</div>
//           <div className="stat-value" style={{color: "white"}}>{jobs.title}</div>
//           <div className="stat-actions">
//           <button className="btn btn-sm btn-success" style={{color: "white"}}>Close Job Applications</button>
//           <button className="btn btn-sm" style={{color: "white"}}>Edit Job Posting</button> 
//             <button className="btn btn-sm" style={{color: "white"}}>Delete</button>
//           </div>
//         </div>
        
//         <div className="stat" >
//           <div className="stat-title" style={{color: "white"}}>Current # of Applications</div>
//           <div className="stat-value" style={{color: "white"}}>27</div>
//           <div className="stat-actions">
//           <button className="btn btn-sm btn-success">View Applications</button>
 
//           </div>
//         </div>
//       </div>
//       </Col>
//     ))}
//       </div>
//     </div>
//     {/* <br></br>
//     <div className="stats bg-primary text-primary-content">
//         <div className="stat">
//           <Button className="stat-value">Create a new job post</Button>
//         </div>
//       </div> */}

//     <br></br>
//     <br></br>
//     </>
//   );
// }

// export default JobCard;


// /***  TESTT */


import React from 'react';
import { Col, Button } from 'react-bootstrap';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_GET_ALL_JOBS } from '../utils/queries';
import { DELETE_JOB } from '../utils/mutations';
import Auth from '../utils/auth';

function JobCard({ title }) {
  const { loading, data } = useQuery(QUERY_GET_ALL_JOBS);
  const jobs = data?.jobs || [];

  const currentUser = Auth.getProfile().data.username;

  const [deleteJob] = useMutation(DELETE_JOB, {
    refetchQueries: [{ query: QUERY_GET_ALL_JOBS }],
  });

  const handleDeleteJob = async (jobId) => {
    try {
      await deleteJob({
        variables: { jobId },
      });
      console.log('Job deleted successfully');
    } catch (error) {
      console.error('Error deleting job:', error);
    }
  };

  const myJobs = jobs.filter((job) => job.jobAuthor === currentUser);

  if (!myJobs.length) {
    return <h4>No Job Posts Yet</h4>;
  }

  return (
    <>
      <div className="JobBackground">
        <div className="Job-list row">
          {myJobs.map((job, index) => (
            <Col key={index} style={{ paddingLeft: '100px', paddingBottom: '70px' }}>
              <div className="stats bg-primary text-primary-content">
                <div className="stat">
                  <div className="stat-title" style={{ color: 'white' }}>
                    {job.company}
                  </div>
                  <div className="stat-value" style={{ color: 'white' }}>
                    {job.title}
                  </div>
                  <div className="stat-actions">
                    <button
                      className="btn btn-sm btn-success"
                      style={{ color: 'white' }}
                    >
                      Close Job Applications
                    </button>
                    <button className="btn btn-sm" style={{ color: 'white' }}>
                      Edit Job Posting
                    </button>
                    <button
                      className="btn btn-sm"
                      style={{ color: 'white' }}
                      onClick={() => handleDeleteJob(job.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>

                <div className="stat">
                  <div className="stat-title" style={{ color: 'white' }}>
                    Current # of Applications
                  </div>
                  <div className="stat-value" style={{ color: 'white' }}>
                    27
                  </div>
                  <div className="stat-actions">
                    <button className="btn btn-sm btn-success">
                      View Applications
                    </button>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </div>
      </div>

      <br />
      <br />
    </>
  );
}

export default JobCard;

