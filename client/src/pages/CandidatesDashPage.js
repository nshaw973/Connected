import React from 'react';
import FileUpload from '../components/Avatars/multer';
import Auth from '../utils/auth';

function CandidateDashPage() {
    return (
      <>
      <h1>Welcome! {Auth.getProfile().data.username}</h1>
      <h1>Candidate Dashboard</h1>
      

      <br/>
      <div>
      <h3>Change Profile pic</h3>
      <FileUpload />
      </div>

      <h3>My Favorite Jobs </h3>
      <br/>

      <h3>My Commited Jobs</h3>
   
      <br/>

      <h3>Closed Jobs</h3>
      <br/>


      </>
    );
  }


  export default CandidateDashPage;

  










