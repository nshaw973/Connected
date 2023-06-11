import React, { useState } from 'react';

function NewPost() {
  const [formVisible, setFormVisible] = useState(false);

  const handleNewPostClick = () => {
    setFormVisible((prevVisible) => !prevVisible);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const title = event.currentTarget.elements.namedItem('postTitle')?.value;
    const content = event.currentTarget.elements.namedItem('postContent')?.value;

    try {
      const response = await fetch('/api/posts', {
        method: 'POST',
        body: JSON.stringify({
          title: title,
          description: content
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        // Handle successful submission
        console.log('Form submitted successfully');
        event.currentTarget.reset(); // Reset the form
      } else {
        // Handle submission error
        console.error('Form submission failed');
      }
    } catch (error) {
      console.error('Form submission error:', error);
    }
  };


  return (
    <>
      
    <div className="stats bg-primary text-primary-content">
        <div className="stat">
          {/* <Button className="stat-value">Create a new job post</Button> */}
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
                <input type="text" id="postTitle" className="form-control" placeholder="Enter title" />
              </div>
              <br></br>
              <div className="form-group">
                <label htmlFor="textInput">Job Description</label>
                <textarea id="postContent" className="form-control" rows="10" placeholder="Enter text"></textarea>
              </div>
              <br></br>
              <button type="submit" className="btn btn-primary" id="postSubmit">
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
      <br></br>
    </>
  );
}

export default NewPost;
