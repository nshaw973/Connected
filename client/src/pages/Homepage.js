import React from 'react';
// import '../styles/style.css';
import { Container } from 'react-bootstrap';

function HomePage() {
  return (
    <section id="home" className='max-w-lg mx-auto flex justify-center items-center flex-col flex-grow'>
       <div className="home-bg">
        <Container>
          <h2 className="home-title">Let's Build Together</h2>
          <p className="home-subtitle">
                Looking for jobs? 
                Looking for Candidates? 
                Let us help you! 
          </p>
          <button
            className="jobs-btn"
            href="/contact"
          >
            Find jobs
          </button>
          <br />
          <button
            className="candidates-btn"
            onClick={() => {
              window.open("https://www.linkedin.com/");
            }}
          >
            Find Candidates
          </button>
          <span></span>
          <p className="copyright">
            <hr />


          </p>
         </Container>
    </div>
    
    </section>
    
  );
}

export default HomePage;