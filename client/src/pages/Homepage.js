import React from 'react';
import '../styles/style.css';
import { Container } from 'react-bootstrap';

function HomePage() {
  return (
    <div className="home-background">
    <section id="home" className='home max-w-lg mx-auto flex justify-center items-center flex-col flex-grow'>
       <div className="home-bg">
        <Container>
          <h2 className="home-title">Let's Build Together</h2>
          <p className="home-subtitle">
                Looking for jobs? 
                Looking for Candidates? 
                Let us help you! 
          </p>
          <div className='button-container'>
          <button
            className="jobs-btn btn btn-primary btn-block btn-info"
            href="/jobs"
          >
            Find jobs
          </button>
          <br />
          <button
            className="candidates-btn btn btn-primary btn-block btn-info"
            onClick={() => {
              window.open("https://www.linkedin.com/");
            }}
          >
            Find Candidates
          </button>
          </div>
          <span></span>
          <p className="copyright">
            <br />


          </p>
         </Container>
    </div>
    
    </section>
    </div>
  );
}

export default HomePage;