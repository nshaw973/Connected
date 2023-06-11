import React from 'react';
import { Button, Col } from 'react-bootstrap';

function newPost() {
  
    return (
      <>
      <Button className="stat-value">Create a new job post</Button>
      <br></br>
        <div className="card" id="newPostForm">
          <div className="card-body">
            <form>
              <div className="form-group">
                <label htmlFor="titleInput">Title</label>
                <input type="text" id="postTitle" className="form-control" placeholder="Enter title" />
              </div>
  
              <div className="form-group">
                <label htmlFor="textInput">Text</label>
                <textarea id="postContent" className="form-control" rows="3" placeholder="Enter text"></textarea>
              </div>
              <button type="submit" className="btn btn-primary" id="postSubmit">Submit</button>
            </form>
          </div>
        </div>
      </>
    );
  }
  
  export default newPost;
  
