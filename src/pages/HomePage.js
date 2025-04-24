import React from 'react';
import './Pages.css'; 
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Welcome to LungDetect AI</h1>
        <p>Your intelligent platform for lung disease detection from X-ray images.</p>
      </header>

      <section className="features">
        <div className="feature-item">
          <i className="fas fa-upload feature-icon"></i> 
          <h3>Effortless Image Upload</h3>
          <p>Easily upload your lung X-ray images for analysis.</p>
        </div>
        <div className="feature-item">
          <i className="fas fa-brain feature-icon"></i>
          <h3>AI-Powered Detection</h3>
          <p>Our advanced AI algorithms quickly and accurately detect potential lung diseases.</p>
        </div>
        <div className="feature-item">
          <i className="fas fa-shield-alt feature-icon"></i>
          <h3>Confidential Results</h3>
          <p>Your data is handled with the utmost confidentiality and security.</p>
        </div>
        <div className="feature-item">
          <i className="fas fa-history feature-icon"></i>
          <h3>Track Your History</h3>
          <p>Registered users can access and review their past scan results.</p>
        </div>
      </section>

      <section className="get-started">
        <h2>Ready to Get Started?</h2>
        <p>If you're a new user, please register. Existing users can proceed to upload an X-ray.</p>
        <div className="button-group">
        <Link to="/register" className="register-button">Register</Link>
          <Link to="/detect" className="upload-button">Upload X-ray</Link>
        </div>
      </section>

      <footer className="home-footer">
        <p>&copy; 2025 Rapid detection. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default HomePage;