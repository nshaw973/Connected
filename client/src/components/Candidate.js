import React from 'react';



function Candidate({ title, name, image, deployedLink, githubLink }) {
  return (
    <div className="Candidate">
      <h2>{name}</h2>
      <h4>{title}</h4>
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

