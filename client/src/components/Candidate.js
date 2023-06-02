import React from 'react';



function Candidate({ title, image, deployedLink, githubLink }) {
  return (
    <div className="Candidate">
      <h3>{title}</h3>
      <img src={image} alt={title} />
      <div className="Candidate-links">
        <a href={deployedLink} target="_blank" rel="noopener noreferrer">
          View Linkedin
        </a>
        <br></br>
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          View Github 
        </a>
      </div>
    </div>
  );
}

export default Candidate;

