import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/style.css';

function HomePage() {
  return (
    <div className="home-background">
      <section
        id="home"
        className="home max-w-lg mx-auto flex justify-center items-center flex-col flex-grow"
      >
        <div className="home-bg flex flex-col">
            <h2 className="home-title">Let's Build Together</h2>
            <p className="home-subtitle">
              Looking for jobs? Looking for Candidates? Let us help you!
            </p>
            <div className="button-container flex flex row md:flex-col w-full">
              <Link
                className="jobs-btn btn btn-primary btn-block btn-info"
                to="/jobs"
              >
                Find jobs
              </Link>
              <Link
                className="candidates-btn btn btn-primary btn-block btn-info"
                to="/featured-candidates"
              >
                Find Candidates
              </Link>
            </div>
            <span></span>
            <p className="copyright">
              <br />
            </p>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
