import React from 'react';
// import { Button, Col } from 'react-bootstrap';

function newPostForm() {
    const post = document.querySelectorAll('.blogpost');
    const comment = document.querySelectorAll('.commentButton');
  
    const form = document.getElementById('newPostForm');
    const newPostButton = document.getElementById('createNewPost');
    const submitPost = document.getElementById('postSubmit');
    const updateButton = document.getElementById('updatePostButton');
    const deleteButton = document.getElementById('deletePostButton');
  
    // Post form submit event
    post.forEach((element) => {
      element.addEventListener('click', (event) => {
        const postNumber = event.target.closest('.blogpost').getAttribute('data-post-id');
        window.location.pathname = `/post/${postNumber}`;
      });
    });
  
    newPostButton.addEventListener('click', (event) => {
      event.preventDefault();
      form.style.display = 'block';
      console.log('button clicked');
    });
  
    submitPost.addEventListener('click', async (event) => {
      event.preventDefault();
  
      const title = document.getElementById('postTitle').value;
      const content = document.getElementById('postContent').value;
  
      const response = await fetch('/api/posts', {
        method: 'POST',
        body: JSON.stringify({
          name: title,
          description: content
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      if (response.ok) {
        window.location.reload();
      } else {
        alert(response.statusText);
      }
    });
  
    // Update submit event
    updateButton.addEventListener('click', async (event) => {
      event.preventDefault();
      const postId = comment[0].getAttribute('id');
      console.log(postId);
  
      const title = document.getElementById('mainPostTitle').textContent;
      const content = document.getElementById('mainPostBody').textContent;
      console.log(title);
      console.log(content);
      if (!title || !content) {
        return;
      }
  
      const response = await fetch(`/api/posts/${postId}`, {
        method: 'PUT',
        body: JSON.stringify({
          name: title,
          description: content
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      if (response.ok) {
        window.location.reload();
      } else {
        alert(response.statusText);
      }
    });
  
    deleteButton.addEventListener('click', async (event) => {
      event.preventDefault();
      const postId = comment[0].getAttribute('id');
      console.log(postId);
  
      const response = await fetch(`/api/posts/${postId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      if (response.ok) {
        window.location.pathname = '/dashboard';
      } else {
        alert(response.statusText);
      }
    });
  
    return (
      <>
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
  
  export default newPostForm;
  


// <div class="card" style="display:none" id="newPostForm">
// <div class="card-body">
//     <form>
//         <div class="form-group">
//             <label for="titleInput">Title</label>
//             <input type="text" id="postTitle" class="form-control" id="titleInput" placeholder="Enter title"/>
//             </div>

//         <div class="form-group">
//             <label for="textInput">Text</label>
//             <textarea id="postContent" class="form-control" id="textInput" rows="3"
//                 placeholder="Enter text"></textarea>
//         </div>
//         <button type="submit" class="btn btn-primary" id="postSubmit">Submit</button>
//     </form>
// </div>
// </div>;