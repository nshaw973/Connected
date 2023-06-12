import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_JOB_MUTATION } from '../utils/mutations';

import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';



function NewPost() {
  const [formVisible, setFormVisible] = useState(false);
  const [createJob] = useMutation(CREATE_JOB_MUTATION);


  
 // Get the username of the logged-in user
    const { loading, data } = useQuery(QUERY_ME);
    const user = data?.me || {};

  
    
  // Toggles new post
  const handleNewPostClick = () => {
    setFormVisible((prevVisible) => !prevVisible);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log(user)

    const title = event.currentTarget.elements.namedItem('postTitle')?.value;
    const description = event.currentTarget.elements.namedItem('postContent')?.value;
    const company = event.currentTarget.elements.namedItem('postCompany')?.value;
    const salary = parseFloat(event.currentTarget.elements.namedItem('postSalary')?.value);
    const jobAuthor = user.username;
    console.log(jobAuthor)


    try {
      const { data } = await createJob({
        variables: { title, description, company, salary, jobAuthor },
      });

      alert('Form submitted successfully', data);
      console.log('Form submitted successfully', data);
      // event.target.reset();
      window.location.reload();
    } catch (error) {
      console.error('Form submission error:', error);
      alert(error.message);
    }
  };


  return (
    <>
      <div className="stats bg-primary text-primary-content">
        <div className="stat">
          <button className="stat-value" onClick={handleNewPostClick}>
            Create a new job post
          </button>
        </div>
      </div>
  
      <br />
      {formVisible && (
        <div className="card" id="newPostForm" style={{ width: '700px' }}>
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="titleInput">Job Title</label>
                <input
                  type="text"
                  id="postTitle"
                  className="form-control form-control-lg"
                  placeholder="Enter title"
                  style={{ width: '100%' }}
                />
              </div>
              <br />
              <div className="form-group">
                <label htmlFor="companyInput">Company</label>
                <input
                  type="text"
                  id="postCompany"
                  className="form-control form-control-lg"
                  placeholder="Enter company"
                  style={{ width: '100%' }}
                />
              </div>
              <br />
              <div className="form-group">
                <label htmlFor="textInput">Job Description</label>
                <textarea
                  id="postContent"
                  className="form-control form-control-lg"
                  rows={10}
                  placeholder="Enter text"
                  style={{ width: '100%' }}
                ></textarea>
              </div>
              <br />
              <div className="form-group">
                <label htmlFor="salaryInput">Salary</label>
                <input
                  type="number"
                  id="postSalary"
                  className="form-control form-control-lg"
                  placeholder="Enter salary"
                  style={{ width: '100%' }}
                />
              </div>
              <br />
              <button type="submit" className="btn btn-primary" id="postSubmit">
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
      <br />
    </>
  );
  
}

export default NewPost;
