import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';

import Auth from '../utils/auth';
import CandidatesCommitted from '../components/CandidatesCommitted';
import CandidatesSubmitted from '../components/CandidatesSubmitted';
import CandidatesPlaced from '../components/CandidatesPlaced';
import FileUpload from '../components/Avatars/multer';
import JobCard from '../components/JobCard';
import NewPost from '../components/NewPost';

function RecruiterDashPage() {
  const { loading, data } = useQuery(QUERY_ME);
  const user = data?.me || {};
  console.log(user);
  if (loading) {
    return <div>Loading...</div>;
  }

  if (!Auth.getProfile().data) {
    return (
      <h4>
        You need to be logged in to see this. Use the navigation links above to
        sign up or log in!
      </h4>
    );
  }
  return (
    <>
      <h1>Recruiter Dashboard</h1>
      <br />
      <div>
      <h3>Change Profile pic</h3>
      <FileUpload />
      </div>

      <h3>My Job Postings</h3>
      <br />
      <JobCard />
      <NewPost />

      <h3>Candidates Applied</h3>
      <CandidatesCommitted />
      <br />

      <h3>Candidates Submitted to Partners</h3>
      <CandidatesSubmitted />
      <br />

      <h3>Candidates Placed</h3>
      <CandidatesPlaced />
      <br />
    </>
  );
}

export default RecruiterDashPage;
