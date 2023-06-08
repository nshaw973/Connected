import React from 'react';



function Candidate({ title, name, image, deployedLink, githubLink, isCommitted, isSubmitted, isPlaced }) {
  return (
    <div className="Candidate">
      <h4>{name}</h4>
      <h5>{title}</h5>
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

